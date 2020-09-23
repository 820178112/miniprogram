// 注册一个页面 
// pages/home/home
// getApp()----------获取app()产生的示例对象
const app = getApp()
const name = app.globalData.name

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 在对象中赋值 key:value
    name: '李森峰',
    age:18,
    students:[
      {id:1,name:'zhangsan',age:12},
      {id:2,name:'lisi',age:12},
      {id:3,name:'wangwu',age:13},
      {id:4,name:'liubei',age:14}
    ],
    counter:0
  },
  handleGetUserInfo(event){
      console.log(event)
  },
  addTap(){
    // this.setData 修改状态 界面重新渲染
    // 对象的字面量 就是{}
    this.setData({
      counter:this.data.counter+1
    })
  },
  reduceTap(){
    this.setData({
      counter:this.data.counter-1
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

  },
  //-------------------- page ---------------------------
  // 1.监听页面的生命周期函数
  onload(){
    //页面被加载后 回调

  },
  onShow(){
    //页面显示出来时 回调
  },
  onReady(){
    //页面初次渲染完成时 回调
  },
  
  onHide(){
    //页面隐藏时 回调
  },
  onUnload(){
    //页面被销毁之后 回调
  },
  //---------------------- 3.监听页面的其他事件 ---------------------------------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉刷新
  onPullDownRefresh(){

  }
})