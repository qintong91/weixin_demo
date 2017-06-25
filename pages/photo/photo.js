// photo.js

Page({
  data: {
    src: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var that = this;
    wx.getStorage({
      key: 'src',
      success: function (res) {
        console.log(  res.data);
        that.setData({
          src: res.data 
        })
         },
    })

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
  
  },
  bindGetPhoto: function () {
    var that = this;
    wx.chooseImage(
      {
        count: 1,
        success: function(res) {
          that.setData({
            src: res.tempFilePaths[0]
          }) 
          wx.setStorage({
            key: 'src',
            data: res.tempFilePaths[0]
          })
        }
      }
    );
  }
})