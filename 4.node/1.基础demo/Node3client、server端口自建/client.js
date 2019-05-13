var net = require('net');

// 客户端建立连接 port Ip地址
var socket = net.connect(12306,"127.0.0.1");//connection();底层调用connect(),所以使用connect()

// socket.on("connect",function(){
//     console.log('已连接到服务器');
// });
socket.on("connect", function () {
    console.log("已连接到服务器");
});

socket.write('hello 服务器');

socket.on('close',function(){

})

// socket.on('data',function(data){
//     console.log(data.toString());

// })