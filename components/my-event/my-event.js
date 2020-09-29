Component({
  methods:{
    increament(){
      // triggerEvent 向外层发送事件
      this.triggerEvent("increament",{name:"李森峰",age:18},{})
    }
  }
})