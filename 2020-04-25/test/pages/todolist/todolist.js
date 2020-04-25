// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  todoDel:function(e){
    // 获取哪个view
    let index=e.target.id
    // 读数据
    let todos=this.data.todos
    // 删除
    todos.splice(index,1)
    // 删除后写回去
    this.setData({
      todos: todos
    })
  },
  todoOk:function(e){
  // 获取哪个view
  let index=e.target.id
  // 读数据
  let todos=this.data.todos
  todos[index].isok=true
  this.setData({
    todos:todos
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var app=getApp()
    let todos=app.globalData.todos;
     this.setData({
  todos:todos
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