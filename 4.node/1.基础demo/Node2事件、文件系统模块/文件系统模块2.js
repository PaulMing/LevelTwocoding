//文件系统模块 -> 创建、删除


var fs = require('fs');
// console.log(fs);
//异步删除
fs.unlink('writeMe.txt',function(err){
    //若抛出错误，后续代码便不会执行
    if(err)  throw err;
    console.log('文件删除成功');
});


//同步创建文件夹 -> 创建成功后，不能再次创建“同名文件”，否则报错
// fs.mkdirSync('stuff');
//同步删除文件夹
fs.rmdirSync('stuff');


//异步创建、删除
fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
        if(err) throw err;
        fs.writeFile('./suff/writeMe.txt');
    })
})
//异步删除文件夹，若文件夹内有文件 -> 首先删除文件，然后删除文件夹
// fs.rmdir('stuff'.function(err){
//     if(err) throw err;
//     console.log('文件夹删除成功！');
// });