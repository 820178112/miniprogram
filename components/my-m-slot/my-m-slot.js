// 组件构造器
Component({
  //定义组件的配置选项
  options:{
    //在使用多插槽时 需要设置为true
    // styleIsolution 设置样式的隔离方式
    multipleSlots:true
  },
  // 父组件给子组件传一些数据
  properties:{
    titles:{
      type:Array,
      observe:(newVal,oldVal)=>{

      }
    }
  },
  // 定义组件内部初始化数据
  data:{

  },
  // 定义组件内部的函数
  methods:{

  },
  // 外界给组件传来额外的样式
  externalClasses:[],
  observers:{
    // 监听data属性  
    counter:(newVal)=>{

    }
  },
  // ----------------------组件中监听生命周期函数------------------------
  // 监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("组件所在页面显示出来时")
    },
    hide(){

    },
    resize(){
      console.log("组件所在页面尺寸改变时")
    }
  },
  // ---------------监听组件的生命周期---------------------
  created(){}, 
  attached(){},
  ready(){},
  detached(){}
})