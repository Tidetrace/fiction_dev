// pages/persion/persion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: false,
    password: 'ahjh'
  },

  quitListener: function(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    wx.request({
      url: 'http://localhost:8080/user/getusers',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        that.setData({
          data: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx: wx.navigateTo({
      url: '../../pages/read/read',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})