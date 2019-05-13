var fs = require("fs");
var globalConfig = require("./config");

var fileName = globalConfig.log_path + globalConfig.log_name;

function log(data) {

    console.log(data);
    fs.appendFile(fileName, data + "\n",{flag:"a"} , function () {});

}

module.exports = log;