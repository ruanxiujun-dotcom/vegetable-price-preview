// app.js
App({
  onLaunch() {
    // 小程序启动时的初始化逻辑
    console.log("菜价通小程序已成功启动");
  },
  globalData: {
    // 从价格页点击跳转历史对比页时，用于传递选中的蔬菜名称
    selectedVegFromPrice: ""
  }
})
