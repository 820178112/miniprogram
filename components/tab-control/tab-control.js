Component({
  data: {
    tabControl:["流行","新款","精选"],
    currentIndex:0
  },
  properties:{
    titles:Array
  },
  methods:{
    itemClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
       // 向外层组件通知内部事件
       this.triggerEvent('itemClick',{index,title:this.properties.titles[index]})
    }
   

  }
})