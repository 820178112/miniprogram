//app.js
App({
  // 小程序关闭 对象进行回收
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 使用 wx.login接口获取code
    wx.login({
      success:(res)=>{
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          methods:'post',
          data:{
            code
          },
          success:(res)=>{
            // 1.取出token
            const token = res.data.token
            //将token保存到全局变量中
            this.globalData.token = token
            // 进行本地存储
            wx.getStorageInfoSync('token',token)
          }
        })   
      }
    })
}
})