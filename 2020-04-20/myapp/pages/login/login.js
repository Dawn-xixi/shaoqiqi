// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onsubmit: function(e){
    let username=e.detail.value.username;
    let password=e.detail.value.password;
    wx.request({
      url: 'http://127.0.0.1/user.json',
     success: function(res){
      let usernameby=res.data.username;
      let passwordby=res.data.password;
      if(username === usernameby && password === passwordby){
        wx.setStorageSync('username', res.data.username)
        console.log("登录成功")
        wx.redirectTo({
          url: '/pages/mypage/mypage',
        })
      }else{
        console.log("登录失败")
      }
     }
    })
  }

 
})