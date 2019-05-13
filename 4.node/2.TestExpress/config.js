
var fs = require('fs');

var globalConfig = {};
var conf = fs.readFileSync('server.conf');
// console.log(conf);
var configArr = conf.toString().split('\r\n');
// console.log(configArr);

for(var i=0; i<configArr.length; i++){
    // configArr[i].split('=');
    globalConfig[configArr[i].split('=')[0]] = configArr[i].split('=')[1].trim();
}
// console.log(globalConfig);
module.exports = globalConfig;
