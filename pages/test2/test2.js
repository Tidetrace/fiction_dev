Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    age: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      name: options.nameData,
      age: options.ageData
    })

  }
})