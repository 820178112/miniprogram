//index.js
//获取应用实例
import request from '../../service/network'
const app = getApp()
Page({
  onLoad(){
    request(
      {
        url:'http://123.207.32.32:8000/recommend',
        methods:"get"
      }
    ).then(res=>{
      console.log(res)
    }).catch(res=>{
      console.log(res)
    })
  },
})
