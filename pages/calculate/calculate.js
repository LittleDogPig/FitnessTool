//index.js
//获取应用实例
const app = getApp()

Page({
  bmr:function(e){
    wx.navigateTo({
      url: '../calculate/bmr/bmr',
    })
  },
  distribution: function (e) {
    wx.navigateTo({
      url: '../calculate/distribution/distribution',
    })
  }
})
