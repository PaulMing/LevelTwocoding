//事件模块

//1.引入事件模块
var events = require('events');

//2.创建对象
var myEmitter = new events.EventEmitter();

//3.注册事件
myEmitter.on('someEvent',function(msg){
    // console.log('注册事件');
    // console.log(msg);
    // 切换到异步模式
    setImmediate(() => {
        console.log(msg);
    })
});

//4.触发事件
myEmitter.emit('someEvent',"该参数会传递到注册事件的回调函数中");

//事件执行是同步的
console.log(1);
