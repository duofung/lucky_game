const translations = {
  zh: {
    brandKicker: "EXHIBITION GAME STUDIO",
    brandTitle: "幸运轮盘",
    brandSubtitle: "适用于线下活动、品牌互动与礼品抽奖。",
    activityLabel: "游戏列表",
    wheelTitle: "幸运轮盘",
    wheelDesc: "礼品、积分、折扣券即时抽取",
    blindTitle: "抽盲盒",
    blindDesc: "66 个礼盒随机揭晓，人人有奖",
    blindPreview: "盲盒礼物墙",
    blindStatsDefault: "已开启 0 / 66",
    blindEditorLabel: "盲盒配置",
    boxTotal: "总盒子数",
    assignedCount: "已分配",
    remainingCount: "剩余",
    blindboxQty: "数量",
    prizeRare: "稀有度",
    generateBlindbox: "生成盲盒",
    shuffleBlindbox: "重新打乱",
    resetBlindboxConfig: "恢复盲盒默认",
    resetRound: "重置本轮",
    blindboxReady: "已达到可生成状态",
    blindboxNeedFill: "还差 {count} 个盒子未分配",
    blindboxOverfill: "超出 {count} 个盒子，请减少数量",
    rouletteTitle: "左轮轮盘赌",
    rouletteDesc: "戏剧化停顿与刺激感氛围",
    memoryTitle: "九宫格记忆力",
    memoryDesc: "短时挑战，适合排队与围观",
    pachinkoTitle: "幸运弹珠",
    pachinkoDesc: "适合人流停留的掉落式抽奖",
    giftWallTitle: "礼盒翻牌墙",
    giftWallDesc: "适合多人围观的翻牌揭晓",
    timerTitle: "秒杀倒计时",
    timerDesc: "适合整点冲刺和限量奖励",
    comingSoon: "即将上线",
    livePreview: "现场预览",
    spinNow: "开始抽奖",
    nextPrize: "当前焦点奖项",
    shuffleOrder: "随机排序",
    editorLabel: "玩法编辑",
    addItem: "新增奖项",
    prizeName: "奖项名称",
    prizeWeight: "权重",
    prizeChance: "几率",
    resetDefault: "恢复默认",
    showChance: "显示几率",
    hideChance: "隐藏几率",
    congratsTag: "抽奖结果",
    resultCopy: "恭喜抽中高人气奖励，现场视觉会更适合用户举起手机拍照分享。",
    drawAgain: "再次抽取",
    skinLabel: "皮肤切换",
    themePink: "少女粉",
    themeOrange: "阳光橙",
    themeBlue: "天之蓝",
    themeSpace: "科技黑",
    themeKlein: "克莱因蓝",
    footerMadeBy: "技术支持：价直互联（深圳）展览科技有限公司",
  },
  en: {
    brandKicker: "EXHIBITION GAME STUDIO",
    brandTitle: "Lucky Wheel",
    brandSubtitle: "For offline campaigns, brand activations, and giveaway draws.",
    activityLabel: "Game List",
    wheelTitle: "Lucky Wheel",
    wheelDesc: "Spin for gifts, credits, and coupons",
    blindTitle: "Blind Box",
    blindDesc: "A 66-box reward wall with guaranteed prizes",
    blindPreview: "Blind Box Wall",
    blindStatsDefault: "Opened 0 / 66",
    blindEditorLabel: "Blind Box Setup",
    boxTotal: "Total Boxes",
    assignedCount: "Assigned",
    remainingCount: "Remaining",
    blindboxQty: "Qty",
    prizeRare: "Tier",
    generateBlindbox: "Generate Boxes",
    shuffleBlindbox: "Shuffle Layout",
    resetBlindboxConfig: "Reset Blind Box",
    resetRound: "Reset Round",
    blindboxReady: "Ready to generate",
    blindboxNeedFill: "{count} boxes still need prizes",
    blindboxOverfill: "Over by {count} boxes, reduce the quantities",
    rouletteTitle: "Roulette Challenge",
    rouletteDesc: "Dramatic suspense and stage energy",
    memoryTitle: "Memory Grid",
    memoryDesc: "Fast challenge for queue-time engagement",
    pachinkoTitle: "Lucky Pachinko",
    pachinkoDesc: "Drop-play prizes for booth traffic",
    giftWallTitle: "Gift Flip Wall",
    giftWallDesc: "Reveal-based prizes for group crowds",
    timerTitle: "Countdown Rush",
    timerDesc: "Timed reward sprints for key moments",
    comingSoon: "Coming Soon",
    livePreview: "Live Preview",
    spinNow: "Spin Now",
    nextPrize: "Current Focus",
    shuffleOrder: "Shuffle",
    editorLabel: "Editor",
    addItem: "Add Prize",
    prizeName: "Prize Name",
    prizeWeight: "Weight",
    prizeChance: "Chance",
    resetDefault: "Reset",
    showChance: "Show Chance",
    hideChance: "Hide Chance",
    congratsTag: "Result",
    resultCopy: "The reward reveal is designed to feel social-first, with enough ceremony to invite photos and booth-side sharing.",
    drawAgain: "Draw Again",
    skinLabel: "Theme Switch",
    themePink: "Blush Pink",
    themeOrange: "Sunny Orange",
    themeBlue: "Sky Blue",
    themeSpace: "Tech Black",
    themeKlein: "Klein Blue",
    footerMadeBy: "Technical Support: Value Link Interconnect (Shenzhen) Exhibition Technology Co., Ltd.",
  },
};

const themePalettes = {
  pink: {
    slices: ["#f3a6c9", "#ffd07d", "#96e5d2", "#ffd6a5", "#bca9ff", "#f28ab8"],
    label: "#4e2740",
    centerOuter: "#fff6fb",
    centerInner: "#ef5da8",
  },
  orange: {
    slices: ["#ff9f45", "#ffd166", "#ffb86b", "#ff8f70", "#ffc857", "#ffb347"],
    label: "#5e3212",
    centerOuter: "#fff7ef",
    centerInner: "#ff8a2a",
  },
  blue: {
    slices: ["#7ec8ff", "#65b4ff", "#93d5ff", "#69a8ff", "#89c3ff", "#72d8f8"],
    label: "#173b67",
    centerOuter: "#f4faff",
    centerInner: "#2a7fff",
  },
  space: {
    slices: ["#222831", "#2d3642", "#1b212b", "#323c4d", "#0f141b", "#3d495d"],
    label: "#eef4ff",
    centerOuter: "#1d2530",
    centerInner: "#5ea6ff",
  },
  klein: {
    slices: ["#0047ff", "#1557ff", "#2f63ff", "#0d52ff", "#366dff", "#0036d6"],
    label: "#f6f9ff",
    centerOuter: "#e8f0ff",
    centerInner: "#003cff",
  },
};

const defaultWheelItemsByLang = {
  zh: [
    { label: "限定礼盒", weight: 16 },
    { label: "品牌香氛卡", weight: 24 },
    { label: "新品试用装", weight: 20 },
    { label: "午后甜点券", weight: 18 },
    { label: "专属折扣码", weight: 14 },
    { label: "隐藏惊喜奖", weight: 8 },
  ],
  en: [
    { label: "Gift Box", weight: 16 },
    { label: "Scent Card", weight: 24 },
    { label: "Sample Kit", weight: 20 },
    { label: "Dessert Pass", weight: 18 },
    { label: "Promo Code", weight: 14 },
    { label: "Secret Prize", weight: 8 },
  ],
};

const blindboxBoxCount = 66;
const defaultBlindboxPrizesByLang = {
  zh: [
    { label: "典藏礼盒", qty: 2, rarity: "超稀有" },
    { label: "品牌水杯", qty: 4, rarity: "稀有" },
    { label: "联名香薰卡", qty: 6, rarity: "稀有" },
    { label: "定制笔记本", qty: 8, rarity: "精选" },
    { label: "新品试用装", qty: 10, rarity: "精选" },
    { label: "品牌手提袋", qty: 36, rarity: "基础" },
  ],
  en: [
    { label: "Collector Box", qty: 2, rarity: "Ultra" },
    { label: "Branded Tumbler", qty: 4, rarity: "Rare" },
    { label: "Scent Card", qty: 6, rarity: "Rare" },
    { label: "Notebook", qty: 8, rarity: "Select" },
    { label: "Sample Kit", qty: 10, rarity: "Select" },
    { label: "Carry Bag", qty: 36, rarity: "Base" },
  ],
};

const canvas = document.querySelector("#wheelCanvas");
const ctx = canvas.getContext("2d");
const itemList = document.querySelector("#itemList");
const itemTemplate = document.querySelector("#itemTemplate");
const blindboxPrizeTemplate = document.querySelector("#blindboxPrizeTemplate");
const blindboxCellTemplate = document.querySelector("#blindboxCellTemplate");
const focusedLabel = document.querySelector("#focusedLabel");
const spinButton = document.querySelector("#spinButton");
const shuffleButton = document.querySelector("#shuffleButton");
const addItemButton = document.querySelector("#addItemButton");
const resetButton = document.querySelector("#resetButton");
const toggleChanceButton = document.querySelector("#toggleChanceButton");
const resultDialog = document.querySelector("#resultDialog");
const resultTitle = document.querySelector("#resultTitle");
const resultMeta = document.querySelector("#resultMeta");
const closeDialogButton = document.querySelector("#closeDialogButton");
const langButtons = document.querySelectorAll("[data-lang]");
const activityCards = document.querySelectorAll(".activity-card");
const themeButtons = document.querySelectorAll("[data-theme]");
const activityPanels = document.querySelectorAll(".activity-panel");
const blindboxPrizeList = document.querySelector("#blindboxPrizeList");
const blindboxGrid = document.querySelector("#blindboxGrid");
const generateBlindboxButton = document.querySelector("#generateBlindboxButton");
const shuffleBlindboxButton = document.querySelector("#shuffleBlindboxButton");
const resetBlindboxConfigButton = document.querySelector("#resetBlindboxConfigButton");
const resetBlindboxBoardButton = document.querySelector("#resetBlindboxBoardButton");
const blindboxStats = document.querySelector("#blindboxStats");
const boxTotalValue = document.querySelector("#boxTotalValue");
const assignedCountValue = document.querySelector("#assignedCountValue");
const remainingCountValue = document.querySelector("#remainingCountValue");
const blindboxValidation = document.querySelector("#blindboxValidation");

let currentLang = "zh";
let currentTheme = "pink";
let currentActivity = "wheel";
let showChanceInfo = false;
let wheelItems = structuredClone(defaultWheelItemsByLang.zh);
let blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang.zh);
let blindboxCells = [];
let rotation = 0;
let isSpinning = false;

function translateWithCount(template, count) {
  return template.replace("{count}", String(count));
}

function getWheelShares() {
  const totalWeight = wheelItems.reduce((sum, item) => sum + Math.max(0, Number(item.weight) || 0), 0);
  if (totalWeight <= 0) return wheelItems.map(() => 0);
  return wheelItems.map((item) => (Math.max(0, Number(item.weight) || 0) / totalWeight) * 100);
}

function getShareText(value) {
  return `${value.toFixed(1)}%`;
}

function getFocusedIndex() {
  if (!wheelItems.length) return 0;
  const slice = (Math.PI * 2) / wheelItems.length;
  const normalized = ((-rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return Math.round(normalized / slice) % wheelItems.length;
}

function drawWheel() {
  const center = canvas.width / 2;
  const radius = center - 18;
  const themePalette = themePalettes[currentTheme] || themePalettes.pink;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createRadialGradient(center, center, 30, center, center, radius);
  gradient.addColorStop(0, "rgba(255,255,255,0.96)");
  gradient.addColorStop(1, "rgba(255,240,247,0.88)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fill();

  const slice = (Math.PI * 2) / Math.max(wheelItems.length, 1);
  wheelItems.forEach((item, index) => {
    const start = rotation - Math.PI / 2 - slice / 2 + index * slice;
    const end = start + slice;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius - 8, start, end);
    ctx.closePath();
    ctx.fillStyle = themePalette.slices[index % themePalette.slices.length];
    ctx.fill();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(start + slice / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = themePalette.label;
    ctx.font = "700 25px 'PingFang SC'";
    ctx.fillText(item.label, radius - 72, 10);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(center, center, 58, 0, Math.PI * 2);
  ctx.fillStyle = themePalette.centerOuter;
  ctx.fill();
  ctx.lineWidth = 12;
  ctx.strokeStyle = "rgba(255,255,255,0.7)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, 24, 0, Math.PI * 2);
  ctx.fillStyle = themePalette.centerInner;
  ctx.fill();

  const focused = wheelItems[getFocusedIndex()];
  if (focused) focusedLabel.textContent = focused.label;
}

function renderWheelEditor() {
  itemList.innerHTML = "";
  const shares = getWheelShares();

  wheelItems.forEach((item, index) => {
    const row = itemTemplate.content.firstElementChild.cloneNode(true);
    const nameDisplay = row.querySelector(".item-name-display");
    const weightInput = row.querySelector(".item-weight");
    const shareDisplay = row.querySelector(".item-share");
    const removeButton = row.querySelector(".remove-button");

    nameDisplay.textContent = item.label;
    weightInput.value = item.weight;
    shareDisplay.textContent = showChanceInfo ? getShareText(shares[index] || 0) : "--";

    weightInput.addEventListener("input", (event) => {
      wheelItems[index].weight = Math.max(0, Number(event.target.value) || 0);
      renderWheelEditor();
    });

    removeButton.addEventListener("click", () => {
      if (wheelItems.length <= 2) return;
      wheelItems.splice(index, 1);
      renderWheelEditor();
      drawWheel();
    });

    itemList.appendChild(row);
  });

  drawWheel();
}

function addWheelItem() {
  wheelItems.push({
    label: currentLang === "zh" ? `新奖项 ${wheelItems.length + 1}` : `Prize ${wheelItems.length + 1}`,
    weight: 10,
  });
  renderWheelEditor();
}

function resetWheelItems() {
  wheelItems = structuredClone(defaultWheelItemsByLang[currentLang]);
  rotation = 0;
  renderWheelEditor();
}

function pickWeightedWinnerIndex() {
  const weights = wheelItems.map((item) => Math.max(0, Number(item.weight) || 0));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) return Math.floor(Math.random() * wheelItems.length);

  let threshold = Math.random() * total;
  for (let index = 0; index < weights.length; index += 1) {
    threshold -= weights[index];
    if (threshold < 0) return index;
  }
  return weights.length - 1;
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function spin() {
  if (isSpinning || wheelItems.length < 2) return;
  isSpinning = true;
  spinButton.disabled = true;

  const winnerIndex = pickWeightedWinnerIndex();
  const slice = (Math.PI * 2) / wheelItems.length;
  const currentNormalized = ((rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const targetRotation = ((-winnerIndex * slice) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  const extraTurns = Math.PI * 2 * 6;
  const delta = ((targetRotation - currentNormalized) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  const finalRotation = rotation + extraTurns + delta;
  const startRotation = rotation;
  const startTime = performance.now();
  const duration = 4200;

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    rotation = startRotation + (finalRotation - startRotation) * easeOutCubic(progress);
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
      return;
    }

    rotation = finalRotation % (Math.PI * 2);
    drawWheel();
    isSpinning = false;
    spinButton.disabled = false;
    const focused = wheelItems[getFocusedIndex()];
    resultTitle.textContent = focused.label;
    resultMeta.textContent = currentLang === "zh" ? "恭喜抽中" : "Congratulations";
    resultDialog.showModal();
  }

  requestAnimationFrame(animate);
}

function updateBlindboxSummary() {
  const assigned = blindboxPrizes.reduce((sum, prize) => sum + (Number(prize.qty) || 0), 0);
  const remaining = blindboxBoxCount - assigned;

  boxTotalValue.textContent = String(blindboxBoxCount);
  assignedCountValue.textContent = `${assigned} / ${blindboxBoxCount}`;
  remainingCountValue.textContent = String(remaining);

  if (remaining === 0) {
    blindboxValidation.textContent = translations[currentLang].blindboxReady;
    blindboxValidation.dataset.state = "ready";
    generateBlindboxButton.disabled = false;
  } else if (remaining > 0) {
    blindboxValidation.textContent = translateWithCount(translations[currentLang].blindboxNeedFill, remaining);
    blindboxValidation.dataset.state = "warn";
    generateBlindboxButton.disabled = true;
  } else {
    blindboxValidation.textContent = translateWithCount(translations[currentLang].blindboxOverfill, Math.abs(remaining));
    blindboxValidation.dataset.state = "warn";
    generateBlindboxButton.disabled = true;
  }
}

function getBlindboxShares() {
  const total = blindboxPrizes.reduce((sum, prize) => sum + (Number(prize.qty) || 0), 0);
  if (total <= 0) return blindboxPrizes.map(() => 0);
  return blindboxPrizes.map((prize) => ((Number(prize.qty) || 0) / total) * 100);
}

function renderBlindboxPrizeList() {
  blindboxPrizeList.innerHTML = "";
  const shares = getBlindboxShares();

  blindboxPrizes.forEach((prize, index) => {
    const row = blindboxPrizeTemplate.content.firstElementChild.cloneNode(true);
    const nameInput = row.querySelector(".blindbox-prize-name");
    const qtyInput = row.querySelector(".blindbox-prize-qty");
    const share = row.querySelector(".blindbox-prize-share");
    const rarity = row.querySelector(".blindbox-prize-rare");
    const remove = row.querySelector(".blindbox-remove");

    nameInput.value = prize.label;
    qtyInput.value = prize.qty;
    share.textContent = getShareText(shares[index] || 0);
    rarity.textContent = prize.rarity;

    nameInput.addEventListener("input", (event) => {
      blindboxPrizes[index].label = event.target.value.trim() || (currentLang === "zh" ? "未命名礼物" : "Untitled");
      if (blindboxCells.length) renderBlindboxGrid();
    });

    qtyInput.addEventListener("input", (event) => {
      blindboxPrizes[index].qty = Math.max(0, Number(event.target.value) || 0);
      renderBlindboxPrizeList();
    });

    remove.addEventListener("click", () => {
      if (blindboxPrizes.length <= 2) return;
      blindboxPrizes.splice(index, 1);
      renderBlindboxPrizeList();
    });

    blindboxPrizeList.appendChild(row);
  });

  updateBlindboxSummary();
}

function buildBlindboxPool() {
  const pool = [];
  blindboxPrizes.forEach((prize) => {
    for (let index = 0; index < prize.qty; index += 1) {
      pool.push({ label: prize.label, rarity: prize.rarity, opened: false });
    }
  });
  return pool;
}

function shuffleArray(list) {
  return [...list]
    .map((value) => ({ key: Math.random(), value }))
    .sort((a, b) => a.key - b.key)
    .map(({ value }) => value);
}

function updateBlindboxStats() {
  const opened = blindboxCells.filter((cell) => cell.opened).length;
  blindboxStats.textContent =
    currentLang === "zh" ? `已开启 ${opened} / ${blindboxBoxCount}` : `Opened ${opened} / ${blindboxBoxCount}`;
}

function renderBlindboxGrid() {
  blindboxGrid.innerHTML = "";
  blindboxCells.forEach((cell, index) => {
    const button = blindboxCellTemplate.content.firstElementChild.cloneNode(true);
    const label = button.querySelector(".blindbox-cell-label");
    button.dataset.rarity = cell.rarity;
    label.textContent = cell.opened ? cell.label : String(index + 1).padStart(2, "0");
    if (cell.opened) button.classList.add("opened");
    button.addEventListener("click", () => openBlindbox(index));
    blindboxGrid.appendChild(button);
  });
  updateBlindboxStats();
}

function generateBlindboxBoard() {
  const assigned = blindboxPrizes.reduce((sum, prize) => sum + (Number(prize.qty) || 0), 0);
  if (assigned !== blindboxBoxCount) return;
  blindboxCells = shuffleArray(buildBlindboxPool());
  renderBlindboxGrid();
}

function resetBlindboxBoard() {
  if (!blindboxCells.length) return;
  blindboxCells = blindboxCells.map((cell) => ({ ...cell, opened: false }));
  renderBlindboxGrid();
}

function resetBlindboxConfig() {
  blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang[currentLang]);
  renderBlindboxPrizeList();
  blindboxCells = [];
  blindboxGrid.innerHTML = "";
  blindboxStats.textContent = translations[currentLang].blindStatsDefault;
}

function openBlindbox(index) {
  const cell = blindboxCells[index];
  if (!cell || cell.opened) return;
  cell.opened = true;
  renderBlindboxGrid();
  resultTitle.textContent = cell.label;
  resultMeta.textContent = currentLang === "zh" ? `${cell.rarity} 礼物` : `${cell.rarity} reward`;
  resultDialog.showModal();
}

function applyTheme(theme) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === theme);
  });
  drawWheel();
  if (blindboxCells.length) renderBlindboxGrid();
}

function setActiveActivity(activity) {
  currentActivity = activity;
  activityCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.activity === activity);
  });

  activityPanels.forEach((panel) => {
    const panelName = panel.dataset.panel;
    const show =
      (activity === "wheel" && (panelName === "wheel" || panelName === "wheel-editor")) ||
      (activity === "blindbox" && (panelName === "blindbox" || panelName === "blindbox-editor"));
    panel.classList.toggle("active", show);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  toggleChanceButton.textContent = translations[lang][showChanceInfo ? "hideChance" : "showChance"];
  blindboxStats.textContent = translations[lang].blindStatsDefault;
  wheelItems = structuredClone(defaultWheelItemsByLang[lang]);
  blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang[lang]);
  blindboxCells = [];
  blindboxGrid.innerHTML = "";
  renderWheelEditor();
  renderBlindboxPrizeList();
  drawWheel();
}

activityCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.activity === "wheel" || card.dataset.activity === "blindbox") {
      setActiveActivity(card.dataset.activity);
    }
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.theme));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

spinButton.addEventListener("click", spin);
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const center = canvas.width / 2;
  const distance = Math.hypot(x - center, y - center);
  if (distance <= 62) spin();
});

shuffleButton.addEventListener("click", () => {
  wheelItems = shuffleArray(wheelItems);
  renderWheelEditor();
});
addItemButton.addEventListener("click", addWheelItem);
resetButton.addEventListener("click", resetWheelItems);
toggleChanceButton.addEventListener("click", () => {
  showChanceInfo = !showChanceInfo;
  toggleChanceButton.textContent = translations[currentLang][showChanceInfo ? "hideChance" : "showChance"];
  renderWheelEditor();
});

generateBlindboxButton.addEventListener("click", generateBlindboxBoard);
shuffleBlindboxButton.addEventListener("click", generateBlindboxBoard);
resetBlindboxConfigButton.addEventListener("click", resetBlindboxConfig);
resetBlindboxBoardButton.addEventListener("click", resetBlindboxBoard);

closeDialogButton.addEventListener("click", () => resultDialog.close());
resultDialog.addEventListener("click", (event) => {
  const bounds = resultDialog.getBoundingClientRect();
  const isOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (isOutside) resultDialog.close();
});

renderWheelEditor();
renderBlindboxPrizeList();
applyTheme(currentTheme);
toggleChanceButton.textContent = translations[currentLang].showChance;
setActiveActivity("wheel");
drawWheel();
