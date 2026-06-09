(function () {
  const starterThings = window.STARTER_THINGS || [];
  const categories = window.STUFF_CATEGORIES || [];
  const materialIdeas = window.MATERIAL_IDEAS || [];
  const storageKeys = {
    custom: "se-custom-things",
    owned: "se-owned-things",
    today: "se-today-things"
  };

  const savedCustom = safeParse(storageKeys.custom, []);
  const allStarterIds = starterThings.map((item) => item.id);
  const defaultOwnedIds = starterThings.filter((item) => !item.optional).map((item) => item.id);
  const savedOwned = safeParse(storageKeys.owned, defaultOwnedIds);
  const savedToday = safeParse(storageKeys.today, []);
  const state = {
    customThings: Array.isArray(savedCustom) ? savedCustom : [],
    owned: new Set(Array.isArray(savedOwned) ? savedOwned : defaultOwnedIds),
    today: new Set(Array.isArray(savedToday) ? savedToday : []),
    need: "surprise",
    search: "",
    child: "all",
    place: "all",
    energy: "all",
    category: "all",
    setup: "all",
    results: []
  };

  const elements = {
    things: document.querySelector("#things"),
    todaySelected: document.querySelector("#today-selected"),
    todayHelper: document.querySelector("#today-helper"),
    availableThings: document.querySelector("#available-things"),
    clearToday: document.querySelector("#clear-today-button"),
    builderNeeds: document.querySelector("#builder-needs"),
    buildButton: document.querySelector("#build-stuff-ideas-button"),
    search: document.querySelector("#stuff-search"),
    child: document.querySelector("#stuff-child-filter"),
    place: document.querySelector("#stuff-place-filter"),
    energy: document.querySelector("#stuff-energy-filter"),
    category: document.querySelector("#stuff-category-filter"),
    setup: document.querySelector("#stuff-setup-filter"),
    resultCount: document.querySelector("#stuff-result-count"),
    resultContext: document.querySelector("#stuff-result-context"),
    ideasList: document.querySelector("#stuff-ideas-list"),
    empty: document.querySelector("#stuff-empty-state"),
    inventoryGroups: document.querySelector("#inventory-groups"),
    ownedCount: document.querySelector("#owned-count"),
    addForm: document.querySelector("#add-thing-form"),
    newCategory: document.querySelector("#new-thing-category")
  };

  function safeParse(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slug(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 45);
  }

  function notify(message) {
    if (typeof showToast === "function") showToast(message);
  }

  function allThings() {
    return [...starterThings, ...state.customThings];
  }

  function thingById(id) {
    return allThings().find((item) => item.id === id);
  }

  function canonicalMaterialId(item) {
    if (!item) return "";
    if (allStarterIds.includes(item.id)) return item.id;
    const itemName = slug(item.name);
    const direct = starterThings.find((starter) => {
      const starterName = slug(starter.name);
      return itemName === starterName || itemName.includes(starterName) || starterName.includes(itemName);
    });
    return direct ? direct.id : item.id;
  }

  function ownedCanonicalIds() {
    return new Set(
      [...state.owned]
        .map((id) => canonicalMaterialId(thingById(id)))
        .filter(Boolean)
    );
  }

  function todayCanonicalIds() {
    return new Set(
      [...state.today]
        .map((id) => canonicalMaterialId(thingById(id)))
        .filter(Boolean)
    );
  }

  function saveInventory() {
    localStorage.setItem(storageKeys.custom, JSON.stringify(state.customThings));
    localStorage.setItem(storageKeys.owned, JSON.stringify([...state.owned]));
    localStorage.setItem(storageKeys.today, JSON.stringify([...state.today]));
  }

  function humanAudience(audience) {
    const values = Array.isArray(audience) ? audience : [audience];
    if (values.includes("together")) return "Together";
    if (values.includes("sylvie") && values.includes("elias")) return "Either child";
    if (values.includes("sylvie")) return "Sylvie";
    if (values.includes("elias")) return "Elias";
    return "Anyone";
  }

  function materialName(id) {
    return thingById(id)?.name || starterThings.find((item) => item.id === id)?.name || id.replaceAll("-", " ");
  }

  function renderToday() {
    const selected = [...state.today].map(thingById).filter(Boolean);
    elements.todaySelected.innerHTML = selected.length
      ? selected.map((item) => `
          <button class="today-chip selected" type="button" data-today-toggle="${esc(item.id)}" aria-pressed="true">
            ${esc(item.name)} <span aria-hidden="true">&times;</span>
          </button>
        `).join("")
      : `<span class="today-placeholder">Nothing selected yet</span>`;

    elements.todayHelper.textContent = selected.length === 0
      ? "Try selecting 2-3 items to get better ideas."
      : selected.length === 1
        ? "Choose one or two more things for stronger matches."
        : selected.length === 5
          ? "Five things selected. Ready to build."
          : `${selected.length} things selected. Tap Find ideas when ready.`;

    const owned = allThings().filter((item) => state.owned.has(item.id));
    elements.availableThings.innerHTML = owned.length
      ? owned.map((item) => `
          <button class="available-thing ${state.today.has(item.id) ? "selected" : ""}" type="button" data-today-toggle="${esc(item.id)}" aria-pressed="${state.today.has(item.id)}">
            ${esc(item.name)}
          </button>
        `).join("")
      : `<p class="helper-text">Add a few things you have, like paper, boxes, blankets, or outside toys.</p>`;
  }

  function renderInventory() {
    const things = allThings();
    elements.ownedCount.textContent = `${state.owned.size} available`;
    elements.inventoryGroups.innerHTML = categories.map((category) => {
      const categoryThings = things.filter((item) => item.category === category);
      if (!categoryThings.length) return "";
      return `
        <section class="inventory-group">
          <h4>${esc(category)}</h4>
          <div class="inventory-items">
            ${categoryThings.map((item) => {
              const isOwned = state.owned.has(item.id);
              const isCustom = item.custom === true;
              return `
                <article class="inventory-item ${isOwned ? "owned" : ""}">
                  <button class="inventory-toggle" type="button" data-owned-toggle="${esc(item.id)}" aria-pressed="${isOwned}">
                    <span class="inventory-check" aria-hidden="true">${isOwned ? "✓" : "+"}</span>
                    <span><strong>${esc(item.name)}</strong><small>${esc(item.place)} · ${esc(item.energy)}${item.optional ? " · optional" : ""}${item.notes ? ` · ${esc(item.notes)}` : ""}${item.safety ? ` · Safety: ${esc(item.safety)}` : ""}</small></span>
                  </button>
                  ${isCustom ? `<button class="delete-thing" type="button" data-delete-thing="${esc(item.id)}" aria-label="Delete ${esc(item.name)}">&times;</button>` : ""}
                </article>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }).join("");
  }

  function materialMatches(idea, selectedIds) {
    return idea.materials.filter((material) => selectedIds.has(material));
  }

  function filteredAndRankedIdeas() {
    const selected = todayCanonicalIds();
    const owned = ownedCanonicalIds();
    const selectedThings = [...state.today].map(thingById).filter(Boolean);
    const relatedIdeaCategories = {
      "Art + drawing": ["Art + drawing", "Making + building"],
      "Making + building": ["Making + building", "Art + drawing"],
      "Pretend play": ["Pretend play"],
      "Big body / outdoor": ["Big body / outdoor"],
      "Cosy / calming": ["Cosy / calming"],
      "Screens / tech": ["Screens / tech", "Pretend play"],
      "Furniture + spaces": ["Pretend play", "Cosy / calming", "Making + building"],
      "Special playtime": ["Special playtime", "Pretend play", "Making + building"]
    };

    return materialIdeas
      .filter((idea) => {
        const haystack = [idea.title, idea.category, ...idea.materials.map(materialName), ...idea.skills, ...idea.steps].join(" ").toLowerCase();
        const searchMatch = !state.search || haystack.includes(state.search.toLowerCase());
        const childMatch = state.child === "all" || idea.audience.includes(state.child);
        const placeMatch = state.place === "all" || idea.place === state.place || idea.place === "both";
        const energyMatch = state.energy === "all" || idea.energy === state.energy;
        const categoryMatch = state.category === "all" || idea.category === state.category;
        const setupMatch = state.setup === "all" || idea.setupMinutes <= Number(state.setup);
        return searchMatch && childMatch && placeMatch && energyMatch && categoryMatch && setupMatch;
      })
      .map((idea) => {
        const matches = materialMatches(idea, selected);
        const selectedRatio = matches.length / idea.materials.length;
        const exactSelected = idea.materials.every((material) => selected.has(material));
        const noShopping = idea.materials.every((material) => owned.has(material));
        const categoryMatches = selectedThings.filter((item) => relatedIdeaCategories[item.category]?.includes(idea.category)).length;
        const categoryAffinity = categoryMatches * 2;
        const needScore = state.need === "surprise" ? 0.5 : idea.needs.includes(state.need) ? 8 : 0;
        const score = (matches.length * 5) + (selectedRatio * 3) + needScore + (exactSelected ? 5 : 0) + (noShopping ? 1 : 0) + categoryAffinity;
        return { ...idea, matches, exactSelected, noShopping, score, categoryMatches };
      })
      .filter((idea) => selected.size === 0 || idea.matches.length > 0 || idea.categoryMatches > 0 || idea.score >= 3)
      .sort((a, b) => b.score - a.score || a.setupMinutes - b.setupMinutes)
      .slice(0, 6);
  }

  function stuffIdeaCard(idea) {
    const uses = idea.materials.map((id) => `<span class="uses-pill ${idea.matches.includes(id) ? "matched" : ""}">${esc(materialName(id))}</span>`).join("");
    return `
      <article class="stuff-idea-card">
        <div class="stuff-card-top">
          <span class="category-label">${esc(idea.category)}</span>
          ${idea.noShopping ? `<span class="no-shopping-badge">No shopping needed</span>` : `<span class="close-match-badge">Close match</span>`}
        </div>
        <h3>${esc(idea.title)}</h3>
        <div class="stuff-meta">
          <span>${esc(humanAudience(idea.audience))}</span>
          <span>${esc(idea.place)}</span>
          <span>${idea.setupMinutes} min setup</span>
          <span>${idea.cleanupMinutes} min reset</span>
        </div>
        <div class="uses-row"><strong>Uses</strong>${uses}</div>
        <ol>${idea.steps.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
        <p class="stuff-script">${esc(idea.script)}</p>
        <div class="stuff-safety"><strong>Supervision:</strong> ${esc(idea.safety)}</div>
        <div class="stuff-reset"><strong>Reset:</strong> ${esc(idea.reset)}</div>
        <div class="skills-row">${idea.skills.map((skill) => `<span>${esc(skill)}</span>`).join("")}</div>
      </article>
    `;
  }

  function renderResults() {
    state.results = filteredAndRankedIdeas();
    const selectedCount = state.today.size;
    if (!selectedCount) {
      elements.ideasList.innerHTML = "";
      elements.resultCount.textContent = "Choose some things";
      elements.resultContext.textContent = "Select 1-5 available items to build practical matches.";
      elements.empty.hidden = false;
      return;
    }

    const exactCount = state.results.filter((idea) => idea.exactSelected).length;
    elements.resultCount.textContent = `${state.results.length} practical ${state.results.length === 1 ? "idea" : "ideas"}`;
    elements.resultContext.textContent = exactCount
      ? `${exactCount} exact ${exactCount === 1 ? "match uses" : "matches use"} only today's selected things.`
      : "No exact match — here are close ideas using similar things.";
    elements.ideasList.innerHTML = state.results.map(stuffIdeaCard).join("");
    elements.empty.hidden = state.results.length > 0;
    if (!state.results.length) {
      elements.empty.querySelector("h3").textContent = "No exact match";
      elements.empty.querySelector("p").textContent = "Try selecting 2-3 items or clearing a filter for close ideas.";
    }
  }

  function renderAll() {
    state.today = new Set([...state.today].filter((id) => state.owned.has(id) && thingById(id)));
    renderToday();
    renderInventory();
    renderResults();
    saveInventory();
  }

  function toggleToday(id) {
    if (!state.owned.has(id)) return;
    if (state.today.has(id)) {
      state.today.delete(id);
    } else if (state.today.size >= 5) {
      notify("Choose up to five things for today");
      return;
    } else {
      state.today.add(id);
    }
    renderAll();
  }

  function toggleOwned(id) {
    if (state.owned.has(id)) {
      state.owned.delete(id);
      state.today.delete(id);
    } else {
      state.owned.add(id);
    }
    renderAll();
  }

  function deleteThing(id) {
    state.customThings = state.customThings.filter((item) => item.id !== id);
    state.owned.delete(id);
    state.today.delete(id);
    renderAll();
    notify("Custom item removed");
  }

  elements.newCategory.innerHTML = categories.map((category) => `<option value="${esc(category)}">${esc(category)}</option>`).join("");

  elements.things.addEventListener("click", (event) => {
    const today = event.target.closest("[data-today-toggle]");
    if (today) {
      toggleToday(today.dataset.todayToggle);
      return;
    }
    const owned = event.target.closest("[data-owned-toggle]");
    if (owned) {
      toggleOwned(owned.dataset.ownedToggle);
      return;
    }
    const remove = event.target.closest("[data-delete-thing]");
    if (remove) deleteThing(remove.dataset.deleteThing);
  });

  elements.clearToday.addEventListener("click", () => {
    state.today.clear();
    renderAll();
  });

  elements.builderNeeds.addEventListener("click", (event) => {
    const button = event.target.closest("[data-builder-need]");
    if (!button) return;
    state.need = button.dataset.builderNeed;
    elements.builderNeeds.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    renderResults();
  });

  elements.buildButton.addEventListener("click", () => {
    renderResults();
    if (!state.today.size) {
      elements.availableThings.scrollIntoView({ behavior: "smooth", block: "center" });
      notify("Choose a few things first");
    } else {
      elements.ideasList.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  [
    [elements.search, "search", "input"],
    [elements.child, "child", "change"],
    [elements.place, "place", "change"],
    [elements.energy, "energy", "change"],
    [elements.category, "category", "change"],
    [elements.setup, "setup", "change"]
  ].forEach(([element, key, eventName]) => {
    element.addEventListener(eventName, () => {
      state[key] = element.value;
      renderResults();
    });
  });

  elements.addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(elements.addForm);
    const name = String(data.get("name") || "").trim();
    if (!name) return;
    const id = `custom-${slug(name)}-${Date.now().toString(36)}`;
    const item = {
      id,
      name,
      category: String(data.get("category")),
      place: String(data.get("place")),
      audience: String(data.get("audience")),
      energy: String(data.get("energy")),
      notes: String(data.get("notes") || "").trim(),
      safety: String(data.get("safety") || "").trim(),
      custom: true
    };
    state.customThings.push(item);
    state.owned.add(id);
    elements.addForm.reset();
    renderAll();
    notify(`${name} added on this device`);
  });

  renderAll();
})();
