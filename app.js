const breads = [
  { code: "80218", name: "Giant Bread Non-sliced", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80217", name: "Giant Bread Sliced (32 pcs)", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80202", name: "Giant Bread Thick-sliced (26 pcs)", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80203", name: "Giant Bread Thick-sliced (20 pcs)", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80200", name: "Giant Bread Thick-sliced (16 pcs)", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80201", name: "Giant Bread Thick-sliced (12 pcs)", packing: "1 loaf/pack", price: 26.80, category: "Sandwich Bread" },
  { code: "80626", name: "Crustless White Bread (16 pcs)", packing: "1 loaf/pack", price: 14.80, category: "Sandwich Bread" },
  { code: "80627", name: "Crustless White Bread Thick-sliced (13 pcs)", packing: "1 loaf/pack", price: 14.80, category: "Sandwich Bread" },
  { code: "80219", name: "Giant Bread Sliced (16 pcs)", packing: "1 loaf/pack", price: 14.20, category: "Sandwich Bread" },
  { code: "80214", name: "Giant Whole Wheat Bread (16 pcs)", packing: "1 loaf/pack", price: 14.90, category: "Sandwich Bread" },
  { code: "80216", name: "Crustless Whole Wheat Bread (16 pcs)", packing: "1 loaf/pack", price: 15.70, category: "Sandwich Bread" },

  { code: "80139", name: "6\" Hot Dog Bun w/Sesame (Side-sliced)", packing: "12 pcs/pack", price: 26.40, category: "Hot Dog & Hamburger Bun" },
  { code: "80136", name: "6\" Hot Dog Bun (Side-sliced)", packing: "12 pcs/pack", price: 24.60, category: "Hot Dog & Hamburger Bun" },
  { code: "80427", name: "7\" Hot Dog Bun w/Sesame", packing: "10 pcs/pack", price: 30.90, category: "Hot Dog & Hamburger Bun" },
  { code: "80426", name: "7\" Hot Dog Bun", packing: "10 pcs/pack", price: 29.30, category: "Hot Dog & Hamburger Bun" },
  { code: "80036", name: "Hamburger Bun w/Sesame (Sliced)", packing: "12 pcs/pack", price: 26.40, category: "Hot Dog & Hamburger Bun" },
  { code: "80037", name: "Hamburger Bun (Sliced)", packing: "12 pcs/pack", price: 24.60, category: "Hot Dog & Hamburger Bun" },
  { code: "20147", name: "2.5\" Premium Mini-burger Bun w/Sesame", packing: "25 pcs/pack", price: 47.00, category: "Hot Dog & Hamburger Bun" },
  { code: "20145", name: "4\" Premium Hamburger Bun w/Sesame", packing: "8 pcs/pack", price: 31.60, category: "Hot Dog & Hamburger Bun" },
  { code: "20238", name: "4\" Charcoal Hamburger Bun w/Sesame", packing: "6 pcs/pack", price: 34.80, category: "Hot Dog & Hamburger Bun" },
  { code: "20274", name: "5\" Soft Bun", packing: "9 pcs/pack", price: 30.60, category: "Hot Dog & Hamburger Bun" },
  { code: "20122", name: "4\" Premium Glazing Hamburger Bun (Sliced)", packing: "10 pcs/pack", price: 40.10, category: "Hot Dog & Hamburger Bun" },

  { code: "80552", name: "Round meal bun", packing: "10 pcs/pack", price: 15.50, category: "Soft Roll" },
  { code: "80537", name: "Sweet meal bun", packing: "10 pcs/pack", price: 15.50, category: "Soft Roll" },
  { code: "80539", name: "Whole Wheat meal bun", packing: "10 pcs/pack", price: 16.20, category: "Soft Roll" },
  { code: "80535", name: "Sweet Square meal bun", packing: "36 pcs/pack", price: 54.00, category: "Soft Roll" },
  { code: "80553", name: "Square meal bun", packing: "36 pcs/pack", price: 54.00, category: "Soft Roll" },
  { code: "20200", name: "Twist meal Bun", packing: "18 pcs/pack", price: 35.10, category: "Soft Roll" },
  { code: "80527", name: "Raisin meal Bun", packing: "20 pcs/pack", price: 40.00, category: "Soft Roll" },

  { code: "80402", name: "Pineapple Bun", packing: "12 pcs/ctn", price: 46.80, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80403", name: "Coconut & margarine Bun (oval)", packing: "16 pcs/ctn", price: 62.40, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80302", name: "Butter & Cream Bun", packing: "12 pcs/ctn", price: 46.80, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80418", name: "Sausage Bun", packing: "12 pcs/ctn", price: 67.80, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80419", name: "Luncheon meat Bun", packing: "12 pcs/ctn", price: 70.20, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80414", name: "Cream & Coconut Bun (oval)", packing: "12 pcs/ctn", price: 69.00, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80408", name: "Salted Beef Bun", packing: "12 pcs/ctn", price: 72.60, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80409", name: "Ham & Cheese Bun", packing: "12 pcs/ctn", price: 72.60, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80406", name: "Tuna Fish Bun", packing: "12 pcs/ctn", price: 72.60, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80343", name: "Red Bean Bun", packing: "12 pcs/ctn", price: 66.60, category: "Specialty Bread (Hong Kong Style)" },
  { code: "80348", name: "Purple Sweet Potato Bun", packing: "12 pcs/ctn", price: 66.60, category: "Specialty Bread (Hong Kong Style)" },

  { code: "80301", name: "20\" Baguette", packing: "1 pc/pack", price: 12.30, category: "Continental Bread" },
  { code: "20101", name: "18\" Premium Baguette", packing: "1 pc/pack", price: 23.30, category: "Continental Bread" },
  { code: "80317", name: "7\" Baguette", packing: "10 pcs/pack", price: 51.20, category: "Continental Bread" },
  { code: "20105", name: "6.5\" Pita Bread", packing: "6 pcs/pack", price: 29.40, category: "Continental Bread" },
  { code: "80225", name: "Ciabatta (6\" x 4\")", packing: "6 pcs/pack", price: 47.40, category: "Continental Bread" },
  { code: "20133", name: "Tomato & Herbs Panini", packing: "5 pcs/pack", price: 40.70, category: "Continental Bread" },
  { code: "80392", name: "Croissant (Large)", packing: "12 pcs/ctn", price: 64.20, category: "Continental Bread" },
  { code: "80401", name: "Croissant (Regular)", packing: "15 pcs/ctn", price: 46.80, category: "Continental Bread" },
  { code: "20162", name: "Crispy Roll (Large)", packing: "10 pcs/pack", price: 33.60, category: "Continental Bread" },
  { code: "20119", name: "Crispy Roll (Small)", packing: "10 pcs/pack", price: 21.70, category: "Continental Bread" },
  { code: "20176", name: "9\" Italian Pizza Base - Thin", packing: "5 pcs/pack", price: 46.10, category: "Continental Bread" },
  { code: "20226", name: "11\" Italian Pizza Base - Thin", packing: "5 pcs/pack", price: 75.40, category: "Continental Bread" },
  { code: "20186", name: "13\" Italian Pizza Base - Thin", packing: "5 pcs/pack", price: 118.50, category: "Continental Bread" },
  { code: "80320", name: "6\" Soft Pizza Base - Thick", packing: "5 pcs/pack", price: 25.20, category: "Continental Bread" },
  { code: "80324", name: "9\" Soft Pizza Base - Thick", packing: "5 pcs/pack", price: 46.10, category: "Continental Bread" },
  { code: "80321", name: "13\" Soft Pizza Base - Thick", packing: "1 pc", price: 23.70, category: "Continental Bread" },
  { code: "20856", name: "Danish Toast - Thick (1\"1\")", packing: "11 pcs/loaf", price: 46.20, category: "Continental Bread" },
  { code: "20859", name: "Danish Toast - Thin Sliced (6')", packing: "16 pcs/loaf", price: 46.20, category: "Continental Bread" },
  { code: "20120", name: "Sourdough Dark Rye", packing: "2 pcs/pack", price: 48.80, category: "Continental Bread" },
  { code: "20115", name: "Sourdough Dark Rye (Large)", packing: "1 pc/pack", price: 40.70, category: "Continental Bread" },
  { code: "20854", name: "Focaccia (22\" x 15\")", packing: "1 base/pack", price: 71.40, category: "Continental Bread" },
  { code: "20155", name: "Brioche Toast - Thin Sliced (6')", packing: "16 pcs/loaf", price: 46.70, category: "Continental Bread" },
  { code: "20245", name: "Green Tea Sandwich Bread - Thin/Thick Sliced", packing: "32/16 pcs/loaf", price: 65.00, category: "Continental Bread" },
  { code: "20154", name: "Pandan Sandwich Bread - Thick Sliced", packing: "13 pcs/loaf", price: 47.70, category: "Continental Bread" },
  { code: "20229", name: "Charcoal Sandwich Bread - Thick Sliced", packing: "16 pcs/loaf", price: 47.70, category: "Continental Bread" },
  { code: "20225", name: "Crustless Charcoal Sandwich Bread - Thick", packing: "16 pcs/loaf", price: 48.80, category: "Continental Bread" }
];

const els = {};
let state = {
  activeOrder: null,
  submissions: {},
  archives: {}
};
let quantities = {};
let firebaseDb = null;
let useFirebase = false;
let currentSubmissionsListener = null;
let activeSubmissionId = null;
let adminUnlocked = false;
let toastTimer = null;

window.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheElements();
  bindEvents();
  setTodayDefaults();
  renderBreadList();
  renderBasketSummary();
  await initStorage();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

function cacheElements() {
  [
    "connectionStatus", "activeOrderTitle", "activeOrderMeta", "refreshBtn", "noActiveNotice",
    "customerName", "lookupName", "searchBox", "clearQtyBtn", "basketSummary", "breadList",
    "submitOrderBtn", "findOrderBtn", "myOrderResult", "adminPin", "unlockAdminBtn",
    "adminGate", "adminControls", "newOrderDate", "newOrderTitle", "createOrderBtn",
    "compiledSummary", "copySummaryBtn", "submissionCount", "submissionList", "archiveOrderBtn",
    "archiveList", "toast"
  ].forEach(id => els[id] = document.getElementById(id));
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  els.searchBox.addEventListener("input", renderBreadList);
  els.clearQtyBtn.addEventListener("click", () => {
    quantities = {};
    renderBreadList();
    renderBasketSummary();
    showToast("Selection cleared");
  });

  els.submitOrderBtn.addEventListener("click", submitOrder);
  els.findOrderBtn.addEventListener("click", findOrderByName);
  els.unlockAdminBtn.addEventListener("click", unlockAdmin);
  els.createOrderBtn.addEventListener("click", createActiveOrder);
  els.copySummaryBtn.addEventListener("click", () => copyText(els.compiledSummary.value));
  els.archiveOrderBtn.addEventListener("click", archiveCurrentOrder);
  els.refreshBtn.addEventListener("click", renderAll);
}

function setTodayDefaults() {
  const today = new Date().toISOString().slice(0, 10);
  els.newOrderDate.value = today;
  els.newOrderTitle.value = `Bread order for ${today}`;
}

async function initStorage() {
  if (hasFirebaseConfig()) {
    try {
      firebase.initializeApp(window.firebaseConfig);
      firebaseDb = firebase.database();
      useFirebase = true;
      await firebase.auth().signInAnonymously();
      listenToFirebase();
      return;
    } catch (err) {
      console.error(err);
      showToast("Firebase failed. Demo mode started.");
    }
  }
  useFirebase = false;
  loadLocalState();
  setConnection("Demo mode", "offline");
  renderAll();
}

function hasFirebaseConfig() {
  const cfg = window.firebaseConfig || {};
  return cfg.apiKey && !String(cfg.apiKey).includes("PASTE_") && cfg.databaseURL && !String(cfg.databaseURL).includes("PASTE_");
}

function listenToFirebase() {
  firebaseDb.ref(".info/connected").on("value", snap => {
    setConnection(snap.val() ? "Online" : "Offline", snap.val() ? "online" : "offline");
  });

  firebaseDb.ref("orders/active").on("value", snap => {
    const previousId = state.activeOrder?.id;
    state.activeOrder = snap.val();
    if (previousId !== state.activeOrder?.id) {
      attachSubmissionsListener(state.activeOrder?.id);
    }
    renderAll();
  });

  firebaseDb.ref("archives").on("value", snap => {
    state.archives = snap.val() || {};
    renderArchives();
  });
}

function attachSubmissionsListener(orderId) {
  if (currentSubmissionsListener) currentSubmissionsListener.off();
  state.submissions = {};
  if (!orderId) return;
  const ref = firebaseDb.ref(`submissions/${orderId}`);
  currentSubmissionsListener = ref;
  ref.on("value", snap => {
    state.submissions = snap.val() || {};
    loadSavedSubmissionForActiveOrder();
    renderAll();
  });
}

function setConnection(text, mode) {
  els.connectionStatus.textContent = text;
  els.connectionStatus.classList.toggle("online", mode === "online");
  els.connectionStatus.classList.toggle("offline", mode === "offline");
}

function loadLocalState() {
  try {
    state = JSON.parse(localStorage.getItem("bread_app_state") || "{}") || {};
  } catch {
    state = {};
  }
  state.activeOrder ||= null;
  state.submissions ||= {};
  state.archives ||= {};
  loadSavedSubmissionForActiveOrder();
}

function persistLocalState() {
  localStorage.setItem("bread_app_state", JSON.stringify(state));
}

function switchTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  document.querySelectorAll(".panel").forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  if (tabId === "adminTab") renderAdmin();
  if (tabId === "archiveTab") renderArchives();
}

function renderAll() {
  renderActiveOrderCard();
  renderBreadList();
  renderBasketSummary();
  renderMyOrder();
  renderAdmin();
  renderArchives();
}

function renderActiveOrderCard() {
  if (!state.activeOrder) {
    els.activeOrderTitle.textContent = "No active order";
    els.activeOrderMeta.textContent = "The order manager can create one in the Admin panel.";
    els.noActiveNotice.hidden = false;
    els.submitOrderBtn.disabled = true;
    return;
  }
  els.activeOrderTitle.textContent = state.activeOrder.title || "Bread order";
  els.activeOrderMeta.textContent = `${formatDate(state.activeOrder.orderDate)} · ${Object.keys(state.submissions || {}).length} submitted order(s)`;
  els.noActiveNotice.hidden = true;
  els.submitOrderBtn.disabled = false;
}

function renderBreadList() {
  const q = (els.searchBox?.value || "").trim().toLowerCase();
  const filtered = breads.filter(item => {
    const haystack = `${item.code} ${item.name} ${item.packing} ${item.category}`.toLowerCase();
    return haystack.includes(q);
  });

  if (!filtered.length) {
    els.breadList.innerHTML = `<div class="notice">No matching bread found.</div>`;
    return;
  }

  const grouped = filtered.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  els.breadList.innerHTML = Object.entries(grouped).map(([category, items]) => `
    <section class="category-block">
      <h3 class="category-title">${escapeHtml(category)}</h3>
      <div class="category-grid">
        ${items.map(item => {
          const qty = quantities[item.code] || 0;
          return `
            <article class="bread-card" data-code="${item.code}">
              <div>
                <span class="bread-code">${item.code}</span>
                <div class="bread-name">${escapeHtml(item.name)}</div>
                <div class="bread-meta">${escapeHtml(item.packing)} · HK$ ${item.price.toFixed(2)}</div>
              </div>
              <div class="qty-control" aria-label="Quantity for ${escapeHtml(item.name)}">
                <button type="button" data-action="minus" data-code="${item.code}" aria-label="Remove one">−</button>
                <span class="qty-value ${qty ? "has-items" : ""}">${qty}</span>
                <button type="button" data-action="plus" data-code="${item.code}" aria-label="Add one">+</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  els.breadList.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => changeQty(btn.dataset.code, btn.dataset.action === "plus" ? 1 : -1));
  });
}

function changeQty(code, delta) {
  const next = Math.max(0, (quantities[code] || 0) + delta);
  if (next === 0) delete quantities[code];
  else quantities[code] = next;
  renderBreadList();
  renderBasketSummary();
}

function renderBasketSummary() {
  const totalQty = Object.values(quantities).reduce((a, b) => a + Number(b || 0), 0);
  const totalValue = Object.entries(quantities).reduce((sum, [code, qty]) => {
    const item = breads.find(b => b.code === code);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  els.basketSummary.textContent = totalQty
    ? `${totalQty} item(s) selected · Estimated HK$ ${totalValue.toFixed(2)}`
    : "No items selected";
}

async function submitOrder() {
  if (!state.activeOrder) return showToast("No active order yet");

  const name = els.customerName.value.trim();
  if (!name) return showToast("Please enter your name");
  if (Object.keys(quantities).length === 0) return showToast("Please select at least one bread");

  const nameKey = normalizeName(name);
  const existing = findSubmissionByNameKey(nameKey);
  const localKey = localSubmissionKey(state.activeOrder.id);
  const savedId = localStorage.getItem(localKey);
  const submissionId = activeSubmissionId || savedId || existing?.id || generateId();
  const existingCreatedAt = existing?.data?.createdAt || Date.now();

  const payload = {
    id: submissionId,
    name,
    nameKey,
    items: cleanQuantities(quantities),
    createdAt: existingCreatedAt,
    updatedAt: Date.now()
  };

  await saveSubmission(state.activeOrder.id, submissionId, payload);
  activeSubmissionId = submissionId;
  localStorage.setItem(localKey, submissionId);
  showToast(existing ? "Order updated" : "Order submitted");
  switchTab("myOrderTab");
}

function findSubmissionByNameKey(nameKey) {
  const entries = Object.entries(state.submissions || {});
  const found = entries.find(([, sub]) => sub.nameKey === nameKey);
  return found ? { id: found[0], data: found[1] } : null;
}

function findOrderByName() {
  if (!state.activeOrder) return showToast("No active order yet");
  const name = els.lookupName.value.trim() || els.customerName.value.trim();
  if (!name) return showToast("Enter the name used for the order");
  const found = findSubmissionByNameKey(normalizeName(name));
  if (!found) {
    els.myOrderResult.innerHTML = `<p class="muted">No submitted order found for <strong>${escapeHtml(name)}</strong>.</p>`;
    return;
  }
  activeSubmissionId = found.id;
  quantities = { ...found.data.items };
  els.customerName.value = found.data.name;
  localStorage.setItem(localSubmissionKey(state.activeOrder.id), found.id);
  renderAll();
  showToast("Order loaded for editing");
}

function loadSavedSubmissionForActiveOrder() {
  activeSubmissionId = null;
  if (!state.activeOrder) return;
  const savedId = localStorage.getItem(localSubmissionKey(state.activeOrder.id));
  if (savedId && state.submissions?.[savedId]) {
    activeSubmissionId = savedId;
    quantities = { ...(state.submissions[savedId].items || {}) };
    els.customerName.value = state.submissions[savedId].name || els.customerName.value;
  }
}

function renderMyOrder() {
  if (!state.activeOrder) {
    els.myOrderResult.innerHTML = `<p class="muted">No active order yet.</p>`;
    return;
  }
  const sub = activeSubmissionId ? state.submissions?.[activeSubmissionId] : null;
  if (!sub) {
    els.myOrderResult.innerHTML = `<p class="muted">Enter your name above to find your submitted order, or submit a new one from the Order tab.</p>`;
    return;
  }
  els.myOrderResult.innerHTML = `
    <h3>${escapeHtml(sub.name)}</h3>
    <p class="muted">Last updated: ${formatDateTime(sub.updatedAt)}</p>
    ${orderLinesHtml(sub.items)}
    <button class="primary full" id="editLoadedOrderBtn" type="button">Edit this order</button>
  `;
  const editBtn = document.getElementById("editLoadedOrderBtn");
  editBtn?.addEventListener("click", () => switchTab("orderTab"));
}

function unlockAdmin() {
  if (els.adminPin.value === (window.ADMIN_PIN || "1234")) {
    adminUnlocked = true;
    els.adminGate.hidden = true;
    els.adminControls.hidden = false;
    renderAdmin();
    showToast("Admin unlocked");
  } else {
    showToast("Wrong PIN");
  }
}

async function createActiveOrder() {
  if (!adminUnlocked) return showToast("Unlock admin first");
  const orderDate = els.newOrderDate.value || new Date().toISOString().slice(0, 10);
  const title = els.newOrderTitle.value.trim() || `Bread order for ${orderDate}`;

  if (state.activeOrder && !confirm("This will replace the current active order. Archive it first if you need to keep it. Continue?")) return;

  const id = `order_${orderDate}_${Date.now()}`;
  await saveActiveOrder({ id, title, orderDate, status: "active", createdAt: Date.now() });
  state.submissions = {};
  quantities = {};
  activeSubmissionId = null;
  localStorage.removeItem(localSubmissionKey(id));
  showToast("Active order created");
}

function renderAdmin() {
  if (!adminUnlocked) return;
  const summary = buildVendorSummary(state.activeOrder, state.submissions);
  els.compiledSummary.value = summary;
  const count = Object.keys(state.submissions || {}).length;
  els.submissionCount.textContent = `${count}`;

  const entries = Object.values(state.submissions || {}).sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
  els.submissionList.innerHTML = entries.length ? entries.map(sub => `
    <div class="submission-item">
      <strong>${escapeHtml(sub.name)}</strong>
      <div class="muted">${formatDateTime(sub.updatedAt)}</div>
      ${orderLinesHtml(sub.items)}
    </div>
  `).join("") : `<p class="muted">No submissions yet.</p>`;
}

async function archiveCurrentOrder() {
  if (!adminUnlocked) return showToast("Unlock admin first");
  if (!state.activeOrder) return showToast("No active order to archive");
  const count = Object.keys(state.submissions || {}).length;
  if (!confirm(`Archive this active order with ${count} submitted order(s)?`)) return;

  const archive = {
    ...state.activeOrder,
    status: "archived",
    archivedAt: Date.now(),
    submissions: state.submissions || {},
    totals: calculateTotals(state.submissions || {})
  };

  await archiveOrder(archive);
  state.activeOrder = null;
  state.submissions = {};
  quantities = {};
  activeSubmissionId = null;
  renderAll();
  showToast("Order archived");
}

function renderArchives() {
  const archives = Object.values(state.archives || {}).sort((a, b) => (b.archivedAt || 0) - (a.archivedAt || 0));
  els.archiveList.innerHTML = archives.length ? archives.map(archive => {
    const summary = buildVendorSummary(archive, archive.submissions || {}, true);
    const safeSummary = encodeURIComponent(summary);
    return `
      <div class="archive-item">
        <strong>${escapeHtml(archive.title || "Archived order")}</strong>
        <div class="muted">${formatDate(archive.orderDate)} · archived ${formatDateTime(archive.archivedAt)}</div>
        <button class="ghost" type="button" data-copy-archive="${safeSummary}">Copy vendor summary</button>
      </div>
    `;
  }).join("") : `<div class="notice">No archived orders yet.</div>`;

  els.archiveList.querySelectorAll("button[data-copy-archive]").forEach(btn => {
    btn.addEventListener("click", () => copyText(decodeURIComponent(btn.dataset.copyArchive)));
  });
}

async function saveActiveOrder(order) {
  if (useFirebase) {
    await firebaseDb.ref("orders/active").set(order);
    await firebaseDb.ref(`submissions/${order.id}`).set({});
  } else {
    state.activeOrder = order;
    state.submissions = {};
    persistLocalState();
    renderAll();
  }
}

async function saveSubmission(orderId, submissionId, payload) {
  if (useFirebase) {
    await firebaseDb.ref(`submissions/${orderId}/${submissionId}`).set(payload);
  } else {
    state.submissions[submissionId] = payload;
    persistLocalState();
    renderAll();
  }
}

async function archiveOrder(archive) {
  if (useFirebase) {
    const updates = {};
    updates[`archives/${archive.id}`] = archive;
    updates[`orders/active`] = null;
    updates[`submissions/${archive.id}`] = null;
    await firebaseDb.ref().update(updates);
  } else {
    state.archives[archive.id] = archive;
    state.activeOrder = null;
    state.submissions = {};
    persistLocalState();
  }
}

function buildVendorSummary(order, submissions, fromArchive = false) {
  if (!order) return "No active order.";
  const totals = fromArchive && order.totals ? order.totals : calculateTotals(submissions || {});
  const codes = Object.keys(totals).sort((a, b) => a.localeCompare(b));
  const lines = [];
  lines.push(order.title || "Bread order");
  lines.push(`Date: ${formatDate(order.orderDate)}`);
  lines.push("");
  if (!codes.length) {
    lines.push("No items ordered yet.");
    return lines.join("\n");
  }
  codes.forEach(code => {
    const item = breads.find(b => b.code === code);
    const label = item ? `${code} ${item.name}` : code;
    lines.push(`${label} x ${totals[code]}`);
  });
  const totalQty = Object.values(totals).reduce((a, b) => a + Number(b || 0), 0);
  lines.push("");
  lines.push(`Total quantity: ${totalQty}`);
  return lines.join("\n");
}

function calculateTotals(submissions) {
  const totals = {};
  Object.values(submissions || {}).forEach(sub => {
    Object.entries(sub.items || {}).forEach(([code, qty]) => {
      totals[code] = (totals[code] || 0) + Number(qty || 0);
    });
  });
  return totals;
}

function orderLinesHtml(items = {}) {
  const entries = Object.entries(items).filter(([, qty]) => Number(qty) > 0);
  if (!entries.length) return `<p class="muted">No items.</p>`;
  return `<ul class="order-lines">${entries.map(([code, qty]) => {
    const item = breads.find(b => b.code === code);
    return `<li><span>${code} ${escapeHtml(item?.name || "")}</span><strong>x ${qty}</strong></li>`;
  }).join("")}</ul>`;
}

function cleanQuantities(obj) {
  const clean = {};
  Object.entries(obj || {}).forEach(([code, qty]) => {
    const n = Number(qty || 0);
    if (n > 0) clean[code] = n;
  });
  return clean;
}

function localSubmissionKey(orderId) {
  return `bread_submission_id_${orderId}`;
}

function generateId() {
  if (useFirebase && firebaseDb) return firebaseDb.ref().push().key;
  return `local_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function normalizeName(name) {
  return String(name || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "No date";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function formatDateTime(value) {
  if (!value) return "Unknown time";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown time";
  return date.toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

async function copyText(text) {
  if (!text || text === "No active order.") return showToast("Nothing to copy");
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied");
  } catch {
    els.compiledSummary?.select();
    document.execCommand("copy");
    showToast("Copied");
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}
