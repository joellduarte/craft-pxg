// ============================================================================
// parse-rainbow-orbs.js — gera rainbow-orbs-data.js a partir de rainbow-orbs.txt
//
// Uso: node scripts/parse-rainbow-orbs.js
//
// Formato esperado do txt:
//   📍 REGIÃO
//   #N → (x, y, z) | notas opcionais
//   <linha de continuação opcional, vira detalhes da orb anterior>
//
// Casos especiais tratados:
//   - Orbs sem coordenadas (ex: #251 "no final rainbow hero quest")
//   - Linhas de continuação multi-linha (ex: #79 fragmentos do minigame)
//   - Coords embutidas nas notas/detalhes — extraídas pra detalhesCoords[]
// ============================================================================

const fs = require("fs");
const path = require("path");

const IN_PATH = path.resolve(__dirname, "..", "rainbow-orbs.txt");
const OUT_PATH = path.resolve(__dirname, "..", "rainbow-orbs-data.js");
const NPC_URL = "https://wiki.pokexgames.com/index.php/NPC_Alberto#Recompensas";

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(s) {
  return s.toLowerCase().replace(/(^|\s|\.)\S/g, (m) => m.toUpperCase()).trim();
}

// Captura "(x, y, z)" — usado tanto na linha principal quanto nas notas
const COORDS_RE = /\((\d{1,6})\s*,\s*(\d{1,6})\s*,\s*(\d{1,3})\)/g;

function extractCoordsFrom(text) {
  if (!text) return [];
  const out = [];
  COORDS_RE.lastIndex = 0;
  let m;
  while ((m = COORDS_RE.exec(text)) !== null) {
    out.push([Number(m[1]), Number(m[2]), Number(m[3])]);
  }
  return out;
}

function parseRegionMarker(line) {
  // "📍 ALTO MARE" ou "📍Extra: Orbes desorganizadas"
  const m = line.match(/^\s*📍\s*(.+?)\s*$/);
  if (!m) return null;
  return m[1].replace(/^extra:\s*/i, "Extra — ").trim();
}

// Aceita "#N → (x, y, z) | notas" ou "#N → notas" (sem coords)
const ORB_LINE_RE = /^\s*#(\d+)\s*→\s*(.*)$/;

function parseOrbLine(line) {
  const m = line.match(ORB_LINE_RE);
  if (!m) return null;
  const id = Number(m[1]);
  const rest = m[2].trim();

  // Tenta coord no início; o que sobra é nota
  const coordsMatch = rest.match(/^\((\d{1,6})\s*,\s*(\d{1,6})\s*,\s*(\d{1,3})\)\s*(?:\|\s*(.*))?$/);
  if (coordsMatch) {
    return {
      id,
      coords: [Number(coordsMatch[1]), Number(coordsMatch[2]), Number(coordsMatch[3])],
      notes: (coordsMatch[4] || "").trim(),
    };
  }
  // Sem coords (ex: #251)
  return {
    id,
    coords: null,
    notes: rest.replace(/^\|\s*/, "").trim(),
  };
}

function parse(text) {
  const lines = text.split(/\r?\n/);
  const regions = [];
  let currentRegion = null;
  let currentOrb = null;

  const pushOrb = (orb) => {
    if (!currentRegion) {
      // Orb sem região anterior — cria uma "Sem região" como fallback
      currentRegion = { name: "Sem região", slug: "sem-regiao", orbs: [] };
      regions.push(currentRegion);
    }
    currentRegion.orbs.push(orb);
    currentOrb = orb;
  };

  for (const raw of lines) {
    const line = raw;
    if (!line.trim()) continue;

    const region = parseRegionMarker(line);
    if (region) {
      const name = titleCase(region);
      currentRegion = { name, slug: slugify(name), orbs: [] };
      regions.push(currentRegion);
      currentOrb = null;
      continue;
    }

    const orb = parseOrbLine(line);
    if (orb) {
      pushOrb(orb);
      continue;
    }

    // Linha de continuação — vira detalhes da orb anterior
    if (currentOrb) {
      const trimmed = line.trim();
      currentOrb.detalhes = currentOrb.detalhes
        ? currentOrb.detalhes + " " + trimmed
        : trimmed;
    }
  }

  // Pós-processamento: para cada orb com detalhes, extrai coords embutidas
  for (const r of regions) {
    for (const orb of r.orbs) {
      if (orb.detalhes) {
        const embedded = extractCoordsFrom(orb.detalhes);
        if (embedded.length > 0) orb.detalhesCoords = embedded;
      }
    }
  }

  return regions;
}

function validate(regions) {
  const allIds = [];
  for (const r of regions) {
    for (const o of r.orbs) allIds.push(o.id);
  }
  const sorted = [...allIds].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const missing = [];
  const dupes = [];
  const seen = new Set();
  for (let i = min; i <= max; i++) if (!allIds.includes(i)) missing.push(i);
  for (const id of allIds) {
    if (seen.has(id)) dupes.push(id);
    seen.add(id);
  }
  return { total: allIds.length, min, max, missing, dupes };
}

function emit(regions) {
  const total = regions.reduce((s, r) => s + r.orbs.length, 0);
  const header = `// ============================================================================
// rainbow-orbs-data.js — gerado por scripts/parse-rainbow-orbs.js em ${new Date().toISOString()}
// Fonte: rainbow-orbs.txt
// Total: ${total} orbs em ${regions.length} regiões
//
// Schema:
//   { id, coords: [x,y,z] | null, notes: string, detalhes?: string, detalhesCoords?: [[x,y,z],...] }
//
// NÃO EDITE ESTE ARQUIVO À MÃO. Re-rode o parser quando precisar atualizar.
// ============================================================================

`;
  const obj = {
    total,
    npcAlbertoUrl: NPC_URL,
    regions,
  };
  return header + "const RAINBOW_ORBS = " + JSON.stringify(obj, null, 2) + ";\n";
}

function main() {
  if (!fs.existsSync(IN_PATH)) {
    console.error(`[erro] arquivo não encontrado: ${IN_PATH}`);
    process.exit(1);
  }
  const text = fs.readFileSync(IN_PATH, "utf8");
  const regions = parse(text);
  const v = validate(regions);

  console.log(`[ok] regiões: ${regions.length}`);
  console.log(`[ok] orbs: ${v.total} (id min: ${v.min}, max: ${v.max})`);
  if (v.missing.length > 0) console.warn(`[warn] ids faltando: ${v.missing.join(", ")}`);
  if (v.dupes.length > 0) console.warn(`[warn] ids duplicados: ${v.dupes.join(", ")}`);

  const out = emit(regions);
  fs.writeFileSync(OUT_PATH, out, "utf8");
  console.log(`[ok] gerado: ${OUT_PATH} (${(out.length / 1024).toFixed(1)} KB)`);
}

main();
