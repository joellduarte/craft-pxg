/* ============================================================
   PXG Adventurer Craft Calculator — App Core
   Persistência no localStorage, renderização dinâmica
   e motor de cálculo de custo/receita/lucro.

   Estrutura espelhada no app.js do Professor, exceto:
   - sem sistema de berries (isBerrie / multiplicadores)
   - sem rank NPC Zame
   - sem dica de Crushed Leaf (helper específico do Professor)
   ============================================================ */

(function () {
  "use strict";

  // ---------- Constantes ----------
  const LS_KEY = "pxg-adventurer-craft-v1";

  // ---------- Estado ----------
  /**
   * state (por profissão — chave LS_KEY) = {
   *   sales:              { [craftId]: { npc, market } },
   *   quantity:           number,
   *   selected:           string[],
   *   showOnlySelected:   boolean,
   *   subQty:             { [craftId]: number }
   * }
   *
   * Estado compartilhado entre profissões (via PxgShared / shared-state.js):
   *   - prices         (preços de recursos)
   *   - semDroppers    (flag "matéria-prima / sem drop")
   *   - marketTax      (taxa do market)
   */
  const state = loadState();

  // Índices auxiliares (preenchidos no init)
  const craftsById = {};
  const resourceIndex = {};
  const craftIdByName = new Map();
  const lootByName = new Map();

  function normalizeName(s) {
    return String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();
  }

  // ---------- Persistência ----------
  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        sales: parsed.sales || {},
        quantity: typeof parsed.quantity === "number" && parsed.quantity > 0
          ? parsed.quantity
          : 1,
        selected: Array.isArray(parsed.selected) ? parsed.selected : [],
        showOnlySelected: !!parsed.showOnlySelected,
        subQty: parsed.subQty && typeof parsed.subQty === "object" ? parsed.subQty : {},
      };
    } catch (e) {
      console.warn("Erro lendo localStorage, usando estado padrão.", e);
      return defaultState();
    }
  }

  function defaultState() {
    return {
      sales: {},
      quantity: 1,
      selected: [],
      showOnlySelected: false,
      subQty: {},
    };
  }

  function saveState() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Falha ao salvar no localStorage.", e);
    }
  }

  // ---------- Utilidades ----------
  function parseNumberInput(value) {
    if (value === "" || value == null) return 0;
    const n = Number(String(value).replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }

  function formatBR(n) {
    if (!Number.isFinite(n)) return "0";
    return Math.round(n).toLocaleString("pt-BR");
  }

  function getUniqueResources(crafts) {
    const map = new Map();
    for (const c of crafts) {
      for (const r of c.recursos) {
        if (!map.has(r.nome)) map.set(r.nome, r.imagem);
      }
    }
    return Array.from(map.entries())
      .map(([nome, imagem]) => ({ nome, imagem }))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  function getUniqueTipos(crafts) {
    const set = new Set();
    for (const c of crafts) set.add(c.tipo);
    return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }

  function buildResourceIndex(crafts) {
    const idx = {};
    for (const c of crafts) {
      for (const r of c.recursos) {
        if (!idx[r.nome]) idx[r.nome] = new Set();
        idx[r.nome].add(c.id);
      }
    }
    return idx;
  }

  function resolveSelectionTree(selectedIds) {
    const selectedSet = new Set(selectedIds);
    const all = new Set(selectedIds);
    const queue = [...selectedIds];
    while (queue.length) {
      const id = queue.shift();
      const craft = craftsById[id];
      if (!craft) continue;
      for (const r of craft.recursos) {
        const childId = craftIdByName.get(normalizeName(r.nome));
        if (childId && !all.has(childId)) {
          all.add(childId);
          queue.push(childId);
        }
      }
    }
    const deps = new Set();
    for (const id of all) if (!selectedSet.has(id)) deps.add(id);
    return { all, deps };
  }

  let currentDepsSet = new Set();
  let requiredByDep = new Map();

  function recomputeDepsAndRequirements() {
    currentDepsSet = new Set();
    requiredByDep = new Map();
    if (state.selected.length === 0) return;

    const globalQty = Math.max(1, state.quantity || 1);

    const queue = [];
    for (const id of state.selected) queue.push({ id, qty: globalQty });

    let safety = 50000;
    while (queue.length && safety-- > 0) {
      const { id: parentId, qty: parentQty } = queue.shift();
      const parent = craftsById[parentId];
      if (!parent || parentQty <= 0) continue;
      for (const r of parent.recursos) {
        const childId = craftIdByName.get(normalizeName(r.nome));
        if (!childId) continue;
        const demand = r.quantidade * parentQty;
        requiredByDep.set(childId, (requiredByDep.get(childId) || 0) + demand);
        currentDepsSet.add(childId);
        queue.push({ id: childId, qty: demand });
      }
    }
    if (safety <= 0) {
      console.warn("recomputeDepsAndRequirements: safety hit — possível ciclo em CRAFTS_ADVENTURER");
    }
  }

  function cleanupOrphanedSubQty() {
    let changed = false;
    for (const id of Object.keys(state.subQty)) {
      if (!currentDepsSet.has(id)) {
        delete state.subQty[id];
        changed = true;
      }
    }
    if (changed) saveState();
  }

  function getQuantityBreakdown(craft) {
    const id = craft.id;
    const globalQty = Math.max(1, state.quantity || 1);
    const subDemand = requiredByDep.get(id) || 0;
    const isSel = isSelected(id);
    const isDep = currentDepsSet.has(id);

    if (isSel && isDep && subDemand > 0) {
      return { total: globalQty + subDemand, own: globalQty, sub: subDemand, source: "selected+sub" };
    }
    if (isSel) {
      return { total: globalQty, own: globalQty, sub: 0, source: "selected" };
    }
    if (isDep) {
      const override = state.subQty[id];
      if (override && override > 0) {
        return { total: override, own: 0, sub: override, source: "override" };
      }
      if (subDemand > 0) {
        return { total: subDemand, own: 0, sub: subDemand, source: "sub" };
      }
    }
    return { total: globalQty, own: globalQty, sub: 0, source: "global" };
  }

  function isSelected(id) {
    return state.selected.includes(id);
  }

  function toggleSelect(id) {
    const i = state.selected.indexOf(id);
    if (i >= 0) state.selected.splice(i, 1);
    else state.selected.push(id);
    saveState();
    recomputeDepsAndRequirements();
    cleanupOrphanedSubQty();
    updateSelectionUI();
    applyCraftFilters();
    recalcAll();
  }

  function clearSelection() {
    if (state.selected.length === 0) return;
    state.selected = [];
    state.subQty = {};
    saveState();
    recomputeDepsAndRequirements();
    updateSelectionUI();
    applyCraftFilters();
    recalcAll();
  }

  function updateSelectionUI() {
    const count = state.selected.length;
    const countEl = document.getElementById("selectedCount");
    if (countEl) countEl.textContent = String(count);

    const toggleBtn = document.getElementById("btnToggleSelected");
    if (toggleBtn) {
      toggleBtn.classList.toggle("is-active", !!state.showOnlySelected);
      toggleBtn.disabled = count === 0 && !state.showOnlySelected;
    }
    const clearBtn = document.getElementById("btnClearSelected");
    if (clearBtn) clearBtn.disabled = count === 0;

    const cards = document.querySelectorAll(".craft-card");
    for (const card of cards) {
      const id = card.dataset.craftId;
      const on = isSelected(id);
      card.classList.toggle("is-selected", on);
      const star = card.querySelector(".craft-star");
      if (star) {
        star.classList.toggle("is-on", on);
        star.textContent = on ? "★" : "☆";
        star.setAttribute("aria-pressed", on ? "true" : "false");
      }
    }
  }

  function imgFallback(img) {
    img.addEventListener("error", () => {
      img.src =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1f2430"/><text x="16" y="20" font-family="sans-serif" font-size="10" fill="#7a8597" text-anchor="middle">?</text></svg>'
        );
    });
  }

  function makeImg(src, alt, className) {
    const img = document.createElement("img");
    if (className) img.className = className;
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    imgFallback(img);
    return img;
  }

  // ---------- Motor de cálculo ----------
  function getUnitsPerRecipe(craft) {
    if (typeof craft.unidadesPorReceita === "number" && craft.unidadesPorReceita > 0) {
      return craft.unidadesPorReceita;
    }
    return 1;
  }

  function calculateCraft(craft) {
    const bd = getQuantityBreakdown(craft);
    const qty = bd.total;

    let cost = 0;
    const resourceCosts = {};
    for (const r of craft.recursos) {
      const unitPrice = PxgShared.isSemDroppers(r.nome) ? 0 : PxgShared.getPrice(r.nome);
      const subtotal = unitPrice * r.quantidade * qty;
      resourceCosts[r.nome] = { unitPrice, subtotal };
      cost += subtotal;
    }

    const sale = state.sales[craft.id] || {};
    const npcUnit = sale.npc || 0;
    const marketUnit = sale.market || 0;
    const taxFactor = 1 - (PxgShared.getMarketTax() || 0) / 100;

    const unitsPerRecipe = getUnitsPerRecipe(craft);
    const totalUnits = unitsPerRecipe * qty;
    return {
      cost,
      resourceCosts,
      quantity: qty,
      breakdown: bd,
      unitsPerRecipe,
      totalUnits,
      npcRevenue: npcUnit * totalUnits,
      npcProfit: npcUnit * totalUnits - cost,
      marketRevenue: marketUnit * totalUnits * taxFactor,
      marketProfit: marketUnit * totalUnits * taxFactor - cost,
    };
  }

  // ---------- Renderização: Inputs de Recursos ----------
  function renderResourceInputs(resources) {
    const root = document.getElementById("resourceInputs");
    root.innerHTML = "";

    const frag = document.createDocumentFragment();
    for (const r of resources) {
      frag.appendChild(buildResourceRow(r));
    }
    root.appendChild(frag);
  }

  function buildResourceRow(r) {
    const item = document.createElement("div");
    item.className = "resource-item";
    item.dataset.name = r.nome.toLowerCase();
    if (PxgShared.isSemDroppers(r.nome)) item.classList.add("is-sem-droppers");

    const img = makeImg(r.imagem, r.nome);

    const name = document.createElement("span");
    name.className = "res-name";
    name.textContent = r.nome;
    name.title = r.nome;

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "1";
    input.placeholder = "0";
    input.dataset.resourceName = r.nome;
    const currentPrice = PxgShared.getPrice(r.nome);
    input.value = currentPrice > 0 ? currentPrice : "";
    input.addEventListener("input", () => {
      const v = parseNumberInput(input.value);
      PxgShared.setPrice(r.nome, v);
      recalcByResource(r.nome);
    });

    const noPrice = document.createElement("span");
    noPrice.className = "res-no-price";
    noPrice.textContent = "—";
    noPrice.title = "Sem preço (marcado como sem droppers)";

    const checkLabel = document.createElement("label");
    checkLabel.className = "res-check";
    checkLabel.title = "Marcar como item sem droppers (matéria-prima, profissão, especial)";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.dataset.resourceName = r.nome;
    check.checked = PxgShared.isSemDroppers(r.nome);
    const checkText = document.createElement("span");
    checkText.textContent = "sem drop";
    checkLabel.appendChild(check);
    checkLabel.appendChild(checkText);
    check.addEventListener("change", () => {
      PxgShared.setSemDroppers(r.nome, check.checked);
      const newRow = buildResourceRow(r);
      item.replaceWith(newRow);
      recalcByResource(r.nome);
    });

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(input);
    item.appendChild(noPrice);
    item.appendChild(checkLabel);

    for (const badge of buildResourceBadges(r)) {
      item.appendChild(badge);
    }

    return item;
  }

  function buildResourceBadges(r) {
    const isSemDroppers = PxgShared.isSemDroppers(r.nome);
    const nameKey = normalizeName(r.nome);
    const subCraftId = craftIdByName.get(nameKey);
    const lootItem = lootByName.get(nameKey);

    if (isSemDroppers) {
      const b = document.createElement("span");
      b.className = "res-badge res-badge-raw";
      b.textContent = "🌿 Matéria-prima";
      return [b];
    }

    const badges = [];
    if (subCraftId && subCraftId !== r.id) {
      const b = document.createElement("span");
      b.className = "res-badge res-badge-subcraft";
      b.textContent = "↳ Receita do Aventureiro";
      b.title = "Esse recurso também é uma receita do Aventureiro — o custo dele pode ser calculado a partir dos ingredientes dele";
      badges.push(b);
    }
    if (lootItem) {
      const a = document.createElement("a");
      a.className = "res-badge res-badge-loot";
      a.href = `loot.html?selected=${encodeURIComponent(lootItem.id)}`;
      a.target = "_blank";
      a.rel = "noopener";
      const dropCount = (lootItem.droppadoPor || []).length;
      a.textContent = dropCount > 0
        ? `👁 ver droppers (${dropCount})`
        : "👁 ver no loot";
      a.title = dropCount > 0
        ? `Esse item dropa de ${dropCount} pokemon(s) — clique pra ver no Loot Tracker`
        : "Item existe no Loot Tracker mas sem droppers específicos";
      a.addEventListener("click", (e) => e.stopPropagation());
      badges.push(a);
    }

    if (badges.length > 0) return badges;

    const b = document.createElement("span");
    b.className = "res-badge res-badge-unknown";
    b.textContent = "⚠ Sem info";
    b.title = "Sem droppers conhecidos e sem receita. Talvez seja matéria-prima/profissão — considere marcar 'sem drop'.";
    return [b];
  }

  function buildRecipeDroppersButton(craft) {
    const ids = [];
    const seen = new Set();
    for (const r of craft.recursos) {
      if (PxgShared.isSemDroppers(r.nome)) continue;
      const lootItem = lootByName.get(normalizeName(r.nome));
      if (!lootItem) continue;
      if (seen.has(lootItem.id)) continue;
      seen.add(lootItem.id);
      ids.push(lootItem.id);
    }
    if (ids.length === 0) return null;

    const btn = document.createElement("a");
    btn.className = "recipe-droppers-btn";
    btn.href = `loot.html?selected=${ids.map(encodeURIComponent).join(",")}`;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = `👁 Ver droppers da receita (${ids.length})`;
    btn.title = "Abre o Loot Tracker em nova aba com os recursos desta receita pré-selecionados";
    btn.addEventListener("click", (e) => e.stopPropagation());
    return btn;
  }

  // ---------- Renderização: Cards de Craft ----------
  function renderCraftCards(crafts) {
    const root = document.getElementById("craftsGrid");
    root.innerHTML = "";

    const frag = document.createDocumentFragment();
    for (const c of crafts) {
      frag.appendChild(buildCraftCard(c));
    }
    root.appendChild(frag);
  }

  function buildCraftCard(craft) {
    const card = document.createElement("article");
    card.className = "craft-card";
    card.dataset.craftId = craft.id;
    card.dataset.rank = craft.rank;
    card.dataset.tipo = craft.tipo;
    card.dataset.name = craft.nome.toLowerCase();
    card.dataset.resources = craft.recursos
      .map((r) => r.nome.toLowerCase())
      .join("|");
    if (isSelected(craft.id)) card.classList.add("is-selected");

    const star = document.createElement("button");
    star.type = "button";
    star.className = "craft-star";
    const on = isSelected(craft.id);
    star.classList.toggle("is-on", on);
    star.textContent = on ? "★" : "☆";
    star.title = "Selecionar craft";
    star.setAttribute("aria-label", "Selecionar craft");
    star.setAttribute("aria-pressed", on ? "true" : "false");
    star.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSelect(craft.id);
    });
    card.appendChild(star);

    const head = document.createElement("div");
    head.className = "craft-head";

    head.appendChild(makeImg(craft.imagem, craft.nome, "craft-img"));

    const titleWrap = document.createElement("div");
    titleWrap.className = "craft-title";
    const h3 = document.createElement("h3");
    h3.textContent = craft.nome;
    titleWrap.appendChild(h3);

    const meta = document.createElement("div");
    meta.className = "craft-meta";

    const tagRank = document.createElement("span");
    tagRank.className = `tag tag-rank tag-rank-${craft.rank}`;
    tagRank.textContent = `Rank ${craft.rank}`;
    meta.appendChild(tagRank);

    const tagTipo = document.createElement("span");
    tagTipo.className = "tag";
    tagTipo.textContent = craft.tipo;
    meta.appendChild(tagTipo);

    if (craft.skill > 0) {
      const tagSkill = document.createElement("span");
      tagSkill.className = "tag";
      tagSkill.textContent = `Skill ${craft.skill}`;
      meta.appendChild(tagSkill);
    }

    const unitsPerRecipe = getUnitsPerRecipe(craft);
    if (unitsPerRecipe > 1) {
      const tagYield = document.createElement("span");
      tagYield.className = "tag tag-potion";
      tagYield.textContent = `${unitsPerRecipe}× por receita`;
      meta.appendChild(tagYield);
    }

    if (craft.tempo) {
      const tagTempo = document.createElement("span");
      tagTempo.className = "tag tag-tempo";
      tagTempo.textContent = `⏱ ${craft.tempo}`;
      tagTempo.title = "Tempo de craft";
      meta.appendChild(tagTempo);
    }

    titleWrap.appendChild(meta);
    head.appendChild(titleWrap);
    card.appendChild(head);

    const resourcesBox = document.createElement("div");
    resourcesBox.className = "craft-resources";

    for (const r of craft.recursos) {
      const row = document.createElement("div");
      row.className = "craft-resource";
      row.dataset.resource = r.nome;

      const ri = makeImg(r.imagem, r.nome);

      const qty = document.createElement("span");
      qty.className = "res-qty";
      qty.dataset.role = "res-qty";
      qty.textContent = `${r.quantidade}×`;

      const rname = document.createElement("span");
      rname.className = "res-name";
      rname.textContent = r.nome;
      rname.title = r.nome;

      const rcost = document.createElement("span");
      rcost.className = "res-cost";
      rcost.dataset.role = "res-cost";
      rcost.textContent = "—";

      row.appendChild(ri);
      row.appendChild(qty);
      row.appendChild(rname);
      row.appendChild(rcost);
      resourcesBox.appendChild(row);
    }
    card.appendChild(resourcesBox);

    const droppersBtn = buildRecipeDroppersButton(craft);
    if (droppersBtn) card.appendChild(droppersBtn);

    const subBox = document.createElement("div");
    subBox.className = "subrecipe-qty hidden";
    const subLabel = document.createElement("label");
    subLabel.className = "sub-label";
    subLabel.textContent = "Quantidade (sub-receita)";
    const subInput = document.createElement("input");
    subInput.type = "number";
    subInput.min = "0";
    subInput.step = "1";
    subInput.placeholder = "vazio = automático";
    subInput.value = state.subQty[craft.id] > 0 ? state.subQty[craft.id] : "";
    subInput.addEventListener("input", () => {
      const v = parseNumberInput(subInput.value);
      if (v > 0) state.subQty[craft.id] = Math.floor(v);
      else delete state.subQty[craft.id];
      saveState();
      recalcCraft(craft.id);
    });
    const subAuto = document.createElement("small");
    subAuto.className = "sub-auto hint";
    subBox.appendChild(subLabel);
    subBox.appendChild(subInput);
    subBox.appendChild(subAuto);
    card.appendChild(subBox);

    const sale = document.createElement("div");
    sale.className = "craft-sale";

    const savedSale = state.sales[craft.id] || {};
    const multiSale = unitsPerRecipe > 1;
    sale.appendChild(
      buildSaleField(
        craft.id,
        "npc",
        multiSale ? "Preço unit. NPC" : "Preço NPC",
        savedSale.npc
      )
    );
    sale.appendChild(
      buildSaleField(
        craft.id,
        "market",
        multiSale ? "Preço unit. Market" : "Preço Market",
        savedSale.market
      )
    );
    card.appendChild(sale);

    const summary = document.createElement("div");
    summary.className = "craft-summary";
    summary.dataset.role = "summary";
    summary.innerHTML = buildNormalSummaryHTML();
    card.appendChild(summary);

    return card;
  }

  function buildNormalSummaryHTML() {
    return `
      <div class="summary-row">
        <span class="label" data-role="cost-label">Custo total</span>
        <span class="value value-neutral" data-role="cost">—</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-section-title">Venda NPC</div>
      <div class="summary-row">
        <span class="label">Receita</span>
        <span class="value value-neutral" data-role="rev-npc">—</span>
      </div>
      <div class="summary-row">
        <span class="label">Lucro</span>
        <span class="value value-neutral" data-role="profit-npc">—</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-section-title">Venda Market (após taxa)</div>
      <div class="summary-row">
        <span class="label">Receita líquida</span>
        <span class="value value-neutral" data-role="rev-market">—</span>
      </div>
      <div class="summary-row">
        <span class="label">Lucro</span>
        <span class="value value-neutral" data-role="profit-market">—</span>
      </div>
    `;
  }

  function buildSaleField(craftId, kind, labelText, savedValue) {
    const wrap = document.createElement("div");
    wrap.className = "field";

    const id = `sale-${craftId}-${kind}`;
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.id = id;
    input.type = "number";
    input.min = "0";
    input.step = "1";
    input.placeholder = "0";
    input.dataset.role = `sale-${kind}`;
    input.value = savedValue ?? "";

    input.addEventListener("input", () => {
      if (!state.sales[craftId]) state.sales[craftId] = {};
      const v = parseNumberInput(input.value);
      if (v > 0) state.sales[craftId][kind] = v;
      else delete state.sales[craftId][kind];
      if (Object.keys(state.sales[craftId]).length === 0) {
        delete state.sales[craftId];
      }
      saveState();
      recalcCraft(craftId);
    });

    wrap.appendChild(label);
    wrap.appendChild(input);
    return wrap;
  }

  // ---------- Renderização: aplicação dos valores calculados ----------
  function setNeutralValue(el, value) {
    if (!el) return;
    el.textContent = formatBR(value);
    el.classList.remove("value-positive", "value-negative");
    el.classList.add("value-neutral");
  }

  function setProfitValue(el, value, hasInput) {
    if (!el) return;
    if (!hasInput) {
      el.textContent = "—";
      el.classList.remove("value-positive", "value-negative");
      el.classList.add("value-neutral");
      return;
    }
    el.textContent = formatBR(value);
    el.classList.remove("value-positive", "value-negative", "value-neutral");
    if (value > 0) el.classList.add("value-positive");
    else if (value < 0) el.classList.add("value-negative");
    else el.classList.add("value-neutral");
  }

  function recalcCard(card, craft) {
    const calc = calculateCraft(craft);

    const resourceRows = card.querySelectorAll(".craft-resource");
    craft.recursos.forEach((r, i) => {
      const row = resourceRows[i];
      if (!row) return;
      const c = calc.resourceCosts[r.nome];

      const qtyEl = row.querySelector('[data-role="res-qty"]');
      if (qtyEl) {
        const totalQty = r.quantidade * calc.quantity;
        qtyEl.textContent = `${formatBR(totalQty)}×`;
      }

      const costEl = row.querySelector('[data-role="res-cost"]');
      if (c && c.unitPrice > 0) {
        costEl.textContent = formatBR(c.subtotal);
      } else {
        costEl.textContent = "—";
      }
    });

    const costLabel = card.querySelector('[data-role="cost-label"]');
    if (costLabel) {
      const bd = calc.breakdown || { total: calc.quantity, own: calc.quantity, sub: 0, source: "global" };
      let parts = [];
      if (bd.source === "selected+sub") {
        parts.push(`×${formatBR(bd.total)} = ${formatBR(bd.own)} global + ${formatBR(bd.sub)} sub-receita`);
      } else if (bd.source === "sub") {
        parts.push(`×${formatBR(bd.total)} sub-receita`);
      } else if (bd.source === "override") {
        parts.push(`×${formatBR(bd.total)} manual`);
      } else if (bd.total > 1) {
        parts.push(`×${formatBR(bd.total)}`);
      }
      if (calc.unitsPerRecipe > 1) {
        parts.push(`${formatBR(calc.totalUnits)} un.`);
      }
      costLabel.textContent = parts.length
        ? `Custo total (${parts.join(" — ")})`
        : "Custo total";
    }

    setNeutralValue(card.querySelector('[data-role="cost"]'), calc.cost);

    const sale = state.sales[craft.id] || {};
    const hasNpc = (sale.npc || 0) > 0;
    const hasMarket = (sale.market || 0) > 0;

    setNeutralValue(card.querySelector('[data-role="rev-npc"]'), calc.npcRevenue);
    setProfitValue(card.querySelector('[data-role="profit-npc"]'), calc.npcProfit, hasNpc);
    setNeutralValue(card.querySelector('[data-role="rev-market"]'), calc.marketRevenue);
    setProfitValue(card.querySelector('[data-role="profit-market"]'), calc.marketProfit, hasMarket);
  }

  function recalcCraft(craftId) {
    const craft = craftsById[craftId];
    const card = document.querySelector(
      `.craft-card[data-craft-id="${craftId}"]`
    );
    if (craft && card) recalcCard(card, craft);
  }

  function recalcByResource(resourceName) {
    const ids = resourceIndex[resourceName];
    if (!ids) return;
    for (const id of ids) recalcCraft(id);
  }

  function recalcAll() {
    for (const craft of CRAFTS_ADVENTURER) recalcCraft(craft.id);
  }

  // ---------- Filtros / Busca ----------
  function applyCraftFilters() {
    const rank = document.getElementById("filterRank").value;
    const tipo = document.getElementById("filterTipo").value;
    const q = document
      .getElementById("searchCraft")
      .value.trim()
      .toLowerCase();
    const qRes = document
      .getElementById("searchCraftResource")
      .value.trim()
      .toLowerCase();

    let selectionAll = null;
    if (state.showOnlySelected && state.selected.length > 0) {
      selectionAll = new Set([...state.selected, ...currentDepsSet]);
    }

    const cards = document.querySelectorAll(".craft-card");
    let visible = 0;
    for (const card of cards) {
      const id = card.dataset.craftId;
      const okSelection = !selectionAll || selectionAll.has(id);
      const isPureDep =
        !!selectionAll && currentDepsSet.has(id) && !isSelected(id);
      const okRank = isPureDep || !rank || card.dataset.rank === rank;
      const okTipo = isPureDep || !tipo || card.dataset.tipo === tipo;
      const okSearch = isPureDep || !q || card.dataset.name.includes(q);
      const okResSearch =
        isPureDep || !qRes || (card.dataset.resources || "").includes(qRes);
      const show =
        okSelection && okRank && okTipo && okSearch && okResSearch;
      card.classList.toggle("hidden", !show);

      const isDep = currentDepsSet.has(id);
      const isSel = isSelected(id);
      const isPureSub = isDep && !isSel;
      const isSelectedSub = isDep && isSel;
      card.classList.toggle("is-dependency", isPureSub);
      card.classList.toggle("is-selected-sub", isSelectedSub);

      let depTag = card.querySelector(".dep-tag");
      const showTag = isSelectedSub || (isPureSub && state.showOnlySelected);
      if (showTag) {
        if (!depTag) {
          depTag = document.createElement("span");
          depTag.className = "dep-tag";
          const meta = card.querySelector(".craft-meta");
          if (meta) meta.appendChild(depTag);
        }
        const subQ = requiredByDep.get(id) || 0;
        depTag.textContent = isSelectedSub && subQ > 0
          ? `sub-receita ×${formatBR(subQ)}`
          : "sub-receita";
      } else if (depTag) {
        depTag.remove();
      }

      const subBox = card.querySelector(".subrecipe-qty");
      if (subBox) {
        subBox.classList.toggle("hidden", !isPureSub);
        const inp = subBox.querySelector("input");
        if (inp && isPureSub) {
          const v = state.subQty[id];
          const desired = v && v > 0 ? String(v) : "";
          if (document.activeElement !== inp && inp.value !== desired) {
            inp.value = desired;
          }
          const autoSpan = subBox.querySelector(".sub-auto");
          if (autoSpan) {
            const auto = requiredByDep.get(id) || 0;
            autoSpan.textContent = auto > 0
              ? `auto: ${formatBR(auto)}× (somando pais selecionados)`
              : "";
          }
        }
      }

      if (show) visible++;
    }
    document.getElementById("emptyState").classList.toggle("hidden", visible > 0);
  }

  function applyResourceSearch() {
    const q = document
      .getElementById("searchResource")
      .value.trim()
      .toLowerCase();
    const items = document.querySelectorAll(".resource-item");
    for (const it of items) {
      const match = !q || it.dataset.name.includes(q);
      it.classList.toggle("is-hidden", !match);
    }
  }

  // ---------- Inicialização ----------
  function init() {
    if (typeof CRAFTS_ADVENTURER === "undefined" || !Array.isArray(CRAFTS_ADVENTURER)) {
      console.error("CRAFTS_ADVENTURER não está disponível. Verifique adventurer-data.js.");
      return;
    }

    for (const c of CRAFTS_ADVENTURER) {
      craftsById[c.id] = c;
      craftIdByName.set(normalizeName(c.nome), c.id);
    }
    Object.assign(resourceIndex, buildResourceIndex(CRAFTS_ADVENTURER));

    if (typeof LOOT_ITEMS !== "undefined" && Array.isArray(LOOT_ITEMS)) {
      for (const it of LOOT_ITEMS) {
        lootByName.set(normalizeName(it.nome), it);
      }
    }

    state.selected = state.selected.filter((id) => craftsById[id]);
    for (const id of Object.keys(state.subQty)) {
      if (!craftsById[id]) delete state.subQty[id];
    }
    recomputeDepsAndRequirements();
    cleanupOrphanedSubQty();

    document.getElementById("craftCount").textContent =
      `${CRAFTS_ADVENTURER.length} crafts`;

    const resources = getUniqueResources(CRAFTS_ADVENTURER);
    renderResourceInputs(resources);

    const tipoSelect = document.getElementById("filterTipo");
    for (const t of getUniqueTipos(CRAFTS_ADVENTURER)) {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      tipoSelect.appendChild(opt);
    }

    renderCraftCards(CRAFTS_ADVENTURER);

    const taxInput = document.getElementById("taxMarket");
    const currentTax = PxgShared.getMarketTax();
    taxInput.value = currentTax > 0 ? currentTax : "";
    taxInput.addEventListener("input", () => {
      PxgShared.setMarketTax(parseNumberInput(taxInput.value));
      recalcAll();
    });

    const qtyInput = document.getElementById("craftQty");
    qtyInput.value = state.quantity > 1 ? state.quantity : "";
    qtyInput.addEventListener("input", () => {
      const v = parseNumberInput(qtyInput.value);
      state.quantity = v > 0 ? Math.floor(v) : 1;
      saveState();
      recomputeDepsAndRequirements();
      applyCraftFilters();
      recalcAll();
    });

    document
      .getElementById("filterRank")
      .addEventListener("change", applyCraftFilters);
    document
      .getElementById("filterTipo")
      .addEventListener("change", applyCraftFilters);
    document
      .getElementById("searchCraft")
      .addEventListener("input", applyCraftFilters);
    document
      .getElementById("searchCraftResource")
      .addEventListener("input", applyCraftFilters);
    document
      .getElementById("searchResource")
      .addEventListener("input", applyResourceSearch);

    const btnToggle = document.getElementById("btnToggleSelected");
    const btnClear = document.getElementById("btnClearSelected");
    btnToggle.addEventListener("click", () => {
      if (state.selected.length === 0 && !state.showOnlySelected) return;
      state.showOnlySelected = !state.showOnlySelected;
      saveState();
      updateSelectionUI();
      applyCraftFilters();
    });
    btnClear.addEventListener("click", () => {
      if (state.selected.length === 0) return;
      const ok = confirm("Remover todos os crafts selecionados?");
      if (!ok) return;
      clearSelection();
    });
    updateSelectionUI();
    applyCraftFilters();

    document.getElementById("btnReset").addEventListener("click", () => {
      const ok = confirm(
        "Apagar dados deste calculador (seleção, vendas, quantidade)?\n\nPreços de recursos e taxa do market são compartilhados com outras profissões e NÃO serão apagados."
      );
      if (!ok) return;
      localStorage.removeItem(LS_KEY);
      location.reload();
    });

    PxgShared.onChange(() => {
      for (const input of document.querySelectorAll("#resourceInputs input[type=number]")) {
        const name = input.dataset.resourceName;
        if (!name) continue;
        const p = PxgShared.getPrice(name);
        input.value = p > 0 ? p : "";
      }
      for (const cb of document.querySelectorAll("#resourceInputs input[type=checkbox]")) {
        const name = cb.dataset.resourceName;
        if (!name) continue;
        cb.checked = PxgShared.isSemDroppers(name);
        const row = cb.closest(".resource-item");
        if (row) row.classList.toggle("is-sem-droppers", cb.checked);
      }
      const tax = PxgShared.getMarketTax();
      taxInput.value = tax > 0 ? tax : "";
      recalcAll();
    });

    recalcAll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
