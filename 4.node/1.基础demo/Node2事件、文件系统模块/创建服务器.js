//Http创建服务器

var http = require('http');

//创建服务器对象
var server = http.createServer(function(req,res){
    console.log('客户端向服务器发送请求' + req.url);
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.end('Server is working');
});

//服务器对象监听地址以及端口号 -> 127.0.0.1/localhost;//本机地址，你写自己的真IP地址也OK
server.listen(7880,"127.0.0.1");

console.log('server is running');


//很有可能客户端页面显示“未成功建立连接”，但实际请求已经发送了，之前的页面被缓存下来了，而且你也可以再浏览器中查看


