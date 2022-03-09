Page({
  addData() {
    console.log('调用添加数据的方法')
    wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/100.jpg",
        "raceName": "100米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "刘高格",
          "郑浩慨",
          "任乐水",
          "汤成和",
          "邹季萌",
          "易丰茂",
          "冯和昶",
          "龙翰墨"
        ],
        "score": [
          "13.34 s",
          "13.45 s",
          "13.89 s",
          "14.34 s",
          "14.98 s",
          "14.99 s",
          "15.53 s",
          "15.69 s"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "电子学院",
          "化工学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/1000.jpg",
        "raceName": "1000米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "邵浩荡",
          "范文耀",
          "孔文耀",
          "彭才良",
          "文高原",
          "董翰藻",
          "龚明珠",
          "阎阳泽"
        ],
        "score": [
          "190 s",
          "192 s",
          "195 s",
          "198 s",
          "200 s",
          "210 s",
          "219 s",
          "232 s"
        ],
        "represent": [
          "电子学院",
          "化工学院",
          "机械学院",
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/far.jpg",
        "raceName": "跳远",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "任安宜",
          "蒋心水",
          "顾华美",
          "武俊明",
          "崔德宇",
          "宋博学",
          "罗宏伟",
          "薛元凯"
        ],
        "score": [
          "2.78 m",
          "2.75 m",
          "2.70 m",
          "2.62 m",
          "2.54 m",
          "2.45 m",
          "2.39 m",
          "2.36 m"
        ],
        "represent": [
          "环境学院",
          "材料学院",
          "软件学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/high.jpg",
        "raceName": "跳高",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "田高格",
          "孙宏伟",
          "傅乐人",
          "黄嘉瑞",
          "孟德泽",
          "侯雨石",
          "黄嘉志",
          "黎恺乐"
        ],
        "score": [
          "2.45 m",
          "2.36 m",
          "2.29 m",
          "2.15 m",
          "2.13 m",
          "2.14 m",
          "2.08 m",
          "2.00 m"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "机械学院",
          "电子学院",
          "化工学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/400.jpg",
        "raceName": "接力400米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "彭兴运",
          "孟文昌",
          "钟博远",
          "常宏旷",
          "钱正文",
          "冯安宁",
          "江才良",
          "邵嘉勋"
        ],
        "score": [
          "89.36 s",
          "91.24 s",
          "93.67 s",
          "95.36 s",
          "96.21 s",
          "96.39 s",
          "98.10 s",
          "103.64 s"
        ],
        "represent": [
          "历史学院",
          "软件学院",
          "材料学院",
          "环境学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/5000.jpg",
        "raceName": "5000米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "钱正初",
          "孙苑杰",
          "崔博雅",
          "尹阳飙",
          "黎经赋",
          "龚文宣",
          "彭鹏涛",
          "江良朋"
        ],
        "score": [
          "13 m 34s",
          "13 m 45s",
          "13 m 89s",
          "14 m 34s",
          "14 m 18s",
          "14 m 19s",
          "15 m 23s",
          "15 m 49s"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "化工学院",
          "电子学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("male").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/male/ball.jpg",
        "raceName": "铅球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "钟兴发",
          "熊彭越",
          "谢晗昱",
          "秦天骄",
          "谢正信",
          "武正谊",
          "龚星阑",
          "金天工"
        ],
        "score": [
          "20.34 m",
          "20.25 m",
          "19.89 m",
          "19.34 m",
          "18.98 m",
          "18.10 m",
          "17.53 m",
          "15.69 m"
        ],
        "represent": [
          "文新学院",
          "环境学院",
          "材料学院",
          "化工学院",
          "电子学院",
          "机械学院",
          "软件学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    })
  },
  addData1() {
    console.log('调用添加数据的方法')
    wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/100.jpg",
        "raceName": "100米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "顾湛霞",
          "丁慕思",
          "龚思嘉",
          "侯乐珍",
          "吕慕儿",
          "任映易",
          "沈贝琳",
          "贺凝荷"
        ],
        "score": [
          "14.98 s",
          "14.99 s",
          "15.53 s",
          "15.69 s",
          "16.36 s",
          "16.44 s",
          "16.53 s",
          "16.64 s"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "电子学院",
          "化工学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/800.jpg",
        "raceName": "800米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "侯曼云",
          "漕谷枫",
          "龙思懿",
          "萧河灵",
          "熊绮兰",
          "宋亚梅",
          "彭诗怀",
          "郝平霞"
        ],
        "score": [
          "182 s",
          "189 s",
          "197 s",
          "206 s",
          "214 s",
          "228 s",
          "237 s",
          "244 s"
        ],
        "represent": [
          "电子学院",
          "化工学院",
          "机械学院",
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/far.jpg",
        "raceName": "跳远",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "常荣霞",
          "黄立芬",
          "宋敏慧",
          "张书翠",
          "任清宁",
          "邓展文",
          "白叶嘉",
          "秦颐真"
        ],
        "score": [
          "2.54 m",
          "2.45 m",
          "2.39 m",
          "2.36 m",
          "2.33 m",
          "2.30 m",
          "2.24 m",
          "2.20 m"
        ],
        "represent": [
          "环境学院",
          "材料学院",
          "软件学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/high.jpg",
        "raceName": "跳高",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "丁叶飞",
          "于曼容",
          "阎智宸",
          "崔芮优",
          "许柔雅",
          "余海菡",
          "苏姝妍",
          "汤莺莺"
        ],
        "score": [
          "2.13 m",
          "2.14 m",
          "2.08 m",
          "2.00 m",
          "1.93 m",
          "1.84 m",
          "1.82 m",
          "1.70 m"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "机械学院",
          "电子学院",
          "化工学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/400.jpg",
        "raceName": "接力400米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "文紫薰",
          "叶赞悦",
          "钟琇晶",
          "熊一禾",
          "许怡然",
          "白可儿",
          "曾怡瑶",
          "任静晨"
        ],
        "score": [
          "96.21 s",
          "96.39 s",
          "98.10 s",
          "103.64 s",
          "106.21 s",
          "106.39 s",
          "108.10 s",
          "113.64 s"
        ],
        "represent": [
          "历史学院",
          "软件学院",
          "材料学院",
          "环境学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/5000.jpg",
        "raceName": "5000米",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "谢梦旋",
          "戴子宁",
          "阎思萌",
          "于微月",
          "余柔静",
          "郝听莲",
          "袁璟雯",
          "尹雁菡"
        ],
        "score": [
          "14 m 18s",
          "14 m 19s",
          "15 m 23s",
          "15 m 49s",
          "16 m 18s",
          "16 m 19s",
          "17 m 23s",
          "18 m 49s"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "化工学院",
          "电子学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }), wx.cloud.database().collection("female").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/female/ball.jpg",
        "raceName": "铅球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "陈妍凌",
          "崔甫文",
          "龚恨之",
          "傅睿敏",
          "任莉娉",
          "朱灵溪",
          "余梓楠",
          "孟凝琴"
        ],
        "score": [
          "18.98 m",
          "18.10 m",
          "17.53 m",
          "15.69 m",
          "16.98 m",
          "16.10 m",
          "15.53 m",
          "14.69 m"
        ],
        "represent": [
          "文新学院",
          "环境学院",
          "材料学院",
          "化工学院",
          "电子学院",
          "机械学院",
          "软件学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    })
  },
  addData2() {
    console.log('调用添加数据的方法')
    wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/football.jpg",
        "raceName": "足球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "嗯这队",
          "所以什么队",
          "不要倒数队",
          "只求第一队",
          "益智队",
          "有你就队",
          "你是什么队",
          "有个队"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "电子学院",
          "化工学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }),wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/basketball.jpg",
        "raceName": "篮球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "益智队",
          "有你就队",
          "你是什么队",
          "嗯这队",
          "所以什么队",
          "不要倒数队",
          "只求第一队",
          "有个队"
        ],
        "represent": [
          "电子学院",
          "化工学院",
          "机械学院",
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }),wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/badminton.jpg",
        "raceName": "羽毛球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "所以什么队",
          "不要倒数队",
          "嗯这队",
          "益智队",
          "有你就队",
          "只求第一队",
          "你是什么队",
          "有个队"
        ],
        "represent": [
          "环境学院",
          "材料学院",
          "软件学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }),wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/ping-pong.jpg",
        "raceName": "乒乓球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "嗯这队",
          "所以什么队",
          "只求第一队",
          "益智队",
          "不要倒数队",
          "你是什么队",
          "有你就队",
          "有个队"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "机械学院",
          "电子学院",
          "化工学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }),wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/tennis.jpg",
        "raceName": "网球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "有个队",
          "嗯这队",
          "不要倒数队",
          "所以什么队",
          "益智队",
          "有你就队",
          "只求第一队",
          "你是什么队"
        ],
        "represent": [
          "历史学院",
          "软件学院",
          "材料学院",
          "环境学院",
          "电子学院",
          "化工学院",
          "文新学院",
          "机械学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    }),wx.cloud.database().collection("group").add({
      data: {
        "picture": "cloud://cloud1-9gbg8pow31ddbbb1.636c-cloud1-9gbg8pow31ddbbb1-1305801751/group/volleyball.jpg",
        "raceName": "排球",
        "rank": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": [
          "嗯这队",
          "所以什么队",
          "只求第一队",
          "不要倒数队",
          "有你就队",
          "益智队",
          "你是什么队",
          "有个队"
        ],
        "represent": [
          "软件学院",
          "环境学院",
          "材料学院",
          "文新学院",
          "化工学院",
          "电子学院",
          "机械学院",
          "历史学院"
        ]
      },
      success(res) {
        console.log("成功", res)
      },
      fail(res) {
        console.log("失败", res)
      }
    })
  }

})