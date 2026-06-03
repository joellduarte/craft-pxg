/* ============================================================
   PXG Shared State — preços de recursos, flags semDroppers e
   taxa do market, compartilhados entre profissões (Professor,
   Aventureiro, futuros...).

   Expõe window.PxgShared com API simples + sync entre abas via
   evento `storage`.

   Schema persistido em localStorage["pxg-shared-resources-v1"]:
   {
     prices:      { [resourceName]: number },
     semDroppers: { [resourceName]: true },
     marketTax:   number
   }
   ============================================================ */

(function () {
  "use strict";

  const KEY = "pxg-shared-resources-v1";
  const listeners = new Set();

  function defaultState() {
    return { prices: {}, semDroppers: {}, marketTax: 0 };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const p = JSON.parse(raw);
      return {
        prices: p.prices && typeof p.prices === "object" ? p.prices : {},
        semDroppers: p.semDroppers && typeof p.semDroppers === "object" ? p.semDroppers : {},
        marketTax: typeof p.marketTax === "number" ? p.marketTax : 0,
      };
    } catch (e) {
      console.warn("PxgShared: erro lendo localStorage, usando default.", e);
      return defaultState();
    }
  }

  let state = load();

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("PxgShared: falha ao salvar.", e);
    }
  }

  function notify() {
    for (const cb of listeners) {
      try { cb(); } catch (e) { console.warn("PxgShared listener error", e); }
    }
  }

  // Reage a mudanças feitas em outras abas (outra profissão aberta).
  window.addEventListener("storage", (e) => {
    if (e.key !== KEY) return;
    state = load();
    notify();
  });

  const api = {
    // ---- preços ----
    getPrice(name) {
      return state.prices[name] || 0;
    },
    setPrice(name, value) {
      const n = Number(value);
      if (!Number.isFinite(n) || n <= 0) {
        delete state.prices[name];
      } else {
        state.prices[name] = n;
      }
      persist();
    },

    // ---- semDroppers (matéria-prima / item sem drop) ----
    isSemDroppers(name) {
      return !!state.semDroppers[name];
    },
    setSemDroppers(name, value) {
      if (value) state.semDroppers[name] = true;
      else delete state.semDroppers[name];
      persist();
    },

    // ---- market tax ----
    getMarketTax() {
      return state.marketTax || 0;
    },
    setMarketTax(value) {
      const n = Number(value);
      state.marketTax = Number.isFinite(n) ? n : 0;
      persist();
    },

    // ---- batch import (usado pela migração de estados antigos) ----
    importPrices(obj) {
      if (!obj || typeof obj !== "object") return 0;
      let n = 0;
      for (const [name, value] of Object.entries(obj)) {
        const v = Number(value);
        if (Number.isFinite(v) && v > 0 && !state.prices[name]) {
          state.prices[name] = v;
          n++;
        }
      }
      if (n > 0) persist();
      return n;
    },
    importSemDroppers(obj) {
      if (!obj || typeof obj !== "object") return 0;
      let n = 0;
      for (const [name, value] of Object.entries(obj)) {
        if (value && !state.semDroppers[name]) {
          state.semDroppers[name] = true;
          n++;
        }
      }
      if (n > 0) persist();
      return n;
    },

    // ---- listeners (cross-tab + intra-tab) ----
    onChange(cb) {
      if (typeof cb !== "function") return () => {};
      listeners.add(cb);
      return () => listeners.delete(cb);
    },

    // dump para debug
    _dump() { return JSON.parse(JSON.stringify(state)); },
  };

  window.PxgShared = api;
})();
