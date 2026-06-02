// ============================================================================
// scrape-loot.js — gera loot-data.js a partir das páginas de loot da wiki PXG.
//
// Uso: node scripts/scrape-loot.js [--sample]
//   --sample : roda só 10 itens (pra testar rápido)
//
// O que faz:
//   1. Lê as páginas índice (Itens_de_Loot, Nightmare_Itens)
//   2. Extrai lista de itens com nome + URL + ícone + seção + região
//   3. Pra cada item, fetcha a página individual em paralelo (concorrência 6)
//   4. Extrai droppers ("Como obter"), preço NPC e vendedor
//   5. Cospe loot-data.js no diretório raiz do projeto
//
// Sem dependências externas — usa fetch nativo (Node 18+) e parsing por regex.
// ============================================================================

const fs = require("fs");
const path = require("path");

const WIKI_BASE = "https://wiki.pokexgames.com";
const CONCURRENCY = 6;
const SAMPLE_MODE = process.argv.includes("--sample");
const SAMPLE_SIZE = 10;

const SOURCES = [
  { url: `${WIKI_BASE}/index.php/Itens_de_Loot`, fonte: "loot" },
  { url: `${WIKI_BASE}/index.php/Nightmare_Itens`, fonte: "nightmare" }
];

const OUT_PATH = path.resolve(__dirname, "..", "loot-data.js");

// -----------------------------------------------------------------------------
// HTTP
// -----------------------------------------------------------------------------
async function fetchText(url, attempt = 1) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "pxg-loot-scraper/1.0" }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 600 * attempt));
      return fetchText(url, attempt + 1);
    }
    throw new Error(`${url} -> ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// Helpers de parsing
// -----------------------------------------------------------------------------
function absImg(src) {
  if (!src) return null;
  if (src.startsWith("http")) return src;
  return WIKI_BASE + src;
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(s) {
  return decode(s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
}

function slug(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Pega o "miolo" do conteúdo da wiki (descarta nav/footer)
function extractMain(html) {
  const m = html.match(/<div[^>]+id="mw-content-text"[\s\S]*?<\/div>\s*<noscript>/);
  return m ? m[0] : html;
}

// -----------------------------------------------------------------------------
// Parser do índice
// -----------------------------------------------------------------------------
// Estrutura:
//   <h1><span class="mw-headline" id="Kanto">Kanto</span></h1>
//   <h2><span class="mw-headline" id="Itens_Comuns">Itens Comuns</span></h2>
//   <table class="wikitable...">
//     <td><a href="/index.php/X"><img src="/images/..."/></a><br/><a href="/index.php/X">Nome</a></td>
function parseIndex(html, fonte) {
  const main = extractMain(html);
  const items = [];
  let regiao = "Desconhecida";
  let secao = "Outros";

  // Tokeniza por <h1>, <h2>, <h3>, <td>
  const re = /<h([12345])\b[^>]*>[\s\S]*?<span\s+class="mw-headline"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/h\1>|<td\b[^>]*>([\s\S]*?)<\/td>/gi;

  let m;
  while ((m = re.exec(main))) {
    if (m[1] && m[2]) {
      // header
      const level = parseInt(m[1], 10);
      const text = stripTags(m[2]);
      if (level === 1) {
        regiao = text || regiao;
      } else if (level >= 2) {
        secao = text || secao;
      }
    } else if (m[3]) {
      // td cell — tenta extrair item
      const cell = m[3];
      // primeiro <a href="/index.php/..."> que tem <img dentro
      const linkRe = /<a\s+href="\/index\.php\/([^"#?]+)"[^>]*>\s*<img[^>]+src="([^"]+)"[^>]*\/?>\s*<\/a>/i;
      const link = linkRe.exec(cell);
      if (!link) continue;

      const slugFromUrl = decodeURIComponent(link[1]);
      const iconUrl = absImg(link[2]);

      // pega o texto visível do link de texto (após o <br/>)
      const textLinkRe = /<a\s+href="\/index\.php\/[^"#?]+"[^>]*>([^<]+)<\/a>/g;
      let nome = null;
      let tlm;
      while ((tlm = textLinkRe.exec(cell))) {
        const t = stripTags(tlm[1]);
        if (t) { nome = t; break; }
      }
      if (!nome) nome = slugFromUrl.replace(/_/g, " ");

      items.push({
        id: slug(slugFromUrl),
        nome: nome,
        slug: slugFromUrl,
        url: `${WIKI_BASE}/index.php/${slugFromUrl}`,
        imagem: iconUrl,
        regiao,
        secao,
        fonte
      });
    }
  }

  // dedupe por id (algumas células repetem links)
  const seen = new Set();
  return items.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });
}

// -----------------------------------------------------------------------------
// Parser da página de item
// -----------------------------------------------------------------------------
// Estrutura típica:
//   <td><b>Como obter</b></td>
//   <td>
//     <a href="/index.php/Charmander" title="Charmander"><img src="..."/></a>
//     <a href="/index.php/Charmeleon" ...><img src="..."/></a>
//   </td>
//   <td><b>Preço NPC</b></td><td>132 dólares</td>
//   <td><b>Onde vender</b></td><td><a href="...">NPC Hugh</a></td>
function parseItem(html) {
  const main = extractMain(html);

  function findField(label) {
    const re = new RegExp(
      `<b>\\s*${label}\\s*<\\/b>[\\s\\S]*?<\\/td>\\s*<td[^>]*>([\\s\\S]*?)<\\/td>`,
      "i"
    );
    const m = re.exec(main);
    return m ? m[1] : null;
  }

  const droppersHtml = findField("Como obter");
  const precoHtml = findField("Pre&#231;o NPC") ||
                    findField("Preço NPC") ||
                    findField("Preco NPC");
  const vendedorHtml = findField("Onde vender");
  const utilidadeHtml = findField("Utilidade");

  const droppers = [];
  let droppersDescricao = null;
  if (droppersHtml) {
    const re = /<a\s+href="\/index\.php\/([^"#?]+)"[^>]*title="([^"]*)"[^>]*>\s*<img[^>]+src="([^"]+)"[^>]*\/?>\s*<\/a>/gi;
    let m;
    while ((m = re.exec(droppersHtml))) {
      const slugFromUrl = decodeURIComponent(m[1]);
      const titleAttr = decode(m[2]);
      const nome = titleAttr || slugFromUrl.replace(/_/g, " ");
      droppers.push({
        nome,
        slug: slugFromUrl,
        url: `${WIKI_BASE}/index.php/${slugFromUrl}`,
        imagem: absImg(m[3])
      });
    }
    if (droppers.length === 0) {
      // texto descritivo (ex.: "Este item dropa da maioria dos Pokémon do elemento FIGHTING")
      const txt = stripTags(droppersHtml);
      if (txt) droppersDescricao = txt;
    }
  }

  // dedupe droppers por nome
  const seenDr = new Set();
  const droppersUnique = droppers.filter((d) => {
    if (seenDr.has(d.nome)) return false;
    seenDr.add(d.nome);
    return true;
  });

  let precoNpc = null;
  if (precoHtml) {
    const txt = stripTags(precoHtml);
    const numMatch = txt.match(/(\d[\d.,]*)/);
    if (numMatch) precoNpc = parseInt(numMatch[1].replace(/[.,]/g, ""), 10);
  }

  const vendedor = vendedorHtml ? stripTags(vendedorHtml) || null : null;
  const utilidade = utilidadeHtml ? stripTags(utilidadeHtml) || null : null;

  return {
    droppadoPor: droppersUnique,
    droppadoPorDescricao: droppersDescricao,
    precoNpc,
    vendedor,
    utilidade
  };
}

// -----------------------------------------------------------------------------
// Concorrência com progresso
// -----------------------------------------------------------------------------
async function mapPool(items, fn, concurrency, onProgress) {
  const results = new Array(items.length);
  let idx = 0;
  let done = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (true) {
      const i = idx++;
      if (i >= items.length) break;
      try {
        results[i] = await fn(items[i], i);
      } catch (err) {
        results[i] = { __error: err.message };
      }
      done++;
      if (onProgress) onProgress(done, items.length);
    }
  });
  await Promise.all(workers);
  return results;
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
async function main() {
  console.log("[scrape-loot] iniciando" + (SAMPLE_MODE ? " (modo --sample)" : ""));

  // 1) índices
  let allItems = [];
  for (const src of SOURCES) {
    console.log(`[scrape-loot] lendo índice: ${src.url}`);
    const html = await fetchText(src.url);
    const list = parseIndex(html, src.fonte);
    console.log(`[scrape-loot]   -> ${list.length} itens (${src.fonte})`);
    allItems = allItems.concat(list);
  }

  // dedupe global
  const seen = new Set();
  allItems = allItems.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });
  console.log(`[scrape-loot] total único: ${allItems.length} itens`);

  if (SAMPLE_MODE) {
    allItems = allItems.slice(0, SAMPLE_SIZE);
    console.log(`[scrape-loot] modo sample: processando só ${allItems.length}`);
  }

  // 2) páginas individuais
  console.log(`[scrape-loot] fetchando páginas (concorrência ${CONCURRENCY})...`);
  let lastLog = 0;
  const details = await mapPool(
    allItems,
    async (item) => {
      const html = await fetchText(item.url);
      return parseItem(html);
    },
    CONCURRENCY,
    (done, total) => {
      const now = Date.now();
      if (now - lastLog > 1500 || done === total) {
        console.log(`[scrape-loot]   ${done}/${total}`);
        lastLog = now;
      }
    }
  );

  // 3) merge
  const merged = allItems.map((it, i) => {
    const d = details[i] || {};
    if (d.__error) {
      console.warn(`[!] ${it.nome}: ${d.__error}`);
      return { ...it, droppadoPor: [], droppadoPorDescricao: null, precoNpc: null, vendedor: null, utilidade: null, erro: d.__error };
    }
    return {
      ...it,
      droppadoPor: d.droppadoPor || [],
      droppadoPorDescricao: d.droppadoPorDescricao || null,
      precoNpc: d.precoNpc,
      vendedor: d.vendedor,
      utilidade: d.utilidade
    };
  });

  const withDroppers = merged.filter((it) => it.droppadoPor.length > 0).length;
  const withDescricao = merged.filter((it) => it.droppadoPorDescricao).length;
  const withPrice = merged.filter((it) => it.precoNpc != null).length;
  const totalDroppers = new Set();
  for (const it of merged) for (const d of it.droppadoPor) totalDroppers.add(d.nome);

  console.log(`[scrape-loot] resumo:`);
  console.log(`  itens:                       ${merged.length}`);
  console.log(`  com lista de pokemons:       ${withDroppers}`);
  console.log(`  com descrição genérica:      ${withDescricao}`);
  console.log(`  com preço NPC:               ${withPrice}`);
  console.log(`  pokemons únicos:             ${totalDroppers.size}`);

  // 4) escreve loot-data.js
  const header = `// ============================================================================
// loot-data.js — gerado por scripts/scrape-loot.js em ${new Date().toISOString()}
// Fontes:
${SOURCES.map((s) => `//   - ${s.url}`).join("\n")}
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o scraper quando precisar atualizar.
// ============================================================================

`;
  const body = `const LOOT_ITEMS = ${JSON.stringify(merged, null, 2)};\n`;
  fs.writeFileSync(OUT_PATH, header + body, "utf8");
  console.log(`[scrape-loot] gravado: ${OUT_PATH} (${(fs.statSync(OUT_PATH).size / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error("[scrape-loot] erro fatal:", err);
  process.exit(1);
});
