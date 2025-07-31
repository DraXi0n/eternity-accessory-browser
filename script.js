const bossBtn = document.getElementById("bossFilterBtn");
const bossModal = document.getElementById("bossModal");
const closeBossModal = document.getElementById("closeBossModal");
const confirmBossFilters = document.getElementById("confirmBossFilters");
const selectedBossText = document.getElementById("selectedBossText");
const bossCheckboxes = bossModal.querySelectorAll('input[type="checkbox"]');
bossCheckboxes.forEach((box) => {
  box.addEventListener("change", updateSelectedBossText);
});

bossCheckboxes.forEach((box) => {
  box.addEventListener("change", () => {
    const val = box.value;

  if (val === allMechBossValue) {
  bossCheckboxes.forEach((b) => {
    if (mechBossValues.includes(b.value)) {
      b.checked = box.checked; 
    }
  });
}

    
    if (mechBossValues.includes(val)) {
      const allMechBox = Array.from(bossCheckboxes).find(
        (b) => b.value === allMechBossValue
      );

      const allThreeChecked = mechBossValues.every((val) =>
        Array.from(bossCheckboxes).some((b) => b.value === val && b.checked)
      );

      if (allMechBox) {
        allMechBox.checked = allThreeChecked;
      }
    }

    updateSelectedBossText();
  });
});


let userSelectedSortAz = false;
let selectedBossFilters = new Set();
const mechBossValues = [
  "Post-Twins",
  "Post-Destroyer",
  "Post-Skeletron Prime"
];

const firstMechBossValue = "Post-First Mech Boss";
const allMechBossValue = "Post-Mech Bosses";

let showDLCItems = false;
const DLC_SPAN = `<span class="dlc-tag" title="Fargo's Souls DLC">DLC</span>`;

function updateSelectedBossText() {
  const checkedBoxes = Array.from(bossCheckboxes).filter((box) => box.checked);
  const hasAllMech = checkedBoxes.some((box) => box.value === allMechBossValue);

  const selectedNames = checkedBoxes
    .map((box) => {
      const val = box.value;
      
      if (hasAllMech && mechBossValues.includes(val)) return null;

      const label = box.closest("label");
      if (!label) return null;
      const clone = label.cloneNode(true);
      clone.querySelectorAll("input, img").forEach((el) => el.remove());
      return clone.textContent.trim();
    })
    .filter((name) => name);

  selectedBossText.textContent = "Post: " + (selectedNames.join(", ") || "");
}




function activateDLCSorting() {
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
  const dlcFirstOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "dlcFirst"
  );
  if (dlcFirstOption) {
    dlcFirstOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${dlcFirstOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }

  renderCards();
}

function showItemModal(item) {
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
     ${item.parent && item.parent !== "Miscellaneous"
  ? `<span class="modal-tag parent-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to parent section">Parent</span>`
  : ""}

     
      ${
        data.some((child) => child.parent === item.name)
          ? `<span class="modal-tag children-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to children section">Children</span>`
          : ""
      }
      ${
        item.dlc
          ? `<span class="modal-tag dlc-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Show DLC items">DLC</span>`
          : ""
      }
      <a href="${wikiURL}" target="_blank" style="color: #00e676; text-decoration: underline; cursor: pointer;">Wiki Link</a>
    </div>
  `;

  const availabilityTag = modalBody.querySelector(".availability-tag");
  availabilityTag?.addEventListener("click", () => {
    resetFiltersAndSetAvailability(item.availability);
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const parentTag = modalBody.querySelector(".parent-tag");
  parentTag?.addEventListener("click", () => {
    const headerName = item.parent || "Miscellaneous";
    resetFiltersAndScrollToHeader(headerName);
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const childrenTag = modalBody.querySelector(".children-tag");
  childrenTag?.addEventListener("click", () => {
    resetFiltersAndScrollToHeader(item.name);
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const dlcTag = modalBody.querySelector(".dlc-tag");
  dlcTag?.addEventListener("click", () => {
    activateDLCSorting();
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  openModal();
}

function createParentHeader(parentName) {
  const headerWrapper = document.createElement("div");
  headerWrapper.className = "parent-header-wrapper";

  const header = document.createElement("h2");
  header.className = "parent-header";

  const titleSpan = document.createElement("span");
  titleSpan.textContent = parentName;

  const icon = document.createElement("img");
  icon.src =
    iconMap[parentName] ||
    "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
  icon.alt = `${parentName} icon`;
  icon.className = "parent-header-icon";

  header.appendChild(titleSpan);
  header.appendChild(icon);

  const parentItem = data.find((i) => i.name === parentName);
  if (parentItem?.dlc) {
    const dlcTag = document.createElement("span");
    dlcTag.className = "dlc-tag";
    dlcTag.title = "Fargo's Souls DLC";
    dlcTag.textContent = "DLC";
    header.appendChild(dlcTag);
  }

  const hr = document.createElement("hr");
  hr.className = "parent-hr";

  headerWrapper.appendChild(header);
  headerWrapper.appendChild(hr);

  headerWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    const parentItem = data.find((item) => item.name === parentName);
    if (!parentItem) return;
    showItemModal(parentItem);
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

  bossCheckboxes.forEach((box) => (box.checked = false));
  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  currentSort = "parent";
  const parentOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "parent"
  );
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
  searchInput.value = "";
  updateClearButton();

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

  bossCheckboxes.forEach((box) => (box.checked = false));
  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  bossCheckboxes.forEach((box) => {
    if (box.value.split("|").includes(availability)) {
      box.checked = true;
      selectedBossFilters.add(availability);
    }
  });

  updateSelectedBossText();

  bossBtn.classList.add("active");
  bossBtn.querySelector(".ellipsis")?.remove();
  bossBtn.insertAdjacentHTML("beforeend", `<span class="ellipsis">…</span>`);

  currentSort = "parent";
  const parentOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "parent"
  );
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

  closeBossModalFunc();
};

function formatDescription(desc) {
  return desc
    .replace(
      /DLC/g,
      '<span class="dlc-tag" title="Fargo\'s Souls DLC">DLC</span>'
    )
    .replace(/\n/g, "<br>");
}

function itemMatchesFilters(item) {
  const ratingMatch =
    selectedRatings.length === 0 || selectedRatings.includes(item.rating);
  const availabilityMatch =
    selectedBossFilters.size === 0 ||
    selectedBossFilters.has(item.availability);
  const typeMatch =
    selectedTypes.length === 0 || selectedTypes.includes(item.type);
  const dlcMatch = showDLCItems || !item.dlc;
  return ratingMatch && availabilityMatch && typeMatch && dlcMatch;
}

function anyFilterActive() {
  const searchActive = searchInput.value.trim() !== "";
  const ratingActive = !(activeStars.size === 1 && activeStars.has("Any"));
  const typeActive = activeType !== null;
  const availabilityActive = selectedBossFilters.size > 0;
  const dlcActive = showDLCItems;

  return (
    searchActive ||
    ratingActive ||
    typeActive ||
    availabilityActive ||
    dlcActive
  );
}

bossBtn.onclick = () => {
  bossModal.style.display = "block";
  requestAnimationFrame(() => {
    bossModal.classList.add("open");
  });
};

let lastConfirmedBossStates = new Map();

confirmBossFilters.onclick = () => {
  selectedBossFilters.clear();
  lastConfirmedBossStates.clear();

  let mechBossCount = 0;

bossCheckboxes.forEach((box) => {
  if (box.checked) {
    const values = box.value.split("|");
    values.forEach((val) => {
      selectedBossFilters.add(val);
      if (mechBossValues.includes(val)) mechBossCount++;
    });
  }
  lastConfirmedBossStates.set(box, box.checked);
});

if (mechBossCount > 0) {
  selectedBossFilters.add(firstMechBossValue);
}

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
  let result = "";
  let length = 0;
  let inTag = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "<") inTag = true;
    if (!inTag) length++;
    result += char;
    if (char === ">") inTag = false;

    if (length >= maxLength) {
      result += "...";
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
    <div class="title">${item.name}${item.dlc ? " " + DLC_SPAN : ""}</div>
    <div class="stars">${item.rating}</div>
    <div class="type">${item.type}</div>
    <div class="description">${truncateHTML(
      formatDescription(item.description),
      300
    )}</div>

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
      selectedBossFilters.size === 0 ||
      selectedBossFilters.has(item.availability);

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
  const azOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "az"
  );
  if (azOption) {
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    azOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${azOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }
}

if (
  currentSort === "az" &&
  !filtersExcludingDLC() &&
  !userSelectedSortAz
) {
  currentSort = "parent";
  const parentOption = Array.from(sortOptions).find(
    (opt) => opt.getAttribute("data-value") === "parent"
  );
  if (parentOption) {
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    parentOption.classList.add("active");
    sortDropdownBtn.innerHTML = `Sort by: ${parentOption.textContent} <span class="dropdown-arrow">▼</span>`;
  }
}


  if (currentSort === "parent") {
    container.style.display = "block";

    const allParents = [
      ...new Set(
        filtered
          .map((item) => item.parent)
          .filter((p) => p && p !== "Miscellaneous")
      ),
    ];

    const matchedParents = allParents.filter((parentName) =>
      parentName.toLowerCase().includes(keyword)
    );
    const matchedItems = filtered.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );
    const matchedItemsByParent = new Map();
    matchedItems.forEach((item) => {
      if (!item.parent) return;
      if (!matchedItemsByParent.has(item.parent)) {
        matchedItemsByParent.set(item.parent, []);
      }
      matchedItemsByParent.get(item.parent).push(item);
    });

    matchedParents.forEach((parentName) => {
      const cardsGroup = document.createElement("div");
      cardsGroup.className = "parent-cards-group";
      const allChildren = filtered.filter((item) => item.parent === parentName);

      allChildren.forEach((item) => {
        if (renderedItemNames.has(item.name)) return;
        cardsGroup.appendChild(createCard(item));
        renderedItemNames.add(item.name);
      });

      const headerWrapper = createParentHeader(parentName);
      container.appendChild(headerWrapper);
      container.appendChild(cardsGroup);
    });

    allParents.forEach((parentName) => {
      if (matchedParents.includes(parentName)) return;

      const matchedChildren = (
        matchedItemsByParent.get(parentName) || []
      ).filter((item) => !renderedItemNames.has(item.name));

      if (matchedChildren.length === 0) return;

      const cardsGroup = document.createElement("div");
      cardsGroup.className = "parent-cards-group";
      matchedChildren.forEach((item) => {
        cardsGroup.appendChild(createCard(item));
        renderedItemNames.add(item.name);
      });

      const headerWrapper = createParentHeader(parentName);
      container.appendChild(headerWrapper);
      container.appendChild(cardsGroup);
    });

    matchedItems
      .filter((item) => !item.parent)
      .forEach((item) => {
        if (renderedItemNames.has(item.name)) return;
        container.appendChild(createCard(item));
        renderedItemNames.add(item.name);
      });

    const filtersActive = anyFilterActive();
    const miscItems = data.filter((item) => {
      if (item.parent !== "Miscellaneous") return false;
      if (!showDLCItems && item.dlc === true) return false;
      if (renderedItemNames.has(item.name)) return false;

      const keywordMatch =
        item.name.toLowerCase().includes(keyword) || keyword === "";
      if (!filtersActive) return keywordMatch;

      const ratingMatch =
        activeStars.has("Any") || activeStars.has(item.rating);
      const typeMatch = !activeType || item.type === activeType;
      const bossMatch =
        selectedBossFilters.size === 0 ||
        selectedBossFilters.has(item.availability);

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

      miscItems.forEach((item) => {
        cardsGroup.appendChild(createCard(item, true));
        renderedItemNames.add(item.name);
      });

      container.appendChild(cardsGroup);
    }
  } else {
    container.style.display = "grid";

    let searched = filtered.filter((item) =>
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

    searched.forEach((item) => {
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
  modal.classList.remove("hide");
  modal.style.display = "block";

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });

  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");

  const content = modal.querySelector(".modal-content");

  content.addEventListener("animationend", function handleAnimationEnd() {
    modal.style.display = "none";
    content.removeEventListener("animationend", handleAnimationEnd);

    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);

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
  <img src="${iconURL}" alt="${
        item.name
      } icon" style="width: 1.2em; height: 1.2em; object-fit: contain; border-radius: 4px;">
  ${item.dlc ? DLC_SPAN : ""}
</div>
    <div class="stars">${item.rating}</div>
    <div class="type">${item.type}</div>
  </div>
  <div class="scroll-description">${formatDescription(item.description)}</div>
  <div class="modal-footer" style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 20px; gap: 12px; font-size: 0.95em; color: white; flex-wrap: wrap;">
    <a href="https://docs.google.com/document/d/1obh1n7TIxufvph4KQy1rv7rO4bL1au0XJNESTQptLZ4/edit?tab=t.0#heading=h.qz8l2nyjukur" target="_blank" style="color: #00e676; text-decoration: underline; cursor: pointer;">Source</a>
    <span class="modal-tag availability-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Filter by availability">${
      item.availability || "Unknown"
    }</span>
    ${item.parent && item.parent !== "Miscellaneous"
  ? `<span class="modal-tag parent-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to parent section">Parent</span>`
  : ""}


${
  data.some((child) => child.parent === item.name)
    ? `<span class="modal-tag children-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Go to children section">Children</span>`
    : ""
}

${
  item.dlc
    ? `<span class="modal-tag dlc-tag" style="cursor: pointer; color: #00e676; text-decoration: underline;" title="Show DLC items only">DLC</span>`
    : ""
}

<a href="${wikiURL}" target="_blank" style="color: #00e676; text-decoration: underline; cursor: pointer;">Wiki Link</a>
  </div>
`;
      const availabilityTag = modalBody.querySelector(".availability-tag");
      availabilityTag?.addEventListener("click", () => {
        resetFiltersAndSetAvailability(item.availability);
        closeModal();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const parentTag = modalBody.querySelector(".parent-tag");
      parentTag?.addEventListener("click", () => {
        const headerName = item.parent || "Miscellaneous";
        resetFiltersAndScrollToHeader(headerName);
        closeModal();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const childrenTag = modalBody.querySelector(".children-tag");
      childrenTag?.addEventListener("click", () => {
        resetFiltersAndScrollToHeader(item.name);
        closeModal();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      modalBody.querySelectorAll(".dlc-tag").forEach((dlcTag) => {
        dlcTag.addEventListener("click", () => {
          activateDLCSorting();
          closeModal();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });

      openModal();
    };
  });
}

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
  typeOptions[0].classList.add("active");

  searchInput.value = "";

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossBtn.innerHTML = `Availability <span class="ellipsis">…</span>`;
  bossCheckboxes.forEach((box) => (box.checked = false));

  currentSort = "parent";

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
  const clickedInsideRating =
    ratingDropdown.contains(e.target) || ratingDropdownBtn.contains(e.target);
  const clickedInsideType =
    typeDropdown.contains(e.target) || typeDropdownBtn.contains(e.target);
  const clickedInsideSort =
    sortDropdown.contains(e.target) || sortDropdownBtn.contains(e.target);

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

  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.classList.add("modal-open");

  updateSelectedBossText(); 
}



function closeBossModalFunc() {
  bossModal.classList.remove("open");

  setTimeout(() => {
    bossModal.style.display = "none";
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";  
  }, 100);
}


bossModal.addEventListener("transitionend", (e) => {
  if (e.target === bossModal && !bossModal.classList.contains("open")) {
    bossModal.style.display = "none";
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

let currentSort = "parent";

sortDropdownBtn.addEventListener("click", () => {
  ratingDropdown.classList.remove("open");
  typeDropdown.classList.remove("open");
  sortDropdown.classList.toggle("open");
});
sortOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("active")) return;
    sortOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    currentSort = option.getAttribute("data-value");
    userSelectedSortAz = currentSort === "az";
    sortDropdownBtn.innerHTML = `Sort by: ${option.textContent} <span class="dropdown-arrow">▼</span>`;

    if (currentSort === "dlcFirst") {
      showDLCItems = true;
    } else {
      showDLCItems = false;
    }

    const dlcToggle = document.getElementById("dlcToggle");
    if (dlcToggle) {
      if (showDLCItems) {
        dlcToggle.classList.add("active");
        dlcToggle.classList.remove("inactive");
      } else {
        dlcToggle.classList.remove("active");
        dlcToggle.classList.add("inactive");
      }
    }

    renderCards();
  });
});

const defaultOption = Array.from(sortOptions).find(
  (opt) => opt.getAttribute("data-value") === currentSort
);
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
    iconMap[key] || "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
});
