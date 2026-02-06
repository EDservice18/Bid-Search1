const CATEGORIES = [
  "Landscaping",
  "Lawn Care",
  "Grounds Maintenance",
  "Mowing",
  "Weed Eating",
  "Turf Maintenance",
  "Parks",
  "Cemetery Maintenance",
  "Brush Cutting",
  "Debris Cleanup",
  "Right-of-Way"
];

const AREA_OPTIONS = [
  "Aragon",
  "Acworth",
  "Bremen",
  "Calhoun",
  "Chatsworth",
  "Carrollton",
  "Cartersville",
  "Cedartown",
  "Dalton",
  "Lafayette",
  "Tallapoosa",
  "Summerville",
  "Rome",
  "Heard County",
  "Centre",
  "Cedar Bluff"
];

const STORAGE_KEYS = {
  trackedBids: "trackedBids",
  sources: "sources",
  settings: "settings"
};

const DEFAULT_SETTINGS = {
  demoMode: true,
  realMode: false,
  liveMode: false
};

const FALLBACK_SOURCES = [
  {
    sourceId: "ga-proc-portal",
    name: "Georgia Procurement Registry",
    url: "https://example.gov/ga/procurement",
    areaTags: ["GA"],
    keywords: ["grounds", "parks", "maintenance"]
  },
  {
    sourceId: "nwga-cities",
    name: "Northwest GA City Bids",
    url: "https://example.gov/nwga/cities",
    areaTags: ["NWGA"],
    keywords: ["mowing", "turf", "landscaping"]
  },
  {
    sourceId: "rome-utilities",
    name: "Rome Utilities Procurement",
    url: "https://example.gov/rome/utilities",
    areaTags: ["NWGA"],
    keywords: ["right-of-way", "brush cutting"]
  },
  {
    sourceId: "carrollton-bids",
    name: "Carrollton Bid Board",
    url: "https://example.gov/carrollton/bids",
    areaTags: ["NWGA"],
    keywords: ["cemetery", "lawn care"]
  },
  {
    sourceId: "heard-county",
    name: "Heard County Purchasing",
    url: "https://example.gov/heard/purchasing",
    areaTags: ["GA"],
    keywords: ["grounds", "debris cleanup"]
  },
  {
    sourceId: "alabama-procurement",
    name: "Alabama Procurement Portal",
    url: "https://example.gov/alabama/procurement",
    areaTags: ["AL"],
    keywords: ["parks", "maintenance", "right-of-way"]
  },
  {
    sourceId: "centre-bids",
    name: "Centre City Bids",
    url: "https://example.gov/centre/bids",
    areaTags: ["AL"],
    keywords: ["mowing", "brush cutting"]
  },
  {
    sourceId: "cedar-bluff",
    name: "Cedar Bluff Procurement",
    url: "https://example.gov/cedarbluff/procurement",
    areaTags: ["AL"],
    keywords: ["lawn care", "weed eating"]
  },
  {
    sourceId: "state-parks-ga",
    name: "GA State Parks Notices",
    url: "https://example.gov/ga/parks",
    areaTags: ["GA"],
    keywords: ["parks", "grounds maintenance"]
  },
  {
    sourceId: "regional-transpo",
    name: "Regional Transportation District",
    url: "https://example.gov/regional/transportation",
    areaTags: ["GA", "AL"],
    keywords: ["right-of-way", "debris cleanup"]
  }
];

const FALLBACK_BIDS = [
  {
    bidId: "BID-1001",
    title: "Citywide Grounds Maintenance Services",
    agency: "City of Rome",
    location: { city: "Rome", county: "Floyd", state: "GA" },
    dueDate: "2026-02-20",
    postedDate: "2026-02-02",
    category: "Grounds Maintenance",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Rome"]
  },
  {
    bidId: "BID-1002",
    title: "Right-of-Way Brush Cutting",
    agency: "Rome Utilities",
    location: { city: "Rome", county: "Floyd", state: "GA" },
    dueDate: "2026-03-05",
    postedDate: "2026-02-01",
    category: "Brush Cutting",
    sourceId: "rome-utilities",
    sourceName: "Rome Utilities Procurement",
    sourceUrl: "https://example.gov/rome/utilities",
    areaTags: ["NWGA", "GA", "Rome"]
  },
  {
    bidId: "BID-1003",
    title: "Parks Turf Maintenance",
    agency: "City of Cartersville",
    location: { city: "Cartersville", county: "Bartow", state: "GA" },
    dueDate: "2026-02-18",
    postedDate: "2026-01-30",
    category: "Turf Maintenance",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Cartersville"]
  },
  {
    bidId: "BID-1004",
    title: "Cemetery Grounds Mowing",
    agency: "City of Cedartown",
    location: { city: "Cedartown", county: "Polk", state: "GA" },
    dueDate: "2026-02-14",
    postedDate: "2026-02-03",
    category: "Cemetery Maintenance",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Cedartown"]
  },
  {
    bidId: "BID-1005",
    title: "County Park Lawn Care",
    agency: "Heard County",
    location: { city: "Franklin", county: "Heard County", state: "GA" },
    dueDate: "2026-02-28",
    postedDate: "2026-02-05",
    category: "Lawn Care",
    sourceId: "heard-county",
    sourceName: "Heard County Purchasing",
    sourceUrl: "https://example.gov/heard/purchasing",
    areaTags: ["GA", "Heard County"]
  },
  {
    bidId: "BID-1006",
    title: "Downtown Streetscape Landscaping",
    agency: "City of Dalton",
    location: { city: "Dalton", county: "Whitfield", state: "GA" },
    dueDate: "2026-03-01",
    postedDate: "2026-02-01",
    category: "Landscaping",
    sourceId: "ga-proc-portal",
    sourceName: "Georgia Procurement Registry",
    sourceUrl: "https://example.gov/ga/procurement",
    areaTags: ["NWGA", "GA", "Dalton"]
  },
  {
    bidId: "BID-1007",
    title: "Municipal Mowing Services",
    agency: "City of Calhoun",
    location: { city: "Calhoun", county: "Gordon", state: "GA" },
    dueDate: "2026-02-16",
    postedDate: "2026-02-04",
    category: "Mowing",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Calhoun"]
  },
  {
    bidId: "BID-1008",
    title: "Weed Eating & Debris Cleanup",
    agency: "City of Carrollton",
    location: { city: "Carrollton", county: "Carroll", state: "GA" },
    dueDate: "2026-03-08",
    postedDate: "2026-02-03",
    category: "Debris Cleanup",
    sourceId: "carrollton-bids",
    sourceName: "Carrollton Bid Board",
    sourceUrl: "https://example.gov/carrollton/bids",
    areaTags: ["NWGA", "GA", "Carrollton"]
  },
  {
    bidId: "BID-1009",
    title: "Park Maintenance Contract",
    agency: "City of Acworth",
    location: { city: "Acworth", county: "Cobb", state: "GA" },
    dueDate: "2026-02-22",
    postedDate: "2026-02-05",
    category: "Parks",
    sourceId: "ga-proc-portal",
    sourceName: "Georgia Procurement Registry",
    sourceUrl: "https://example.gov/ga/procurement",
    areaTags: ["NWGA", "GA", "Acworth"]
  },
  {
    bidId: "BID-1010",
    title: "Roadside Turf Maintenance",
    agency: "Regional Transportation District",
    location: { city: "Bremen", county: "Haralson", state: "GA" },
    dueDate: "2026-03-12",
    postedDate: "2026-02-02",
    category: "Right-of-Way",
    sourceId: "regional-transpo",
    sourceName: "Regional Transportation District",
    sourceUrl: "https://example.gov/regional/transportation",
    areaTags: ["NWGA", "GA", "Bremen"]
  },
  {
    bidId: "BID-1011",
    title: "Cedar Bluff Grounds Maintenance",
    agency: "Town of Cedar Bluff",
    location: { city: "Cedar Bluff", county: "Cherokee", state: "AL" },
    dueDate: "2026-02-26",
    postedDate: "2026-02-04",
    category: "Grounds Maintenance",
    sourceId: "cedar-bluff",
    sourceName: "Cedar Bluff Procurement",
    sourceUrl: "https://example.gov/cedarbluff/procurement",
    areaTags: ["AL", "Cedar Bluff"]
  },
  {
    bidId: "BID-1012",
    title: "Centre Parks Mowing",
    agency: "City of Centre",
    location: { city: "Centre", county: "Cherokee", state: "AL" },
    dueDate: "2026-03-04",
    postedDate: "2026-02-01",
    category: "Mowing",
    sourceId: "centre-bids",
    sourceName: "Centre City Bids",
    sourceUrl: "https://example.gov/centre/bids",
    areaTags: ["AL", "Centre"]
  },
  {
    bidId: "BID-1013",
    title: "Summerville Cemetery Maintenance",
    agency: "City of Summerville",
    location: { city: "Summerville", county: "Chattooga", state: "GA" },
    dueDate: "2026-02-24",
    postedDate: "2026-02-03",
    category: "Cemetery Maintenance",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Summerville"]
  },
  {
    bidId: "BID-1014",
    title: "Lawn Care & Weed Eating",
    agency: "City of Chatsworth",
    location: { city: "Chatsworth", county: "Murray", state: "GA" },
    dueDate: "2026-02-19",
    postedDate: "2026-02-05",
    category: "Weed Eating",
    sourceId: "nwga-cities",
    sourceName: "Northwest GA City Bids",
    sourceUrl: "https://example.gov/nwga/cities",
    areaTags: ["NWGA", "GA", "Chatsworth"]
  }
];

let appState = {
  bids: [],
  sources: [],
  tracked: [],
  settings: { ...DEFAULT_SETTINGS }
};

const selectors = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  dashboardTiles: document.getElementById("dashboardTiles"),
  openBidsList: document.getElementById("openBidsList"),
  trackedBidsList: document.getElementById("trackedBidsList"),
  sourcesList: document.getElementById("sourcesList"),
  areaFilter: document.getElementById("areaFilter"),
  filterKeyword: document.getElementById("filterKeyword"),
  filterCategory: document.getElementById("filterCategory"),
  filterDue: document.getElementById("filterDue"),
  filterSort: document.getElementById("filterSort"),
  openBidsCard: document.getElementById("openBidsCard"),
  demoModeBadge: document.getElementById("demoModeBadge"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  toggleDemo: document.getElementById("toggleDemo"),
  toggleReal: document.getElementById("toggleReal"),
  toggleLive: document.getElementById("toggleLive"),
  realModeNote: document.getElementById("realModeNote"),
  sourceName: document.getElementById("sourceName"),
  sourceUrl: document.getElementById("sourceUrl"),
  sourceAreaTags: document.getElementById("sourceAreaTags"),
  sourceKeywords: document.getElementById("sourceKeywords"),
  addSourceBtn: document.getElementById("addSourceBtn")
};

function normalizeText(value) {
  return (value || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function keywordMatch(bid, keyword) {
  if (!keyword) return true;
  const normalized = normalizeText(keyword);
  const alias = normalized === "cederbluff" ? "cedarbluff" : normalized;
  const fields = [
    bid.title,
    bid.agency,
    bid.category,
    bid.sourceName,
    bid.location?.city,
    bid.location?.county,
    bid.location?.state,
    ...(bid.areaTags || [])
  ];
  const haystack = normalizeText(fields.filter(Boolean).join(" "));
  return haystack.includes(alias);
}

function uniqueKeyFor(bid) {
  return `${bid.bidId}::${bid.sourceId}`;
}

function loadLocalStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function loadJson(url, fallback) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load");
    return await response.json();
  } catch (error) {
    return fallback;
  }
}

function dedupeTracked(bids) {
  const seen = new Map();
  bids.forEach((bid) => {
    const key = uniqueKeyFor(bid);
    if (!seen.has(key)) {
      seen.set(key, { ...bid, uniqueKey: key });
    }
  });
  return Array.from(seen.values());
}

function getStatusPill(status) {
  const normalized = (status || "open").toLowerCase();
  const pillClass = {
    open: "pill-open",
    tracked: "pill-tracked",
    submitted: "pill-submitted",
    won: "pill-won",
    lost: "pill-lost"
  }[normalized] || "pill-open";
  return `<span class="pill pill-status ${pillClass}">${status || "Open"}</span>`;
}

function renderDashboard() {
  const tracked = appState.tracked;
  const now = new Date();
  const dueIn7 = appState.bids.filter((bid) => {
    const due = new Date(bid.dueDate);
    const diff = (due - now) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 7;
  }).length;

  const submitted = tracked.filter((bid) => bid.internalStatus === "Submitted").length;
  const wonLost = tracked.filter((bid) => ["Won", "Lost"].includes(bid.internalStatus)).length;

  const tiles = [
    { label: "Open Bids Found", value: appState.bids.length },
    { label: "Tracked Bids", value: tracked.length },
    { label: "Due in 7 Days", value: dueIn7 },
    { label: "Submitted", value: submitted },
    { label: "Won/Lost", value: wonLost }
  ];

  selectors.dashboardTiles.innerHTML = tiles
    .map(
      (tile) => `
        <div class="card">
          <p class="muted">${tile.label}</p>
          <h2>${tile.value}</h2>
        </div>
      `
    )
    .join("");
}

function renderAreaFilter() {
  selectors.areaFilter.innerHTML = AREA_OPTIONS.map(
    (area) => `
      <label class="area-chip">
        <input type="checkbox" value="${area}" />
        <span>${area}</span>
      </label>
    `
  ).join("");
}

function getSelectedAreas() {
  return Array.from(selectors.areaFilter.querySelectorAll("input:checked")).map(
    (input) => input.value
  );
}

function filterBids() {
  const keyword = selectors.filterKeyword.value.trim();
  const category = selectors.filterCategory.value;
  const dueDays = selectors.filterDue.value ? Number(selectors.filterDue.value) : null;
  const selectedAreas = getSelectedAreas();
  const now = new Date();

  return appState.bids
    .filter((bid) => keywordMatch(bid, keyword))
    .filter((bid) => !category || bid.category === category)
    .filter((bid) => {
      if (!dueDays) return true;
      const due = new Date(bid.dueDate);
      const diff = (due - now) / (1000 * 60 * 60 * 24);
      return diff >= 0 && diff <= dueDays;
    })
    .filter((bid) => {
      if (selectedAreas.length === 0) return true;
      const candidates = [
        bid.location?.city,
        bid.location?.county,
        ...(bid.areaTags || [])
      ].filter(Boolean);
      return selectedAreas.some((area) => candidates.includes(area));
    });
}

function sortBids(bids) {
  const sort = selectors.filterSort.value;
  const sorted = [...bids];
  if (sort === "newest") {
    sorted.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
  } else if (sort === "agency") {
    sorted.sort((a, b) => a.agency.localeCompare(b.agency));
  } else {
    sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }
  return sorted;
}

function renderOpenBids() {
  const filtered = sortBids(filterBids());
  if (filtered.length === 0) {
    selectors.openBidsList.innerHTML = `<div class="card">No bids match the current filters.</div>`;
    return;
  }
  selectors.openBidsList.innerHTML = filtered
    .map((bid) => {
      const key = uniqueKeyFor(bid);
      const tracked = appState.tracked.find((item) => item.uniqueKey === key);
      const statusPill = tracked ? getStatusPill("Tracked") : getStatusPill("Open");
      const location = `${bid.location.city}, ${bid.location.county}, ${bid.location.state}`;
      return `
        <div class="card">
          <div class="bid-row">
            <div>
              <h3>${bid.title}</h3>
              <p class="bid-meta">${bid.agency}</p>
              <p class="bid-meta">${location}</p>
              <p class="bid-meta">Category: ${bid.category}</p>
            </div>
            <div>
              <p class="bid-meta">Due: ${bid.dueDate}</p>
              <p class="bid-meta">Posted: ${bid.postedDate}</p>
              ${statusPill}
            </div>
            <div>
              <p class="bid-meta">Source: <a href="${bid.sourceUrl}" target="_blank" rel="noopener">${bid.sourceName}</a></p>
            </div>
            <div class="actions">
              <button class="btn ${tracked ? "ghost" : ""}" data-track="${key}" ${tracked ? "disabled" : ""}>
                ${tracked ? "Tracked" : "Track"}
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTrackedBids() {
  if (appState.tracked.length === 0) {
    selectors.trackedBidsList.innerHTML = `<div class="card">No tracked bids yet.</div>`;
    return;
  }

  const statusOptions = [
    "Interested",
    "In Progress",
    "Submitted",
    "Won",
    "Lost",
    "No Bid"
  ];

  selectors.trackedBidsList.innerHTML = appState.tracked
    .map((bid) => {
      const location = `${bid.location.city}, ${bid.location.county}, ${bid.location.state}`;
      const options = statusOptions
        .map(
          (status) =>
            `<option value="${status}" ${bid.internalStatus === status ? "selected" : ""}>${status}</option>`
        )
        .join("");
      return `
        <div class="card">
          <div class="bid-row">
            <div>
              <h3>${bid.title}</h3>
              <p class="bid-meta">${bid.agency}</p>
              <p class="bid-meta">${location}</p>
              <p class="bid-meta">Due: ${bid.dueDate}</p>
              ${getStatusPill(bid.internalStatus || "Tracked")}
            </div>
            <div>
              <label class="bid-meta">Internal Status</label>
              <select data-field="status" data-key="${bid.uniqueKey}">
                <option value="">Select</option>
                ${options}
              </select>
              <label class="bid-meta">Tags</label>
              <input type="text" data-field="tags" data-key="${bid.uniqueKey}" value="${bid.tags || ""}" placeholder="e.g. mowing, priority" />
              <label class="bid-meta">Estimated Value</label>
              <input type="text" data-field="value" data-key="${bid.uniqueKey}" value="${bid.estimatedValue || ""}" placeholder="$" />
            </div>
            <div>
              <label class="bid-meta">Notes</label>
              <textarea rows="4" data-field="notes" data-key="${bid.uniqueKey}">${bid.notes || ""}</textarea>
              <label class="bid-meta">
                <input type="checkbox" data-field="reminder" data-key="${bid.uniqueKey}" ${bid.reminder ? "checked" : ""} />
                Due Date Reminder
              </label>
            </div>
            <div class="actions">
              <button class="btn" data-save="${bid.uniqueKey}">Save edits</button>
              <button class="btn ghost" data-untrack="${bid.uniqueKey}">Untrack</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSources() {
  if (appState.sources.length === 0) {
    selectors.sourcesList.innerHTML = `<div class="card">No sources available.</div>`;
    return;
  }

  selectors.sourcesList.innerHTML = appState.sources
    .map((source) => {
      return `
        <div class="card">
          <div class="bid-row">
            <div>
              <label class="bid-meta">Name</label>
              <input type="text" data-source-field="name" data-source-id="${source.sourceId}" value="${source.name}" />
              <label class="bid-meta">URL</label>
              <input type="url" data-source-field="url" data-source-id="${source.sourceId}" value="${source.url}" />
            </div>
            <div>
              <label class="bid-meta">Area Tags</label>
              <input type="text" data-source-field="areaTags" data-source-id="${source.sourceId}" value="${(source.areaTags || []).join(", ")}" />
              <label class="bid-meta">Keywords</label>
              <input type="text" data-source-field="keywords" data-source-id="${source.sourceId}" value="${(source.keywords || []).join(", ")}" />
            </div>
            <div class="actions">
              <button class="btn" data-save-source="${source.sourceId}">Save</button>
              <button class="btn ghost" data-remove-source="${source.sourceId}">Remove</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function updateSettingsUI() {
  selectors.toggleDemo.checked = appState.settings.demoMode;
  selectors.toggleReal.checked = appState.settings.realMode;
  selectors.toggleLive.checked = appState.settings.liveMode;
  if (appState.settings.liveMode) {
    selectors.demoModeBadge.textContent = "Live Mode";
  } else if (appState.settings.realMode) {
    selectors.demoModeBadge.textContent = "Real Mode";
  } else {
    selectors.demoModeBadge.textContent = "Demo Mode";
  }
  selectors.realModeNote.hidden = !(appState.settings.realMode || appState.settings.liveMode);
}

async function initializeData() {
  appState.settings = loadLocalStorage(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
  updateSettingsUI();

  const localSources = loadLocalStorage(STORAGE_KEYS.sources, null);
  const loadedSources = await loadJson("data/sources.json", FALLBACK_SOURCES);
  appState.sources = localSources || loadedSources;

  const savedTracked = loadLocalStorage(STORAGE_KEYS.trackedBids, []);
  appState.tracked = dedupeTracked(savedTracked);
  saveLocalStorage(STORAGE_KEYS.trackedBids, appState.tracked);

  if (appState.settings.realMode || appState.settings.liveMode) {
    const remote = await fetchBidsFromCollector({});
    if (remote && remote.length) {
      appState.bids = remote;
    } else {
      appState.settings.demoMode = true;
      appState.settings.realMode = false;
      appState.settings.liveMode = false;
      saveLocalStorage(STORAGE_KEYS.settings, appState.settings);
      updateSettingsUI();
      appState.bids = await loadJson("data/sample-bids.json", FALLBACK_BIDS);
    }
  } else {
    appState.bids = await loadJson("data/sample-bids.json", FALLBACK_BIDS);
  }

  refreshUI();
}

function refreshUI() {
  populateCategoryFilter();
  renderAreaFilter();
  renderDashboard();
  renderOpenBids();
  renderTrackedBids();
  renderSources();
}

function populateCategoryFilter() {
  selectors.filterCategory.innerHTML =
    `<option value="">All Categories</option>` +
    CATEGORIES.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function handleTabSwitch(view) {
  selectors.tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === view);
  });
  selectors.views.forEach((section) => {
    section.classList.toggle("active", section.id === `view-${view}`);
  });
}

function trackBidByKey(key) {
  const bid = appState.bids.find((item) => uniqueKeyFor(item) === key);
  if (!bid) return;
  const trackedItem = {
    ...bid,
    uniqueKey: key,
    internalStatus: "Interested",
    tags: "",
    notes: "",
    estimatedValue: "",
    reminder: false
  };
  const updated = dedupeTracked([...appState.tracked, trackedItem]);
  appState.tracked = updated;
  saveLocalStorage(STORAGE_KEYS.trackedBids, updated);
  renderOpenBids();
  renderTrackedBids();
  renderDashboard();
}

function untrackBid(key) {
  appState.tracked = appState.tracked.filter((bid) => bid.uniqueKey !== key);
  saveLocalStorage(STORAGE_KEYS.trackedBids, appState.tracked);
  renderOpenBids();
  renderTrackedBids();
  renderDashboard();
}

function saveTrackedEdits(key) {
  const bid = appState.tracked.find((item) => item.uniqueKey === key);
  if (!bid) return;

  const statusInput = document.querySelector(`select[data-field="status"][data-key="${key}"]`);
  const tagsInput = document.querySelector(`input[data-field="tags"][data-key="${key}"]`);
  const valueInput = document.querySelector(`input[data-field="value"][data-key="${key}"]`);
  const notesInput = document.querySelector(`textarea[data-field="notes"][data-key="${key}"]`);
  const reminderInput = document.querySelector(`input[data-field="reminder"][data-key="${key}"]`);

  bid.internalStatus = statusInput?.value || "";
  bid.tags = tagsInput?.value || "";
  bid.estimatedValue = valueInput?.value || "";
  bid.notes = notesInput?.value || "";
  bid.reminder = reminderInput?.checked || false;

  appState.tracked = dedupeTracked(appState.tracked);
  saveLocalStorage(STORAGE_KEYS.trackedBids, appState.tracked);
  renderTrackedBids();
  renderDashboard();
}

function saveSources() {
  saveLocalStorage(STORAGE_KEYS.sources, appState.sources);
}

function addSource() {
  const name = selectors.sourceName.value.trim();
  const url = selectors.sourceUrl.value.trim();
  if (!name || !url) return;

  const sourceIdBase = normalizeText(name) || "source";
  let sourceId = sourceIdBase;
  let counter = 1;
  while (appState.sources.some((source) => source.sourceId === sourceId)) {
    sourceId = `${sourceIdBase}-${counter++}`;
  }

  const areaTags = selectors.sourceAreaTags.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const keywords = selectors.sourceKeywords.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  appState.sources.push({
    sourceId,
    name,
    url,
    areaTags,
    keywords
  });
  saveSources();
  selectors.sourceName.value = "";
  selectors.sourceUrl.value = "";
  selectors.sourceAreaTags.value = "";
  selectors.sourceKeywords.value = "";
  renderSources();
}

function updateSource(sourceId) {
  const source = appState.sources.find((item) => item.sourceId === sourceId);
  if (!source) return;

  const nameInput = document.querySelector(`input[data-source-field="name"][data-source-id="${sourceId}"]`);
  const urlInput = document.querySelector(`input[data-source-field="url"][data-source-id="${sourceId}"]`);
  const areaInput = document.querySelector(`input[data-source-field="areaTags"][data-source-id="${sourceId}"]`);
  const keywordsInput = document.querySelector(`input[data-source-field="keywords"][data-source-id="${sourceId}"]`);

  source.name = nameInput?.value.trim() || source.name;
  source.url = urlInput?.value.trim() || source.url;
  source.areaTags = areaInput?.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  source.keywords = keywordsInput?.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  saveSources();
  renderSources();
}

function removeSource(sourceId) {
  appState.sources = appState.sources.filter((item) => item.sourceId !== sourceId);
  saveSources();
  renderSources();
}

function exportToCsv() {
  if (appState.tracked.length === 0) return;
  const headers = [
    "Title",
    "Agency",
    "Location",
    "Due Date",
    "Internal Status",
    "Tags",
    "Notes",
    "Source URL"
  ];

  const rows = appState.tracked.map((bid) => {
    const location = `${bid.location.city}, ${bid.location.county}, ${bid.location.state}`;
    return [
      bid.title,
      bid.agency,
      location,
      bid.dueDate,
      bid.internalStatus || "",
      bid.tags || "",
      bid.notes || "",
      bid.sourceUrl || ""
    ];
  });

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tracked-bids.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function handleSettingsChange() {
  const demoOn = selectors.toggleDemo.checked;
  const realOn = selectors.toggleReal.checked;
  const liveOn = selectors.toggleLive.checked;

  if (liveOn) {
    appState.settings = { demoMode: false, realMode: true, liveMode: true };
  } else if (realOn) {
    appState.settings = { demoMode: false, realMode: true, liveMode: false };
  } else {
    appState.settings = { demoMode: demoOn || (!realOn && !liveOn), realMode: false, liveMode: false };
  }

  saveLocalStorage(STORAGE_KEYS.settings, appState.settings);
  updateSettingsUI();
  initializeData();
}

async function fetchBidsFromCollector(params) {
  try {
    const search = new URLSearchParams(params).toString();
    const response = await fetch(`/api/bids?${search}`);
    if (!response.ok) throw new Error("Collector unavailable");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function attachEventListeners() {
  selectors.tabs.forEach((tab) => {
    tab.addEventListener("click", () => handleTabSwitch(tab.dataset.view));
  });

  selectors.openBidsCard.addEventListener("click", () => handleTabSwitch("open-bids"));

  selectors.filterKeyword.addEventListener("input", renderOpenBids);
  selectors.filterCategory.addEventListener("change", renderOpenBids);
  selectors.filterDue.addEventListener("change", renderOpenBids);
  selectors.filterSort.addEventListener("change", renderOpenBids);

  selectors.areaFilter.addEventListener("change", renderOpenBids);

  selectors.openBidsList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-track]");
    if (!button) return;
    trackBidByKey(button.dataset.track);
  });

  selectors.trackedBidsList.addEventListener("click", (event) => {
    const saveBtn = event.target.closest("button[data-save]");
    const untrackBtn = event.target.closest("button[data-untrack]");
    if (saveBtn) {
      saveTrackedEdits(saveBtn.dataset.save);
    }
    if (untrackBtn) {
      untrackBid(untrackBtn.dataset.untrack);
    }
  });

  selectors.sourcesList.addEventListener("click", (event) => {
    const saveBtn = event.target.closest("button[data-save-source]");
    const removeBtn = event.target.closest("button[data-remove-source]");
    if (saveBtn) {
      updateSource(saveBtn.dataset.saveSource);
    }
    if (removeBtn) {
      removeSource(removeBtn.dataset.removeSource);
    }
  });

  selectors.addSourceBtn.addEventListener("click", addSource);
  selectors.exportCsvBtn.addEventListener("click", exportToCsv);

  selectors.toggleDemo.addEventListener("change", handleSettingsChange);
  selectors.toggleReal.addEventListener("change", handleSettingsChange);
  selectors.toggleLive.addEventListener("change", handleSettingsChange);
}

document.addEventListener("DOMContentLoaded", () => {
  attachEventListeners();
  initializeData();
});
