// ============================================================================
// Star Signs Tracker — checklist persistente de pontos de constelação.
// ============================================================================

(function () {
  "use strict";

  const LS_KEY = "pxg-star-signs-v1";

  // -------------- State --------------
  function defaultState() {
    return { checked: {} };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return defaultState();
      if (!parsed.checked || typeof parsed.checked !== "object") {
        parsed.checked = {};
      }
      return parsed;
    } catch (err) {
      console.warn("[star-signs] falha ao carregar localStorage:", err);
      return defaultState();
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("[star-signs] falha ao salvar localStorage:", err);
    }
  }

  // -------------- Indexing --------------
  function groupByCategory(items) {
    const map = new Map();
    for (const item of items) {
      const cat = item.categoria || "Outros";
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat).push(item);
    }
    return map;
  }

  function totalPoints(items) {
    return items.reduce((sum, it) => sum + (it.pontos || 0), 0);
  }

  function checkedPoints(items, state) {
    return items.reduce(
      (sum, it) => sum + (state.checked[it.id] ? it.pontos || 0 : 0),
      0
    );
  }

  // -------------- Render --------------
  const els = {
    container: null,
    totalBadge: null,
    btnReset: null
  };

  const state = loadState();
  const grouped = groupByCategory(STAR_SIGNS);
  const totalMax = totalPoints(STAR_SIGNS);

  function render() {
    els.container.innerHTML = "";

    for (const [categoria, itens] of grouped) {
      const panel = document.createElement("section");
      panel.className = "panel panel-star-category";
      panel.dataset.categoria = categoria;

      const header = document.createElement("header");
      header.className = "panel-header star-category-header";

      const title = document.createElement("h2");
      title.textContent = categoria;
      header.appendChild(title);

      const subtotal = document.createElement("span");
      subtotal.className = "star-category-subtotal";
      header.appendChild(subtotal);

      panel.appendChild(header);

      const list = document.createElement("div");
      list.className = "star-list";

      for (const item of itens) {
        list.appendChild(buildRow(item));
      }

      panel.appendChild(list);
      els.container.appendChild(panel);
    }

    updateTotals();
  }

  function buildRow(item) {
    const row = document.createElement("label");
    row.className = "star-row";
    row.dataset.id = item.id;
    if (state.checked[item.id]) row.classList.add("is-checked");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "star-checkbox";
    cb.checked = !!state.checked[item.id];
    cb.addEventListener("change", () => onToggle(item, cb.checked, row));
    row.appendChild(cb);

    const main = document.createElement("div");
    main.className = "star-main-col";

    const nameEl = document.createElement("span");
    nameEl.className = "star-name";
    if (item.questLink) {
      const a = document.createElement("a");
      a.href = item.questLink;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item.nome;
      a.addEventListener("click", (e) => e.stopPropagation());
      nameEl.appendChild(a);
    } else {
      nameEl.textContent = item.nome;
    }
    main.appendChild(nameEl);

    if (item.nota) {
      const note = document.createElement("span");
      note.className = "star-note";
      note.textContent = item.nota;
      main.appendChild(note);
    }

    row.appendChild(main);

    const pts = document.createElement("span");
    pts.className = "star-points tag";
    pts.textContent = `+${item.pontos}`;
    row.appendChild(pts);

    return row;
  }

  function onToggle(item, isChecked, rowEl) {
    if (isChecked) {
      state.checked[item.id] = true;
      rowEl.classList.add("is-checked");
    } else {
      delete state.checked[item.id];
      rowEl.classList.remove("is-checked");
    }
    saveState(state);
    updateTotals();
  }

  function updateTotals() {
    const got = checkedPoints(STAR_SIGNS, state);
    els.totalBadge.textContent = `${got} / ${totalMax} pts`;

    const panels = els.container.querySelectorAll(".panel-star-category");
    for (const panel of panels) {
      const cat = panel.dataset.categoria;
      const itens = grouped.get(cat) || [];
      const max = totalPoints(itens);
      const got = checkedPoints(itens, state);
      const sub = panel.querySelector(".star-category-subtotal");
      if (sub) sub.textContent = `${got} / ${max} pts`;
    }
  }

  function resetAll() {
    if (!confirm("Desmarcar todos os pontos? Essa ação não pode ser desfeita.")) return;
    state.checked = {};
    saveState(state);
    render();
  }

  // -------------- Init --------------
  document.addEventListener("DOMContentLoaded", () => {
    els.container = document.getElementById("starCategories");
    els.totalBadge = document.getElementById("totalBadge");
    els.btnReset = document.getElementById("btnResetStars");

    if (!els.container || !els.totalBadge) {
      console.error("[star-signs] elementos esperados não encontrados");
      return;
    }

    els.btnReset.addEventListener("click", resetAll);

    render();
  });
})();
