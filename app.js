// 注册一个小程序示例
//app.js
App({
  //小程序发生错误时 执行
  onError:function(){

  },
  //在小程序界面隐藏是执行
  onHide:function(){

  },
  // 准备好小程序展示的数据之后 回调
  onShow:function(option){
      wx.getUserInfo({
        success:function(res){
          //console.log(res)
        }
      })
  },
  // 小程序初始化完成时，执行的生命周期函数
  //小程序被关闭两小时以内 不执行onlaunch函数
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    name:"李森峰",
    age:18 
  }
})