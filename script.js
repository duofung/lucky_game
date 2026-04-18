const translations = {
  zh: {
    brandKicker: "EXHIBITION GAME STUDIO",
    brandTitle: "幸运轮盘",
    brandSubtitle: "适用于线下活动、品牌互动与礼品抽奖。",
    activityLabel: "游戏列表",
    wheelTitle: "幸运轮盘",
    wheelDesc: "礼品、积分、折扣券即时抽取",
    blindTitle: "抽盲盒",
    blindDesc: "78 个礼盒随机揭晓，人人有奖",
    blindPreview: "盲盒礼物墙",
    blindStatsDefault: "已开启 0 / 78",
    blindEditorLabel: "盲盒配置",
    boxTotal: "总盒子数",
    assignedCount: "已分配",
    remainingCount: "剩余",
    blindboxQty: "数量",
    generateBlindbox: "生成盲盒",
    shuffleBlindbox: "重新打乱",
    resetBlindboxConfig: "恢复盲盒默认",
    resetRound: "重置本轮",
    blindboxReady: "已达到可生成状态",
    blindboxNeedFill: "还差 {count} 个盒子未分配",
    blindboxOverfill: "超出 {count} 个盒子，请减少数量",
    rouletteTitle: "左轮轮盘赌",
    rouletteDesc: "戏剧化停顿与刺激感氛围",
    roulettePreview: "对弈现场",
    rouletteEditorLabel: "对弈设置",
    rouletteFire: "扣动扳机",
    rouletteBulletCount: "当前子弹数",
    rouletteHitChance: "中弹几率",
    rouletteSafeChance: "脱险几率",
    rouletteReward: "脱险奖励",
    rouletteCurrentTier: "当前档位",
    rouletteTierLabel: "子弹数量",
    rouletteStatusLabel: "本轮状态",
    rouletteRuleLabel: "奖励规则",
    rouletteRuleCopy: "中弹无奖励，脱险则获得对应档位礼品",
    rouletteCurrentTierValue: "{count} 颗子弹",
    rouletteStatusIdle: "选择子弹数量，准备开始对弈",
    rouletteStatusSpinning: "庄家装填完成，命运正在揭晓",
    rouletteStatusSafe: "本轮脱险成功，奖励已锁定",
    rouletteStatusHit: "本轮中弹，遗憾无奖励",
    rouletteResultSafe: "脱险成功",
    rouletteResultHit: "YOU OUT!",
    rouletteResultSafeMeta: "成功脱险，奖励已锁定",
    rouletteResultHitMeta: "本轮中弹，没有奖励",
    rouletteResultSafeCopy: "子弹越多，风险越高，但一旦顺利脱险，现场奖励也会同步升级。",
    rouletteResultHitCopy: "这一局没有奖励，重新选择子弹数量，再和庄家对一轮。",
    memoryTitle: "九宫格记忆力",
    memoryDesc: "图片格阵记忆挑战，适合围观互动",
    memoryPreview: "记忆挑战",
    memoryEditorLabel: "挑战设置",
    memoryStart: "开始挑战",
    memoryPause: "暂停挑战",
    memoryResume: "继续挑战",
    memoryRestart: "重新开始",
    memoryNext: "进入下一关",
    memoryRetry: "重新挑战",
    memoryLevel: "当前关卡",
    memoryGridCount: "格子数量",
    memoryTargetCount: "记忆目标",
    memoryCountdown: "记忆时间",
    memoryStatusLabel: "当前状态",
    memoryTargetsLabel: "本轮目标",
    memoryIdle: "点击开始，进入第 1 关",
    memoryMemorizing: "记忆时间进行中，请记住图片位置",
    memoryPaused: "挑战已暂停，点击继续回到记忆阶段",
    memoryAnswering: "请找出指定图片的位置",
    memorySuccess: "挑战成功，已解锁下一关",
    memoryFailed: "挑战失败，本轮结束",
    memoryRewardTier: "当前奖励档",
    memoryCategoryLabel: "素材类型",
    memoryCategoryMixed: "混合素材",
    memoryCategoryFruit: "水果",
    memoryCategoryAnimal: "动物",
    memoryCategoryFood: "食物",
    memoryCategoryPeople: "人物",
    memoryCategoryNumbers: "数字",
    memoryCategoryWords: "字幕",
    memoryRuleIntro: "前 10 关固定记忆 1 个目标，之后逐步提升到 2、4、6 个目标，记忆时间统一为 10 秒。",
    memoryRewardRange: "通关区间",
    memoryRewardSample: "礼品内容",
    memoryResultSuccessMeta: "本关挑战成功",
    memoryResultFailedTitle: "挑战结束",
    memoryResultFailedMeta: "本轮可领取对应档位礼品",
    memoryResultCopy: "记忆图片位置，持续向更高关卡挑战，礼品价值会随档位同步升级。",
    pachinkoTitle: "幸运老虎机",
    pachinkoDesc: "三列滚轴揭晓，适合围观互动",
    slotPreview: "老虎机现场",
    slotEditorLabel: "老虎机配置",
    slotSpinNow: "开始摇奖",
    slotStatusLabel: "当前状态",
    slotStatusIdle: "拉下摇杆，开始这一轮惊喜揭晓",
    slotStatusSpinning: "滚轴转动中，幸运结果即将停下",
    slotStatusResult: "组合锁定，奖励已经揭晓",
    slotCurrentTier: "当前档位",
    slotCurrentReward: "礼品内容",
    slotCurrentChance: "参考几率",
    slotTierLabel: "档位名称",
    slotRewardContent: "礼品内容",
    slotResultMeta: "本轮组合命中成功",
    slotResultCopy: "滚轴停下的那一刻会更有围观感，也更适合在展台形成一次完整的奖励揭晓。",
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
    blindDesc: "A 78-box reward wall with guaranteed prizes",
    blindPreview: "Blind Box Wall",
    blindStatsDefault: "Opened 0 / 78",
    blindEditorLabel: "Blind Box Setup",
    boxTotal: "Total Boxes",
    assignedCount: "Assigned",
    remainingCount: "Remaining",
    blindboxQty: "Qty",
    generateBlindbox: "Generate Boxes",
    shuffleBlindbox: "Shuffle Layout",
    resetBlindboxConfig: "Reset Blind Box",
    resetRound: "Reset Round",
    blindboxReady: "Ready to generate",
    blindboxNeedFill: "{count} boxes still need prizes",
    blindboxOverfill: "Over by {count} boxes, reduce the quantities",
    rouletteTitle: "Roulette Challenge",
    rouletteDesc: "Dramatic suspense and stage energy",
    roulettePreview: "Duel Preview",
    rouletteEditorLabel: "Duel Setup",
    rouletteFire: "Pull Trigger",
    rouletteBulletCount: "Loaded Bullets",
    rouletteHitChance: "Hit Chance",
    rouletteSafeChance: "Safe Chance",
    rouletteReward: "Safe Reward",
    rouletteCurrentTier: "Current Tier",
    rouletteTierLabel: "Bullet Count",
    rouletteStatusLabel: "Round Status",
    rouletteRuleLabel: "Rule",
    rouletteRuleCopy: "A hit gives no reward. Survive the round to claim the matching prize tier.",
    rouletteCurrentTierValue: "{count} bullets",
    rouletteStatusIdle: "Choose the bullet count and prepare for the duel",
    rouletteStatusSpinning: "The dealer has loaded the chamber. Fate is deciding",
    rouletteStatusSafe: "Safe round. Reward secured.",
    rouletteStatusHit: "Hit this round. No reward.",
    rouletteResultSafe: "Safe Round",
    rouletteResultHit: "YOU OUT!",
    rouletteResultSafeMeta: "You made it through and locked the reward.",
    rouletteResultHitMeta: "Hit this round. No reward earned.",
    rouletteResultSafeCopy: "More bullets raise the risk, but surviving also upgrades the booth reward for this round.",
    rouletteResultHitCopy: "No reward this time. Adjust the bullet count and challenge the dealer again.",
    memoryTitle: "Memory Grid",
    memoryDesc: "Grid-based picture memory challenge for crowd engagement",
    memoryPreview: "Memory Challenge",
    memoryEditorLabel: "Challenge Setup",
    memoryStart: "Start Challenge",
    memoryPause: "Pause",
    memoryResume: "Resume",
    memoryRestart: "Restart",
    memoryNext: "Next Level",
    memoryRetry: "Retry",
    memoryLevel: "Level",
    memoryGridCount: "Grid Count",
    memoryTargetCount: "Targets",
    memoryCountdown: "Memory Time",
    memoryStatusLabel: "Status",
    memoryTargetsLabel: "Targets",
    memoryIdle: "Press start to enter level 1",
    memoryMemorizing: "Memorize the picture positions before time runs out",
    memoryPaused: "Challenge paused. Resume when you are ready",
    memoryAnswering: "Find the requested pictures",
    memorySuccess: "Level cleared. Next level unlocked",
    memoryFailed: "Challenge failed. Round over",
    memoryRewardTier: "Reward Tier",
    memoryCategoryLabel: "Asset Type",
    memoryCategoryMixed: "Mixed",
    memoryCategoryFruit: "Fruit",
    memoryCategoryAnimal: "Animals",
    memoryCategoryFood: "Food",
    memoryCategoryPeople: "People",
    memoryCategoryNumbers: "Numbers",
    memoryCategoryWords: "Words",
    memoryRuleIntro: "Levels 1-10 require 1 target, then scale to 2, 4, and 6 targets, all with a fixed 10-second memory phase.",
    memoryRewardRange: "Clear Range",
    memoryRewardSample: "Prize Content",
    memoryResultSuccessMeta: "Level cleared",
    memoryResultFailedTitle: "Challenge Over",
    memoryResultFailedMeta: "Claim the reward tier tied to your progress",
    memoryResultCopy: "Memorize picture positions and climb to higher tiers for stronger rewards.",
    pachinkoTitle: "Lucky Slot",
    pachinkoDesc: "Three reels, clean suspense, strong crowd energy",
    slotPreview: "Slot Preview",
    slotEditorLabel: "Slot Setup",
    slotSpinNow: "Start Spin",
    slotStatusLabel: "Status",
    slotStatusIdle: "Pull the lever and let the reels reveal the next reward",
    slotStatusSpinning: "The reels are spinning. The result is about to land",
    slotStatusResult: "The combination is locked and the reward is revealed",
    slotCurrentTier: "Current Tier",
    slotCurrentReward: "Prize",
    slotCurrentChance: "Chance",
    slotTierLabel: "Tier Name",
    slotRewardContent: "Prize Content",
    slotResultMeta: "The combination landed successfully",
    slotResultCopy: "The final stop is designed to feel social and theatrical, making the reward reveal more watchable at the booth.",
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
    footerMadeBy: "Technical Support: Value Link Interconnect (Shenzhen) Exhibition Technology Co., Ltd.",
  },
};

const themePalettes = {
  white: {
    slices: ["#ffe7d1", "#ffd29f", "#ffddbc", "#ffc786", "#fff0df", "#ffcf97"],
    label: "#5b3a20",
    centerOuter: "#ffffff",
    centerInner: "#ff6a3d",
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

const blindboxBoxCount = 78;
const defaultBlindboxPrizesByLang = {
  zh: [
    { label: "典藏礼盒", qty: 2 },
    { label: "品牌水杯", qty: 4 },
    { label: "联名香薰卡", qty: 6 },
    { label: "定制笔记本", qty: 8 },
    { label: "新品试用装", qty: 10 },
    { label: "品牌手提袋", qty: 48 },
  ],
  en: [
    { label: "Collector Box", qty: 2 },
    { label: "Branded Tumbler", qty: 4 },
    { label: "Scent Card", qty: 6 },
    { label: "Notebook", qty: 8 },
    { label: "Sample Kit", qty: 10 },
    { label: "Carry Bag", qty: 48 },
  ],
};

const defaultRouletteRewardsByLang = {
  zh: [
    { bullets: 1, reward: "入场纪念贴纸" },
    { bullets: 2, reward: "品牌香氛试香卡" },
    { bullets: 3, reward: "限定饮品兑换券" },
    { bullets: 4, reward: "联名礼盒体验装" },
    { bullets: 5, reward: "当日头号大奖" },
  ],
  en: [
    { bullets: 1, reward: "Welcome Sticker Pack" },
    { bullets: 2, reward: "Brand Scent Card" },
    { bullets: 3, reward: "Signature Drink Pass" },
    { bullets: 4, reward: "Collab Gift Set" },
    { bullets: 5, reward: "Grand Prize of the Day" },
  ],
};

const slotSymbolsByLang = {
  zh: [
    { key: "gift", icon: "🎁", label: "礼盒" },
    { key: "bag", icon: "🛍️", label: "手提袋" },
    { key: "scent", icon: "🌸", label: "香氛卡" },
    { key: "sample", icon: "🧴", label: "试用装" },
    { key: "drink", icon: "🥤", label: "饮品券" },
    { key: "logo", icon: "✦", label: "品牌星标" },
    { key: "crown", icon: "👑", label: "隐藏大奖" },
  ],
  en: [
    { key: "gift", icon: "🎁", label: "Gift Box" },
    { key: "bag", icon: "🛍️", label: "Tote Bag" },
    { key: "scent", icon: "🌸", label: "Scent Card" },
    { key: "sample", icon: "🧴", label: "Sample Kit" },
    { key: "drink", icon: "🥤", label: "Drink Pass" },
    { key: "logo", icon: "✦", label: "Brand Star" },
    { key: "crown", icon: "👑", label: "Jackpot" },
  ],
};

const defaultSlotRewardsByLang = {
  zh: [
    { tier: "柔光参与礼", reward: "品牌贴纸", weight: 34, combo: ["bag", "drink", "bag"] },
    { tier: "心动加分彩蛋", reward: "饮品兑换券", weight: 28, combo: ["drink", "logo", "drink"] },
    { tier: "轻奢进阶礼", reward: "香氛卡礼袋", weight: 18, combo: ["scent", "scent", "logo"] },
    { tier: "高光精选礼", reward: "新品试用套装", weight: 12, combo: ["sample", "sample", "sample"] },
    { tier: "主角大奖档", reward: "限定礼盒", weight: 8, combo: ["crown", "gift", "crown"] },
  ],
  en: [
    { tier: "Soft Entry", reward: "Branded Sticker Pack", weight: 34, combo: ["bag", "drink", "bag"] },
    { tier: "Glow Bonus", reward: "Signature Drink Pass", weight: 28, combo: ["drink", "logo", "drink"] },
    { tier: "Premium Step-Up", reward: "Scent Card Set", weight: 18, combo: ["scent", "scent", "logo"] },
    { tier: "Highlight Tier", reward: "Sample Kit Bundle", weight: 12, combo: ["sample", "sample", "sample"] },
    { tier: "Main Prize", reward: "Limited Gift Box", weight: 8, combo: ["crown", "gift", "crown"] },
  ],
};

const memoryBaseAssetsByCategory = {
  fruit: [
    ["🍎", "苹果", "Apple"], ["🍌", "香蕉", "Banana"], ["🍇", "葡萄", "Grapes"], ["🍓", "草莓", "Strawberry"],
    ["🍍", "菠萝", "Pineapple"], ["🍑", "桃子", "Peach"], ["🍒", "樱桃", "Cherry"], ["🥝", "奇异果", "Kiwi"],
    ["🍊", "橙子", "Orange"], ["🍉", "西瓜", "Watermelon"], ["🍐", "雪梨", "Pear"], ["🥭", "芒果", "Mango"],
  ],
  animal: [
    ["🐶", "小狗", "Dog"], ["🐱", "小猫", "Cat"], ["🦊", "狐狸", "Fox"], ["🐼", "熊猫", "Panda"],
    ["🐯", "老虎", "Tiger"], ["🦁", "狮子", "Lion"], ["🐸", "青蛙", "Frog"], ["🐵", "猴子", "Monkey"],
    ["🐻", "棕熊", "Bear"], ["🐰", "兔子", "Rabbit"], ["🦄", "独角兽", "Unicorn"], ["🐨", "考拉", "Koala"],
  ],
  food: [
    ["🍔", "汉堡", "Burger"], ["🍕", "披萨", "Pizza"], ["🍟", "薯条", "Fries"], ["🌭", "热狗", "Hot Dog"],
    ["🍩", "甜甜圈", "Donut"], ["🧁", "纸杯蛋糕", "Cupcake"], ["🍪", "曲奇", "Cookie"], ["🍜", "拉面", "Ramen"],
    ["🍣", "寿司", "Sushi"], ["🍛", "咖喱饭", "Curry Rice"], ["🥗", "沙拉", "Salad"], ["🥨", "椒盐卷饼", "Pretzel"],
  ],
  people: [
    ["👩", "女士", "Woman"], ["👨", "男士", "Man"], ["👧", "女孩", "Girl"], ["👦", "男孩", "Boy"],
    ["🧑‍🚀", "宇航员", "Astronaut"], ["🧑‍🍳", "厨师", "Chef"], ["🧑‍⚕️", "医生", "Doctor"], ["🧑‍🏫", "老师", "Teacher"],
    ["🧑‍💼", "白领", "Office Worker"], ["🧑‍🎤", "歌手", "Singer"], ["🧑‍🎨", "画家", "Painter"], ["🧑‍🔬", "科学家", "Scientist"],
  ],
  words: [
    ["A", "字母 A", "Letter A"], ["B", "字母 B", "Letter B"], ["C", "字母 C", "Letter C"], ["D", "字母 D", "Letter D"],
    ["E", "字母 E", "Letter E"], ["F", "字母 F", "Letter F"], ["G", "字母 G", "Letter G"], ["H", "字母 H", "Letter H"],
    ["星", "星", "Star"], ["光", "光", "Light"], ["礼", "礼", "Gift"], ["赢", "赢", "Win"],
  ],
};

const defaultMemoryRewardTiersByLang = {
  zh: [
    { range: "1 - 3 关", tier: "轻甜入门礼", sample: "品牌贴纸 / 温柔手提袋 / 展台小卡" },
    { range: "4 - 7 关", tier: "心动加分彩蛋", sample: "香氛卡 / 饮品券 / 柔雾便签本" },
    { range: "8 - 10 关", tier: "闪光进阶礼", sample: "试用装 / 定制镜子 / 香氛挂件" },
    { range: "11 - 15 关", tier: "高光收藏礼", sample: "联名周边 / 礼盒体验装 / 精致水杯" },
    { range: "16 - 20 关", tier: "限定心愿礼", sample: "限定礼盒 / 高级套装 / 品牌香氛" },
    { range: "21+ 关", tier: "主角大奖档", sample: "当日大奖 / VIP 套礼 / 限定大礼包" },
  ],
  en: [
    { range: "Lv 1 - 3", tier: "Soft Starter", sample: "Sticker set / tote bag / booth card" },
    { range: "Lv 4 - 7", tier: "Glow Boost", sample: "Scent card / drink pass / memo pad" },
    { range: "Lv 8 - 10", tier: "Spark Tier", sample: "Sample kit / pocket mirror / charm" },
    { range: "Lv 11 - 15", tier: "Highlight Tier", sample: "Collab merch / gift set / tumbler" },
    { range: "Lv 16 - 20", tier: "Wish Tier", sample: "Limited box / premium bundle / fragrance" },
    { range: "Lv 21+", tier: "Main Character", sample: "Daily jackpot / VIP set / grand bundle" },
  ],
};

const memoryEncouragementByLang = {
  zh: {
    warmup: [
      { title: "你记得很稳", meta: "这一关的节奏拿捏得很好", copy: "已经进入状态了，继续保持这种轻松专注感，下一关会更漂亮地拿下。" },
      { title: "好会记", meta: "细节捕捉得很准确", copy: "你刚才的判断非常干净利落，这种感觉很适合一路往上冲。" },
    ],
    rising: [
      { title: "你真的在发光", meta: "难度上来了，你也跟上了", copy: "越往后越考验短时记忆和稳定感，你现在的表现已经很亮眼了。" },
      { title: "这关过得很漂亮", meta: "节奏和记忆点都抓住了", copy: "不是单纯记住而已，是你已经开始掌控这个游戏的节奏了。" },
    ],
    advanced: [
      { title: "高难度也拿下了", meta: "记忆力和判断都在线", copy: "这种关卡已经不只是反应快了，你的稳定度和专注力都很强。" },
      { title: "这一轮很有主角感", meta: "越难越显得你厉害", copy: "你把复杂的信息收得很干净，继续往前就是更高档位的奖励了。" },
    ],
    elite: [
      { title: "这已经是高手区了", meta: "你刚刚的表现非常能打", copy: "到了这里还能这么稳，真的很有压场感，继续冲会非常好看。" },
      { title: "太强了，完全稳住", meta: "高压关卡也没有乱", copy: "这种难度还能保持清晰判断，已经是很漂亮的挑战表现了。" },
    ],
    comfort: [
      { title: "已经很不错了", meta: "这一轮只是差一点点", copy: "你不是没记住，是信息量刚好多了一点。稍微调整一下，下次会更顺。" },
      { title: "别急，这关本来就难", meta: "你已经记住不少了", copy: "能走到这里说明状态很好，只是最后那个位置有点调皮，下次一定会更稳。" },
    ],
    support: [
      { title: "真的很可惜，但不影响你厉害", meta: "高难度翻车很正常", copy: "越到后面越容易在细节上失手，不过你的整体判断已经很在线了，下一轮很有机会更进一步。" },
      { title: "就差一点点惊艳全场", meta: "这一轮先收住也没关系", copy: "你已经把前面的节奏跑得很漂亮了，休息一下再来，会更有感觉。" },
    ],
  },
  en: {
    warmup: [
      { title: "That was smooth", meta: "You handled the rhythm beautifully", copy: "You are already in the zone. Keep this calm focus and the next round will feel even better." },
      { title: "Strong start", meta: "You caught the details quickly", copy: "That was clean and confident. This kind of pace is perfect for climbing higher." },
    ],
    rising: [
      { title: "You are glowing now", meta: "The challenge rose and you matched it", copy: "This is where memory and rhythm begin to matter more, and you are handling both really well." },
      { title: "Beautiful clear", meta: "You held the pace with style", copy: "It was not just about remembering. You are starting to control the whole flow of the game." },
    ],
    advanced: [
      { title: "You cleared a hard one", meta: "Focus and judgment both stayed sharp", copy: "At this level it is about steadiness, and you made it look graceful." },
      { title: "Main-character energy", meta: "The harder it gets, the better you look", copy: "You kept the board tidy in your head even with more pressure. That is a strong run." },
    ],
    elite: [
      { title: "This is expert territory", meta: "And you still made it look calm", copy: "Reaching this far with this much control already feels impressive. Keep going." },
      { title: "So composed under pressure", meta: "That level was not easy", copy: "You stayed clear even at high difficulty. That is a really beautiful kind of consistency." },
    ],
    comfort: [
      { title: "You were genuinely close", meta: "This round just slipped a little", copy: "It was not a bad run at all. The information load only got a bit heavier, and you can absolutely come back stronger." },
      { title: "That was a near miss", meta: "You remembered more than it felt like", copy: "You were already reading the board well. One small miss does not erase a strong performance." },
    ],
    support: [
      { title: "Still a lovely run", meta: "Higher levels are meant to be tough", copy: "The deeper rounds are where tiny details become tricky. Take a breath and try again with the same confidence." },
      { title: "It is okay to miss one", meta: "Your overall rhythm was strong", copy: "You built a really nice run already. Another attempt will probably feel even more natural." },
    ],
  },
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
const resultCard = document.querySelector(".result-card");
const resultTitle = document.querySelector("#resultTitle");
const resultMeta = document.querySelector("#resultMeta");
const resultCopy = document.querySelector(".result-copy");
const closeDialogButton = document.querySelector("#closeDialogButton");
const resultVisual = document.querySelector("#resultVisual");
const langButtons = document.querySelectorAll("[data-lang]");
const activityCards = document.querySelectorAll(".activity-card");
const activityPanels = document.querySelectorAll(".activity-panel");
const blindboxPrizeList = document.querySelector("#blindboxPrizeList");
const blindboxGrid = document.querySelector("#blindboxGrid");
const generateBlindboxButton = document.querySelector("#generateBlindboxButton");
const shuffleBlindboxButton = document.querySelector("#shuffleBlindboxButton");
const resetBlindboxConfigButton = document.querySelector("#resetBlindboxConfigButton");
const resetBlindboxBoardButton = document.querySelector("#resetBlindboxBoardButton");
const toggleBlindboxChanceButton = document.querySelector("#toggleBlindboxChanceButton");
const blindboxStats = document.querySelector("#blindboxStats");
const boxTotalValue = document.querySelector("#boxTotalValue");
const assignedCountValue = document.querySelector("#assignedCountValue");
const remainingCountValue = document.querySelector("#remainingCountValue");
const blindboxValidation = document.querySelector("#blindboxValidation");
const rouletteFireButton = document.querySelector("#rouletteFireButton");
const rouletteResetButton = document.querySelector("#rouletteResetButton");
const rouletteRewardList = document.querySelector("#rouletteRewardList");
const rouletteRewardTemplate = document.querySelector("#rouletteRewardTemplate");
const rouletteBulletValue = document.querySelector("#rouletteBulletValue");
const rouletteHitChanceValue = document.querySelector("#rouletteHitChanceValue");
const rouletteSafeChanceValue = document.querySelector("#rouletteSafeChanceValue");
const rouletteRewardValue = document.querySelector("#rouletteRewardValue");
const rouletteCurrentTierValue = document.querySelector("#rouletteCurrentTierValue");
const rouletteStatusText = document.querySelector("#rouletteStatusText");
const rouletteBulletPicker = document.querySelector("#rouletteBulletPicker");
const rouletteBulletButtons = document.querySelectorAll(".roulette-bullet-chip");
const rouletteChambers = document.querySelectorAll(".roulette-chamber");
const rouletteRevolver = document.querySelector("#rouletteRevolver");
const memoryActionButton = document.querySelector("#memoryActionButton");
const memoryResetButton = document.querySelector("#memoryResetButton");
const memoryGridBoard = document.querySelector("#memoryGridBoard");
const memoryLevelValue = document.querySelector("#memoryLevelValue");
const memoryGridCountValue = document.querySelector("#memoryGridCountValue");
const memoryTargetCountValue = document.querySelector("#memoryTargetCountValue");
const memoryCountdownValue = document.querySelector("#memoryCountdownValue");
const memoryStatusText = document.querySelector("#memoryStatusText");
const memoryTargetList = document.querySelector("#memoryTargetList");
const memoryCategoryList = document.querySelector("#memoryCategoryList");
const memoryCategoryValue = document.querySelector("#memoryCategoryValue");
const memoryRewardTierValue = document.querySelector("#memoryRewardTierValue");
const memoryRewardList = document.querySelector("#memoryRewardList");
const memoryRewardTemplate = document.querySelector("#memoryRewardTemplate");
const slotSpinButton = document.querySelector("#slotSpinButton");
const slotResetButton = document.querySelector("#slotResetButton");
const slotStatusText = document.querySelector("#slotStatusText");
const slotTierValue = document.querySelector("#slotTierValue");
const slotRewardValue = document.querySelector("#slotRewardValue");
const slotChanceValue = document.querySelector("#slotChanceValue");
const slotEditorTierValue = document.querySelector("#slotEditorTierValue");
const slotEditorRewardValue = document.querySelector("#slotEditorRewardValue");
const slotRewardList = document.querySelector("#slotRewardList");
const slotRewardTemplate = document.querySelector("#slotRewardTemplate");
const slotTracks = [
  document.querySelector("#slotTrack0"),
  document.querySelector("#slotTrack1"),
  document.querySelector("#slotTrack2"),
];

let currentLang = "zh";
let currentActivity = "wheel";
let showChanceInfo = false;
let showBlindboxChanceInfo = true;
let wheelItems = structuredClone(defaultWheelItemsByLang.zh);
let blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang.zh);
let rouletteRewards = structuredClone(defaultRouletteRewardsByLang.zh);
let memoryRewardTiers = structuredClone(defaultMemoryRewardTiersByLang.zh);
let slotRewards = structuredClone(defaultSlotRewardsByLang.zh);
let blindboxCells = [];
let blindboxOpening = false;
let selectedBullets = 1;
let rouletteLocked = false;
let rotation = 0;
let isSpinning = false;
let memoryLevel = 1;
let memoryCategory = "mixed";
let memoryCountdown = 10;
let memoryState = "idle";
let memoryBoard = [];
let memoryTargets = [];
let memoryMatchedKeys = new Set();
let memoryCountdownTimer = null;
let memoryAdvanceTimer = null;
let slotSpinning = false;
let slotCurrentReward = slotRewards[0];
let slotSpinTimer = null;

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

function getRouletteHitChance(bullets) {
  return (bullets / 6) * 100;
}

function getRouletteSafeChance(bullets) {
  return 100 - getRouletteHitChance(bullets);
}

function getRouletteRewardEntry(bullets = selectedBullets) {
  return rouletteRewards.find((entry) => entry.bullets === bullets) || rouletteRewards[0];
}

function getSlotSymbols() {
  return slotSymbolsByLang[currentLang];
}

function getSlotSymbolMap() {
  return Object.fromEntries(getSlotSymbols().map((symbol) => [symbol.key, symbol]));
}

function getSlotShares() {
  const total = slotRewards.reduce((sum, item) => sum + Math.max(0, Number(item.weight) || 0), 0);
  if (total <= 0) return slotRewards.map(() => 0);
  return slotRewards.map((item) => (Math.max(0, Number(item.weight) || 0) / total) * 100);
}

function pickWeightedSlotReward() {
  const weights = slotRewards.map((item) => Math.max(0, Number(item.weight) || 0));
  const total = weights.reduce((sum, value) => sum + value, 0);
  if (total <= 0) return slotRewards[Math.floor(Math.random() * slotRewards.length)];

  let threshold = Math.random() * total;
  for (let index = 0; index < slotRewards.length; index += 1) {
    threshold -= weights[index];
    if (threshold < 0) return slotRewards[index];
  }
  return slotRewards[slotRewards.length - 1];
}

function setSlotStatus(key) {
  slotStatusText.textContent = translations[currentLang][key];
}

function stopSlotSpinTimer() {
  if (slotSpinTimer) {
    window.clearTimeout(slotSpinTimer);
    slotSpinTimer = null;
  }
}

function renderSlotSummary() {
  const currentReward = slotCurrentReward || slotRewards[0];
  const shares = getSlotShares();
  const currentIndex = Math.max(0, slotRewards.indexOf(currentReward));
  slotTierValue.textContent = currentReward.tier;
  slotRewardValue.textContent = currentReward.reward;
  slotChanceValue.textContent = getShareText(shares[currentIndex] || 0);
  slotEditorTierValue.textContent = currentReward.tier;
  slotEditorRewardValue.textContent = currentReward.reward;
}

function renderSlotIdleState() {
  const symbolMap = getSlotSymbolMap();
  const combo = (slotCurrentReward || slotRewards[0]).combo;
  slotTracks.forEach((track, index) => {
    const symbol = symbolMap[combo[index]];
    if (!track || !symbol) return;
    track.style.transition = "none";
    track.style.transform = "translateY(0)";
    track.innerHTML = `<div class="slot-symbol current"><span>${symbol.icon}</span><strong>${symbol.label}</strong></div>`;
  });
}

function buildSlotSequence(targetKey, reelIndex) {
  const symbols = getSlotSymbols();
  const sequence = [];
  const total = 14 + reelIndex * 3;

  for (let index = 0; index < total; index += 1) {
    sequence.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  sequence.push(symbols.find((item) => item.key === targetKey) || symbols[0]);
  return sequence;
}

function renderSlotRewardList() {
  slotRewardList.innerHTML = "";
  const shares = getSlotShares();

  slotRewards.forEach((entry, index) => {
    const row = slotRewardTemplate.content.firstElementChild.cloneNode(true);
    const tierInput = row.querySelector(".slot-tier-input");
    const rewardInput = row.querySelector(".slot-reward-input");
    const weightInput = row.querySelector(".slot-weight-input");
    const share = row.querySelector(".slot-reward-share");

    tierInput.value = entry.tier;
    rewardInput.value = entry.reward;
    weightInput.value = entry.weight;
    share.textContent = getShareText(shares[index] || 0);

    tierInput.addEventListener("input", (event) => {
      slotRewards[index].tier = event.target.value.trim() || entry.tier;
      if (slotCurrentReward === entry) renderSlotSummary();
    });

    rewardInput.addEventListener("input", (event) => {
      slotRewards[index].reward = event.target.value.trim() || entry.reward;
      if (slotCurrentReward === entry) renderSlotSummary();
    });

    weightInput.addEventListener("input", (event) => {
      slotRewards[index].weight = Math.max(0, Number(event.target.value) || 0);
      renderSlotRewardList();
      renderSlotSummary();
    });

    tierInput.addEventListener("blur", (event) => {
      const fallback = currentLang === "zh" ? "未命名档位" : "Untitled Tier";
      slotRewards[index].tier = event.target.value.trim() || fallback;
      renderSlotRewardList();
      renderSlotSummary();
    });

    rewardInput.addEventListener("blur", (event) => {
      const fallback = currentLang === "zh" ? "未命名礼品" : "Untitled Reward";
      slotRewards[index].reward = event.target.value.trim() || fallback;
      renderSlotRewardList();
      renderSlotSummary();
    });

    slotRewardList.appendChild(row);
  });
}

function spinSlotMachine() {
  if (slotSpinning) return;
  stopSlotSpinTimer();
  slotSpinning = true;
  slotSpinButton.disabled = true;
  setSlotStatus("slotStatusSpinning");

  const outcome = pickWeightedSlotReward();
  slotCurrentReward = outcome;
  const sequences = outcome.combo.map((key, index) => buildSlotSequence(key, index));
  const itemHeight = 112;

  slotTracks.forEach((track, index) => {
    if (!track) return;
    track.innerHTML = sequences[index]
      .map((symbol) => `<div class="slot-symbol"><span>${symbol.icon}</span><strong>${symbol.label}</strong></div>`)
      .join("");
    track.style.transition = "none";
    track.style.transform = "translateY(0)";
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      slotTracks.forEach((track, index) => {
        if (!track) return;
        const distance = (sequences[index].length - 1) * itemHeight;
        track.style.transition = `transform ${1400 + index * 320}ms cubic-bezier(0.16, 0.84, 0.24, 1)`;
        track.style.transform = `translateY(-${distance}px)`;
      });
    });
  });

  slotSpinTimer = window.setTimeout(() => {
    slotSpinTimer = null;
    slotSpinning = false;
    slotSpinButton.disabled = false;
    setSlotStatus("slotStatusResult");
    renderSlotSummary();
    resultCard.dataset.variant = "slot-result";
    resultTitle.textContent = outcome.reward;
    resultMeta.textContent = `${translations[currentLang].slotResultMeta} · ${outcome.tier}`;
    resultCopy.textContent = translations[currentLang].slotResultCopy;
    resultVisual.hidden = true;
    resultDialog.showModal();
  }, 2450);
}

function renderRouletteSummary() {
  const rewardEntry = getRouletteRewardEntry();
  const hitChance = getRouletteHitChance(selectedBullets);
  const safeChance = getRouletteSafeChance(selectedBullets);

  rouletteBulletValue.textContent = `${selectedBullets} / 6`;
  rouletteHitChanceValue.textContent = getShareText(hitChance);
  rouletteSafeChanceValue.textContent = getShareText(safeChance);
  rouletteRewardValue.textContent = rewardEntry.reward;
  rouletteCurrentTierValue.textContent = translateWithCount(translations[currentLang].rouletteCurrentTierValue, selectedBullets);

  rouletteBulletButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.bullets) === selectedBullets);
  });

  rouletteChambers.forEach((chamber, index) => {
    chamber.classList.toggle("loaded", index < selectedBullets);
  });
}

function renderRouletteRewardList() {
  rouletteRewardList.innerHTML = "";
  rouletteRewards.forEach((entry) => {
    const rowTemplate = rouletteRewardTemplate.content.firstElementChild;
    if (!rowTemplate) return;
    const row = rowTemplate.cloneNode(true);
    const badge = row.querySelector(".roulette-tier-badge");
    const input = row.querySelector(".roulette-reward-input");
    const share = row.querySelector(".roulette-reward-share");
    if (!badge || !input || !share) return;

    badge.textContent = translateWithCount(translations[currentLang].rouletteCurrentTierValue, entry.bullets);
    input.value = entry.reward;
    share.textContent = getShareText(getRouletteSafeChance(entry.bullets));

    input.addEventListener("input", (event) => {
      entry.reward = event.target.value;
      if (entry.bullets === selectedBullets) renderRouletteSummary();
    });

    input.addEventListener("blur", (event) => {
      const fallback = currentLang === "zh" ? "未命名奖励" : "Untitled Reward";
      entry.reward = event.target.value.trim() || fallback;
      renderRouletteRewardList();
      renderRouletteSummary();
    });

    rouletteRewardList.appendChild(row);
  });
}

function setRouletteStatus(key) {
  rouletteStatusText.textContent = translations[currentLang][key];
}

function resetRouletteGame() {
  rouletteLocked = false;
  rouletteRevolver.classList.remove("spinning");
  rouletteRevolver.classList.remove("recoil", "fire", "hit", "safe");
  rouletteFireButton.disabled = false;
  setRouletteStatus("rouletteStatusIdle");
  renderRouletteSummary();
}

function pullRouletteTrigger() {
  if (rouletteLocked) return;
  rouletteLocked = true;
  rouletteFireButton.disabled = true;
  rouletteRevolver.classList.remove("recoil", "fire", "hit", "safe");
  rouletteRevolver.offsetWidth;
  rouletteRevolver.classList.add("spinning");
  setRouletteStatus("rouletteStatusSpinning");

  window.setTimeout(() => {
    const hit = Math.random() < selectedBullets / 6;
    const rewardEntry = getRouletteRewardEntry();
    rouletteRevolver.classList.remove("spinning");
    rouletteRevolver.classList.add("recoil", "fire", hit ? "hit" : "safe");

    window.setTimeout(() => {
      rouletteLocked = false;
      rouletteFireButton.disabled = false;
      rouletteRevolver.classList.remove("fire");

      if (hit) {
        setRouletteStatus("rouletteStatusHit");
        resultCard.dataset.variant = "roulette-hit";
        resultTitle.textContent = translations[currentLang].rouletteResultHit;
        resultMeta.textContent = translations[currentLang].rouletteResultHitMeta;
        resultCopy.textContent = translations[currentLang].rouletteResultHitCopy;
        resultVisual.hidden = true;
        resultDialog.showModal();
        return;
      }

      setRouletteStatus("rouletteStatusSafe");
      resultCard.dataset.variant = "roulette-safe";
      resultTitle.textContent = rewardEntry.reward;
      resultMeta.textContent = translations[currentLang].rouletteResultSafeMeta;
      resultCopy.textContent = translations[currentLang].rouletteResultSafeCopy;
      resultVisual.hidden = true;
      resultDialog.showModal();
    }, 340);

    window.setTimeout(() => {
      rouletteRevolver.classList.remove("recoil", "hit", "safe");
    }, 900);
  }, 1500);
}

function getMemoryLevelConfig(level = memoryLevel) {
  let cells = 4;
  let targets = 1;

  if (level === 1) {
    cells = 4;
  } else if (level <= 4) {
    cells = 6;
  } else if (level <= 10) {
    cells = 6 + (level - 4) * 2;
  } else if (level <= 15) {
    cells = 18 + (level - 11) * 2;
    targets = 2;
  } else if (level <= 20) {
    cells = 28 + (level - 16) * 2;
    targets = 4;
  } else {
    cells = 38 + (level - 21) * 2;
    targets = 6;
  }

  return {
    level,
    cells,
    targets,
    columns: Math.min(6, Math.max(2, Math.ceil(Math.sqrt(cells)))),
  };
}

function getMemoryRewardTier(level = memoryLevel) {
  const tiers = memoryRewardTiers;
  if (level <= 3) return tiers[0];
  if (level <= 7) return tiers[1];
  if (level <= 10) return tiers[2];
  if (level <= 15) return tiers[3];
  if (level <= 20) return tiers[4];
  return tiers[5];
}

function pickMemoryMessage(group) {
  const messages = memoryEncouragementByLang[currentLang][group] || [];
  if (!messages.length) return null;
  return messages[Math.floor(Math.random() * messages.length)];
}

function getMemorySuccessMessage(level = memoryLevel) {
  if (level <= 3) return pickMemoryMessage("warmup");
  if (level <= 10) return pickMemoryMessage("rising");
  if (level <= 15) return pickMemoryMessage("advanced");
  return pickMemoryMessage("elite");
}

function getMemoryFailureMessage(level = memoryLevel) {
  if (level <= 7) return pickMemoryMessage("comfort");
  return pickMemoryMessage("support");
}

function buildMemoryAssets() {
  const categories = Object.entries(memoryBaseAssetsByCategory).reduce((acc, [key, items]) => {
    acc[key] = items.map(([icon, zh, en], index) => ({
      key: `${key}-${index}`,
      icon,
      label: currentLang === "zh" ? zh : en,
      kind: key,
    }));
    return acc;
  }, {});

  categories.numbers = Array.from({ length: 60 }, (_, index) => ({
    key: `numbers-${index}`,
    icon: String(index + 1),
    label: currentLang === "zh" ? `数字 ${index + 1}` : `Number ${index + 1}`,
    kind: "numbers",
  }));

  categories.mixed = [
    ...categories.fruit,
    ...categories.animal,
    ...categories.food,
    ...categories.people,
    ...categories.numbers.slice(0, 18),
    ...categories.words,
  ];

  return categories;
}

function getMemoryAssetPool(category = memoryCategory, required = 0) {
  const assets = buildMemoryAssets();
  const basePool = assets[category] || assets.mixed;
  if (basePool.length >= required) return basePool;

  const extras = assets.mixed.filter((item) => !basePool.some((entry) => entry.key === item.key));
  return [...basePool, ...extras];
}

function shuffleList(list) {
  return [...list]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function renderMemoryRewardList() {
  memoryRewardList.innerHTML = "";
  memoryRewardTiers.forEach((tier, index) => {
    const row = memoryRewardTemplate.content.firstElementChild.cloneNode(true);
    const rangeInput = row.querySelector(".memory-reward-range-input");
    const tierInput = row.querySelector(".memory-reward-tier-input");
    const sampleInput = row.querySelector(".memory-reward-sample-input");

    rangeInput.value = tier.range;
    tierInput.value = tier.tier;
    sampleInput.value = tier.sample;

    rangeInput.addEventListener("input", (event) => {
      memoryRewardTiers[index].range = event.target.value.trim() || tier.range;
      renderMemorySummary();
    });

    tierInput.addEventListener("input", (event) => {
      memoryRewardTiers[index].tier = event.target.value.trim() || tier.tier;
      renderMemorySummary();
    });

    sampleInput.addEventListener("input", (event) => {
      memoryRewardTiers[index].sample = event.target.value.trim() || tier.sample;
    });

    memoryRewardList.appendChild(row);
  });
}

function renderMemoryTargets() {
  memoryTargetList.innerHTML = "";
  if (!memoryTargets.length || !["answering", "failed"].includes(memoryState)) return;
  memoryTargets.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "memory-target-chip";
    const isTextual = item.kind === "numbers" || item.kind === "words";
    chip.innerHTML = `<span class="${isTextual ? "textual" : ""}">${item.icon}</span>`;
    if (memoryMatchedKeys.has(item.key)) chip.classList.add("done");
    memoryTargetList.appendChild(chip);
  });
}

function renderMemorySummary() {
  const config = getMemoryLevelConfig();
  const tier = getMemoryRewardTier();
  const categoryLabelKey = `memoryCategory${memoryCategory === "mixed" ? "Mixed" : memoryCategory.charAt(0).toUpperCase() + memoryCategory.slice(1)}`;
  memoryLevelValue.textContent = String(memoryLevel);
  memoryGridCountValue.textContent = String(config.cells);
  memoryTargetCountValue.textContent = String(config.targets);
  memoryCountdownValue.textContent = `${memoryCountdown}s`;
  memoryRewardTierValue.textContent = tier.tier;
  memoryCategoryValue.textContent = translations[currentLang][categoryLabelKey];
}

function updateMemoryActionButton() {
  memoryActionButton.disabled = false;

  if (memoryState === "memorizing") {
    memoryActionButton.textContent = translations[currentLang].memoryPause;
    return;
  }

  if (memoryState === "paused") {
    memoryActionButton.textContent = translations[currentLang].memoryResume;
    return;
  }

  if (memoryState === "failed") {
    memoryActionButton.textContent = translations[currentLang].memoryRestart;
    return;
  }

  if (memoryState === "answering" || memoryState === "transition") {
    memoryActionButton.textContent = translations[currentLang].memoryPause;
    memoryActionButton.disabled = true;
    return;
  }

  memoryActionButton.textContent = translations[currentLang].memoryStart;
}

function renderMemoryBoard() {
  const config = getMemoryLevelConfig();
  memoryGridBoard.innerHTML = "";
  memoryGridBoard.style.setProperty("--memory-columns", String(config.columns));
  memoryGridBoard.dataset.size = config.cells > 18 ? "dense" : config.cells > 8 ? "mid" : "base";

  memoryBoard.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "memory-card";
    button.dataset.index = String(index);
    button.classList.toggle("revealed", memoryState === "memorizing" || card.matched || card.revealed);
    if (card.matched) button.classList.add("matched");

    const isTextual = card.kind === "numbers" || card.kind === "words";
    const hiddenLabel =
      memoryState === "memorizing" || card.matched || card.revealed
        ? `<span class="memory-card-icon ${isTextual ? "textual" : ""}">${card.icon}</span>`
        : `<span class="memory-card-question">?</span>`;

    button.innerHTML = `<span class="memory-card-inner">${hiddenLabel}</span>`;
    button.addEventListener("click", () => handleMemoryCardClick(index));
    memoryGridBoard.appendChild(button);
  });

  renderMemoryTargets();
  renderMemorySummary();
  updateMemoryActionButton();
}

function setMemoryStatus(key) {
  memoryStatusText.textContent = translations[currentLang][key];
}

function stopMemoryTimer() {
  if (memoryCountdownTimer) {
    window.clearInterval(memoryCountdownTimer);
    memoryCountdownTimer = null;
  }
}

function stopMemoryAdvanceTimer() {
  if (memoryAdvanceTimer) {
    window.clearTimeout(memoryAdvanceTimer);
    memoryAdvanceTimer = null;
  }
}

function enterMemoryAnswering() {
  memoryState = "answering";
  setMemoryStatus("memoryAnswering");
  memoryBoard = memoryBoard.map((card) => ({ ...card, revealed: false }));
  renderMemoryBoard();
}

function startMemoryTimer() {
  stopMemoryTimer();
  memoryCountdownValue.textContent = `${memoryCountdown}s`;
  memoryCountdownTimer = window.setInterval(() => {
    memoryCountdown -= 1;
    memoryCountdownValue.textContent = `${memoryCountdown}s`;
    if (memoryCountdown <= 0) {
      stopMemoryTimer();
      enterMemoryAnswering();
    }
  }, 1000);
}

function buildMemoryLevel() {
  stopMemoryAdvanceTimer();
  stopMemoryTimer();
  const config = getMemoryLevelConfig();
  const pool = shuffleList(getMemoryAssetPool(memoryCategory, config.cells));
  memoryBoard = pool.slice(0, config.cells).map((card) => ({ ...card, revealed: true, matched: false }));
  memoryTargets = shuffleList(memoryBoard).slice(0, config.targets);
  memoryMatchedKeys = new Set();
  memoryCountdown = 10;
  memoryState = "memorizing";
  setMemoryStatus("memoryMemorizing");
  renderMemoryBoard();
  startMemoryTimer();
}

function resetMemoryChallenge({ autoStart = false } = {}) {
  stopMemoryTimer();
  stopMemoryAdvanceTimer();
  memoryLevel = 1;
  memoryCountdown = 10;
  memoryState = "idle";
  memoryBoard = [];
  memoryTargets = [];
  memoryMatchedKeys = new Set();
  setMemoryStatus("memoryIdle");
  renderMemoryBoard();
  if (autoStart) buildMemoryLevel();
}

function handleMemorySuccess() {
  stopMemoryTimer();
  stopMemoryAdvanceTimer();
  memoryState = "transition";
  setMemoryStatus("memorySuccess");
  const message = getMemorySuccessMessage();
  if (message) {
    resultCard.dataset.variant = "memory-success";
    resultTitle.textContent = message.title;
    resultMeta.textContent = message.meta;
    resultCopy.textContent = `${message.copy} ${currentLang === "zh" ? "当前奖励档：" : "Current reward tier: "}${getMemoryRewardTier().tier}`;
    resultVisual.hidden = true;
    resultDialog.showModal();
  }
  renderMemoryBoard();
  memoryAdvanceTimer = window.setTimeout(() => {
    if (resultDialog.open) resultDialog.close();
    memoryLevel += 1;
    buildMemoryLevel();
  }, 1500);
  renderMemorySummary();
}

function handleMemoryFailure() {
  stopMemoryTimer();
  stopMemoryAdvanceTimer();
  memoryState = "failed";
  setMemoryStatus("memoryFailed");
  memoryBoard = memoryBoard.map((card) => ({ ...card, revealed: true }));
  renderMemoryBoard();
  const message = getMemoryFailureMessage();
  if (!message) return;
  resultCard.dataset.variant = "memory-failed";
  resultTitle.textContent = message.title;
  resultMeta.textContent = `${message.meta} ${currentLang === "zh" ? "当前奖励档：" : "Current reward tier: "}${getMemoryRewardTier().tier}`;
  resultCopy.textContent = message.copy;
  resultVisual.hidden = true;
  window.setTimeout(() => {
    resultDialog.showModal();
  }, 520);
}

function pauseMemoryChallenge() {
  if (memoryState !== "memorizing") return;
  stopMemoryTimer();
  memoryState = "paused";
  setMemoryStatus("memoryPaused");
  renderMemoryBoard();
}

function resumeMemoryChallenge() {
  if (memoryState !== "paused") return;
  memoryState = "memorizing";
  setMemoryStatus("memoryMemorizing");
  renderMemoryBoard();
  startMemoryTimer();
}

function handleMemoryCardClick(index) {
  if (memoryState !== "answering") return;
  const card = memoryBoard[index];
  if (!card || card.matched) return;

  const isTarget = memoryTargets.some((item) => item.key === card.key);
  if (!isTarget || memoryMatchedKeys.has(card.key)) {
    memoryBoard[index].revealed = true;
    renderMemoryBoard();
    handleMemoryFailure();
    return;
  }

  memoryMatchedKeys.add(card.key);
  memoryBoard[index].matched = true;
  memoryBoard[index].revealed = true;
  renderMemoryBoard();

  if (memoryMatchedKeys.size === memoryTargets.length) {
    handleMemorySuccess();
  }
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
  const themePalette = themePalettes.white;
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
    const nameInput = row.querySelector(".item-name");
    const weightInput = row.querySelector(".item-weight");
    const shareDisplay = row.querySelector(".item-share");
    const removeButton = row.querySelector(".remove-button");

    nameInput.value = item.label;
    weightInput.value = item.weight;
    shareDisplay.textContent = showChanceInfo ? getShareText(shares[index] || 0) : "--";

    nameInput.addEventListener("input", (event) => {
      wheelItems[index].label = event.target.value;
      drawWheel();
    });

    nameInput.addEventListener("blur", (event) => {
      const value = event.target.value.trim();
      wheelItems[index].label = value || (currentLang === "zh" ? "未命名奖项" : "Untitled");
      renderWheelEditor();
    });

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
    resultCopy.textContent = translations[currentLang].resultCopy;
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
    const rowTemplate = blindboxPrizeTemplate.content.firstElementChild;
    if (!rowTemplate) return;
    const row = rowTemplate.cloneNode(true);
    const nameInput = row.querySelector(".blindbox-prize-name");
    const qtyInput = row.querySelector(".blindbox-prize-qty");
    const share = row.querySelector(".blindbox-prize-share");
    const remove = row.querySelector(".blindbox-remove");

    if (!nameInput || !qtyInput || !share || !remove) return;

    nameInput.value = prize.label;
    qtyInput.value = prize.qty;
    share.textContent = showBlindboxChanceInfo ? getShareText(shares[index] || 0) : "--";

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
      pool.push({ label: prize.label, opened: false, opening: false });
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
    const cellTemplate = blindboxCellTemplate.content.firstElementChild;
    if (!cellTemplate) return;
    const button = cellTemplate.cloneNode(true);
    const name = button.querySelector(".blindbox-cell-name");
    if (!name) return;
    if (cell.opened) {
      name.textContent = cell.label;
    } else {
      name.textContent = "";
    }
    if (cell.opened) button.classList.add("opened");
    if (blindboxOpening && !cell.opened) button.disabled = true;
    button.addEventListener("click", () => openBlindbox(index));
    blindboxGrid.appendChild(button);
  });
  updateBlindboxStats();
}

function generateBlindboxBoard() {
  const assigned = blindboxPrizes.reduce((sum, prize) => sum + (Number(prize.qty) || 0), 0);
  if (assigned !== blindboxBoxCount) return;
  blindboxCells = shuffleArray(buildBlindboxPool());
  blindboxOpening = false;
  renderBlindboxGrid();
}

function ensureBlindboxBoard() {
  const assigned = blindboxPrizes.reduce((sum, prize) => sum + (Number(prize.qty) || 0), 0);
  if (assigned !== blindboxBoxCount) return;
  if (blindboxCells.length === blindboxBoxCount) return;
  generateBlindboxBoard();
}

function resetBlindboxBoard() {
  if (!blindboxCells.length) return;
  blindboxOpening = false;
  blindboxCells = blindboxCells.map((cell) => ({ ...cell, opened: false, opening: false }));
  renderBlindboxGrid();
}

function resetBlindboxConfig() {
  blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang[currentLang]);
  renderBlindboxPrizeList();
  blindboxOpening = false;
  blindboxCells = [];
  ensureBlindboxBoard();
}

function openBlindbox(index) {
  const cell = blindboxCells[index];
  if (!cell || cell.opened || blindboxOpening) return;
  blindboxOpening = true;
  resultDialog.dataset.mode = "blindbox";
  resultCard.dataset.state = "opening";
  resultVisual.hidden = false;
  resultTitle.textContent = currentLang === "zh" ? "开启盲盒中..." : "Opening blind box...";
  resultMeta.textContent = currentLang === "zh" ? "请稍候" : "Please wait";
  resultCopy.textContent = translations[currentLang].resultCopy;
  closeDialogButton.disabled = true;
  resultDialog.showModal();

  window.setTimeout(() => {
    cell.opened = true;
    blindboxOpening = false;
    renderBlindboxGrid();
    resultCard.dataset.state = "revealed";
    resultTitle.textContent = cell.label;
    resultMeta.textContent = currentLang === "zh" ? "恭喜开出礼物" : "You opened a reward";
    resultCopy.textContent = translations[currentLang].resultCopy;
    closeDialogButton.disabled = false;
  }, 1000);
}

function applyTheme() {
  document.body.dataset.theme = "white";
  drawWheel();
  if (blindboxCells.length) renderBlindboxGrid();
  renderMemoryBoard();
  renderSlotIdleState();
}

function setActiveActivity(activity) {
  const previousActivity = currentActivity;
  currentActivity = activity;

  if (previousActivity === "memory" && activity !== "memory") {
    stopMemoryTimer();
    stopMemoryAdvanceTimer();
  }

  if (previousActivity === "pachinko" && activity !== "pachinko") {
    stopSlotSpinTimer();
    slotSpinning = false;
    slotSpinButton.disabled = false;
    renderSlotIdleState();
  }

  activityCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.activity === activity);
  });

  activityPanels.forEach((panel) => {
    const panelName = panel.dataset.panel;
    const show =
      (activity === "wheel" && (panelName === "wheel" || panelName === "wheel-editor")) ||
      (activity === "blindbox" && (panelName === "blindbox" || panelName === "blindbox-editor")) ||
      (activity === "roulette" && (panelName === "roulette" || panelName === "roulette-editor")) ||
      (activity === "memory" && (panelName === "memory" || panelName === "memory-editor")) ||
      (activity === "pachinko" && (panelName === "pachinko" || panelName === "pachinko-editor"));
    panel.classList.toggle("active", show);
  });

  if (activity === "blindbox") ensureBlindboxBoard();
  if (activity === "memory" && previousActivity !== "memory") resetMemoryChallenge({ autoStart: true });
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
  toggleBlindboxChanceButton.textContent = translations[lang][showBlindboxChanceInfo ? "hideChance" : "showChance"];
  stopSlotSpinTimer();
  wheelItems = structuredClone(defaultWheelItemsByLang[lang]);
  blindboxPrizes = structuredClone(defaultBlindboxPrizesByLang[lang]);
  rouletteRewards = structuredClone(defaultRouletteRewardsByLang[lang]);
  memoryRewardTiers = structuredClone(defaultMemoryRewardTiersByLang[lang]);
  slotRewards = structuredClone(defaultSlotRewardsByLang[lang]);
  slotCurrentReward = slotRewards[0];
  blindboxCells = [];
  renderWheelEditor();
  renderBlindboxPrizeList();
  renderRouletteRewardList();
  renderRouletteSummary();
  renderMemoryRewardList();
  renderSlotRewardList();
  renderSlotSummary();
  renderSlotIdleState();
  resetMemoryChallenge({ autoStart: currentActivity === "memory" });
  setRouletteStatus("rouletteStatusIdle");
  setSlotStatus("slotStatusIdle");
  ensureBlindboxBoard();
  drawWheel();
}

activityCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (
      card.dataset.activity === "wheel" ||
      card.dataset.activity === "blindbox" ||
      card.dataset.activity === "roulette" ||
      card.dataset.activity === "memory" ||
      card.dataset.activity === "pachinko"
    ) {
      setActiveActivity(card.dataset.activity);
    }
  });
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

toggleBlindboxChanceButton.addEventListener("click", () => {
  showBlindboxChanceInfo = !showBlindboxChanceInfo;
  toggleBlindboxChanceButton.textContent =
    translations[currentLang][showBlindboxChanceInfo ? "hideChance" : "showChance"];
  renderBlindboxPrizeList();
});

generateBlindboxButton.addEventListener("click", generateBlindboxBoard);
shuffleBlindboxButton.addEventListener("click", generateBlindboxBoard);
resetBlindboxConfigButton.addEventListener("click", resetBlindboxConfig);
resetBlindboxBoardButton.addEventListener("click", resetBlindboxBoard);
rouletteFireButton.addEventListener("click", pullRouletteTrigger);
rouletteResetButton.addEventListener("click", () => {
  rouletteRewards = structuredClone(defaultRouletteRewardsByLang[currentLang]);
  selectedBullets = 1;
  renderRouletteRewardList();
  resetRouletteGame();
});
rouletteBulletPicker.addEventListener("click", (event) => {
  const button = event.target.closest(".roulette-bullet-chip");
  if (!button || rouletteLocked) return;
  selectedBullets = Number(button.dataset.bullets);
  renderRouletteSummary();
  setRouletteStatus("rouletteStatusIdle");
});

slotSpinButton.addEventListener("click", spinSlotMachine);
slotResetButton.addEventListener("click", () => {
  stopSlotSpinTimer();
  slotRewards = structuredClone(defaultSlotRewardsByLang[currentLang]);
  slotCurrentReward = slotRewards[0];
  slotSpinning = false;
  slotSpinButton.disabled = false;
  setSlotStatus("slotStatusIdle");
  renderSlotRewardList();
  renderSlotSummary();
  renderSlotIdleState();
});

memoryActionButton.addEventListener("click", () => {
  if (memoryState === "memorizing") {
    pauseMemoryChallenge();
    return;
  }

  if (memoryState === "paused") {
    resumeMemoryChallenge();
    return;
  }

  if (memoryState === "idle" || memoryState === "failed") {
    resetMemoryChallenge({ autoStart: true });
  }
});

memoryResetButton.addEventListener("click", () => {
  memoryRewardTiers = structuredClone(defaultMemoryRewardTiersByLang[currentLang]);
  renderMemoryRewardList();
  resetMemoryChallenge({ autoStart: currentActivity === "memory" });
});

memoryCategoryList.addEventListener("click", (event) => {
  const button = event.target.closest(".memory-category-chip");
  if (!button) return;
  memoryCategory = button.dataset.category;
  document.querySelectorAll(".memory-category-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === memoryCategory);
  });
  resetMemoryChallenge({ autoStart: currentActivity === "memory" });
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

resultDialog.addEventListener("close", () => {
  resultDialog.dataset.mode = "";
  resultCard.dataset.state = "";
  resultCard.dataset.variant = "";
  resultVisual.hidden = true;
  closeDialogButton.disabled = false;
  resultCopy.textContent = translations[currentLang].resultCopy;
});

renderWheelEditor();
renderBlindboxPrizeList();
renderRouletteRewardList();
renderMemoryRewardList();
renderSlotRewardList();
renderRouletteSummary();
renderSlotSummary();
renderSlotIdleState();
resetMemoryChallenge();
setRouletteStatus("rouletteStatusIdle");
setSlotStatus("slotStatusIdle");
ensureBlindboxBoard();
applyTheme();
toggleChanceButton.textContent = translations[currentLang].showChance;
toggleBlindboxChanceButton.textContent = translations[currentLang].hideChance;
setActiveActivity("wheel");
drawWheel();
