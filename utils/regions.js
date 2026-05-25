// utils/regions.js

const regionData = [
  {
    name: "北京",
    cities: [
      {
        name: "北京市",
        counties: ["全部", "丰台区-新发地农产品批发市场", "海淀区-锦绣大地批发市场"]
      }
    ]
  },
  {
    name: "广东",
    cities: [
      {
        name: "广州市",
        counties: ["全部", "白云区-江南果菜批发市场", "荔湾区-黄沙水产市场"]
      },
      {
        name: "深圳市",
        counties: ["全部", "罗湖区-东门农产品批发市场", "龙岗区-海吉星农批市场"]
      }
    ]
  },
  {
    name: "山东",
    cities: [
      {
        name: "潍坊市",
        counties: ["全部", "寿光市-寿光蔬菜农产品物流园"]
      },
      {
        name: "临沂市",
        counties: ["全部", "兰山区-临沂鲁南农产品批发市场"]
      }
    ]
  },
  {
    name: "上海",
    cities: [
      {
        name: "上海市",
        counties: ["全部", "闵行区-江桥批发市场", "浦东新区-御桥农副产品市场"]
      }
    ]
  },
  {
    name: "江苏",
    cities: [
      {
        name: "南京市",
        counties: ["全部", "江宁区-众彩农副产品批发市场"]
      }
    ]
  }
];

// 获取特定列的选择数组
function getRegionColumnData(range, provIdx = 0, cityIdx = 0) {
  const provinces = range.map(p => p.name);
  const cities = range[provIdx].cities.map(c => c.name);
  const counties = range[provIdx].cities[cityIdx].counties.map(co => {
    return co.includes("-") ? co.split("-")[0] : co; // 只显示区县，不显示市场全称
  });
  return [provinces, cities, counties];
}

module.exports = {
  regionData,
  getRegionColumnData
};
