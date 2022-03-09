Page({
  data: {
    startX: 0,
    endX: 0,
    startY: 0,
    endY: 0,
    iCenter: 3,
    datas: [{
        id: 1,
        zIndex: 2,
        opacity: 0.2,
        left: 40,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/badminton.jpg",
        animation: null
      },
      {
        id: 2,
        zIndex: 4,
        opacity: 0.4,
        left: 80,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/basketball.jpg",
        animation: null
      },
      {
        id: 3,
        zIndex: 6,
        opacity: 0.6,
        left: 120,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/soccer.jpg",
        animation: null
      },
      {
        id: 4,
        zIndex: 8,
        opacity: 1,
        left: 160,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/tennis.jpg",
        animation: null
      },
      {
        id: 5,
        zIndex: 6,
        opacity: 0.6,
        left: 200,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/ping-pong .jpg",
        animation: null
      },
      {
        id: 6,
        zIndex: 4,
        opacity: 0.4,
        left: 240,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/volleyball.jpg",
        animation: null
      }
    ],
    datas1: [{
        id: 1,
        zIndex: 2,
        opacity: 0.2,
        left: 40,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/100.jpg",
        animation: null
      },
      {
        id: 2,
        zIndex: 4,
        opacity: 0.4,
        left: 80,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/1000.jpg",
        animation: null
      },
      {
        id: 3,
        zIndex: 6,
        opacity: 0.6,
        left: 120,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/400.jpg",
        animation: null
      },
      {
        id: 4,
        zIndex: 8,
        opacity: 1,
        left: 160,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/5000.jpg",
        animation: null
      },
      {
        id: 5,
        zIndex: 6,
        opacity: 0.6,
        left: 200,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/far.jpg",
        animation: null
      },
      {
        id: 6,
        zIndex: 4,
        opacity: 0.4,
        left: 240,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/high.jpg",
        animation: null
      },
      {
        id: 7,
        zIndex: 2,
        opacity: 0.2,
        left: 280,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/ball.jpg",
        animation: null
      },
    ],
    datas2: [{
        id: 1,
        zIndex: 2,
        opacity: 0.2,
        left: 40,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/100.jpg",
        animation: null
      },
      {
        id: 2,
        zIndex: 4,
        opacity: 0.4,
        left: 80,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/800.jpg",
        animation: null
      },
      {
        id: 3,
        zIndex: 6,
        opacity: 0.6,
        left: 120,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/5000.jpg",
        animation: null
      },
      {
        id: 4,
        zIndex: 8,
        opacity: 1,
        left: 160,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/400.jpg",
        animation: null
      },
      {
        id: 5,
        zIndex: 6,
        opacity: 0.6,
        left: 200,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/ball.jpg",
        animation: null
      },
      {
        id: 6,
        zIndex: 4,
        opacity: 0.4,
        left: 240,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/far.jpg",
        animation: null
      },
      {
        id: 7,
        zIndex: 2,
        opacity: 0.2,
        left: 280,
        iamge: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/high.jpg",
        animation: null
      },
    ],
    order: [],
    order1: [],
    order2: [],
    shoopingtext: "", //搜索框的值
    history: false, //显示历史记录
    noneview: false, //显示未找到提示
    shoppinglist: false, //显示商品列表
    historyArray: [], //历史记录数组,
    newArray: [], //添加历史记录数组
    shoopingarray: [
      //团队
      {
        id: 0,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/badminton.jpg",
        title: "羽毛球",
        status: 0
      }, {
        id: 1,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/basketball.jpg",
        title: "篮球",
        status: 0
      }, {
        id: 2,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/ping-pong .jpg",
        title: "乒乓球",
        status: 0
      }, {
        id: 3,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/soccer.jpg",
        title: "足球",
        status: 0
      }, {
        id: 4,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/tennis.jpg",
        title: "网球",
        status: 0
      }, {
        id: 5,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/volleyball.jpg",
        title: "排球",
        status: 0
      }
      //男
      ,{
        id: 0,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/100.jpg",
        title: "100米",
        status: 0
      }, {
        id: 1,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/1000.jpg",
        title: "1000米",
        status: 0
      }, {
        id: 2,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/400.jpg",
        title: "接力400米",
        status: 0
      }, {
        id: 3,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/5000.jpg",
        title: "5000米",
        status: 0
      }, {
        id: 4,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/ball.jpg",
        title: "铅球",
        status: 0
      }, {
        id: 5,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/far.jpg",
        title: "跳高",
        status: 0
      }, {
        id: 6,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/high.jpg",
        title: "跳远",
        status: 0
      }

      //女
      ,{
        id: 0,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/100.jpg",
        title: "100米",
        status: 0
      }, {
        id: 1,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/800.jpg",
        title: "800米",
        status: 0
      }, {
        id: 2,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/400.jpg",
        title: "接力400米",
        status: 0
      }, {
        id: 3,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/5000.jpg",
        title: "5000米",
        status: 0
      }, {
        id: 4,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/ball.jpg",
        title: "铅球",
        status: 0
      }, {
        id: 5,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/far.jpg",
        title: "跳高",
        status: 0
      }, {
        id: 6,
        images: "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/high.jpg",
        title: "跳远",
        status: 0
      }
    ]
  },
  onLoad: function (options) {
    this.__set__();
    this.__set__1();
    this.__set__2();
    this.move();
    this.move1();
    this.move2();
  },
  move: function () {
    console.log("调用了    ----    move: function ()");
    var datas = this.data.datas;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas[" + i + "].animation"]: animation.export(),
        ["datas[" + i + "].zIndex"]: data.zIndex,
        ["datas[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  move1: function () {
    console.log("调用了    ----    move1: function ()");
    var datas = this.data.datas1;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas1[" + i + "].animation"]: animation.export(),
        ["datas1[" + i + "].zIndex"]: data.zIndex,
        ["datas1[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  move2: function () {
    console.log("调用了    ----    move2: function ()");
    var datas = this.data.datas2;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas2[" + i + "].animation"]: animation.export(),
        ["datas2[" + i + "].zIndex"]: data.zIndex,
        ["datas2[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  /**左箭头 */
  left: function () {
    console.log("调用了    ----    left: function ()");
    //
    var last = this.data.datas.pop(); //获取数组的最后一个
    this.data.datas.unshift(last); //放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move();

  },
  /** */
  right: function () {
    console.log("调用了    ----    right: function ()");
    var first = this.data.datas.shift(); //获取数组的第一个
    this.data.datas.push(first); //放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move();
  },
  /**左箭头 */
  left1: function () {
    console.log("调用了    ----    left1: function ()");
    //
    var last = this.data.datas1.pop(); //获取数组的最后一个
    this.data.datas1.unshift(last); //放到数组的第一个
    var orderFirst = this.data.order1.shift();
    this.data.order1.push(orderFirst);
    this.move1();
  },
  /** */
  right1: function () {
    console.log("调用了    ----    right1: function ()");
    var first = this.data.datas1.shift(); //获取数组的第一个
    this.data.datas1.push(first); //放到数组的最后一个位置
    var orderLast = this.data.order2.pop();
    this.data.order2.unshift(orderLast);
    this.move1();
  },
  /**左箭头 */
  left2: function () {
    console.log("调用了    ----    left2: function ()");
    //
    var last = this.data.datas2.pop(); //获取数组的最后一个
    this.data.datas2.unshift(last); //放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move2();
  },
  /** */
  right2: function () {
    console.log("调用了    ----    right2: function ()");
    var first = this.data.datas2.shift(); //获取数组的第一个
    this.data.datas2.push(first); //放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move2();
  },
  /**点击某项 */
  choose: function (e) {
    console.log("调用了    ----    choose: function ()");
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order = that.data.order;
    var index = 0;
    for (var i = 0; i < order.length; i++) {
      if (id == order[i]) {
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas.push(this.data.datas.shift()); //获取第一个放到最后一个
        this.data.order.unshift(this.data.order.pop());
        // this.right() 
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas.unshift(this.data.datas.pop()); //获取最后一个放到第一个
        this.data.order.push(this.data.order.shift());
        // this.left();
      }
    }
    this.move();
  },
  choose1: function (e) {
    console.log("调用了    ----    choose1: function ()");
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order1 = that.data.order1;
    var index = 0;
    for (var i = 0; i < order1.length; i++) {
      if (id == order1[i]) {
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas1.push(this.data.datas1.shift()); //获取第一个放到最后一个
        this.data.order1.unshift(this.data.order1.pop());
        // this.right() 
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas1.unshift(this.data.datas1.pop()); //获取最后一个放到第一个
        this.data.order1.push(this.data.order1.shift());
        // this.left();
      }
    }
    this.move1();
  },
  choose2: function (e) {
    console.log("调用了    ----    choose2: function ()");
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log("e", e);
    var order2 = that.data.order2;
    var index = 0;
    for (var i = 0; i < order2.length; i++) {
      if (id == order2[i]) {
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas2.push(this.data.datas2.shift()); //获取第一个放到最后一个
        this.data.order2.unshift(this.data.order2.pop());
        // this.right() 
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas2.unshift(this.data.datas2.pop()); //获取最后一个放到第一个
        this.data.order2.push(this.data.order2.shift());
        // this.left();
      }
    }
    this.move2();
  },
  /**新的排列复制到新的数组中 */
  __set__: function () {
    console.log("调用了    ----    __set__: function ()");
    var that = this;
    var order = that.data.order;
    var datas = that.data.datas;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order[" + i + "]"]: datas[i].id
      })
    }
  },
  __set__1: function () {
    console.log("调用了    ----    __set__1: function ()");
    var that = this;
    var order = that.data.order1;
    var datas = that.data.datas1;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order1[" + i + "]"]: datas[i].id
      })
    }
  },
  __set__2: function () {
    console.log("调用了    ----    __set__2: function ()");
    var that = this;
    var order = that.data.order2;
    var datas = that.data.datas2;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order2[" + i + "]"]: datas[i].id
      })
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    console.log("调用了    ----    moveStart: function ()");
    // console.log(e);
    var startX = e.changedTouches[0].pageX;
    var startY = e.changedTouches[0].pageY;
    this.setData({
      startX: startX,
      startY: startY
    });
    // console.log("startX", startX, "startY", startY);
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    console.log("调用了    ----    moveItem: function ()");
    // console.log(e);
    var that = this;
    var endX = e.changedTouches[0].pageX;
    var endY = e.changedTouches[0].pageY;
    this.setData({
      endX: endX,
      endY: endY
    });
    // console.log("endX", endX, "endY", endY);
    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;
    var moveY = (this.data.startY + this.data.endY) / 2;
    console.log("moveX", moveX, "moveY", moveY);

    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('#eachframe').boundingClientRect()
    query.select('#eachframe1').boundingClientRect()
    query.select('#eachframe2').boundingClientRect()
    var firststart;
    var firstend;
    var secondstart;
    var secondend;
    var thirdstart;
    var thirdend;
    query.exec(function (res) {
      console.log(res);
      firststart = res[0].top;
      firstend = firststart + res[0].height;
      secondstart = res[1].top;
      secondend = secondstart + res[1].height;
      thirdstart = res[2].top;
      thirdend = thirdstart + res[2].height;
      // console.log(firststart);
      // console.log(firstend);
      // console.log(secondstart);
      // console.log(secondend);
      // console.log(thirdstart);
      // console.log(thirdend);
    })
    var history = that.data.history //显示历史记录
    var noneview = that.data.noneview //显示未找到提示
    var shoppinglist = that.data.shoppinglist //显示商品列表
    var hightlist1 = [120, 400, 500, 800, 900, 1200]
    var hightlist2 = [310 + 120, 310 + 400, 310 + 500, 310 + 800, 310 + 900, 310 + 1200]
    var hightlist3 = [80 + 120, 80 + 400, 80 + 500, 80 + 800, 80 + 900, 80 + 1200]
    var hightlist4 = [200 + 120, 200 + 400, 200 + 500, 200 + 800, 200 + 900, 200 + 1200]
    var hightlist = hightlist3
    console.log("history: =========", history)
    console.log("noneview: =========", noneview)
    console.log("shoppinglist: =========", shoppinglist)
    if (shoppinglist == false && noneview == false && history == false) {
      hightlist = hightlist1
    } else if (shoppinglist == false && noneview == true && history == false) {
      hightlist = hightlist3
    } else if (shoppinglist == false && noneview == true && history == true) {
      hightlist = hightlist4
    } else if (shoppinglist == true && noneview == false && history == false) {
      hightlist = hightlist2
    } else if (shoppinglist == true && noneview == true && history == false) {
      hightlist = hightlist3
    } else if (shoppinglist == false && noneview == false && history == true) {
      hightlist = hightlist3
    }
    console.log("hightlist: =========", hightlist)

    if (moveY >= hightlist[0] && moveY <= hightlist[1]) {
      if (moveX > 20) {
        this.left();
      }
      if (moveX < -20) {
        this.right();
      }
    } else if (moveY >= hightlist[2] && moveY <= hightlist[3]) {
      if (moveX > 20) {
        this.left1();
      }
      if (moveX < -20) {
        this.right1();
      }
    } else if (moveY >= hightlist[4] && moveY <= hightlist[5]) {
      if (moveX > 20) {
        this.left2();
      }
      if (moveX < -20) {
        this.right2();
      }
    }
  },
  //清除历史记录
  cleanhistory: function (e) {
    this.setData({
      history: false, //隐藏历史记录
      historyArray: [], //清空历史记录数组
      newArray: [],
      shoopingtext: "" //清空搜索框
    })
  },
  //搜索
  search: function (e) {
    var searchtext = this.data.shoopingtext; //搜索框的值
    var sss = true;
    if (searchtext != "") {
      //将搜索框的值赋给历史数组
      this.data.historyArray.push(searchtext);
      //模糊查询 循环查询数组中的title字段
      for (var index in this.data.shoopingarray) {
        var num = this.data.shoopingarray[index].title.indexOf(searchtext);
        let temp = 'shoopingarray[' + index + '].status';
        if (num != -1) { //不匹配的不显示
          this.setData({
            [temp]: 1,
          })
          sss = false //隐藏未找到提示
        }
      }
      this.setData({
        history: false, //隐藏历史记录
        noneview: sss, //隐藏未找到提示
        shoppinglist: true, //显示商品列表
        newArray: this.data.historyArray //给新历史记录数组赋值
      })
    } else {
      this.setData({
        noneview: true, //显示未找到提示
        shoppinglist: false, //隐藏商品列表
        history: false, //隐藏历史记录
      })
    }
  },

  //搜索框的值
  shoppinginput: function (e) {
    console.log("调用了    ----    shoppinginput: function ()");
    //当删除input的值为空时
    if (e.detail.value == "") {
      this.setData({
        history: true, //显示历史记录
        shoppinglist: false //隐藏商品列表
      });
      //所有商品列表的状态改为0
      for (var index in this.data.shoopingarray) {
        let temp = 'shoopingarray[' + index + '].status';
        this.setData({
          [temp]: 0,
        })
      }
    }
    this.setData({
      shoopingtext: e.detail.value
    })
  },
  //点击历史记录赋值给搜索框
  textfz: function (e) {
    console.log("调用了    ----    textfz: function ()");
    this.setData({
      shoopingtext: e.target.dataset.text
    })
  }
})