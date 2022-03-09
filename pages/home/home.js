// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiperImg":[
      "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w",
      "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    moveText: "",
    objWidth: 0,
    strWidth: 0,
    "iconFour":[
      {
        url:"/pages/introduction/introduction",
        img:"../../images/introduce.png",
        title:"赛事介绍"
      },
      {
        url:"/pages/news/news",
        img:"../../images/news.png",
        title:"通讯稿"
      },
      {
        url:"/pages/notification/notification",
        img:"../../images/notice.png",
        title:"通知"
      },
      {
        url:"/pages/schedule/schedule",
        img:"../../images/schedule.png",
        title:"赛程表"
      }
    ],
    "colorName":["ca","cb","cc","cd"],
    "article":[
      {
        "title":"运动的益处(一）",
        "img":"https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"1、运动可增强体质：健身运动，可增加肺活量，使得气体充分交换..."
      },
      {
        "title":"运动的益处（二）",
        "img":"https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"6、运动可改善消化系统功能：促使腹直肌、腹壁肌活动，加强消...",
      },
      {
        "title":"有氧运动 VS 无氧运动",
        "img":"https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"我们知道，汽车发动机通过燃烧汽油产生动力，汽油的燃烧离不开氧气。同样，人类运动中也需要燃..."
      },
      {
        "title":"周末运动前，应该注意些什么？",
        "img":"https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"运动前，规划好运动的类型和强度。在工作日，也可以..."
      },
      {
        "title":"运动损伤的PRICE原则",
        "img":"https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "content":"如果运动过程中受伤，记住这五条原则。P：protect from further injury 保护，防止进一步损伤..."
      },
      {
        "title":"放弃这些停止运动的借口！",
        "img":"https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"关于「年龄」的借口多为两种，要么太年轻，要么年纪太大。自古英雄出少年..."
      },
      {
        "title":"冬季运动注意事项",
        "img":"https://images.pexels.com/photos/60230/pexels-photo-60230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "content":"1、冬季寒冷，运动前注意充分热身，运动时注意从低强度开始，防止受伤；..."
      }
    ]
    
  },
  detailArticle:function(event){
    console.log(event.currentTarget.id)
    var ID = event.currentTarget.id
    wx.navigateTo({
      url: '/pages/detailArticle/detailArticle?art_id=' + ID
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = wx.getSystemInfoSync();
    let w = info.screenWidth;
    let content = "男子1000米将于下午2:00开始，请运动员准时参加！！";
    let len = content.length * 15 + 4;
    len = 0 - len;
    this.setData({
        moveText: content,
        objWidth: w + "px",
        strWidth: len + "px"
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

  }
})