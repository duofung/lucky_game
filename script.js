const translations = {
  zh: {
    brandTitle: "展会互动引流平台",
    brandSubtitle: "面向参展商的高颜值互动活动系统，让驻足、拍照、传播与留资自然发生。",
    activityLabel: "活动矩阵",
    wheelTitle: "幸运轮盘",
    wheelDesc: "礼品、积分、折扣券即时抽取",
    blindTitle: "抽盲盒",
    blindDesc: "惊喜揭晓式奖励互动",
    rouletteTitle: "左轮轮盘赌",
    rouletteDesc: "戏剧化停顿与刺激感氛围",
    memoryTitle: "九宫格记忆力",
    memoryDesc: "短时挑战，适合排队与围观",
    comingSoon: "即将上线",
    positioningLabel: "产品定位",
    positioningCopy: "不做广告流量位，以企业付费交付为前提，页面保持纯净、结构清晰，活动体验更像品牌装置。",
    eyebrow: "For Booth Attraction",
    heroTitle: "把普通抽奖工具，升级成让人想围观、想拍照、想分享的展会互动主角。",
    heroText: "视觉语言更轻盈、更精致，兼顾企业场景的可信度与女性向审美；适合礼品抽奖、积分玩法、品牌互动与现场导流。",
    metricOne: "支持自定义奖项名称与分值",
    metricTwo: "旋转动效与结果弹窗更具仪式感",
    metricThree: "后续可横向扩展多种互动活动",
    livePreview: "现场预览",
    stageTitle: "幸运轮盘",
    spinNow: "开始抽奖",
    nextPrize: "当前焦点奖项",
    shuffleOrder: "随机排序",
    editorLabel: "玩法编辑",
    editorTitle: "奖项配置",
    addItem: "新增奖项",
    prizeName: "奖项名称",
    prizeScore: "分值",
    resetDefault: "恢复默认",
    congratsTag: "抽奖结果",
    resultCopy: "恭喜抽中高人气奖励，现场视觉会更适合用户举起手机拍照分享。",
    drawAgain: "再次抽取",
    scoreUnit: "分",
  },
  en: {
    brandTitle: "Expo Engagement Studio",
    brandSubtitle: "A premium activity platform for exhibitors that turns stopping, sharing, photo-taking, and lead capture into one elegant flow.",
    activityLabel: "Activity Menu",
    wheelTitle: "Lucky Wheel",
    wheelDesc: "Spin for gifts, credits, and coupons",
    blindTitle: "Blind Box",
    blindDesc: "Surprise reveal interaction",
    rouletteTitle: "Roulette Challenge",
    rouletteDesc: "Dramatic suspense and stage energy",
    memoryTitle: "Memory Grid",
    memoryDesc: "Fast challenge for queue-time engagement",
    comingSoon: "Coming Soon",
    positioningLabel: "Positioning",
    positioningCopy: "No ad-driven clutter. The product is designed for enterprise buyers: clean pages, clear structure, and event experiences that feel like branded installations.",
    eyebrow: "For Booth Attraction",
    heroTitle: "Turn a generic spin tool into the visual centerpiece that visitors want to gather around, photograph, and share.",
    heroText: "The interface feels softer and more elevated while staying professional enough for enterprise use, with a stronger appeal to a female-oriented aesthetic.",
    metricOne: "Custom prize labels and scores",
    metricTwo: "More ceremonial spin and result motion",
    metricThree: "Expandable menu for future mini-games",
    livePreview: "Live Preview",
    stageTitle: "Lucky Wheel",
    spinNow: "Spin Now",
    nextPrize: "Current Focus",
    shuffleOrder: "Shuffle",
    editorLabel: "Editor",
    editorTitle: "Prize Setup",
    addItem: "Add Prize",
    prizeName: "Prize Name",
    prizeScore: "Score",
    resetDefault: "Reset",
    congratsTag: "Result",
    resultCopy: "The reward reveal is designed to feel social-first, with enough ceremony to invite photos and booth-side sharing.",
    drawAgain: "Spin Again",
    scoreUnit: "pts",
  },
};

const defaultItemsByLang = {
  zh: [
    { label: "限定礼盒", score: 30, color: "#f6a6c6" },
    { label: "品牌香氛卡", score: 15, color: "#ffcb77" },
    { label: "新品试用装", score: 25, color: "#98ead8" },
    { label: "午后甜点券", score: 20, color: "#ffd8a8" },
    { label: "专属折扣码", score: 35, color: "#f8bfd7" },
    { label: "隐藏惊喜奖", score: 50, color: "#c8b6ff" },
  ],
  en: [
    { label: "Gift Box", score: 30, color: "#f6a6c6" },
    { label: "Scent Card", score: 15, color: "#ffcb77" },
    { label: "Sample Kit", score: 25, color: "#98ead8" },
    { label: "Dessert Pass", score: 20, color: "#ffd8a8" },
    { label: "Promo Code", score: 35, color: "#f8bfd7" },
    { label: "Secret Prize", score: 50, color: "#c8b6ff" },
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
const resultDialog = document.querySelector("#resultDialog");
const resultTitle = document.querySelector("#resultTitle");
const resultMeta = document.querySelector("#resultMeta");
const closeDialogButton = document.querySelector("#closeDialogButton");
const langButtons = document.querySelectorAll("[data-lang]");
const activityCards = document.querySelectorAll(".activity-card");

let currentLang = "zh";
let items = structuredClone(defaultItemsByLang.zh);
let rotation = 0;
let isSpinning = false;

function getScoreText(score) {
  return `${score}${currentLang === "zh" ? "分" : " pts"}`;
}

function getFocusedIndex() {
  if (!items.length) return 0;
  const slice = (Math.PI * 2) / items.length;
  const normalized = ((-rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return Math.round(normalized / slice) % items.length;
}

function drawWheel() {
  const center = canvas.width / 2;
  const radius = center - 18;
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
    ctx.fillStyle = item.color;
    ctx.fill();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(start + slice / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#4e2740";
    ctx.font = "700 25px 'PingFang SC'";
    ctx.fillText(item.label, radius - 72, -8);
    ctx.font = "600 21px 'PingFang SC'";
    ctx.fillStyle = "rgba(78,39,64,0.72)";
    ctx.fillText(getScoreText(item.score), radius - 72, 28);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(center, center, 58, 0, Math.PI * 2);
  ctx.fillStyle = "#fff6fb";
  ctx.fill();
  ctx.lineWidth = 12;
  ctx.strokeStyle = "rgba(255,255,255,0.7)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, 24, 0, Math.PI * 2);
  ctx.fillStyle = "#ef5da8";
  ctx.fill();

  const focused = items[getFocusedIndex()];
  if (focused) {
    focusedLabel.textContent = `${focused.label} · ${getScoreText(focused.score)}`;
  }
}

function renderList() {
  itemList.innerHTML = "";
  items.forEach((item, index) => {
    const row = itemTemplate.content.firstElementChild.cloneNode(true);
    const nameInput = row.querySelector(".item-name");
    const scoreInput = row.querySelector(".item-score");
    const removeButton = row.querySelector(".remove-button");

    nameInput.value = item.label;
    scoreInput.value = item.score;

    nameInput.addEventListener("input", (event) => {
      items[index].label = event.target.value.trim() || (currentLang === "zh" ? "未命名奖项" : "Untitled");
      drawWheel();
    });

    scoreInput.addEventListener("input", (event) => {
      items[index].score = Number(event.target.value) || 0;
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
  const palette = ["#f6a6c6", "#ffcb77", "#98ead8", "#ffd8a8", "#c8b6ff", "#f9d2e5"];
  return palette[Math.floor(Math.random() * palette.length)];
}

function addItem() {
  items.push({
    label: currentLang === "zh" ? `新奖项 ${items.length + 1}` : `Prize ${items.length + 1}`,
    score: 10,
    color: randomColor(),
  });
  renderList();
  drawWheel();
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

  const winnerIndex = Math.floor(Math.random() * items.length);
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
    resultMeta.textContent = currentLang === "zh" ? `获得 ${focused.score} 分` : `Earned ${focused.score} pts`;
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

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

spinButton.addEventListener("click", spin);
shuffleButton.addEventListener("click", shuffleItems);
addItemButton.addEventListener("click", addItem);
resetButton.addEventListener("click", resetItems);
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
drawWheel();
