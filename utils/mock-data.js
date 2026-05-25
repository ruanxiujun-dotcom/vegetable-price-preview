// utils/mock-data.js

const vegTypes = [
  { name: "番茄", basePrice: 4.8, unit: "斤", trend: "up", changeRate: "+8.33%", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=120&auto=format&fit=crop&q=60" },
  { name: "黄瓜", basePrice: 3.6, unit: "斤", trend: "down", changeRate: "-5.26%", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=120&auto=format&fit=crop&q=60" },
  { name: "大白菜", basePrice: 1.2, unit: "斤", trend: "steady", changeRate: "持平", image: "https://images.unsplash.com/photo-1605335838084-2a6288636b04?w=120&auto=format&fit=crop&q=60" },
  { name: "土豆", basePrice: 2.2, unit: "斤", trend: "up", changeRate: "+12.50%", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=120&auto=format&fit=crop&q=60" },
  { name: "香菇", basePrice: 8.5, unit: "斤", trend: "down", changeRate: "-3.70%", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=120&auto=format&fit=crop&q=60" },
  { name: "胡萝卜", basePrice: 2.8, unit: "斤", trend: "up", changeRate: "+4.20%", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=120&auto=format&fit=crop&q=60" },
  { name: "西兰花", basePrice: 6.2, unit: "斤", trend: "down", changeRate: "-2.10%", image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=120&auto=format&fit=crop&q=60" },
  { name: "生姜", basePrice: 11.0, unit: "斤", trend: "up", changeRate: "+15.30%", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=120&auto=format&fit=crop&q=60" },
  { name: "大蒜", basePrice: 9.5, unit: "斤", trend: "steady", changeRate: "持平", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=120&auto=format&fit=crop&q=60" },
  { name: "茄子", basePrice: 4.1, unit: "斤", trend: "up", changeRate: "+6.80%", image: "https://images.unsplash.com/photo-1615485500704-8e990f8300f7?w=120&auto=format&fit=crop&q=60" },
  { name: "辣椒", basePrice: 5.6, unit: "斤", trend: "down", changeRate: "-8.40%", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=120&auto=format&fit=crop&q=60" },
  { name: "菠菜", basePrice: 3.9, unit: "斤", trend: "up", changeRate: "+11.10%", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=120&auto=format&fit=crop&q=60" },
  { name: "韭菜", basePrice: 3.5, unit: "斤", trend: "steady", changeRate: "持平", image: "https://images.unsplash.com/photo-1628294895552-9dca64557914?w=120&auto=format&fit=crop&q=60" },
  { name: "白萝卜", basePrice: 1.5, unit: "斤", trend: "down", changeRate: "-4.50%", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=120&auto=format&fit=crop&q=60" },
  { name: "冬瓜", basePrice: 1.8, unit: "斤", trend: "up", changeRate: "+5.00%", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=120&auto=format&fit=crop&q=60" }
];

const newsData = [
  {
    category: "policy",
    categoryText: "政策导向",
    title: "农业农村部：部署开展“菜篮子”安全大检查，确保夏季供给稳定",
    time: "今天 08:30",
    summary: "会议强调，要加强蔬菜基地生产动态监测，落实防灾减灾技术措施，保障大中城市蔬菜免受汛期断供影响。"
  },
  {
    category: "news",
    categoryText: "市场快讯",
    title: "全国蔬菜价格稳中略有调整，高温降雨天气或引发局部波动",
    time: "昨天 17:15",
    summary: "据商务部监测，上周全国30种蔬菜平均批发价格小幅微调，其中叶菜类由于运输损耗增大出现阶段性小幅上涨。"
  },
  {
    category: "weather",
    categoryText: "气象预警",
    title: "南方新一轮强降雨来袭，多省份农农户需做好蔬菜大棚防渍排涝",
    time: "5月24日",
    summary: "中央气象台发布暴雨蓝色预警，湖南、江西、福建、广东部分地区有大到暴雨，容易对露地叶菜采收造成困难。"
  }
];

const expertData = [
  {
    avatar: "林",
    name: "林建华",
    title: "中国农科院 农业市场研究所研究员",
    opinion: "当前番茄等茄果类蔬菜正值南北方产区交替季节。随着北方大棚蔬菜大量上市，预计未来两周茄果类整体批发价将步入季节性下行通道。农户可以适当加速成熟期蔬菜采收以锁定利润。"
  },
  {
    avatar: "张",
    name: "张明",
    title: "寿光蔬菜物流园 资深价格分析师",
    opinion: "今年5月份，受华南汛期强降水影响，南菜北运物流成本平均抬升了8-12%，这支撑了叶菜价格在近期的抗跌表现。建议华中和北方农户抓住该时间窗口，补充叶类蔬菜供应量。"
  }
];

const seasonalData = [
  {
    month: "5月·适宜种植",
    vegs: ["空心菜", "苋菜", "豇豆", "丝瓜", "苦瓜"],
    desc: "5月份气温迅速回升，适合耐热性强的瓜果与夏绿叶菜种植。需防范暴雨冲刷，注意大棚遮阳与防虫网配置。"
  },
  {
    month: "5月·适宜采收",
    vegs: ["蒜苔", "春莴笋", "早熟番茄", "豌豆", "大白菜"],
    desc: "春季大棚作物已进入采收尾声。应注意避开高温时段采摘，采收后及时冷藏保鲜，避免高温脱水导致品质下降。"
  }
];

// 根据省份和县区生成微调后的价格
function getAdjustedPrice(baseVal, provIdx = 0, cityIdx = 0, countyIdx = 0) {
  const seed = provIdx * 7 + cityIdx * 3 + countyIdx;
  const factor = 1 + ((seed % 15) - 7) / 100; // ±7% 波动
  return (baseVal * factor).toFixed(2);
}

module.exports = {
  vegTypes,
  newsData,
  expertData,
  seasonalData,
  getAdjustedPrice
};
