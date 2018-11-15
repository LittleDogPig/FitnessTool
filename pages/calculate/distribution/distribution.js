// pages/calculate/distribution/distribution.js
Page({
  data: {
    morning:0,
    morningC:0,
    morningP:0,
    morningZ:0,
    noon:0,
    noonC:0,
    noonP:0,
    noonZ:0,
    evening:0,
    eveningC: 0,
    eveningP: 0,
    eveningZ: 0,
    a1:0,
    b1: 0, 
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  a1Input: function (e) {
    this.setData({
      a1: e.detail.value
    })
  },
  b1Input: function (e) {
    this.setData({
      b1: e.detail.value
    })
  },
  b2Input: function (e) {
    this.setData({
      b2: e.detail.value
    })
  },
  b3Input: function (e) {
    this.setData({
      b3: e.detail.value
    })
  },
  c1Input: function (e) {
    this.setData({
      c1: e.detail.value
    })
  },
  c2Input: function (e) {
    this.setData({
      c2: e.detail.value
    })
  },
  c3Input: function (e) {
    this.setData({
      c3: e.detail.value
    })
  },
  caclulate: function (e) {
    var a1 = this.data.a1
    var b1 = this.data.b1
    var b2 = this.data.b2
    var b3 = this.data.b3
    var c1 = this.data.c1
    var c2 = this.data.c2
    var c3 = this.data.c3
    var morning
    var noon
    var evening
    if (a1 == 0 || b1 == 0 || b2 == 0 || b3 == 0 || c1 == 0 || c2 == 0 || c3 == 0 ) {
      wx.showToast({
        title: "请填写完整信息",
        icon: 'info',
        duration: 2000
      })
      return false;
    }
    morning = a1/10 *c1
    noon = a1/10 * c2
    evening = a1 /10 * c3

    console.log(morning)
    this.setData({
      morning: morning.toFixed(1),
      noon: noon.toFixed(1),
      evening: evening.toFixed(1),

      morningC: (morning / 10 * b1 / 4).toFixed(1),
      morningP: (morning / 10 * b2 / 4).toFixed(1),
      morningZ: (morning / 10 * b3 / 9).toFixed(1),

      noonC: (noon / 10 * b1 / 4).toFixed(1),
      noonP: (noon / 10 * b2 / 4).toFixed(1),
      noonZ: (noon / 10 * b3 / 9).toFixed(1),

      eveningC: (evening / 10 * b1 / 4).toFixed(1),
      eveningP: (evening / 10 * b2 / 4).toFixed(1),
      eveningZ: (evening / 10 * b3 / 9).toFixed(1)
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})