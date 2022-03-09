// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NO:0,
    name:["leftTop","rightTop","leftBottom","rightBottom"],
    score:0,
    x:50,
    selection:"",
    //显示 
    visual:true,
    position:[
      {
        "x":0,
        "y":0
      },
      {
        "x":300,
        "y":0
      },
      {
        "x":0,
        "y":320
      },
      {
        "x":300,
        "y":320
      }
    ],
    question:[
      {
        "title":"1、脚踝受伤了应该用什么冰敷？",
        "imgUrl":[
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2589541447,2933828133&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853661604,3635058986&fm=26&gp=0.jpg",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi03.c.aliimg.com%2Fimg%2Fibank%2F2014%2F415%2F384%2F1560483514_284390565.jpg&refer=http%3A%2F%2Fi03.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624861309&t=523cbccf44b7355b0a573fdedda82c8a",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4272026479,322816272&fm=26&gp=0.jpg"
        ],
        "answer":"0"
      },
      {
        "title":"2、网球比赛中途可以吃什么食物补充能量？",
        "imgUrl":[
          "https://img0.baidu.com/it/u=1095193056,1248275178&fm=26&fmt=auto&gp=0.jpg",
          "https://img2.baidu.com/it/u=3555731326,364145845&fm=26&fmt=auto&gp=0.jpg",
          "https://img2.baidu.com/it/u=135896716,3704103640&fm=26&fmt=auto&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3491585020,1724352083&fm=26&gp=0.jpg"
        ],
        "answer":"2"
      },
      {
        "title":"3、中国的国球是什么？",
        "imgUrl":[
          "https://img1.baidu.com/it/u=1817408494,1764639375&fm=26&fmt=auto&gp=0.jpg",
          "https://img0.baidu.com/it/u=1064270120,3053478403&fm=26&fmt=auto&gp=0.jpg",
          "https://img2.baidu.com/it/u=1489103224,1788410401&fm=26&fmt=auto&gp=0.jpg",
          "https://bkimg.cdn.bcebos.com/pic/29381f30e924b8999cc4939466061d950b7bf6a6?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto"
        ],
        "answer":"3"
      }
    ],
    "finishImg":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1996945126,2943938186&fm=26&gp=0.jpg",
    "correctImg":[
      // "http://bpic.588ku.com/element_origin_min_pic/19/03/06/8ea683613030f4fb8d4d2ee766ac90cd.jpg",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsoccerbee.org%2Fwp-content%2Fuploads%2F2015%2F02%2F51.jpg&refer=http%3A%2F%2Fsoccerbee.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624850785&t=0183ece6c1b81ef6bf291c35258bc556",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3748578221,939085379&fm=26&gp=0.jpg",
      "https://bkimg.cdn.bcebos.com/pic/f9198618367adab44aedde018e9fa41c8701a18b4e17?x-bce-process=image/format,f_auto"
    ]
  },
  moveChange:function(event){
    // console.log(event)

    let info = wx.getSystemInfoSync();
    let w = 750/info.screenWidth; //换算 rpx、px
    var x = (event.detail.x + event.target.offsetLeft) * w;
    var y = (event.detail.y + event.target.offsetTop) * w;

    //选项
    var selection = event.target.id;
    var NO = this.data.NO;
    var answer = this.data.question[NO].answer;
    var score = this.data.score;
    this.getBack()
    // console.log(NO + "--" + answer)
    //move右下角触碰绿色左上角，move黄色左下角触碰绿色右下角
    if((x>=275-100 && y>=300-50) && (x<=475 && y<=450) && this.data.selection==""){
      if(selection==answer){
        wx.showToast({
          title: '答题正确',
          duration: 1000,
          icon: "success",
        }),
        this.getBack(),
        this.setData(
         {
          score:score+5,
          selection:"true"
          }
        )
        console.log("NO--"+this.data.NO)
        console.log(this.data.score)
      }else{
        wx.showToast({
          title: '答题错误',
          duration: 1000,
          icon: "error",
        }),
        this.getBack(),
        this.setData(
          {
           selection:"false"
          } 
        )
        console.log("NO--"+this.data.NO)
      }    
    }
  },
  next:function(){
    this.getBack()
    var NO = this.data.NO
    if(NO==this.data.question.length-1){
      this.setData({
        visual:false
      })
    }

    if(this.data.selection!=""){
      console.log("执行了")
      this.setData({
        NO:NO+1,
        selection:""
      })
    }else{
      wx.showToast({
        title: '您还未答题',
        duration: 1000,
        icon: "error",
      })
    }
    
  },
  getBack:function(){
    // var position = this.data.position;
    var x = 150
    this.setData({
      // position:position
      'position':[
        {
          "x":0,
          "y":0
        },
        {
          "x":300,
          "y":0
        },
        {
          "x":0,
          "y":320
        },
        {
          "x":300,
          "y":320
        }
      ]
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