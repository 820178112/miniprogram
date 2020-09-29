//index.js
//获取应用实例
const app = getApp()

Page({
  showToast(){
    wx.showToast({
      title: '加载中',
      icon:'loading',
      image:'',
      mask:true
    })
  },
  showModal(){
    wx.showModal({
      showCancel:true,
      title:'我是标题',
      content:'我是内容',
      cancelText:"退出"
    })
  },
  showAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
    })
  },
  onShareAppMessage(){
    // 返回一个对象 设置分享信息
   return {
    title:'你好,李森峰',
    path:'/pages/index/index',
    imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601379734150&di=40822daf61ff3b35888146848b9236bd&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853'
   } 
  }
})
