// pages/notification/notification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "colorName":["ca","cb","cc","cd"],
    list:[
      {
        "title":"关于举办我校秋季运动会的通知",
        "content":"为增强学生体魄，促进我校学生德智体美劳全面发展，我校决定于今年五月...",
        "time":"2021.4.1"
      },
      {
        "title":"我校秋季运动会即将正式开始啦！",
        "content":"经过漫长的准备和报名工作，我校秋季运动会将于5.1日正式开始！比赛将在...",
        "time":"2021.4.28"
      },
      {
        "title":"关于参加运动会开幕式的通知",
        "content":"各位参加运动会的领导、运动员、各位工作人员和观摩团员请注意,根据运动会领队...",
        "time":"2021.4.29"
      },
      {
        "title":"关于男子1000米跑决赛更换场地的紧急通知",
        "content":"因场馆排水系统故障，导致原定举办男子1000米跑决赛的望江校区体育场严重积水...",
        "time":"2021.5.2"
      }
    ]
  },
  detailList:function(event){
    console.log(event.currentTarget.id)
    var ID = event.currentTarget.id
    wx.navigateTo({
      url: '/pages/detailList/detailList?id=' + ID
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