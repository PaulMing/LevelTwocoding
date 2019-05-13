// 组件间代码共享，使用Behavior()构造器定义，其可将component对象中的所有属性都写到里面
let Beh = Behavior({
  behaviors: [],
  properties: {
    mainTitle: String,
    subHead: String,
    imgSrc: String,
  }
})

module.exports = Beh; 
// export {Beh} //ES6语法
