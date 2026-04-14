const translations = {
  zh: {
    brandKicker: "EXHIBITION GAME STUDIO",
    brandTitle: "幸运轮盘",
    brandSubtitle: "适用于线下活动、品牌互动与礼品抽奖。",
    activityLabel: "游戏列表",
    wheelTitle: "幸运轮盘",
    wheelDesc: "礼品、积分、折扣券即时抽取",
    blindTitle: "抽盲盒",
    blindDesc: "惊喜揭晓式奖励互动",
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
    showChance: "显示几率",
    hideChance: "隐藏几率",
    prizeChance: "几率",
    resetDefault: "恢复默认",
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
    blindDesc: "Surprise reveal interaction",
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
    resetDefault: "Reset",
    showChance: "Show Chance",
    hideChance: "Hide Chance",
    prizeChance: "Chance",
    congratsTag: "Result",
    resultCopy: "The reward reveal is designed to feel social-first, with enough ceremony to invite photos and booth-side sharing.",
    drawAgain: "Spin Again",
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
    subLabel: "rgba(78,39,64,0.72)",
    centerOuter: "#fff6fb",
    centerInner: "#ef5da8",
    wheelGlow: "rgba(239, 93, 168, 0.16)",
  },
  orange: {
    slices: ["#ff9f45", "#ffd166", "#ffb86b", "#ff8f70", "#ffc857", "#ffb347"],
    label: "#5e3212",
    subLabel: "rgba(94,50,18,0.7)",
    centerOuter: "#fff7ef",
    centerInner: "#ff8a2a",
    wheelGlow: "rgba(255, 138, 42, 0.16)",
  },
  blue: {
    slices: ["#7ec8ff", "#65b4ff", "#93d5ff", "#69a8ff", "#89c3ff", "#72d8f8"],
    label: "#173b67",
    subLabel: "rgba(23,59,103,0.68)",
    centerOuter: "#f4faff",
    centerInner: "#2a7fff",
    wheelGlow: "rgba(42, 127, 255, 0.16)",
  },
  space: {
    slices: ["#222831", "#2d3642", "#1b212b", "#323c4d", "#0f141b", "#3d495d"],
    label: "#eef4ff",
    subLabel: "rgba(226,235,247,0.72)",
    centerOuter: "#1d2530",
    centerInner: "#5ea6ff",
    wheelGlow: "rgba(94, 166, 255, 0.16)",
  },
  klein: {
    slices: ["#0047ff", "#1557ff", "#2f63ff", "#0d52ff", "#366dff", "#0036d6"],
    label: "#f6f9ff",
    subLabel: "rgba(232,240,255,0.8)",
    centerOuter: "#e8f0ff",
    centerInner: "#003cff",
    wheelGlow: "rgba(0, 71, 255, 0.2)",
  },
};

const defaultItemsByLang = {
  zh: [
    { label: "限定礼盒", score: 30, weight: 16, color: "#f6a6c6" },
    { label: "品牌香氛卡", score: 15, weight: 24, color: "#ffcb77" },
    { label: "新品试用装", score: 25, weight: 20, color: "#98ead8" },
    { label: "午后甜点券", score: 20, weight: 18, color: "#ffd8a8" },
    { label: "专属折扣码", score: 35, weight: 14, color: "#f8bfd7" },
    { label: "隐藏惊喜奖", score: 50, weight: 8, color: "#c8b6ff" },
  ],
  en: [
    { label: "Gift Box", score: 30, weight: 16, color: "#f6a6c6" },
    { label: "Scent Card", score: 15, weight: 24, color: "#ffcb77" },
    { label: "Sample Kit", score: 25, weight: 20, color: "#98ead8" },
    { label: "Dessert Pass", score: 20, weight: 18, color: "#ffd8a8" },
    { label: "Promo Code", score: 35, weight: 14, color: "#f8bfd7" },
    { label: "Secret Prize", score: 50, weight: 8, color: "#c8b6ff" },
  ],
};

const canvas = document.querySelector("#wheelCanvas");
const ctx = canvas.getContext("2d");
const itemList = document.querySelector("#itemList");
const itemTemplate = document.querySelector("#itemTemplate");
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

let currentLang = "zh";
let items = structuredClone(defaultItemsByLang.zh);
let rotation = 0;
let isSpinning = false;
let currentTheme = "pink";
let showChanceInfo = false;

function getFocusedIndex() {
  if (!items.length) return 0;
  const slice = (Math.PI * 2) / items.length;
  const normalized = ((-rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return Math.round(normalized / slice) % items.length;
}

function getWeightShares() {
  const totalWeight = items.reduce((sum, item) => sum + Math.max(0, Number(item.weight) || 0), 0);
  if (totalWeight <= 0) return items.map(() => 0);
  return items.map((item) => (Math.max(0, Number(item.weight) || 0) / totalWeight) * 100);
}

function getShareText(value) {
  return `${value.toFixed(1)}%`;
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

  const slice = (Math.PI * 2) / Math.max(items.length, 1);
  items.forEach((item, index) => {
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

  const focused = items[getFocusedIndex()];
  if (focused) {
    focusedLabel.textContent = focused.label;
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === theme);
  });
}

function renderList() {
  itemList.innerHTML = "";
  const shares = getWeightShares();
  items.forEach((item, index) => {
    const row = itemTemplate.content.firstElementChild.cloneNode(true);
    const nameDisplay = row.querySelector(".item-name-display");
    const weightInput = row.querySelector(".item-weight");
    const shareDisplay = row.querySelector(".item-share");
    const removeButton = row.querySelector(".remove-button");

    nameDisplay.textContent = item.label;
    weightInput.value = item.weight ?? 1;
    shareDisplay.textContent = showChanceInfo ? getShareText(shares[index] ?? 0) : "--";

    weightInput.addEventListener("input", (event) => {
      items[index].weight = Math.max(0, Number(event.target.value) || 0);
      renderList();
      drawWheel();
    });

    removeButton.addEventListener("click", () => {
      if (items.length <= 2) return;
      items.splice(index, 1);
      renderList();
      drawWheel();
    });

    itemList.appendChild(row);
  });
}

function randomColor() {
  const palette = (themePalettes[currentTheme] || themePalettes.pink).slices;
  return palette[Math.floor(Math.random() * palette.length)];
}

function addItem() {
  items.push({
    label: currentLang === "zh" ? `新奖项 ${items.length + 1}` : `Prize ${items.length + 1}`,
    weight: 10,
    color: randomColor(),
  });
  renderList();
  drawWheel();
}

function pickWeightedWinnerIndex() {
  const normalizedWeights = items.map((item) => Math.max(0, Number(item.weight) || 0));
  const totalWeight = normalizedWeights.reduce((sum, weight) => sum + weight, 0);

  if (totalWeight <= 0) {
    return Math.floor(Math.random() * items.length);
  }

  let threshold = Math.random() * totalWeight;

  for (let index = 0; index < normalizedWeights.length; index += 1) {
    threshold -= normalizedWeights[index];
    if (threshold < 0) {
      return index;
    }
  }

  return normalizedWeights.length - 1;
}

function shuffleItems() {
  items = items
    .map((item) => ({ key: Math.random(), value: item }))
    .sort((a, b) => a.key - b.key)
    .map(({ value }) => value);
  renderList();
  drawWheel();
}

function resetItems() {
  items = structuredClone(defaultItemsByLang[currentLang]);
  rotation = 0;
  renderList();
  drawWheel();
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function spin() {
  if (isSpinning || items.length < 2) return;
  isSpinning = true;
  spinButton.disabled = true;

  const winnerIndex = pickWeightedWinnerIndex();
  const slice = (Math.PI * 2) / items.length;
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

    const focused = items[getFocusedIndex()];
    resultTitle.textContent = focused.label;
    resultMeta.textContent = currentLang === "zh" ? "恭喜抽中" : "Congratulations";
    resultDialog.showModal();
  }

  requestAnimationFrame(animate);
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

  if (JSON.stringify(items) === JSON.stringify(defaultItemsByLang.zh) || JSON.stringify(items) === JSON.stringify(defaultItemsByLang.en)) {
    items = structuredClone(defaultItemsByLang[lang]);
  }

  renderList();
  drawWheel();
}

activityCards.forEach((card) => {
  card.addEventListener("click", () => {
    activityCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
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

  if (distance <= 62) {
    spin();
  }
});

shuffleButton.addEventListener("click", shuffleItems);
addItemButton.addEventListener("click", addItem);
resetButton.addEventListener("click", resetItems);
toggleChanceButton.addEventListener("click", () => {
  showChanceInfo = !showChanceInfo;
  toggleChanceButton.textContent = translations[currentLang][showChanceInfo ? "hideChance" : "showChance"];
  renderList();
});
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

renderList();
applyTheme(currentTheme);
toggleChanceButton.textContent = translations[currentLang].showChance;
drawWheel();
