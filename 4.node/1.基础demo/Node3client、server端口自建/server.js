var net = require('net');

// 服务器端创建服务
var server = net.createServer();
server.listen(12306,"127.0.0.1");
console.log(server.address());//本机地址，几乎用不到，放到回调函数中才有效果，否则显示null

// 服务器创建成功时触发
server.on('listening',function(){
    console.log('服务已启动');
    // console.log(server.address());
})
// 建立连接触发 —-> socket是传过来的对象
server.on('connection',function(socket){
    console.log('有新的连接');
    socket.on('data',function(data){
        console.log(data.toString());
    })
});
// socket.write('hello server');
// close error事件

