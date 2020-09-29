export default function request(config){
  // 把Promise回调出去
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.url,
      method:config.method||'get',
      data:config.data,
      success:resolve,
      fail:reject,
    })
  })
}

// export default function request(config){
//   // 把Promise回调出去
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: config.url,
//       method:config.method||'get',
//       data:config.data,
//       success:(res)=>{
//         resolve(res)
//       },
//       fail:(res)=>{
//         reject(res)
//       }
//     })
//   })
// }