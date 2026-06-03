// ============================================================================
// scrape-adventurer.js — gera adventurer-data.js a partir da página de Craft
// Profissões - Aventureiro da wiki PXG.
//
// Uso: node scripts/scrape-adventurer.js [--debug]
//   --debug : só fetcha a página e grava em scripts/aventureiro_debug.html
//
// Sem dependências externas — fetch nativo (Node 18+) e parsing por regex.
// ============================================================================

const fs = require("fs");
const path = require("path");

const WIKI_BASE = "https://wiki.pokexgames.com";
const SOURCE_URL = `${WIKI_BASE}/index.php/Craft_Profiss%C3%B5es_-_Aventureiro`;
const DEBUG_MODE = process.argv.includes("--debug");

const OUT_PATH = path.resolve(__dirname, "..", "adventurer-data.js");
const DEBUG_PATH = path.resolve(__dirname, "aventureiro_debug.html");

// -----------------------------------------------------------------------------
// HTTP
// -----------------------------------------------------------------------------
async function fetchText(url, attempt = 1) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "pxg-adventurer-scraper/1.0" }
    });
    if (!res.ok) {
      if (res.status === 404) {
        console.error(`[404] ${url}`);
        throw new Error(`HTTP 404`);
      }
      throw new Error(`HTTP ${res.status}`);
    }
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
  if (!src) return "";
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

function extractMain(html) {
  const m = html.match(/<div[^>]+id="mw-content-text"[\s\S]*?<\/div>\s*<noscript>/);
  return m ? m[0] : html;
}

// -----------------------------------------------------------------------------
// Classificação de tipo (heurística baseada no nome)
// -----------------------------------------------------------------------------
function classifyTipo(nome) {
  const n = nome.toLowerCase();
  if (n.includes("workshop")) return "workshop";
  if (n.includes("finder")) return "finder";
  if (n.includes("sculpture") || n.includes("escultura")) return "sculpture";
  if (n.includes("rift")) return "rift";
  if (/\bmap\b/.test(n) || /\bmapa\b/.test(n)) return "mapa";
  if (n.includes("x-block") || n.includes("xblock") || n.includes("x block")) return "x-block";
  if (n.includes("chest")) return "baú";
  if (n.includes("costume") || n.includes("outfit") || n.includes("traje")) return "traje";
  if (n.includes("microwave") || n.includes("stove") || n.includes("fryer") || n.includes("grill") || n.includes("machine") || n.includes("máquina")) return "máquina";
  if (n.includes("decoration") || n.includes("decora") || n.includes("statue") || n.includes("estatua")) return "decoração";
  if (
    n.includes("dust") ||
    n.includes("bar") ||
    n.includes("ingot") ||
    n.includes("shard") ||
    n.includes("crystal") ||
    n.includes("ore") ||
    n.includes("rock") ||
    n.includes("stone") ||
    n.includes("essence") ||
    n.includes("powder") ||
    n.includes("plate") ||
    n.includes("coin")
  ) return "material";
  return "item";
}

// -----------------------------------------------------------------------------
// Detecção de seções de rank
// -----------------------------------------------------------------------------
function findRankSections(main) {
  const re = /<h[1-6]\b[^>]*>[\s\S]*?<span\s+class="mw-headline"[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/h[1-6]>/gi;
  const sections = [];
  let m;
  while ((m = re.exec(main))) {
    const text = stripTags(m[2]);
    const rankMatch = text.match(/^Rank\s+([EDCBAS])\s*$/i);
    if (rankMatch) {
      sections.push({
        rank: rankMatch[1].toUpperCase(),
        headerText: text,
        start: m.index,
        end: m.index + m[0].length
      });
    }
  }
  sections.sort((a, b) => a.start - b.start);
  for (let i = 0; i < sections.length; i++) {
    sections[i].contentStart = sections[i].end;
    sections[i].contentEnd = i + 1 < sections.length ? sections[i + 1].start : main.length;
  }
  return sections;
}

// -----------------------------------------------------------------------------
// Extração de tabelas e linhas
// -----------------------------------------------------------------------------
function extractTables(htmlChunk) {
  const tables = [];
  const re = /<table\b[^>]*class="[^"]*wikitable[^"]*"[^>]*>([\s\S]*?)<\/table>/gi;
  let m;
  while ((m = re.exec(htmlChunk))) {
    tables.push(m[1]);
  }
  return tables;
}

function extractRows(tableHtml) {
  const rows = [];
  const re = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = re.exec(tableHtml))) {
    rows.push(m[1]);
  }
  return rows;
}

function extractCells(rowHtml) {
  const cells = [];
  const re = /<(td|th)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(rowHtml))) {
    cells.push({ tag: m[1].toLowerCase(), html: m[2] });
  }
  return cells;
}

// -----------------------------------------------------------------------------
// Extração de partes da célula "Item" (imagem + nome separados por <br/>)
// -----------------------------------------------------------------------------
function extractItemCell(html) {
  // a célula tem o formato: <img alt="X.png" src="..."> <br/> Nome do Item
  const imgMatch = html.match(/<img[^>]+alt="([^"]*)"[^>]+src="([^"]+)"[^>]*>/i);
  let imgAlt = "";
  let imgSrc = "";
  if (imgMatch) {
    imgAlt = decode(imgMatch[1]);
    imgSrc = absImg(imgMatch[2]);
  }
  // o nome é o texto da célula após remover as tags
  const nome = stripTags(html);
  return { imgAlt, imgSrc, nome };
}

// -----------------------------------------------------------------------------
// Parser de tempo (mantém o texto original mas normaliza um pouco)
// -----------------------------------------------------------------------------
function parseTempo(text) {
  if (!text) return "";
  // normaliza espaços e remove pontuação solta no fim
  return text.replace(/\s+/g, " ").replace(/\.$/, "").trim();
}

// -----------------------------------------------------------------------------
// Parser de skill
// -----------------------------------------------------------------------------
function parseSkill(text) {
  if (!text) return null;
  const m = text.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// -----------------------------------------------------------------------------
// Parser de recursos (célula "Materiais")
// -----------------------------------------------------------------------------
function parseRecursos(cellHtml) {
  if (!cellHtml) return [];

  // Divide a célula por <br>. Cada segmento típico tem:
  //   <img src="..." alt="..."> N Nome do Recurso
  const segments = cellHtml.split(/<br\s*\/?>/i);
  const recursos = [];

  for (const seg of segments) {
    const cleaned = seg.trim();
    if (!cleaned) continue;

    // imagem
    const imgMatch = cleaned.match(/<img[^>]+src="([^"]+)"[^>]*>/i);
    const imagem = imgMatch ? absImg(imgMatch[1]) : "";

    // texto puro
    const text = stripTags(cleaned);
    if (!text) continue;

    // padrão "<numero> <nome>" (case mais comum)
    let quantidade = 0;
    let nome = "";
    let m = text.match(/^(\d+)\s*[xX]?\s+(.+?)\s*$/);
    if (m) {
      quantidade = parseInt(m[1], 10);
      nome = m[2].trim();
    } else {
      // tenta "<nome> <numero>"
      m = text.match(/^(.+?)\s+(\d+)\s*[xX]?\s*$/);
      if (m) {
        nome = m[1].trim();
        quantidade = parseInt(m[2], 10);
      } else {
        // fallback: o texto inteiro é nome, qty=1
        nome = text;
        quantidade = 1;
      }
    }

    nome = nome.replace(/\s+x$/i, "").trim();
    if (!nome) continue;

    recursos.push({ nome, quantidade, imagem });
  }

  return recursos;
}

// -----------------------------------------------------------------------------
// Parser de uma linha de receita
// -----------------------------------------------------------------------------
function parseRecipe(cells, rank) {
  // Estrutura padrão: 4 colunas: Item | Habilidade | Tempo | Materiais
  if (cells.length < 4) return null;
  if (cells.every((c) => c.tag === "th")) return null;

  const itemCell = extractItemCell(cells[0].html);
  if (!itemCell.nome) return null;

  // pula linhas de header (texto tipo "Item", "Materiais")
  if (/^(item|nome|habilidade|skill|tempo|materiais|recursos|level|lvl|tempo de espera)$/i.test(itemCell.nome)) return null;

  // extrai (Nx) do nome -> unidadesPorReceita
  let unidadesPorReceita = null;
  let nome = itemCell.nome;
  const unitsMatch = nome.match(/\((\d+)\s*[xX]\)/);
  if (unitsMatch) {
    unidadesPorReceita = parseInt(unitsMatch[1], 10);
    nome = nome.replace(/\s*\(\d+\s*[xX]\)\s*/, " ").trim();
  }

  const skillText = stripTags(cells[1].html);
  const skill = parseSkill(skillText);
  if (skill == null) return null;

  const tempo = parseTempo(stripTags(cells[2].html));

  const recursos = parseRecursos(cells[3].html);
  if (recursos.length === 0) return null;

  return {
    nome,
    imgAlt: itemCell.imgAlt,
    imagem: itemCell.imgSrc,
    skill,
    tempo,
    unidadesPorReceita,
    recursos,
    rank
  };
}

// -----------------------------------------------------------------------------
// Construção de ID único
//   - sufixo "-aventureiro" sempre
//   - "Portátil" no nome ou no alt da img -> "-portatil-aventureiro"
//   - colisões de id (mesmo nome, ex.: Old Map x4, Celebi Sculpture x2)
//     resolvidas adicionando sufixo numérico via tracker externo
// -----------------------------------------------------------------------------
function buildBaseSlug(nome) {
  // nome já vem sem "(Nx)"
  // remove "(Portátil)" e similares pra slug ficar limpo
  let cleaned = nome.replace(/\s*\(\s*port[aá]til\s*\)\s*/gi, " ").trim();
  return slug(cleaned);
}

function isPortatil(nome, imgAlt) {
  if (/\(\s*port[aá]til\s*\)/i.test(nome)) return true;
  if (/port[aá]til/i.test(nome)) return true;
  if (imgAlt && /port[aá]til/i.test(imgAlt)) return true;
  if (imgAlt && /\bport\b/i.test(imgAlt)) return true; // "Adventurer Workshop S - Port.png"
  return false;
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------
async function main() {
  if (DEBUG_MODE) {
    console.log("[scrape-adventurer] modo --debug");
    console.log(`[scrape-adventurer] fetchando: ${SOURCE_URL}`);
    const html = await fetchText(SOURCE_URL);
    fs.writeFileSync(DEBUG_PATH, html, "utf8");
    console.log(`[ok] gravado debug HTML em ${DEBUG_PATH} (${(html.length / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log("[scrape-adventurer] iniciando");
  console.log(`[scrape-adventurer] fetchando: ${SOURCE_URL}`);
  const html = await fetchText(SOURCE_URL);
  console.log(`[ok] HTML recebido (${(html.length / 1024).toFixed(1)} KB)`);

  const mainHtml = extractMain(html);
  const sections = findRankSections(mainHtml);
  console.log(`[scrape-adventurer] seções de rank encontradas: ${sections.length}`);
  for (const s of sections) {
    console.log(`  - Rank ${s.rank}`);
  }

  const allRecipes = [];
  const seenIds = new Map(); // baseId -> count, pra resolver colisões com sufixo
  const warnings = [];

  for (const section of sections) {
    const chunk = mainHtml.slice(section.contentStart, section.contentEnd);
    const tables = extractTables(chunk);
    if (tables.length === 0) {
      warnings.push(`Rank ${section.rank}: nenhuma tabela wikitable encontrada`);
      console.warn(`[warn] Rank ${section.rank}: nenhuma tabela wikitable encontrada`);
      continue;
    }
    let countRank = 0;
    for (const table of tables) {
      const rows = extractRows(table);
      for (const row of rows) {
        const cells = extractCells(row);
        if (cells.length === 0) continue;
        // pula header (todas <th>)
        if (cells.every((c) => c.tag === "th")) continue;

        let parsed;
        try {
          parsed = parseRecipe(cells, section.rank);
        } catch (err) {
          warnings.push(`Rank ${section.rank} parse erro: ${err.message}`);
          continue;
        }
        if (!parsed) continue;

        // monta o ID
        const portatil = isPortatil(parsed.nome, parsed.imgAlt);
        const baseSlug = buildBaseSlug(parsed.nome);
        const suffix = portatil ? "-portatil-aventureiro" : "-aventureiro";
        let baseId = `${baseSlug}${suffix}`;

        // resolve colisão: se já existe, append numérico
        // estratégia: se essa é a 2ª ocorrência, transforma a 1ª em base-1 e essa em base-2
        if (seenIds.has(baseId)) {
          const count = seenIds.get(baseId) + 1;
          seenIds.set(baseId, count);
          // renomeia a primeira (se ainda nao foi renomeada) e gera id-N pra essa
          if (count === 2) {
            // procura a entrada anterior com mesmo id e renomeia
            const prev = allRecipes.find((r) => r.id === baseId);
            if (prev) {
              prev.id = `${baseSlug}-1${suffix}`;
            }
          }
          baseId = `${baseSlug}-${count}${suffix}`;
        } else {
          seenIds.set(baseId, 1);
        }

        const recipe = {
          id: baseId,
          nome: parsed.nome,
          imagem: parsed.imagem,
          tipo: classifyTipo(parsed.nome),
          rank: parsed.rank,
          skill: parsed.skill
        };
        if (parsed.unidadesPorReceita && parsed.unidadesPorReceita !== 1) {
          recipe.unidadesPorReceita = parsed.unidadesPorReceita;
        }
        if (parsed.tempo) recipe.tempo = parsed.tempo;
        recipe.recursos = parsed.recursos;

        allRecipes.push(recipe);
        countRank++;
      }
    }
    console.log(`[ok] Rank ${section.rank}: ${countRank} receitas`);
  }

  // Estatísticas
  const RANKS = ["E", "D", "C", "B", "A", "S"];
  const byRank = {};
  for (const r of RANKS) byRank[r] = 0;
  for (const r of allRecipes) byRank[r.rank] = (byRank[r.rank] || 0) + 1;

  const withUnits = allRecipes.filter((r) => r.unidadesPorReceita).length;
  const uniqueResources = new Set();
  for (const r of allRecipes) for (const res of r.recursos) uniqueResources.add(res.nome);

  console.log(`\n[scrape-adventurer] resumo:`);
  console.log(`  total de receitas:           ${allRecipes.length}`);
  console.log(`  por rank:                    ${RANKS.map((r) => `${r}:${byRank[r] || 0}`).join(", ")}`);
  console.log(`  com unidadesPorReceita:      ${withUnits}`);
  console.log(`  recursos únicos:             ${uniqueResources.size}`);
  if (warnings.length > 0) {
    console.log(`  warnings:                    ${warnings.length}`);
    for (const w of warnings.slice(0, 10)) console.log(`    [warn] ${w}`);
  }

  // Escreve adventurer-data.js
  const header = `// ============================================================================
// adventurer-data.js — gerado por scripts/scrape-adventurer.js em ${new Date().toISOString()}
// Fonte: ${SOURCE_URL}
//
// Schema:
//   { id, nome, imagem, tipo, rank, skill, [unidadesPorReceita], [tempo], recursos: [{nome, quantidade, imagem}] }
//   unidadesPorReceita=N => receita produz N unidades por execução (default 1 quando omitido)
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o scraper quando precisar atualizar.
// ============================================================================

`;
  const body = `const CRAFTS_ADVENTURER = ${JSON.stringify(allRecipes, null, 2)};\n`;
  fs.writeFileSync(OUT_PATH, header + body, "utf8");
  console.log(`\n[ok] gravado: ${OUT_PATH} (${(fs.statSync(OUT_PATH).size / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error("[erro] fatal:", err);
  process.exit(1);
});
