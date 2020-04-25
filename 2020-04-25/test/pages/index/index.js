
//获取应用实例  
var app = getApp()
Page({
  data: {
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:3000',
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({ lists: res.data })
      }
    })
  },
  //添加新元素 
  addItemFn: function () {
    var { lists } = this.data;
    var newData = { text: "新的元素" };
    lists.push(newData);
    this.setData({
      lists: lists
    })  
  },
  //删除新元素 
  delItemFn: function (e) {
    var { lists } = this.data;
    var num = e.currentTarget.dataset.index;//获取data-index
    lists.splice(num,1);
    this.setData({
      lists: lists
    })  
  }
})