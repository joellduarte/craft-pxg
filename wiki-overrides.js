/* ============================================================
   PXG Wiki Overrides — corrige nomes errados/inconsistentes da
   Wiki PXG em runtime, sem precisar re-rodar scraper.

   Como funciona:
   - Carrega `wiki-overrides.json` via fetch
   - Aplica o mapa em CRAFTS, CRAFTS_ADVENTURER, LOOT_ITEMS
   - Migra chaves do PxgShared (preços/semDroppers) caso o usuário
     já tenha digitado preço sob um nome agora "errado"

   Expõe window.WikiOverrides com:
   - load()                    : Promise<void> — chame antes de usar
   - applyToCrafts(crafts)     : mutate em nome e recursos
   - applyToLoot(items)        : mutate em nome
   - migrateSharedState()      : renomeia chaves no PxgShared
   - getResourceName(name)     : helper one-off
   - getCraftName(name)        : idem
   ============================================================ */

(function () {
  "use strict";

  let overrides = { resourceNames: {}, craftNames: {} };
  let loadPromise = null;

  async function load() {
    if (loadPromise) return loadPromise;
    loadPromise = (async () => {
      try {
        const res = await fetch("wiki-overrides.json", { cache: "no-cache" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        overrides = {
          resourceNames: (data && typeof data.resourceNames === "object" && data.resourceNames) || {},
          craftNames: (data && typeof data.craftNames === "object" && data.craftNames) || {},
        };
        const rN = Object.keys(overrides.resourceNames).length;
        const cN = Object.keys(overrides.craftNames).length;
        if (rN + cN > 0) {
          console.info(`[WikiOverrides] carregado: ${rN} recursos, ${cN} crafts`);
        }
      } catch (e) {
        console.warn("[WikiOverrides] não foi possível carregar wiki-overrides.json — seguindo sem correções", e);
      }
    })();
    return loadPromise;
  }

  function getResourceName(name) {
    return overrides.resourceNames[name] || name;
  }

  function getCraftName(name) {
    return overrides.craftNames[name] || name;
  }

  function applyToCrafts(crafts) {
    if (!Array.isArray(crafts)) return 0;
    let n = 0;
    for (const craft of crafts) {
      const newCraftName = overrides.craftNames[craft.nome];
      if (newCraftName) { craft.nome = newCraftName; n++; }
      if (Array.isArray(craft.recursos)) {
        for (const r of craft.recursos) {
          const newR = overrides.resourceNames[r.nome];
          if (newR) { r.nome = newR; n++; }
        }
      }
    }
    return n;
  }

  function applyToLoot(items) {
    if (!Array.isArray(items)) return 0;
    let n = 0;
    for (const item of items) {
      const newName = overrides.resourceNames[item.nome];
      if (newName) { item.nome = newName; n++; }
    }
    return n;
  }

  // Renomeia chaves no PxgShared (prices + semDroppers) que tenham nome agora
  // corrigido. Útil quando o usuário já tinha digitado preço sob o nome errado.
  // Se o nome correto já tem valor, mantém o nome correto (não sobrescreve).
  function migrateSharedState() {
    if (typeof PxgShared === "undefined") return 0;
    let n = 0;
    for (const [wrong, right] of Object.entries(overrides.resourceNames)) {
      if (wrong === right) continue;
      const oldPrice = PxgShared.getPrice(wrong);
      if (oldPrice > 0 && !PxgShared.getPrice(right)) {
        PxgShared.setPrice(right, oldPrice);
        n++;
      }
      if (oldPrice > 0) PxgShared.setPrice(wrong, 0);
      if (PxgShared.isSemDroppers(wrong)) {
        if (!PxgShared.isSemDroppers(right)) PxgShared.setSemDroppers(right, true);
        PxgShared.setSemDroppers(wrong, false);
        n++;
      }
    }
    if (n > 0) console.info(`[WikiOverrides] migrou ${n} chaves no PxgShared`);
    return n;
  }

  window.WikiOverrides = {
    load,
    getResourceName,
    getCraftName,
    applyToCrafts,
    applyToLoot,
    migrateSharedState,
  };
})();
