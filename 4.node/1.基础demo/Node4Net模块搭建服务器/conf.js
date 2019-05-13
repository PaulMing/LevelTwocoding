var fs  = require('fs');

//加载配置文件 ->返回数组
var globalConf = {};
// var conf = fs.readFileSync('server.conf');
var conf = fs.readFileSync(__dirname + '/server.conf');
var confs = conf.toString().split("\r\n");
for(var i=0; i<confs.length; i++){
    var tempConf = confs[i].split('=');
    if(tempConf.length < 2){
        continue;
    }else{
        globalConf[tempConf[0]] = tempConf[1];
    }
}
if(globalConf["path_position"] == 'relative'){
    globalConf.basePath = __dirname + globalConf.path;
}else{
    globalConf.basePath = globalConf.path;
}
// console.log(globalConf);
module.exports = globalConf;