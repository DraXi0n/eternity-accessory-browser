const bossBtn = document.getElementById("bossFilterBtn");
const bossModal = document.getElementById("bossModal");
const closeBossModal = document.getElementById("closeBossModal");
const confirmBossFilters = document.getElementById("confirmBossFilters");
const bossCheckboxes = bossModal.querySelectorAll(
  'input[type="checkbox"]'
);
let userSelectedSortAz = false;
let selectedBossFilters = new Set();
let showDLCItems = false;

function createParentHeader(parentName) {
  const headerWrapper = document.createElement("div");
  headerWrapper.className = "parent-header-wrapper";

  const header = document.createElement("h2");
  header.className = "parent-header";

  const titleSpan = document.createElement("span");
  titleSpan.textContent = parentName;

  const icon = document.createElement("img");
  icon.src = iconMap[parentName] || "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
  icon.alt = `${parentName} icon`;
  icon.className = "parent-header-icon";

  header.appendChild(titleSpan);
  header.appendChild(icon);

  const hr = document.createElement("hr");
  hr.className = "parent-hr";

  headerWrapper.appendChild(header);
  headerWrapper.appendChild(hr);

  headerWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    const parentItem = data.find(item => item.name === parentName);
    if (!parentItem) return;

    const wikiName = encodeURIComponent(parentItem.name.replace(/’/g, "'").replace(/ /g, "_"));
    const wikiURL = `https://fargosmods.wiki.gg/wiki/${wikiName}`;
    const iconURL = iconMap[parentItem.name] || "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";

    modalBody.innerHTML = `
      <div class="title" style="display: flex; align-items: center; gap: 8px;">
        <span>${parentItem.name}</span>
        <img src="${iconURL}" alt="${parentItem.name} icon"
          style="width: 1.2em; height: 1.2em; object-fit: contain; border-radius: 4px;">
      </div>
      <div class="stars">${parentItem.rating}</div>
      <div class="type">${parentItem.type}</div>
      <div class="description scroll-description">${formatDescription(parentItem.description)}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        <div style="color: white; font-size: 0.95em;">Availability: ${
          parentItem.availability || "Unknown"
        }</div>
        <a href="${wikiURL}" target="_blank" style="color: #00e676; text-decoration: underline;">Wiki Link</a>
      </div>
    `;
    openModal();
  });

  return headerWrapper;
}


function resetFiltersAndScrollToHeader(headerName) {
  activeStars.clear();
  activeStars.add("Any");
  activeType = null;
  selectedBossFilters.clear();
  showDLCItems = false;

  searchInput.value = "";
  updateClearButton();

  ratingDropdownBtn.innerHTML = `Rating: Any <span class="dropdown-arrow">▼</span>`;
  ratingDropdownBtn.classList.remove("active");
  ratingOptions.forEach((opt) => {
    const r = opt.getAttribute("data-value");
    opt.classList.toggle("active", r === "");
  });

  typeDropdownBtn.innerHTML = `Type: Any <span class="dropdown-arrow">▼</span>`;
  typeDropdownBtn.classList.remove("active");
  typeOptions.forEach((opt) => opt.classList.remove("active"));
  typeOptions[0].classList.add("active");

  bossCheckboxes.forEach(box => box.checked = false);
  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  currentSort = "parent";
  const parentOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === "parent");
  if (parentOption) {
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    parentOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${parentOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }

  renderCards();

  setTimeout(() => {
    const headers = document.querySelectorAll(".parent-header");
    for (const header of headers) {
      if (header.textContent.trim() === headerName) {
        header.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      }
    }
  }, 50);
}

function resetFiltersAndSetAvailability(availability) {
  searchInput.value = "";       // Clear search bar text
updateClearButton();          // Update clear button state accordingly

  activeStars.clear();
  activeStars.add("Any");
  activeType = null;
  selectedBossFilters.clear();
  showDLCItems = false;

  ratingDropdownBtn.innerHTML = `Rating: Any <span class="dropdown-arrow">▼</span>`;
  ratingDropdownBtn.classList.remove("active");
  ratingOptions.forEach((opt) => {
    const r = opt.getAttribute("data-value");
    opt.classList.toggle("active", r === "");
  });

  typeDropdownBtn.innerHTML = `Type: Any <span class="dropdown-arrow">▼</span>`;
  typeDropdownBtn.classList.remove("active");
  typeOptions.forEach((opt) => opt.classList.remove("active"));
  typeOptions[0].classList.add("active");

  bossCheckboxes.forEach(box => box.checked = false);
  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  bossCheckboxes.forEach(box => {
    if (box.value.split("|").includes(availability)) {
      box.checked = true;
      selectedBossFilters.add(availability);
    }
  });
  bossBtn.classList.add("active");
  bossBtn.querySelector(".ellipsis")?.remove();
  bossBtn.insertAdjacentHTML("beforeend", `<span class="ellipsis">…</span>`);

  currentSort = "parent"; // reset sort to parent view
  const parentOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === "parent");
  if (parentOption) {
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    parentOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${parentOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }

  renderCards();
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

closeBossModal.onclick = () => {
  lastConfirmedBossStates.forEach((wasChecked, box) => {
    box.checked = wasChecked;
  });

  closeBossModalFunc(); // Use the animation-aware close function below
};

function formatDescription(desc) {
  return desc
    .replace(/DLC/g, '<span class="dlc-tag" title="Fargo\'s Souls DLC">DLC</span>')
    .replace(/\n/g, '<br>');
}

function itemMatchesFilters(item) {
  const ratingMatch = selectedRatings.length === 0 || selectedRatings.includes(item.rating);
  const availabilityMatch = selectedBossFilters.size === 0 || selectedBossFilters.has(item.availability);
  const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.type);
  const dlcMatch = showDLCItems || !item.dlc; // ✅ new condition
  return ratingMatch && availabilityMatch && typeMatch && dlcMatch;
}

function anyFilterActive() {
  const searchActive = searchInput.value.trim() !== "";
  const ratingActive = !(activeStars.size === 1 && activeStars.has("Any"));
  const typeActive = activeType !== null;
  const availabilityActive = selectedBossFilters.size > 0;
  const dlcActive = showDLCItems; // If you want to include DLC toggle as filter

  return searchActive || ratingActive || typeActive || availabilityActive || dlcActive;
}

bossBtn.onclick = () => {
  bossModal.style.display = "block"; // keep for initial visibility
  requestAnimationFrame(() => {
    bossModal.classList.add("open");
  });
};

bossModal.addEventListener("click", (e) => {
  if (e.target === bossModal) {
    closeBossModalFunc();
  }
});

let lastConfirmedBossStates = new Map();

confirmBossFilters.onclick = () => {
  selectedBossFilters.clear();
  lastConfirmedBossStates.clear(); 

  bossCheckboxes.forEach((box) => {
    if (box.checked) {
      const values = box.value.split("|");
      values.forEach((val) => selectedBossFilters.add(val));
    }
    
    lastConfirmedBossStates.set(box, box.checked);
  });

  closeBossModalFunc();
  renderCards();
  bossBtn.classList.toggle("active", selectedBossFilters.size > 0);
bossBtn.querySelector(".ellipsis")?.remove();
bossBtn.insertAdjacentHTML("beforeend", `<span class="ellipsis">…</span>`);

};

const container = document.getElementById("cards-container");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearSearch");
const buttons = document.querySelectorAll(".filter-button");
let activeStars = new Set(["Any"]);
let activeType = null;

function truncate(text, maxLength) {
  return text.length > maxLength
    ? text.slice(0, maxLength).trimEnd() + "..."
    : text;
}

function truncateHTML(str, maxLength) {
  let result = '';
  let length = 0;
  let inTag = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === '<') inTag = true;
    if (!inTag) length++;
    result += char;
    if (char === '>') inTag = false;

    if (length >= maxLength) {
      result += '...';
      break;
    }
  }

  return result;
}

function createCard(item, noModal = false) {
  const iconURL =
    iconMap[item.name] ||
    "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-full", JSON.stringify(item));
  card.innerHTML = `
    <img src="${iconURL}" alt="${item.name} icon"
      style="position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; object-fit: contain; border-radius: 5px;">
    <div class="title">${item.name}</div>
    <div class="stars">${item.rating}</div>
    <div class="type">${item.type}</div>
    <div class="description">${truncateHTML(formatDescription(item.description), 300)}</div>

  `;

  return card;
}

function renderCards() {
  container.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();
  const renderedItemNames = new Set();

  let filtered = data.filter((item) => {
    const matchesStar = activeStars.has("Any") || activeStars.has(item.rating);
    const matchesType = !activeType || item.type === activeType;
    const matchesBoss =
      selectedBossFilters.size === 0 || selectedBossFilters.has(item.availability);

    if (!showDLCItems && item.dlc === true) {
      return false;
    }

    return matchesStar && matchesType && matchesBoss;
  });

  const filtersExcludingDLC = () => {
    const searchActive = searchInput.value.trim() !== "";
    const ratingActive = !(activeStars.size === 1 && activeStars.has("Any"));
    const typeActive = activeType !== null;
    const availabilityActive = selectedBossFilters.size > 0;
    return searchActive || ratingActive || typeActive || availabilityActive;
  };

  if (currentSort === "parent" && filtersExcludingDLC()) {
    currentSort = "az";
    const azOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === "az");
    if (azOption) {
      sortOptions.forEach(opt => opt.classList.remove("active"));
      azOption.classList.add("active");
      sortDropdownBtn.innerHTML = `Sort by: ${azOption.textContent} <span class="dropdown-arrow">▼</span>`;
    }
  }

  if (currentSort === "parent") {
    container.style.display = "block";

    const allParents = [...new Set(filtered.map(item => item.parent).filter(p => p && p !== "Miscellaneous"))];

    const matchedParents = allParents.filter(parentName =>
      parentName.toLowerCase().includes(keyword)
    );
    const matchedItems = filtered.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );
    const matchedItemsByParent = new Map();
    matchedItems.forEach(item => {
      if (!item.parent) return;
      if (!matchedItemsByParent.has(item.parent)) {
        matchedItemsByParent.set(item.parent, []);
      }
      matchedItemsByParent.get(item.parent).push(item);
    });

    // First render matched parents
    matchedParents.forEach(parentName => {
      const cardsGroup = document.createElement("div");
      cardsGroup.className = "parent-cards-group";
      const allChildren = filtered.filter(item => item.parent === parentName);

      allChildren.forEach(item => {
        if (renderedItemNames.has(item.name)) return;
        cardsGroup.appendChild(createCard(item));
        renderedItemNames.add(item.name);
      });

      const headerWrapper = createParentHeader(parentName);
      container.appendChild(headerWrapper);
      container.appendChild(cardsGroup);
    });

    // Now render remaining matchedItemsByParent groups that weren't already handled
    allParents.forEach(parentName => {
      if (matchedParents.includes(parentName)) return;

      const matchedChildren = (matchedItemsByParent.get(parentName) || []).filter(
        item => !renderedItemNames.has(item.name)
      );

      if (matchedChildren.length === 0) return;

      const cardsGroup = document.createElement("div");
      cardsGroup.className = "parent-cards-group";
      matchedChildren.forEach(item => {
        cardsGroup.appendChild(createCard(item));
        renderedItemNames.add(item.name);
      });

      const headerWrapper = createParentHeader(parentName);
      container.appendChild(headerWrapper);
      container.appendChild(cardsGroup);
    });

    // No parent items
    matchedItems.filter(item => !item.parent).forEach(item => {
      if (renderedItemNames.has(item.name)) return;
      container.appendChild(createCard(item));
      renderedItemNames.add(item.name);
    });

    // Miscellaneous items
    const filtersActive = anyFilterActive();
    const miscItems = data.filter(item => {
      if (item.parent !== "Miscellaneous") return false;
      if (!showDLCItems && item.dlc === true) return false;
      if (renderedItemNames.has(item.name)) return false;

      const keywordMatch = item.name.toLowerCase().includes(keyword) || keyword === "";
      if (!filtersActive) return keywordMatch;

      const ratingMatch = activeStars.has("Any") || activeStars.has(item.rating);
      const typeMatch = !activeType || item.type === activeType;
      const bossMatch = selectedBossFilters.size === 0 || selectedBossFilters.has(item.availability);

      return keywordMatch && ratingMatch && typeMatch && bossMatch;
    });

    if (miscItems.length > 0) {
      const headerWrapper = document.createElement("div");
      headerWrapper.className = "parent-header-wrapper";

      const header = document.createElement("h2");
      header.className = "parent-header";
      header.textContent = "Miscellaneous";

      const hr = document.createElement("hr");
      hr.className = "parent-hr";

      headerWrapper.appendChild(header);
      headerWrapper.appendChild(hr);
      container.appendChild(headerWrapper);

      const cardsGroup = document.createElement("div");
      cardsGroup.className = "parent-cards-group";

      miscItems.forEach(item => {
        cardsGroup.appendChild(createCard(item, true));
        renderedItemNames.add(item.name);
      });

      container.appendChild(cardsGroup);
    }
  } else {
    container.style.display = "grid";

    let searched = filtered.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );

    if (currentSort === "az") {
      searched.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "dlcFirst") {
      searched.sort((a, b) => {
        if (a.dlc && !b.dlc) return -1;
        if (!a.dlc && b.dlc) return 1;
        return a.name.localeCompare(b.name);
      });
    }

    searched.forEach(item => {
      if (renderedItemNames.has(item.name)) return;
      container.appendChild(createCard(item));
      renderedItemNames.add(item.name);
    });
  }

  bindCardClicks();
  updateClearButton();
}


searchInput.addEventListener("input", renderCards);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderCards();
});

function updateClearButton() {
  clearBtn.classList.toggle("active", searchInput.value.trim() !== "");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");

    if (type) {
      document
        .querySelectorAll("[data-type]")
        .forEach((b) => b.classList.remove("active"));
      if (activeType === type) {
        activeType = null;
      } else {
        activeType = type;
        btn.classList.add("active");
      }
    }

    renderCards();
  });
});

const modal = document.getElementById("cardModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-button");

function openModal() {
  modal.classList.remove('hide');
  modal.style.display = 'block';

  requestAnimationFrame(() => {
    modal.classList.add('show');
  });

  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');

  const content = modal.querySelector('.modal-content');

  content.addEventListener('animationend', function handleAnimationEnd() {
    modal.style.display = 'none';
    content.removeEventListener('animationend', handleAnimationEnd);

    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = '';
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

closeBtn.addEventListener('click', closeModal);

function bindCardClicks() {
  document.querySelectorAll(".card").forEach((card) => {
    card.onclick = () => {
      const item = JSON.parse(card.getAttribute("data-full"));
      const wikiName = encodeURIComponent(
        item.name.replace(/’/g, "'").replace(/ /g, "_")
      );
      
      const wikiURL = `https://fargosmods.wiki.gg/wiki/${wikiName}`;
      const iconURL =
        iconMap[item.name] ||
        "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
      modalBody.innerHTML = `
  <div class="modal-header">
    <div class="title" style="display: flex; align-items: center; gap: 8px;">
      <span>${item.name}</span>
      <img src="${iconURL}" alt="${item.name} icon"
        style="width: 1.2em; height: 1.2em; object-fit: contain; border-radius: 4px;">
    </div>
    <div class="stars">${item.rating}</div>
    <div class="type">${item.type}</div>
  </div>
  <div class="scroll-description">${formatDescription(item.description)}</div>
  <div class="modal-footer" style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 20px; gap: 12px; font-size: 0.95em; color: white; flex-wrap: wrap;">
    <a href="https://docs.google.com/document/d/1obh1n7TIxufvph4KQy1rv7rO4bL1au0XJNESTQptLZ4/edit?tab=t.0#heading=h.qz8l2nyjukur" target="_blank" style="color: #00e676; text-decoration: underline; cursor: pointer;">Source</a>
    <span class="modal-tag availability-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Filter by availability">${item.availability || "Unknown"}</span>
    <span class="modal-tag parent-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to parent section">Parent</span>

    ${
      data.some(child => child.parent === item.name)
        ? `<span class="modal-tag children-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to children section">Children</span>`
        : ''
    }

    ${
      item.dlc
        ? `<span class="modal-tag dlc-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Show DLC items only">DLC</span>`
        : ''
    }

    <a href="${wikiURL}" target="_blank" style="color: #00e676; text-decoration: underline; cursor: pointer;">Wiki Link</a>
  </div>
`;
      const availabilityTag = modalBody.querySelector(".availability-tag");
      availabilityTag?.addEventListener("click", () => {
        resetFiltersAndSetAvailability(item.availability);
        closeModal();
      });

      const parentTag = modalBody.querySelector(".parent-tag");
      parentTag?.addEventListener("click", () => {
        const headerName = item.parent || "Miscellaneous";
        resetFiltersAndScrollToHeader(headerName);
        closeModal();
      });

      const childrenTag = modalBody.querySelector(".children-tag");
      childrenTag?.addEventListener("click", () => {
        resetFiltersAndScrollToHeader(item.name);
        closeModal();
      });

      const dlcTag = modalBody.querySelector(".dlc-tag");
      dlcTag?.addEventListener("click", () => {
        // Reset all filters and set sorting to DLC first
        activeStars.clear();
        activeStars.add("Any");
        ratingDropdownBtn.innerHTML = `Rating: Any <span class="dropdown-arrow">▼</span>`;
        ratingDropdownBtn.classList.remove("active");
        ratingOptions.forEach((opt) => {
          const r = opt.getAttribute("data-value");
          opt.classList.toggle("active", r === "");
        });

        activeType = null;
        typeDropdownBtn.innerHTML = `Type: Any <span class="dropdown-arrow">▼</span>`;
        typeDropdownBtn.classList.remove("active");
        typeOptions.forEach((opt) => opt.classList.remove("active"));
        typeOptions[0].classList.add("active");

        searchInput.value = "";
        updateClearButton();

        selectedBossFilters.clear();
        bossCheckboxes.forEach((box) => (box.checked = false));
        bossBtn.classList.remove("active");
        bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

        showDLCItems = true;
        dlcToggle.classList.add("active");
        dlcToggle.classList.remove("inactive");

        currentSort = "dlcFirst";
        sortOptions.forEach((opt) => opt.classList.remove("active"));
        const dlcFirstOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === "dlcFirst");
        if (dlcFirstOption) {
          dlcFirstOption.classList.add("active");
          sortDropdownBtn.innerHTML = `Sort by: ${dlcFirstOption.textContent} <span class="dropdown-arrow">▼</span>`;
        }

        renderCards();
        closeModal();
      });

      openModal();
    };
  });
}


const dlcTag = modalBody.querySelector(".dlc-tag");
dlcTag?.addEventListener("click", () => {
  // Reset all filters and set sorting to DLC first
  activeStars.clear();
  activeStars.add("Any");
  ratingDropdownBtn.innerHTML = `Rating: Any <span class="dropdown-arrow">▼</span>`;
  ratingDropdownBtn.classList.remove("active");
  ratingOptions.forEach((opt) => {
    const r = opt.getAttribute("data-value");
    opt.classList.toggle("active", r === "");
  });

  activeType = null;
  typeDropdownBtn.innerHTML = `Type: Any <span class="dropdown-arrow">▼</span>`;
  typeDropdownBtn.classList.remove("active");
  typeOptions.forEach((opt) => opt.classList.remove("active"));
  typeOptions[0].classList.add("active");

  searchInput.value = "";
  updateClearButton();

  selectedBossFilters.clear();
  bossCheckboxes.forEach((box) => (box.checked = false));
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

  showDLCItems = true;
  dlcToggle.classList.add("active");
  dlcToggle.classList.remove("inactive");

  currentSort = "dlcFirst";
  sortOptions.forEach((opt) => opt.classList.remove("active"));
  const dlcFirstOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === "dlcFirst");
  if (dlcFirstOption) {
    dlcFirstOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${dlcFirstOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }

  renderCards();
  closeModal();
});


const dlcToggle = document.getElementById("dlcToggle");

dlcToggle.addEventListener("click", () => {
  showDLCItems = !showDLCItems;
  dlcToggle.classList.toggle("active", showDLCItems);
  dlcToggle.classList.toggle("inactive", !showDLCItems);
  renderCards();
});

const resetFiltersBtn = document.getElementById("resetFiltersBtn");

resetFiltersBtn.addEventListener("click", () => {
  activeStars.clear();
  activeStars.add("Any");
  ratingDropdownBtn.innerHTML = `Rating: Any <span class="dropdown-arrow">▼</span>`;
  ratingDropdownBtn.classList.remove("active");
  ratingDropdownBtn.title = "";
  userSelectedSortAz = false;

  ratingOptions.forEach((opt) => {
    const r = opt.getAttribute("data-value");
    if (r === "") {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });

  activeType = null;
  typeDropdownBtn.innerHTML = `Type: Any <span class="dropdown-arrow">▼</span>`;
  typeDropdownBtn.classList.remove("active");
  typeOptions.forEach((opt) => opt.classList.remove("active"));
  typeOptions[0].classList.add("active"); // Re-activate "Any"

  searchInput.value = "";

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;
  bossCheckboxes.forEach((box) => (box.checked = false));

  currentSort = "parent"; // Reset sorting to parent

  const parentOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "parent"
  );
  if (parentOption) {
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    parentOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${parentOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }

  renderCards();
});

const ratingDropdownBtn = document.getElementById("ratingDropdownBtn");
const ratingDropdown = document.getElementById("ratingDropdown");

ratingDropdownBtn.addEventListener("click", () => {
  ratingDropdown.classList.toggle("open");
});

const ratingOptions = ratingDropdown.querySelectorAll("div");

ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value");

if (value === "") {
  activeStars.clear();
  activeStars.add("Any");
} else {
  if (activeStars.has("Any")) {
    activeStars.delete("Any");
  }

  if (activeStars.has(value)) {
    activeStars.delete(value);
  } else {
    activeStars.add(value);
  }

  if (activeStars.size === 0) {
    activeStars.add("Any");
  }
}

const selected = Array.from(activeStars).filter((s) => s !== "Any");
let label = "Any";

if (selected.length > 0) {
  if (selected.length === 1) {
    label = selected[0];
  } else {
    const first = selected[0];
    const extraCount = selected.length - 1;
    label = `${first} +${extraCount}`;
  }

  ratingDropdownBtn.title = selected.join(", ");
} else {
  label = "Any";
  ratingDropdownBtn.title = "";
}

ratingDropdownBtn.innerHTML = `Rating: ${label} <span class="dropdown-arrow">▼</span>`;

    ratingDropdownBtn.classList.toggle("active", selected.length > 0);

    ratingOptions.forEach((opt) => {
      const r = opt.getAttribute("data-value");
      if (r === "") {
        opt.classList.toggle("active", activeStars.has("Any"));
      } else {
        opt.classList.toggle("active", activeStars.has(r));
      }
    });

    renderCards();
  });
});

window.addEventListener("click", (e) => {
  const clickedInsideRating = ratingDropdown.contains(e.target) || ratingDropdownBtn.contains(e.target);
  const clickedInsideType = typeDropdown.contains(e.target) || typeDropdownBtn.contains(e.target);
  const clickedInsideSort = sortDropdown.contains(e.target) || sortDropdownBtn.contains(e.target);

  if (!clickedInsideRating) {
    ratingDropdown.classList.remove("open");
  }
  if (!clickedInsideType) {
    typeDropdown.classList.remove("open");
  }
  if (!clickedInsideSort) {
    sortDropdown.classList.remove("open");
  }
});

function openBossModal() {
  bossModal.style.display = "block";  
  void bossModal.offsetWidth;        
  bossModal.classList.add("open");   

  document.body.classList.add("modal-open");
}

function closeBossModalFunc() {
  bossModal.classList.remove("open"); // triggers close animation

  setTimeout(() => {
    bossModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }, 100); // match your animation timing
}

bossModal.addEventListener("transitionend", (e) => {
  if (e.target === bossModal && !bossModal.classList.contains("open")) {
    bossModal.style.display = "none"; // Hide modal after animation ends
  }
});

bossBtn.addEventListener("click", openBossModal);
closeBossModal.addEventListener("click", closeBossModalFunc);

bossModal.addEventListener("click", (e) => {
  if (e.target === bossModal) {
    closeBossModalFunc();
  }
});

const typeDropdownBtn = document.getElementById("typeDropdownBtn");
const typeDropdown = document.getElementById("typeDropdown");
const typeOptions = typeDropdown.querySelectorAll("div");

typeDropdownBtn.addEventListener("click", () => {
  ratingDropdown.classList.remove("open");
  typeDropdown.classList.toggle("open");
});

typeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value");

    if (value === "") {
      activeType = null;
      typeDropdownBtn.textContent = "Type: Any";
      typeDropdownBtn.classList.remove("active");
    } else {
      activeType = value;
      typeDropdownBtn.innerHTML = `Type: ${option.textContent} <span class="dropdown-arrow">▼</span>`;

      typeDropdownBtn.classList.add("active");
    }

    typeOptions.forEach((opt) => {
      const v = opt.getAttribute("data-value");
      opt.classList.toggle("active", v === value);
    });

    renderCards();
  });
});

const sortDropdownBtn = document.getElementById("sortDropdownBtn");
const sortDropdown = document.getElementById("sortDropdown");
const sortOptions = sortDropdown.querySelectorAll("div");

let currentSort = "parent"; // default sort

sortDropdownBtn.addEventListener("click", () => {
  ratingDropdown.classList.remove("open");
  typeDropdown.classList.remove("open");
  sortDropdown.classList.toggle("open");
});
sortOptions.forEach(option => {
  option.addEventListener("click", () => {
    if (option.classList.contains("active")) return;
    sortOptions.forEach(opt => opt.classList.remove("active"));
    option.classList.add("active");
    currentSort = option.getAttribute("data-value");
    sortDropdownBtn.innerHTML = `Sort by: ${option.textContent} <span class="dropdown-arrow">▼</span>`;

    if (currentSort === "dlcFirst") {
      showDLCItems = true;
    } else {
      showDLCItems = false;
    }

    const dlcToggle = document.getElementById("dlcToggle");
    if (dlcToggle) {
  if (showDLCItems) {
    dlcToggle.classList.add("active");    // add active to show green checkmark
    dlcToggle.classList.remove("inactive"); // remove inactive to brighten button
  } else {
    dlcToggle.classList.remove("active"); // remove active to hide checkmark
    dlcToggle.classList.add("inactive");  // add inactive to dim button
  }
}


    renderCards();
  });
});




const defaultOption = Array.from(sortOptions).find(opt => opt.getAttribute("data-value") === currentSort);
if (defaultOption) {
  sortDropdownBtn.innerHTML = `Sort by: ${defaultOption.textContent} <span class="dropdown-arrow">▼</span>`;
  sortOptions.forEach((opt) =>
    opt.classList.toggle("active", opt === defaultOption)
  );
}

renderCards();

document.querySelectorAll("img.boss-icon").forEach((img) => {
  const key = img.getAttribute("data-boss");
  img.src =
    iconMap[key] ||
    "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
});