// pages/login/login.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
  },

  skipListener: function() {
    var that = this
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  formLoginInfo: function(e) {
    let that = this;
    console.log(that.data.username)
    wx.request({
      url: 'http://localhost:8080/login/login',
      data: {
        'username': e.detail.value.username,
        'password': e.detail.value.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function(res) {
        console.log(res)
        if (res.statusCode == 200 && res.data.indexOf('success') >= 0) {
          wx.switchTab({
              url: '/pages/index/index',
            })
        }else{
          wx.showToast({
            title: '用户名或者密码错误',
            icon: 'loading',
            duration: 1000
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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