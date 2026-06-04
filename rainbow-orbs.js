/* ============================================================
   PXG Rainbow Orbs Tracker — App Core

   - Render por região (sessões colapsáveis)
   - Persistência em localStorage (pxg-rainbow-orbs-v1)
   - Click em coords → copia "x, y, z" + toast
   - Busca por região OU substring de coordenada
   - "Esconder coletadas" filter
   - Ctrl+F → foca a busca
   - Botão "marcar todas" por região
   - Expansão de detalhes (orbs com nota multi-linha tipo #79)
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY = "pxg-rainbow-orbs-v1";

  // Mapa nota → ícones (case-insensitive). A ordem importa pra exibição.
  const METHOD_ICONS = [
    { re: /\bfly\b/i,              icon: "✈️",  label: "Fly" },
    { re: /\bsurf\b/i,             icon: "🌊", label: "Surf" },
    { re: /\bdig\b/i,              icon: "⛏️",  label: "Dig" },
    { re: /\bcut\b/i,              icon: "✂️",  label: "Cut" },
    { re: /\blight\b/i,            icon: "💡", label: "Light" },
    { re: /\brock smash\b/i,       icon: "🔨", label: "Rock Smash" },
    { re: /\bminigame|minijogo\b/i, icon: "🎮", label: "Minigame" },
    { re: /\bdonar|donate\b/i,     icon: "🎁", label: "Donar" },
    { re: /\bgym\b/i,              icon: "🏛️",  label: "Gym" },
    { re: /\bsereno\b/i,           icon: "🎈", label: "Sereno" },
  ];

  const state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultState();
      const p = JSON.parse(raw);
      return {
        collected: (p.collected && typeof p.collected === "object") ? p.collected : {},
        collapsedRegions: (p.collapsedRegions && typeof p.collapsedRegions === "object") ? p.collapsedRegions : {},
        hideCollected: !!p.hideCollected,
        expandedOrbs: (p.expandedOrbs && typeof p.expandedOrbs === "object") ? p.expandedOrbs : {},
      };
    } catch (e) {
      console.warn("Erro lendo localStorage, usando default.", e);
      return defaultState();
    }
  }

  function defaultState() {
    return { collected: {}, collapsedRegions: {}, hideCollected: false, expandedOrbs: {} };
  }

  function saveState() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Falha ao salvar.", e);
    }
  }

  function isCollected(id) {
    return !!state.collected[id];
  }

  function setCollected(id, v) {
    if (v) state.collected[id] = true;
    else delete state.collected[id];
    saveState();
  }

  function isExpanded(id) {
    return !!state.expandedOrbs[id];
  }

  function setExpanded(id, v) {
    if (v) state.expandedOrbs[id] = true;
    else delete state.expandedOrbs[id];
    saveState();
  }

  function isRegionCollapsed(slug) {
    return !!state.collapsedRegions[slug];
  }

  function setRegionCollapsed(slug, v) {
    if (v) state.collapsedRegions[slug] = true;
    else delete state.collapsedRegions[slug];
    saveState();
  }

  function fmtCoords(coords) {
    if (!coords) return "";
    return `${coords[0]}, ${coords[1]}, ${coords[2]}`;
  }

  function detectMethods(text) {
    if (!text) return [];
    const out = [];
    for (const m of METHOD_ICONS) {
      if (m.re.test(text)) out.push(m);
    }
    return out;
  }

  // Toast simples
  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 1500);
  }

  async function copyCoords(coords) {
    const text = fmtCoords(coords);
    try {
      await navigator.clipboard.writeText(text);
      showToast(`📋 ${text}`);
    } catch (e) {
      // Fallback pra ambientes sem clipboard API
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showToast(`📋 ${text}`);
      } catch (e2) {
        showToast("Falha ao copiar");
      }
      ta.remove();
    }
  }

  // ---------- Render ----------
  function buildOrbRow(orb, regionSlug) {
    const row = document.createElement("div");
    row.className = "rainbow-orb";
    row.dataset.orbId = String(orb.id);
    row.dataset.region = regionSlug;
    // Texto pesquisável: coords + notas + detalhes
    const searchableBits = [];
    if (orb.coords) searchableBits.push(fmtCoords(orb.coords));
    if (orb.notes) searchableBits.push(orb.notes);
    if (orb.detalhes) searchableBits.push(orb.detalhes);
    row.dataset.search = searchableBits.join(" ").toLowerCase();
    if (isCollected(orb.id)) row.classList.add("is-collected");

    // Checkbox
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "rainbow-check";
    cb.checked = isCollected(orb.id);
    cb.addEventListener("change", () => {
      setCollected(orb.id, cb.checked);
      row.classList.toggle("is-collected", cb.checked);
      updateRegionProgress(regionSlug);
      updateGlobalProgress();
      applyFilters();
    });
    row.appendChild(cb);

    // ID
    const idEl = document.createElement("span");
    idEl.className = "rainbow-orb-id";
    idEl.textContent = "#" + orb.id;
    row.appendChild(idEl);

    // Coords (clicáveis pra copiar) OU placeholder
    if (orb.coords) {
      const coord = document.createElement("button");
      coord.type = "button";
      coord.className = "rainbow-coord";
      coord.textContent = fmtCoords(orb.coords);
      coord.title = "Clique pra copiar (x, y, z)";
      coord.addEventListener("click", (e) => {
        e.stopPropagation();
        copyCoords(orb.coords);
      });
      row.appendChild(coord);
    } else {
      const ph = document.createElement("span");
      ph.className = "rainbow-coord-empty";
      ph.textContent = "— sem coords —";
      row.appendChild(ph);
    }

    // Ícones de método (detectados das notas + detalhes)
    const methodSourceText = (orb.notes || "") + " " + (orb.detalhes || "");
    const methods = detectMethods(methodSourceText);
    if (methods.length > 0) {
      const wrap = document.createElement("span");
      wrap.className = "rainbow-methods";
      for (const m of methods) {
        const span = document.createElement("span");
        span.className = "rainbow-method";
        span.textContent = m.icon;
        span.title = m.label;
        wrap.appendChild(span);
      }
      row.appendChild(wrap);
    }

    // Nota inline curta
    if (orb.notes) {
      const note = document.createElement("span");
      note.className = "rainbow-note";
      note.textContent = orb.notes;
      note.title = orb.notes;
      row.appendChild(note);
    }

    // Botão de detalhes — quando há nota multi-linha
    const hasDetails = !!orb.detalhes;
    if (hasDetails) {
      const infoBtn = document.createElement("button");
      infoBtn.type = "button";
      infoBtn.className = "rainbow-info-btn";
      infoBtn.textContent = "ℹ";
      infoBtn.title = "Ver detalhes";
      infoBtn.setAttribute("aria-expanded", String(isExpanded(orb.id)));
      const detailsBox = buildDetailsBox(orb);
      detailsBox.classList.toggle("hidden", !isExpanded(orb.id));
      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = !isExpanded(orb.id);
        setExpanded(orb.id, open);
        infoBtn.setAttribute("aria-expanded", String(open));
        detailsBox.classList.toggle("hidden", !open);
      });
      row.appendChild(infoBtn);

      // Container wraps row + detailsBox em um bloco
      const block = document.createElement("div");
      block.className = "rainbow-orb-block";
      block.appendChild(row);
      block.appendChild(detailsBox);
      return block;
    }

    return row;
  }

  function buildDetailsBox(orb) {
    const box = document.createElement("div");
    box.className = "rainbow-details";

    // Texto cru + coords clicáveis. Estratégia: render o texto cru
    // e adicionar uma lista de coords clicáveis abaixo (mais simples).
    const txt = document.createElement("div");
    txt.className = "rainbow-details-text";
    txt.textContent = orb.detalhes;
    box.appendChild(txt);

    if (orb.detalhesCoords && orb.detalhesCoords.length > 0) {
      const list = document.createElement("div");
      list.className = "rainbow-details-coords";
      const lbl = document.createElement("span");
      lbl.className = "rainbow-details-label";
      lbl.textContent = "Coordenadas extras:";
      list.appendChild(lbl);
      for (const c of orb.detalhesCoords) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "rainbow-coord rainbow-coord-extra";
        btn.textContent = fmtCoords(c);
        btn.title = "Clique pra copiar (x, y, z)";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          copyCoords(c);
        });
        list.appendChild(btn);
      }
      box.appendChild(list);
    }

    return box;
  }

  function buildRegionSection(region) {
    const sec = document.createElement("section");
    sec.className = "rainbow-region";
    sec.dataset.regionSlug = region.slug;
    sec.dataset.regionName = region.name.toLowerCase();
    if (isRegionCollapsed(region.slug)) sec.classList.add("is-collapsed");

    const header = document.createElement("div");
    header.className = "rainbow-region-header";

    const chevron = document.createElement("span");
    chevron.className = "rainbow-chevron";
    chevron.textContent = "▾";
    header.appendChild(chevron);

    const icon = document.createElement("span");
    icon.className = "rainbow-region-icon";
    icon.textContent = "📍";
    header.appendChild(icon);

    const title = document.createElement("h2");
    title.className = "rainbow-region-title";
    title.textContent = region.name;
    header.appendChild(title);

    const progress = document.createElement("span");
    progress.className = "rainbow-region-progress";
    progress.dataset.role = "region-progress";
    header.appendChild(progress);

    const bulkBtn = document.createElement("button");
    bulkBtn.type = "button";
    bulkBtn.className = "rainbow-bulk-btn";
    bulkBtn.textContent = "✓ Marcar todas";
    bulkBtn.title = "Toggle: se todas marcadas, desmarca; senão marca tudo";
    bulkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleRegionAll(region);
    });
    header.appendChild(bulkBtn);

    header.addEventListener("click", () => {
      const collapsed = !isRegionCollapsed(region.slug);
      setRegionCollapsed(region.slug, collapsed);
      sec.classList.toggle("is-collapsed", collapsed);
    });

    sec.appendChild(header);

    const body = document.createElement("div");
    body.className = "rainbow-region-body";
    for (const orb of region.orbs) {
      body.appendChild(buildOrbRow(orb, region.slug));
    }
    sec.appendChild(body);

    return sec;
  }

  function regionCounts(region) {
    let done = 0;
    for (const o of region.orbs) if (isCollected(o.id)) done++;
    return { done, total: region.orbs.length };
  }

  function updateRegionProgress(slug) {
    const sec = document.querySelector(`.rainbow-region[data-region-slug="${slug}"]`);
    if (!sec) return;
    const region = RAINBOW_ORBS.regions.find((r) => r.slug === slug);
    if (!region) return;
    const c = regionCounts(region);
    const el = sec.querySelector('[data-role="region-progress"]');
    if (el) el.textContent = `${c.done}/${c.total}`;
    sec.classList.toggle("is-complete", c.done === c.total && c.total > 0);
  }

  function updateGlobalProgress() {
    let done = 0;
    const total = RAINBOW_ORBS.total;
    for (const r of RAINBOW_ORBS.regions) {
      for (const o of r.orbs) if (isCollected(o.id)) done++;
    }
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const cnt = document.getElementById("progressCount");
    const pctEl = document.getElementById("progressPct");
    const fill = document.getElementById("progressFill");
    if (cnt) cnt.textContent = `${done} / ${total}`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fill) fill.style.width = `${pct}%`;
  }

  function toggleRegionAll(region) {
    const c = regionCounts(region);
    const allDone = c.done === c.total;
    for (const o of region.orbs) {
      setCollected(o.id, !allDone);
    }
    // Re-render checkbox states + classe da row
    const sec = document.querySelector(`.rainbow-region[data-region-slug="${region.slug}"]`);
    if (sec) {
      for (const o of region.orbs) {
        const row = sec.querySelector(`.rainbow-orb[data-orb-id="${o.id}"]`);
        if (row) {
          row.classList.toggle("is-collected", !allDone);
          const cb = row.querySelector(".rainbow-check");
          if (cb) cb.checked = !allDone;
        }
      }
    }
    updateRegionProgress(region.slug);
    updateGlobalProgress();
    applyFilters();
  }

  // ---------- Filtros: busca + esconder coletadas ----------
  function applyFilters() {
    const q = (document.getElementById("searchOrb").value || "").trim().toLowerCase();
    const hide = !!state.hideCollected;

    let totalVisible = 0;
    for (const sec of document.querySelectorAll(".rainbow-region")) {
      const regionMatch = !q || sec.dataset.regionName.includes(q);
      let visibleInRegion = 0;
      for (const row of sec.querySelectorAll(".rainbow-orb")) {
        const orbMatch = !q || row.dataset.search.includes(q) || regionMatch;
        const collected = row.classList.contains("is-collected");
        const okHide = !hide || !collected;
        const show = orbMatch && okHide;

        // O orb pode estar dentro de um .rainbow-orb-block (com detalhes)
        const block = row.closest(".rainbow-orb-block") || row;
        block.classList.toggle("hidden", !show);
        if (show) visibleInRegion++;
      }
      sec.classList.toggle("hidden", visibleInRegion === 0);
      totalVisible += visibleInRegion;
    }
    const emptyEl = document.getElementById("orbsEmpty");
    if (emptyEl) emptyEl.classList.toggle("hidden", totalVisible > 0);
  }

  // ---------- Init ----------
  function init() {
    if (typeof RAINBOW_ORBS === "undefined") {
      console.error("RAINBOW_ORBS não disponível. Verifique rainbow-orbs-data.js");
      return;
    }

    const linkAlberto = document.getElementById("npcAlbertoLink");
    if (linkAlberto && RAINBOW_ORBS.npcAlbertoUrl) {
      linkAlberto.href = RAINBOW_ORBS.npcAlbertoUrl;
    }

    const container = document.getElementById("orbsContainer");
    container.innerHTML = "";
    for (const region of RAINBOW_ORBS.regions) {
      container.appendChild(buildRegionSection(region));
    }

    // Progresso por região + global no boot
    for (const r of RAINBOW_ORBS.regions) updateRegionProgress(r.slug);
    updateGlobalProgress();

    // Hide collected
    const hideCb = document.getElementById("hideCollected");
    hideCb.checked = !!state.hideCollected;
    hideCb.addEventListener("change", () => {
      state.hideCollected = hideCb.checked;
      saveState();
      applyFilters();
    });

    // Busca
    const searchInput = document.getElementById("searchOrb");
    searchInput.addEventListener("input", applyFilters);

    // Ctrl+F → foca busca (sobrescreve o find nativo na nossa página)
    document.addEventListener("keydown", (e) => {
      const isFindShortcut = (e.key === "f" || e.key === "F") &&
                             (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
      if (!isFindShortcut) return;
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    });

    // Reset
    document.getElementById("btnReset").addEventListener("click", () => {
      const ok = confirm("Desmarcar TODAS as orbs coletadas?");
      if (!ok) return;
      state.collected = {};
      saveState();
      for (const sec of document.querySelectorAll(".rainbow-region")) {
        sec.classList.remove("is-complete");
        for (const row of sec.querySelectorAll(".rainbow-orb")) {
          row.classList.remove("is-collected");
          const cb = row.querySelector(".rainbow-check");
          if (cb) cb.checked = false;
        }
      }
      for (const r of RAINBOW_ORBS.regions) updateRegionProgress(r.slug);
      updateGlobalProgress();
      applyFilters();
    });

    applyFilters();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
