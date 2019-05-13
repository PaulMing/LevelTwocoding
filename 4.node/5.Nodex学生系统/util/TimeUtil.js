var moment = require("moment");

function getNowTime() {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
}

function getNowDate() {
    return moment(new Date()).format('YYYY-MM-DD');
}

module.exports.getNowTime = getNowTime;
module.exports.getNowDate = getNowDate;