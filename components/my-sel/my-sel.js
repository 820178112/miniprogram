Component({
  data:{
    counter:0
  },
  methods:{
    increamentClick(){
      this.triggerEvent('increamentClick',{},{})
    },
    // 父组件对子组件的变量的修改 要通过暴露接口修改 变量
    increamentCounter(num){
      this.setData({
        counter:this.data.counter+num
      })
    }
  }
})  