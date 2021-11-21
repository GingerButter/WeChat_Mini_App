// pages/retrieve/retrieve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  retrieve:function(){
    var page = this;
    wx.request({
      url: 'http://localhost:8080/myapp/retrieve',
      data:{
        id: this.data.id,
        inputTime: this.data.inputTime
      },
      success(result){
        console.log(result.data);
        page.setData({
          inTime: result.data[0],
          inst: result.data[1],
          outTime: result.data[2],
          outst: result.data[3]
        });
      },
      fail(){
        console.log("Fail");
      }
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