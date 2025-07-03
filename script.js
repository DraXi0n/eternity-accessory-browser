const bossBtn = document.getElementById("bossFilterBtn");
const bossModal = document.getElementById("bossModal");
const closeBossModal = document.getElementById("closeBossModal");
const confirmBossFilters = document.getElementById("confirmBossFilters");
const bossCheckboxes = bossModal.querySelectorAll(
  'input[type="checkbox"]'
);
let selectedBossFilters = new Set();
let showDLCItems = false;

bossBtn.onclick = () => {
  bossModal.style.display = "block";
};

closeBossModal.onclick = () => {
  lastConfirmedBossStates.forEach((wasChecked, box) => {
    box.checked = wasChecked;
  });
  bossModal.style.display = "none";
};closeBossModal.onclick = () => {
  // Restore checkbox visuals to last confirmed state
  lastConfirmedBossStates.forEach((wasChecked, box) => {
    box.checked = wasChecked;
  });

  bossModal.style.display = "none";
};



window.addEventListener("click", (e) => {
  if (e.target === bossModal) bossModal.style.display = "none";
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

  bossModal.style.display = "none";
  renderCards();
  bossBtn.classList.toggle("active", selectedBossFilters.size > 0);
};


const container = document.getElementById("cards-container");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearSearch");
const buttons = document.querySelectorAll(".filter-button");
let activeStars = new Set();
let activeType = null;

function truncate(text, maxLength) {
  return text.length > maxLength
    ? text.slice(0, maxLength).trimEnd() + "..."
    : text;
}


function createCard(item) {
  const iconURL =
    iconMap[item.name] ||
    "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-full", JSON.stringify(item));
  card.innerHTML = `
  <img src="${iconURL}" alt="${
    item.name
  } icon" style="position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; object-fit: contain; border-radius: 5px;">
  <div class="title">${item.name}</div>
  <div class="stars">${item.rating}</div>
  <div class="type">${item.type}</div>
  <div class="description">${truncate(item.description, 300).replace(/\n/g, "<br>")}</div>

`;
  return card;
}

function renderCards() {
  container.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();
  const filtered = data.filter((item) => {
    const matchesStar =
      activeStars.size === 0 || activeStars.has(item.rating);
    const matchesType = !activeType || item.type === activeType;
    const matchesSearch = item.name.toLowerCase().includes(keyword);
    const matchesBoss =
      selectedBossFilters.size === 0 ||
      selectedBossFilters.has(item.availability);
    if (!showDLCItems && item.dlc === true) {
      return false; // exclude DLC items when toggle is off
    }

    return matchesStar && matchesType && matchesSearch && matchesBoss;
  });

  filtered.forEach((item) => container.appendChild(createCard(item)));
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
    const star = btn.getAttribute("data-star");
    const type = btn.getAttribute("data-type");

    if (star) {
      btn.classList.toggle("active");
      if (activeStars.has(star)) {
        activeStars.delete(star);
      } else {
        activeStars.add(star);
      }
    }

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

closeBtn.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

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
<div class="title" style="display: flex; align-items: center; gap: 8px;">
<span>${item.name}</span>
<img src="${iconURL}" alt="${item.name} icon"
   style="width: 1.2em; height: 1.2em; object-fit: contain; border-radius: 4px;">
</div>
<div class="stars">${item.rating}</div>
<div class="type">${item.type}</div>
<div class="description">${item.description.replace(/\n/g, "<br>")}</div>

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
<div style="color: white; font-size: 0.95em;">Availability: ${
item.availability || "Unknown"
}</div>
<a href="${wikiURL}" target="_blank" style="color: #00e676; text-decoration: underline;">Wiki Link</a>
</div>

`;

      modal.style.display = "block";
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
  document
    .querySelectorAll(".filter-button[data-star]")
    .forEach((btn) => {
      btn.classList.remove("active");
    });

  activeType = null;
  document
    .querySelectorAll(".filter-button[data-type]")
    .forEach((btn) => {
      btn.classList.remove("active");
    });

  searchInput.value = "";

  showDLCItems = false;
  dlcToggle.classList.remove("active");
  dlcToggle.classList.add("inactive");

  selectedBossFilters.clear();
  bossBtn.classList.remove("active");
  bossCheckboxes.forEach((box) => (box.checked = false));

  renderCards();
});

renderCards();

document.querySelectorAll("img.boss-icon").forEach((img) => {
  const key = img.getAttribute("data-boss");
  img.src =
    iconMap[key] ||
    "https://fargosmods.wiki.gg/images/6/6e/Missing_image.png";
});
