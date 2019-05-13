//文件系统模块 -> 创建、删除、读取、写入/修改、

//1.引入文件系统模块
var fs = require('fs');

//2.通过对象调用方法
//同步读取 -> 参数：读取文件名、编码格式(否则乱码)
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);

//同步写入 -> 参数：写入文件名、写入的内容
// fs.writeFileSync('./writeMe.txt','hellojs');
// fs.writeFileSync('./writeMe.txt',readMe);

//异步读取 -> 三个参数： 读取文件名、编码格式、回调函数(错误信息，读取到的数据)
fs.readFile('./readMe.txt','utf8',function(err, data){
    if(err) throw err;
    console.log(data);
});
//
// //异步写入文件
// fs.writeFile('./writeMe.txt','hellojs');
//
// fs.readFile('readMe.txt','utf8',function(err, data){
//     if(err) throw err;
//
//     fs.writeFile('writeMe2.txt',data);
// });


