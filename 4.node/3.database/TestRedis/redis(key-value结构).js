var redis = require('redis');

// var port = 6379;
// var host = '127.0.0.1';
// var password = '123456';
// // 创建对象
// var client = redis.createClient(port,host);
// // 写密码 -> 登录
// client.auth(password,function(){
//     console.log('ok');
// });
// // 建立连接
// client.on('connect',function(){
//     client.set('key2','mary',function(error,reply){
//         if(error == null){
//             console.log(reply);
//         }else{
//             console.log(error);
//         }
//     });
//     client.get('key2',function(error,reply){
//         if(error == null){
//             console.log(reply);
//         }else{
//             console.log(error);
//         }
//     })
// })
// //断开连接
// client.end();




//封装函数
//key-value存储结构
var port = 6379;
var host = '127.0.0.1';
var password = '123456';

var client = redis.createClient(port,host);
client.auth(password,function(){
    console.log('ok');
});
function setKey(key,value,callback){
    client.on('connect',function(){
        client.set(key,value,callback);
    })
    // client.end();//其是异步执行，操作同时若关闭连接则拿不到值
}
function getKey(key,callback){
    client.on('connect',function(){
        client.get(key,callback);
    })
    // client.end();
}



//key-map存储结构
function hset(hash,key,value,callback){
    client.on('connect',function(){
        client.hset(hash,key,value,callback);
    })
}
//paramArr: 数组 ['a1','b1','a2','b2']
function hmset(hash,paramArr,callback){
    client.on('connect',function(){
        client.hmset(hash,...paramArr,callback);
    })
}
function hget(hash,key,callback){
    client.on('connect',function(){
        client.hget(hash,key,callback);
    })
}
function hgetall(hash,callback){
    client.on('connect',function(){
        client.hgetall(hash,callback);
    })
}

module.exports = {
    setKey,
    getKey,
    hset,
    hmset,
    hget,
    hgetall
}