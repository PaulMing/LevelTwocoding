// var http = require("http");
// var url = require("url");
//
// http.createServer(function(request,response){
//     console.log(request.url);
//     url.parse(request.url).pathname;
// }).listen(12306);

var fs = require('fs');

//读取文件流
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

//写入文件流
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt','utf8');

myReadStream.pipe(myWriteStream);
//事件类型data为系统提供，触发该事件也由系统调用
var times = 0;
myReadStream.on('data',function(chunk){
    times++;
    console.log('====== 正在接受一部分数据==========');
    console.log(chunk);
    mywriteStream.write(chunk);
})




