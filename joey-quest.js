/* ============================================================
   PXG Joey Quest Tracker — App Core

   - Render por clã (sessões colapsáveis)
   - Captura compartilhada entre clãs (state keyed por slug do pokémon)
   - Persistência em localStorage (pxg-joey-quest-v1)
   - Busca por pokémon OU clã
   - "Esconder capturados" filter
   - Ctrl+F → foca busca
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY = "pxg-joey-quest-v1";

  const state = loadState();

  function slug(name) {
    return String(name).toLowerCase().replace(/\s+/g, "-");
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultState();
      const p = JSON.parse(raw);
      return {
        captured:        (p.captured && typeof p.captured === "object") ? p.captured : {},
        collapsedClans:  (p.collapsedClans && typeof p.collapsedClans === "object") ? p.collapsedClans : {},
        hideCaptured:    !!p.hideCaptured,
      };
    } catch (e) {
      console.warn("Erro lendo localStorage, usando default.", e);
      return defaultState();
    }
  }

  function defaultState() {
    return { captured: {}, collapsedClans: {}, hideCaptured: false };
  }

  function saveState() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Falha ao salvar.", e);
    }
  }

  function isCaptured(pokeName) {
    return !!state.captured[slug(pokeName)];
  }

  function setCaptured(pokeName, v) {
    const id = slug(pokeName);
    if (v) state.captured[id] = true;
    else delete state.captured[id];
    saveState();
  }

  function isClanCollapsed(clanId) {
    return !!state.collapsedClans[clanId];
  }

  function setClanCollapsed(clanId, v) {
    if (v) state.collapsedClans[clanId] = true;
    else delete state.collapsedClans[clanId];
    saveState();
  }

  function uniquePokemons() {
    const set = new Set();
    for (const c of JOEY_QUEST.clans) {
      for (const p of c.pokemons) set.add(slug(p.name));
    }
    return set;
  }

  // ---------- Reusable bits ----------
  function buildDifficultyBadge(diff) {
    const d = JOEY_QUEST.rewardsByDifficulty[diff];
    const label = d ? d.label : diff;
    const el = document.createElement("span");
    el.className = `joey-diff joey-diff-${diff}`;
    el.textContent = label;
    return el;
  }

  // Item de recompensa: ícone + qty + nome (compacto)
  function buildRewardItem(reward) {
    const wrap = document.createElement("div");
    wrap.className = "joey-reward-item";

    if (reward.image) {
      const img = document.createElement("img");
      img.className = "joey-reward-img";
      img.src = reward.image;
      img.alt = reward.name;
      img.loading = "lazy";
      wrap.appendChild(img);
    }

    const text = document.createElement("span");
    text.className = "joey-reward-text";
    if (typeof reward.qty === "number") {
      const qty = document.createElement("strong");
      qty.className = "joey-reward-qty";
      qty.textContent = `${reward.qty}×`;
      text.appendChild(qty);
      text.appendChild(document.createTextNode(" "));
    }
    text.appendChild(document.createTextNode(reward.name));
    wrap.appendChild(text);

    return wrap;
  }

  // ---------- Pokémon row ----------
  function buildPokemonRow(pokemon, clanId) {
    const row = document.createElement("div");
    row.className = "joey-pokemon";
    row.dataset.pokemon = pokemon.name.toLowerCase();
    row.dataset.pokemonSlug = slug(pokemon.name);
    row.dataset.clan = clanId;
    if (isCaptured(pokemon.name)) row.classList.add("is-captured");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "joey-check";
    cb.checked = isCaptured(pokemon.name);
    cb.addEventListener("change", () => {
      setCaptured(pokemon.name, cb.checked);
      syncPokemonState(slug(pokemon.name), cb.checked);
      for (const c of JOEY_QUEST.clans) {
        if (c.pokemons.some((p) => slug(p.name) === slug(pokemon.name))) {
          updateClanProgress(c.id);
        }
      }
      updateGlobalProgress();
      applyFilters();
    });
    row.appendChild(cb);

    if (pokemon.image) {
      const img = document.createElement("img");
      img.className = "joey-pokemon-img";
      img.src = pokemon.image;
      img.alt = pokemon.name;
      img.loading = "lazy";
      row.appendChild(img);
    }

    const nameEl = document.createElement("span");
    nameEl.className = "joey-pokemon-name";
    nameEl.textContent = pokemon.name;
    row.appendChild(nameEl);

    row.appendChild(buildDifficultyBadge(pokemon.difficulty));

    return row;
  }

  function syncPokemonState(pokeSlug, captured) {
    const rows = document.querySelectorAll(`.joey-pokemon[data-pokemon-slug="${pokeSlug}"]`);
    for (const r of rows) {
      r.classList.toggle("is-captured", captured);
      const cb = r.querySelector(".joey-check");
      if (cb) cb.checked = captured;
    }
  }

  // ---------- Clã section ----------
  function buildClanSection(clan) {
    const sec = document.createElement("section");
    sec.className = "joey-clan";
    sec.dataset.clanId = clan.id;
    sec.dataset.clanName = clan.name.toLowerCase();
    if (isClanCollapsed(clan.id)) sec.classList.add("is-collapsed");

    const header = document.createElement("div");
    header.className = "joey-clan-header";

    const chevron = document.createElement("span");
    chevron.className = "joey-chevron";
    chevron.textContent = "▾";
    header.appendChild(chevron);

    if (clan.iconImage) {
      const icon = document.createElement("img");
      icon.className = "joey-clan-icon-img";
      icon.src = clan.iconImage;
      icon.alt = clan.name;
      icon.loading = "lazy";
      header.appendChild(icon);
    } else if (clan.icon) {
      const icon = document.createElement("span");
      icon.className = "joey-clan-icon";
      icon.textContent = clan.icon;
      header.appendChild(icon);
    }

    const title = document.createElement("h2");
    title.className = "joey-clan-title";
    title.textContent = clan.name;
    header.appendChild(title);

    const progress = document.createElement("span");
    progress.className = "joey-clan-progress";
    progress.dataset.role = "clan-progress";
    header.appendChild(progress);

    header.addEventListener("click", () => {
      const collapsed = !isClanCollapsed(clan.id);
      setClanCollapsed(clan.id, collapsed);
      sec.classList.toggle("is-collapsed", collapsed);
    });

    sec.appendChild(header);

    const body = document.createElement("div");
    body.className = "joey-clan-body";

    // Recompensa do clã (com ícones)
    const reward = document.createElement("div");
    reward.className = "joey-clan-reward";
    const rewardLabel = document.createElement("div");
    rewardLabel.className = "joey-clan-reward-label";
    rewardLabel.textContent = "🎁 Recompensa do clã";
    reward.appendChild(rewardLabel);
    const rewardList = document.createElement("div");
    rewardList.className = "joey-clan-reward-list";
    for (const r of clan.reward) {
      rewardList.appendChild(buildRewardItem(r));
    }
    reward.appendChild(rewardList);
    body.appendChild(reward);

    // Lista de pokémons
    const list = document.createElement("div");
    list.className = "joey-pokemon-list";
    for (const p of clan.pokemons) {
      list.appendChild(buildPokemonRow(p, clan.id));
    }
    body.appendChild(list);

    sec.appendChild(body);
    return sec;
  }

  function clanCounts(clan) {
    let done = 0;
    for (const p of clan.pokemons) if (isCaptured(p.name)) done++;
    return { done, total: clan.pokemons.length };
  }

  function updateClanProgress(clanId) {
    const sec = document.querySelector(`.joey-clan[data-clan-id="${clanId}"]`);
    if (!sec) return;
    const clan = JOEY_QUEST.clans.find((c) => c.id === clanId);
    if (!clan) return;
    const c = clanCounts(clan);
    const el = sec.querySelector('[data-role="clan-progress"]');
    if (el) el.textContent = `${c.done}/${c.total}`;
    sec.classList.toggle("is-complete", c.done === c.total && c.total > 0);
  }

  function updateGlobalProgress() {
    const uniq = uniquePokemons();
    const total = uniq.size;
    let done = 0;
    for (const id of uniq) if (state.captured[id]) done++;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const cnt = document.getElementById("progressCount");
    const pctEl = document.getElementById("progressPct");
    const fill = document.getElementById("progressFill");
    if (cnt) cnt.textContent = `${done} / ${total}`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fill) fill.style.width = `${pct}%`;
  }

  // ---------- Filtros ----------
  function applyFilters() {
    const q = (document.getElementById("searchPokemon").value || "").trim().toLowerCase();
    const hide = !!state.hideCaptured;

    let totalVisible = 0;
    for (const sec of document.querySelectorAll(".joey-clan")) {
      const clanMatch = !q || sec.dataset.clanName.includes(q);
      let visibleInClan = 0;
      for (const row of sec.querySelectorAll(".joey-pokemon")) {
        const pokeMatch = !q || row.dataset.pokemon.includes(q) || clanMatch;
        const captured = row.classList.contains("is-captured");
        const okHide = !hide || !captured;
        const show = pokeMatch && okHide;
        row.classList.toggle("hidden", !show);
        if (show) visibleInClan++;
      }
      sec.classList.toggle("hidden", visibleInClan === 0);
      totalVisible += visibleInClan;
    }
    const emptyEl = document.getElementById("clansEmpty");
    if (emptyEl) emptyEl.classList.toggle("hidden", totalVisible > 0);
  }

  // ---------- Cards de recompensa (info) ----------
  function renderRewardsByDifficulty() {
    const wrap = document.getElementById("rewardsByDiff");
    if (!wrap) return;
    wrap.innerHTML = "";
    for (const key of ["facil", "medio", "dificil"]) {
      const d = JOEY_QUEST.rewardsByDifficulty[key];
      if (!d) continue;
      const card = document.createElement("div");
      card.className = `joey-reward-card joey-reward-card-${key}`;
      const title = document.createElement("div");
      title.className = "joey-reward-card-title";
      const badge = document.createElement("span");
      badge.className = `joey-diff joey-diff-${key}`;
      badge.textContent = d.label;
      title.appendChild(badge);
      card.appendChild(title);
      const list = document.createElement("div");
      list.className = "joey-reward-card-list";
      for (const item of d.items) {
        list.appendChild(buildRewardItem(item));
      }
      card.appendChild(list);
      wrap.appendChild(card);
    }
  }

  function renderFinalReward() {
    const wrap = document.getElementById("finalRewardList");
    if (!wrap) return;
    wrap.innerHTML = "";
    for (const item of JOEY_QUEST.finalReward) {
      const card = document.createElement("div");
      card.className = "joey-final-item";

      if (item.image) {
        const img = document.createElement("img");
        img.className = "joey-final-img";
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy";
        card.appendChild(img);
      }

      const txt = document.createElement("div");
      txt.className = "joey-final-text";
      const name = document.createElement("div");
      name.className = "joey-final-name";
      name.textContent = item.name;
      txt.appendChild(name);
      if (item.desc) {
        const desc = document.createElement("div");
        desc.className = "joey-final-desc";
        desc.textContent = item.desc;
        txt.appendChild(desc);
      }
      card.appendChild(txt);
      wrap.appendChild(card);
    }
  }

  function renderInfo() {
    const npc = document.getElementById("joeyNpc");
    const local = document.getElementById("joeyLocal");
    const level = document.getElementById("joeyLevel");
    if (npc)   npc.textContent = JOEY_QUEST.npc;
    if (local) local.textContent = JOEY_QUEST.local;
    if (level) level.textContent = String(JOEY_QUEST.levelRequired);
  }

  // ---------- Init ----------
  function init() {
    if (typeof JOEY_QUEST === "undefined") {
      console.error("JOEY_QUEST não disponível. Verifique joey-quest-data.js");
      return;
    }

    const wikiLink = document.getElementById("joeyWikiLink");
    if (wikiLink && JOEY_QUEST.wikiUrl) wikiLink.href = JOEY_QUEST.wikiUrl;

    renderInfo();
    renderRewardsByDifficulty();
    renderFinalReward();

    const container = document.getElementById("clansContainer");
    container.innerHTML = "";
    for (const clan of JOEY_QUEST.clans) {
      container.appendChild(buildClanSection(clan));
    }

    for (const c of JOEY_QUEST.clans) updateClanProgress(c.id);
    updateGlobalProgress();

    const hideCb = document.getElementById("hideCaptured");
    hideCb.checked = !!state.hideCaptured;
    hideCb.addEventListener("change", () => {
      state.hideCaptured = hideCb.checked;
      saveState();
      applyFilters();
    });

    const searchInput = document.getElementById("searchPokemon");
    searchInput.addEventListener("input", applyFilters);

    document.addEventListener("keydown", (e) => {
      const isFindShortcut = (e.key === "f" || e.key === "F") &&
                             (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
      if (!isFindShortcut) return;
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    });

    document.getElementById("btnReset").addEventListener("click", () => {
      const ok = confirm("Desmarcar TODAS as capturas?");
      if (!ok) return;
      state.captured = {};
      saveState();
      for (const sec of document.querySelectorAll(".joey-clan")) {
        sec.classList.remove("is-complete");
        for (const row of sec.querySelectorAll(".joey-pokemon")) {
          row.classList.remove("is-captured");
          const cb = row.querySelector(".joey-check");
          if (cb) cb.checked = false;
        }
      }
      for (const c of JOEY_QUEST.clans) updateClanProgress(c.id);
      updateGlobalProgress();
      applyFilters();
    });

    applyFilters();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
