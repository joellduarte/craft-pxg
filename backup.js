/* ============================================================
   PXG Backup — Exporta / importa todo o estado local (preços
   compartilhados + estado de cada profissão).

   Formato do arquivo:
   {
     "_format": "pxg-backup",
     "version": 1,
     "exportedAt": "2026-06-03T13:00:00.000Z",
     "data": {
       "pxg-shared-resources-v1": { prices, semDroppers, marketTax },
       "pxg-professor-craft-v1":  { sales, quantity, berries, ... },
       "pxg-adventurer-craft-v1": { sales, quantity, ... },
       "pxg-loot-v1":             { ... }
     }
   }
   ============================================================ */

(function () {
  "use strict";

  // Chaves do localStorage que são tratadas como "estado do app PXG".
  // Star signs também entra — qualquer chave com prefixo pxg- é capturada
  // dinamicamente além das conhecidas, pra resistir a evoluções futuras.
  const KNOWN_KEYS = [
    "pxg-shared-resources-v1",
    "pxg-professor-craft-v1",
    "pxg-adventurer-craft-v1",
    "pxg-loot-v1",
  ];

  function collectKeys() {
    const set = new Set(KNOWN_KEYS);
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("pxg-")) set.add(k);
    }
    return Array.from(set);
  }

  function buildBackup() {
    const data = {};
    let nonEmpty = 0;
    for (const k of collectKeys()) {
      const raw = localStorage.getItem(k);
      if (raw == null) continue;
      try {
        data[k] = JSON.parse(raw);
      } catch (e) {
        data[k] = raw; // guarda string crua se não for JSON válido
      }
      nonEmpty++;
    }
    return {
      _format: "pxg-backup",
      version: 1,
      exportedAt: new Date().toISOString(),
      keys: nonEmpty,
      data,
    };
  }

  function downloadJSON(filename, obj) {
    const json = JSON.stringify(obj, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 0);
  }

  function exportBackup() {
    const backup = buildBackup();
    const stamp = new Date().toISOString().slice(0, 10);
    downloadJSON(`pxg-backup-${stamp}.json`, backup);
    return backup.keys;
  }

  function isBackupShape(obj) {
    return obj && obj._format === "pxg-backup" && obj.data && typeof obj.data === "object";
  }

  // Mode: "merge" (mantém preço/valor existente quando ambos têm) ou
  //       "replace" (sobrescreve tudo com o conteúdo do backup)
  function applyBackup(backup, mode) {
    if (!isBackupShape(backup)) {
      throw new Error("Arquivo não parece ser um backup do PXG Hub (formato inválido).");
    }
    let imported = 0;
    for (const [key, value] of Object.entries(backup.data)) {
      if (!key.startsWith("pxg-")) continue;

      if (mode === "replace") {
        localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
        imported++;
        continue;
      }

      // merge: para chaves de objetos, faz merge raso preservando preços/valores existentes
      const existingRaw = localStorage.getItem(key);
      if (!existingRaw) {
        localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
        imported++;
        continue;
      }
      try {
        const existing = JSON.parse(existingRaw);
        const merged = mergeObjects(existing, value);
        localStorage.setItem(key, JSON.stringify(merged));
        imported++;
      } catch (e) {
        // fallback: sobrescreve se o existente não for JSON
        localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
        imported++;
      }
    }
    return imported;
  }

  // Merge raso, com preferência pelos valores EXISTENTES no localStorage
  // (preço local manda — backup só preenche o que está vazio).
  // Em sub-objetos (prices, semDroppers, sales), faz merge preferindo existente.
  function mergeObjects(local, incoming) {
    if (!incoming || typeof incoming !== "object") return local;
    if (Array.isArray(local) || Array.isArray(incoming)) return local || incoming;
    const out = { ...incoming, ...local };
    for (const k of Object.keys(incoming)) {
      if (
        local && typeof local[k] === "object" && local[k] !== null &&
        typeof incoming[k] === "object" && incoming[k] !== null &&
        !Array.isArray(local[k]) && !Array.isArray(incoming[k])
      ) {
        out[k] = mergeObjects(local[k], incoming[k]);
      }
    }
    return out;
  }

  function readFileAsJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Falha ao ler o arquivo."));
      reader.onload = () => {
        try {
          resolve(JSON.parse(reader.result));
        } catch (e) {
          reject(new Error("Arquivo não é JSON válido."));
        }
      };
      reader.readAsText(file);
    });
  }

  async function importFromFile(file, mode) {
    const json = await readFileAsJSON(file);
    return applyBackup(json, mode);
  }

  window.PxgBackup = {
    exportBackup,
    importFromFile,
    buildBackup,
    applyBackup,
  };
})();
