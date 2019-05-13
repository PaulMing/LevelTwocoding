var studentDao = require("../dao/StudentDao");
var TimeUtil = require("../util/TimeUtil");

function queryStudentByPage(offset, limit, success) {
    studentDao.queryStudentByPage(offset, limit, success);
}

function queryStudentTotal(success) {
    studentDao.queryStudentCount(success);
}

function insertStudent(name, sex, birth, success) {
    studentDao.insertStudent(name, sex, birth, TimeUtil.getNowTime(), success);
}

module.exports.queryStudentByPage = queryStudentByPage;
module.exports.queryStudentTotal = queryStudentTotal;
module.exports.insertStudent = insertStudent;