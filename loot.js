// ============================================================================
// Loot Tracker — busca itens de loot e pokemons que dropam.
// ============================================================================

(function () {
  "use strict";

  const FONTE_LABEL = {
    loot: "Loot",
    nightmare: "Nightmare"
  };
  const LS_KEY = "pxg-loot-v1";

  // ---------------- Estado ----------------
  const state = {
    mode: "itens",             // "itens" | "pokemons"
    searchItem: "",
    searchPokemon: "",
    fonte: "",
    regiao: "",
    selected: new Set(),       // ids de itens marcados
    showOnlySelected: false,   // se true, exibe seleção (união ou interseção)
    selectionMode: "uniao",    // "uniao" | "intersecao"
    collapsedClusters: new Set() // assinaturas de cluster recolhidas (união)
  };

  // Lê ?selected=id1,id2 da URL e sobrescreve seleção (vindo do craft.html).
  // Roda antes de loadState pra ser o estado inicial; se houver query, ignora
  // a seleção anterior persistida.
  function applyQueryString() {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("selected");
      if (!raw) return false;
      const ids = raw.split(",").map((s) => s.trim()).filter(Boolean);
      if (ids.length === 0) return false;
      state.selected = new Set(ids);
      state.showOnlySelected = true;
      return true;
    } catch (err) {
      console.warn("[loot] falha ao ler querystring:", err);
      return false;
    }
  }

  // ---------------- Persistência ----------------
  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.selected)) {
        state.selected = new Set(parsed.selected);
      }
      if (parsed && typeof parsed.showOnlySelected === "boolean") {
        state.showOnlySelected = parsed.showOnlySelected;
      }
      if (parsed && (parsed.selectionMode === "uniao" || parsed.selectionMode === "intersecao")) {
        state.selectionMode = parsed.selectionMode;
      }
      if (parsed && Array.isArray(parsed.collapsedClusters)) {
        state.collapsedClusters = new Set(parsed.collapsedClusters);
      }
    } catch (err) {
      console.warn("[loot] falha ao carregar localStorage:", err);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({
          selected: Array.from(state.selected),
          showOnlySelected: state.showOnlySelected,
          selectionMode: state.selectionMode,
          collapsedClusters: Array.from(state.collapsedClusters)
        })
      );
    } catch (err) {
      console.warn("[loot] falha ao salvar localStorage:", err);
    }
  }

  // ---------------- Índices ----------------
  // pokemonsIndex: nome normalizado → { nome, imagem, itens: [...] }
  const pokemonsIndex = new Map();
  const pokemonsList = [];

  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .trim();
  }

  function buildIndexes() {
    for (const item of LOOT_ITEMS) {
      for (const dr of item.droppadoPor || []) {
        const key = normalize(dr.nome);
        if (!key) continue;
        let entry = pokemonsIndex.get(key);
        if (!entry) {
          entry = {
            nome: dr.nome,
            slug: dr.slug,
            url: dr.url,
            imagem: dr.imagem,
            itens: []
          };
          pokemonsIndex.set(key, entry);
        }
        entry.itens.push(item);
      }
    }
    for (const v of pokemonsIndex.values()) pokemonsList.push(v);
    pokemonsList.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  // ---------------- Filtros ----------------
  function filterItems() {
    const qi = normalize(state.searchItem);
    const qp = normalize(state.searchPokemon);
    return LOOT_ITEMS.filter((it) => {
      if (state.fonte && it.fonte !== state.fonte) return false;
      if (state.regiao && it.regiao !== state.regiao) return false;
      if (qi && !normalize(it.nome).includes(qi)) return false;
      if (qp) {
        const found = (it.droppadoPor || []).some((d) =>
          normalize(d.nome).includes(qp)
        );
        if (!found) return false;
      }
      return true;
    });
  }

  function filterPokemons() {
    const qp = normalize(state.searchPokemon);
    const qi = normalize(state.searchItem);
    return pokemonsList.filter((pk) => {
      if (qp && !normalize(pk.nome).includes(qp)) return false;
      // se tem filtro de item, só mostra pokemons que dropam um item que bate
      const itens = pk.itens.filter((it) => {
        if (state.fonte && it.fonte !== state.fonte) return false;
        if (state.regiao && it.regiao !== state.regiao) return false;
        if (qi && !normalize(it.nome).includes(qi)) return false;
        return true;
      });
      if (itens.length === 0) return false;
      pk._filteredItens = itens;
      return true;
    });
  }

  // ---------------- Render ----------------
  const els = {};

  function renderItemCard(item) {
    const card = document.createElement("article");
    card.className = "loot-card loot-card-item";
    if (state.selected.has(item.id)) card.classList.add("is-selected");

    const starBtn = document.createElement("button");
    starBtn.type = "button";
    starBtn.className = "loot-star";
    starBtn.title = "Marcar para comparar drops";
    starBtn.setAttribute("aria-label", "Selecionar item");
    starBtn.textContent = state.selected.has(item.id) ? "★" : "☆";
    starBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleSelected(item.id);
    });
    card.appendChild(starBtn);

    const header = document.createElement("div");
    header.className = "loot-card-header";

    const img = document.createElement("img");
    img.className = "loot-card-img";
    img.src = item.imagem || "";
    img.alt = item.nome;
    img.loading = "lazy";
    img.onerror = () => { img.style.display = "none"; };
    header.appendChild(img);

    const titleWrap = document.createElement("div");
    titleWrap.className = "loot-card-title-wrap";

    const title = document.createElement("h3");
    title.className = "loot-card-title";
    const titleLink = document.createElement("a");
    titleLink.href = item.url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.textContent = item.nome;
    title.appendChild(titleLink);
    titleWrap.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "loot-card-meta";
    if (item.fonte) {
      const tag = document.createElement("span");
      tag.className = `tag tag-fonte tag-fonte-${item.fonte}`;
      tag.textContent = FONTE_LABEL[item.fonte] || item.fonte;
      meta.appendChild(tag);
    }
    if (item.regiao && item.regiao !== "Desconhecida") {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item.regiao;
      meta.appendChild(tag);
    }
    if (item.secao && item.secao !== "Outros") {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item.secao;
      meta.appendChild(tag);
    }
    if (item.precoNpc != null) {
      const tag = document.createElement("span");
      tag.className = "tag tag-price";
      tag.textContent = `$${item.precoNpc.toLocaleString("pt-BR")}`;
      if (item.vendedor) tag.title = `Vendedor: ${item.vendedor}`;
      meta.appendChild(tag);
    }
    titleWrap.appendChild(meta);
    header.appendChild(titleWrap);
    card.appendChild(header);

    // Droppadores
    const drSection = document.createElement("div");
    drSection.className = "loot-droppers";
    const drLabel = document.createElement("div");
    drLabel.className = "loot-section-label";

    if (item.droppadoPor && item.droppadoPor.length) {
      drLabel.textContent = `Droppado por (${item.droppadoPor.length})`;
      drSection.appendChild(drLabel);
      const list = document.createElement("div");
      list.className = "loot-droppers-list";
      for (const dr of item.droppadoPor) {
        list.appendChild(buildPokemonPill(dr));
      }
      drSection.appendChild(list);
    } else if (item.droppadoPorDescricao) {
      drLabel.textContent = "Como obter";
      drSection.appendChild(drLabel);
      const p = document.createElement("p");
      p.className = "loot-droppers-desc";
      p.textContent = item.droppadoPorDescricao;
      drSection.appendChild(p);
    } else {
      drLabel.textContent = "Como obter";
      drSection.appendChild(drLabel);
      const p = document.createElement("p");
      p.className = "loot-droppers-desc loot-droppers-empty";
      p.textContent = "Sem informação na wiki.";
      drSection.appendChild(p);
    }
    card.appendChild(drSection);

    if (item.utilidade) {
      const u = document.createElement("p");
      u.className = "loot-utilidade";
      u.textContent = item.utilidade;
      card.appendChild(u);
    }

    return card;
  }

  function renderPokemonCard(pk) {
    const card = document.createElement("article");
    card.className = "loot-card loot-card-pokemon";

    const header = document.createElement("div");
    header.className = "loot-card-header";

    const img = document.createElement("img");
    img.className = "loot-card-img loot-card-img-poke";
    img.src = pk.imagem || "";
    img.alt = pk.nome;
    img.loading = "lazy";
    img.onerror = () => { img.style.display = "none"; };
    header.appendChild(img);

    const titleWrap = document.createElement("div");
    titleWrap.className = "loot-card-title-wrap";

    const title = document.createElement("h3");
    title.className = "loot-card-title";
    const a = document.createElement("a");
    a.href = pk.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = pk.nome;
    title.appendChild(a);
    titleWrap.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "loot-card-meta";
    const tag = document.createElement("span");
    tag.className = "tag";
    const itens = pk._filteredItens || pk.itens;
    tag.textContent = `${itens.length} item${itens.length === 1 ? "" : "s"}`;
    meta.appendChild(tag);
    titleWrap.appendChild(meta);
    header.appendChild(titleWrap);
    card.appendChild(header);

    const drSection = document.createElement("div");
    drSection.className = "loot-droppers";
    const drLabel = document.createElement("div");
    drLabel.className = "loot-section-label";
    drLabel.textContent = `Drops`;
    drSection.appendChild(drLabel);
    const list = document.createElement("div");
    list.className = "loot-droppers-list";
    for (const it of itens) {
      list.appendChild(buildItemPill(it));
    }
    drSection.appendChild(list);
    card.appendChild(drSection);

    return card;
  }

  function buildPokemonPill(dr) {
    const a = document.createElement("a");
    a.className = "loot-pill";
    a.href = dr.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = dr.nome;
    if (dr.imagem) {
      const img = document.createElement("img");
      img.src = dr.imagem;
      img.alt = "";
      img.loading = "lazy";
      img.onerror = () => { img.style.display = "none"; };
      a.appendChild(img);
    }
    const span = document.createElement("span");
    span.textContent = dr.nome;
    a.appendChild(span);
    return a;
  }

  function buildItemPill(item) {
    const a = document.createElement("a");
    a.className = "loot-pill";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = item.nome;
    if (item.imagem) {
      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = "";
      img.loading = "lazy";
      img.onerror = () => { img.style.display = "none"; };
      a.appendChild(img);
    }
    const span = document.createElement("span");
    span.textContent = item.nome;
    a.appendChild(span);
    return a;
  }

  function render() {
    const grid = els.grid;
    grid.innerHTML = "";
    grid.className = "loot-grid";

    if (state.showOnlySelected) {
      if (state.selectionMode === "intersecao") renderIntersection();
      else renderUnion();
      return;
    }

    els.selectionSummary.classList.add("hidden");

    let items;
    if (state.mode === "itens") {
      items = filterItems();
      for (const it of items) grid.appendChild(renderItemCard(it));
    } else {
      items = filterPokemons();
      for (const pk of items) grid.appendChild(renderPokemonCard(pk));
    }

    els.count.textContent = `${items.length} ${state.mode === "itens" ? (items.length === 1 ? "item" : "itens") : (items.length === 1 ? "pokemon" : "pokemons")}`;
    els.empty.classList.toggle("hidden", items.length > 0);
  }

  function renderSelectionHeader(selectedItems, withoutDroppers) {
    els.selectionChips.innerHTML = "";
    for (const it of selectedItems) {
      const chip = document.createElement("span");
      chip.className = "selection-chip";
      if (withoutDroppers.includes(it)) chip.classList.add("selection-chip-warn");
      if (it.imagem) {
        const img = document.createElement("img");
        img.src = it.imagem;
        img.alt = "";
        img.loading = "lazy";
        img.onerror = () => { img.style.display = "none"; };
        chip.appendChild(img);
      }
      const sp = document.createElement("span");
      sp.textContent = it.nome;
      chip.appendChild(sp);
      const close = document.createElement("button");
      close.type = "button";
      close.className = "selection-chip-close";
      close.textContent = "×";
      close.title = "Remover da seleção";
      close.addEventListener("click", () => toggleSelected(it.id));
      chip.appendChild(close);
      els.selectionChips.appendChild(chip);
    }
    if (withoutDroppers.length > 0) {
      const warn = document.createElement("p");
      warn.className = "selection-warn";
      warn.textContent = `${withoutDroppers.length} item(s) sem lista específica de droppers (drop genérico por elemento) — ignorados.`;
      els.selectionChips.appendChild(warn);
    }
    els.selectionSummary.classList.remove("hidden");
  }

  function renderIntersection() {
    const grid = els.grid;
    const selectedItems = LOOT_ITEMS.filter((it) => state.selected.has(it.id));
    const withDroppers = selectedItems.filter((it) => (it.droppadoPor || []).length > 0);
    const withoutDroppers = selectedItems.filter((it) => (it.droppadoPor || []).length === 0);

    renderSelectionHeader(selectedItems, withoutDroppers);

    if (selectedItems.length === 0) {
      els.count.textContent = "0 pokemons";
      const p = document.createElement("p");
      p.className = "loot-empty-msg";
      p.textContent = "Nenhum item selecionado. Marque itens (★) e volte aqui.";
      grid.appendChild(p);
      els.empty.classList.add("hidden");
      return;
    }

    if (withDroppers.length === 0) {
      els.count.textContent = "0 pokemons";
      const p = document.createElement("p");
      p.className = "loot-empty-msg";
      p.textContent = "Nenhum dos itens selecionados tem lista específica de droppers.";
      grid.appendChild(p);
      els.empty.classList.add("hidden");
      return;
    }

    // interseção: pokemons que aparecem em TODOS os withDroppers
    const sets = withDroppers.map((it) => new Set((it.droppadoPor || []).map((d) => d.nome)));
    const firstNames = Array.from(sets[0]);
    const common = firstNames.filter((nome) => sets.every((s) => s.has(nome)));

    const cards = common
      .map((nome) => pokemonsIndex.get(normalize(nome)))
      .filter(Boolean);
    cards.sort((a, b) => a.nome.localeCompare(b.nome));

    const selectedSet = new Set(withDroppers.map((it) => it.id));
    for (const pk of cards) {
      pk._filteredItens = pk.itens.filter((it) => selectedSet.has(it.id));
      grid.appendChild(renderPokemonCard(pk));
    }

    els.count.textContent = `${cards.length} pokemon${cards.length === 1 ? "" : "s"} em comum`;
    if (cards.length === 0) {
      const p = document.createElement("p");
      p.className = "loot-empty-msg";
      p.textContent = "Nenhum pokemon dropa todos esses itens em comum. Tente reduzir a seleção.";
      grid.appendChild(p);
    }
    els.empty.classList.add("hidden");
  }

  function renderUnion() {
    const grid = els.grid;
    const selectedItems = LOOT_ITEMS.filter((it) => state.selected.has(it.id));
    const withDroppers = selectedItems.filter((it) => (it.droppadoPor || []).length > 0);
    const withoutDroppers = selectedItems.filter((it) => (it.droppadoPor || []).length === 0);

    renderSelectionHeader(selectedItems, withoutDroppers);

    if (selectedItems.length === 0) {
      els.count.textContent = "0 pokemons";
      const p = document.createElement("p");
      p.className = "loot-empty-msg";
      p.textContent = "Nenhum item selecionado. Marque itens (★) e volte aqui.";
      grid.appendChild(p);
      els.empty.classList.add("hidden");
      return;
    }

    if (withDroppers.length === 0) {
      els.count.textContent = "0 pokemons";
      const p = document.createElement("p");
      p.className = "loot-empty-msg";
      p.textContent = "Nenhum dos itens selecionados tem lista específica de droppers.";
      grid.appendChild(p);
      els.empty.classList.add("hidden");
      return;
    }

    // união: agrega cada pokemon → quais itens selecionados ele dropa
    const total = withDroppers.length;
    const agg = new Map(); // pokeKey → { pk, itens: [item, ...] }
    for (const item of withDroppers) {
      for (const dr of item.droppadoPor) {
        const key = normalize(dr.nome);
        if (!key) continue;
        let entry = agg.get(key);
        if (!entry) {
          const pk = pokemonsIndex.get(key);
          if (!pk) continue;
          entry = { pk, itens: [] };
          agg.set(key, entry);
        }
        entry.itens.push(item);
      }
    }

    // Caso 1 item selecionado: render flat (section header seria redundante)
    if (total === 1) {
      const rows = Array.from(agg.values());
      rows.sort((a, b) => a.pk.nome.localeCompare(b.pk.nome));
      for (const row of rows) {
        row.pk._filteredItens = row.itens;
        grid.appendChild(renderPokemonCardCoverage(row.pk, row.itens.length, total));
      }
      els.count.textContent = `${rows.length} pokemon${rows.length === 1 ? "" : "s"}`;
      els.empty.classList.add("hidden");
      return;
    }

    // Caso geral: agrupa por assinatura (subconjunto exato de itens que cada poke dropa)
    const clusters = new Map(); // signature → { signature, items, pokes }
    for (const entry of agg.values()) {
      const ids = entry.itens.map((i) => i.id).sort();
      const signature = ids.join("|");
      let cluster = clusters.get(signature);
      if (!cluster) {
        cluster = {
          signature,
          items: entry.itens.slice().sort((a, b) => a.nome.localeCompare(b.nome)),
          pokes: []
        };
        clusters.set(signature, cluster);
      }
      cluster.pokes.push(entry.pk);
    }
    const sortedClusters = Array.from(clusters.values()).sort((a, b) => {
      if (b.items.length !== a.items.length) return b.items.length - a.items.length;
      return b.pokes.length - a.pokes.length;
    });

    const totalPokes = agg.size;
    let allCount = 0, highCount = 0;
    for (const c of sortedClusters) {
      if (c.items.length === total) allCount += c.pokes.length;
      else if (c.items.length / total >= 0.5) highCount += c.pokes.length;
    }

    grid.className = "loot-clusters";

    for (const cluster of sortedClusters) {
      const tier = cluster.items.length === total ? "all"
        : cluster.items.length / total >= 0.5 ? "high" : "low";

      const section = document.createElement("section");
      section.className = `loot-cluster loot-cluster-tier-${tier}`;
      if (state.collapsedClusters.has(cluster.signature)) {
        section.classList.add("is-collapsed");
      }

      const header = document.createElement("div");
      header.className = "loot-cluster-header";
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");
      header.title = "Clique para esconder/mostrar essa seção";

      const chevron = document.createElement("span");
      chevron.className = "loot-cluster-chevron";
      chevron.setAttribute("aria-hidden", "true");
      chevron.textContent = "▾";
      header.appendChild(chevron);

      const toggleCollapsed = () => {
        if (state.collapsedClusters.has(cluster.signature)) {
          state.collapsedClusters.delete(cluster.signature);
        } else {
          state.collapsedClusters.add(cluster.signature);
        }
        section.classList.toggle("is-collapsed");
        saveState();
      };
      header.addEventListener("click", toggleCollapsed);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCollapsed();
        }
      });

      const icons = document.createElement("div");
      icons.className = "loot-cluster-icons";
      for (const it of cluster.items) {
        const img = document.createElement("img");
        img.src = it.imagem || "";
        img.alt = it.nome;
        img.title = it.nome;
        img.loading = "lazy";
        img.onerror = () => { img.style.display = "none"; };
        icons.appendChild(img);
      }
      header.appendChild(icons);

      const label = document.createElement("div");
      label.className = "loot-cluster-label";
      label.textContent = cluster.items.map((i) => i.nome).join(" + ");
      header.appendChild(label);

      const meta = document.createElement("div");
      meta.className = "loot-cluster-meta";
      const strong = document.createElement("strong");
      strong.textContent = `${cluster.items.length}/${total}`;
      meta.appendChild(strong);
      meta.appendChild(document.createTextNode(
        ` itens · ${cluster.pokes.length} pokemon${cluster.pokes.length === 1 ? "" : "s"}`
      ));
      header.appendChild(meta);

      section.appendChild(header);

      const innerGrid = document.createElement("div");
      innerGrid.className = "loot-grid";
      cluster.pokes.sort((a, b) => a.nome.localeCompare(b.nome));
      for (const pk of cluster.pokes) {
        pk._filteredItens = cluster.items;
        innerGrid.appendChild(renderPokemonCard(pk));
      }
      section.appendChild(innerGrid);

      grid.appendChild(section);
    }

    const parts = [`${totalPokes} pokemon${totalPokes === 1 ? "" : "s"}`];
    if (allCount > 0) parts.push(`${allCount} dropa${allCount === 1 ? "" : "m"} todos`);
    if (highCount > 0) parts.push(`${highCount} ≥50%`);
    els.count.textContent = parts.join(" · ");
    els.empty.classList.add("hidden");
  }

  function renderPokemonCardCoverage(pk, covered, total) {
    const card = renderPokemonCard(pk);
    const tier = covered === total ? "all" : covered / total >= 0.5 ? "high" : "low";
    card.classList.add(`loot-card-tier-${tier}`);

    const badge = document.createElement("span");
    badge.className = `loot-coverage-badge loot-coverage-${tier}`;
    badge.textContent = covered === total
      ? `★ ${covered}/${total}`
      : `${covered}/${total}`;
    badge.title = `Dropa ${covered} de ${total} itens selecionados`;
    card.appendChild(badge);

    return card;
  }

  function toggleSelected(id) {
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);
    saveState();
    updateSelectionUI();
    render();
  }

  function clearSelected() {
    if (state.selected.size === 0) return;
    state.selected.clear();
    state.showOnlySelected = false;
    saveState();
    updateSelectionUI();
    render();
  }

  function toggleShowOnlySelected() {
    state.showOnlySelected = !state.showOnlySelected;
    saveState();
    updateSelectionUI();
    render();
  }

  function updateSelectionUI() {
    els.selectedCount.textContent = state.selected.size;
    els.btnToggleSelected.classList.toggle("is-active", state.showOnlySelected);
    for (const b of document.querySelectorAll(".seg-btn[data-selmode]")) {
      b.classList.toggle("is-active", b.dataset.selmode === state.selectionMode);
    }
  }

  // ---------------- Setup ----------------
  function populateRegioes() {
    const set = new Set();
    for (const it of LOOT_ITEMS) {
      if (it.regiao && it.regiao !== "Desconhecida") set.add(it.regiao);
    }
    const opts = Array.from(set).sort();
    for (const r of opts) {
      const opt = document.createElement("option");
      opt.value = r;
      opt.textContent = r;
      els.regiao.appendChild(opt);
    }
  }

  function bindEvents() {
    for (const btn of document.querySelectorAll(".seg-btn[data-mode]")) {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        for (const b of document.querySelectorAll(".seg-btn[data-mode]")) {
          b.classList.toggle("is-active", b === btn);
        }
        if (state.showOnlySelected) {
          state.showOnlySelected = false;
          updateSelectionUI();
        }
        render();
      });
    }
    for (const btn of document.querySelectorAll(".seg-btn[data-selmode]")) {
      btn.addEventListener("click", () => {
        state.selectionMode = btn.dataset.selmode;
        for (const b of document.querySelectorAll(".seg-btn[data-selmode]")) {
          b.classList.toggle("is-active", b === btn);
        }
        saveState();
        if (state.showOnlySelected) render();
      });
    }
    els.searchItem.addEventListener("input", () => {
      state.searchItem = els.searchItem.value;
      render();
    });
    els.searchPokemon.addEventListener("input", () => {
      state.searchPokemon = els.searchPokemon.value;
      render();
    });
    els.fonte.addEventListener("change", () => {
      state.fonte = els.fonte.value;
      render();
    });
    els.regiao.addEventListener("change", () => {
      state.regiao = els.regiao.value;
      render();
    });
    els.btnToggleSelected.addEventListener("click", toggleShowOnlySelected);
    els.btnClearSelected.addEventListener("click", clearSelected);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    els.grid = document.getElementById("lootGrid");
    els.count = document.getElementById("resultCount");
    els.empty = document.getElementById("lootEmpty");
    els.searchItem = document.getElementById("searchItem");
    els.searchPokemon = document.getElementById("searchPokemon");
    els.fonte = document.getElementById("filterFonte");
    els.regiao = document.getElementById("filterRegiao");
    els.btnToggleSelected = document.getElementById("btnToggleSelected");
    els.btnClearSelected = document.getElementById("btnClearSelected");
    els.selectedCount = document.getElementById("selectedCount");
    els.selectionSummary = document.getElementById("selectionSummary");
    els.selectionChips = document.getElementById("selectionChips");

    if (typeof LOOT_ITEMS === "undefined") {
      els.grid.innerHTML = "<p class='loading'>Erro: loot-data.js não carregou.</p>";
      return;
    }

    // Aplica correções de nomes da wiki antes de qualquer indexação
    if (typeof WikiOverrides !== "undefined") {
      await WikiOverrides.load();
      WikiOverrides.applyToLoot(LOOT_ITEMS);
    }

    loadState();
    // querystring tem prioridade sobre o estado persistido (chegou de outro lugar
    // querendo ver itens específicos)
    if (applyQueryString()) saveState();
    buildIndexes();
    populateRegioes();
    bindEvents();
    updateSelectionUI();
    render();
  });
})();
