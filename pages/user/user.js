// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo:false,
    // "content":[
    //   {
    //     "url":"/pages/logs/logs",
    //     "src":"/images/Home.png",
    //     "text":"意见反馈"
    //   },
    //   {
    //     "url":"/pages/star/star",
    //     "src":"/images/search.png",
    //     "text":"评分"
    //   },
    //   {
    //     "url":"/pages/help/help",
    //     "src":"/images/user.png",
    //     "text":"使用帮助"
    //   },
    //   {
    //     "url":"/pages/logs/logs",
    //     "src":"/images/user.png",
    //     "text":"版权"
    //   }
    // ],
    "contentItems": [
      {
        "title": "意见反馈",
        "icon": "edit",
        "url": "/pages/feedback/feedback"
      },
      {
        "title": "评分",
        "icon": "like-o",
        "url": "/pages/star/star"
      },
      {
        "title": "使用帮助",
        "icon": "gift-o",
        "url": "/pages/help/help"
      },
      {
        "title": "版权声明",
        "icon": "comment-o",
        "url": "/pages/copyright/copyright"
      }
    ]
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
    // const userinfo = wx.getStorageSync('userinfo');
    // this.setData({userinfo})
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
  getUserProfile(e) {
    console.log(5)
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
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
  
  tzqCell: function () {
    wx.vibrateShort();
  }
})