var DBUtil = require("./DBUtil");
var TimeUtil = require("../util/TimeUtil");

function queryStudentCount(success) {
    var querySql = "select count(1) as count from student;";
    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryStudentByPage(offset, limit, success) {
    var querySql = "select * from student limit ?,?;";
    var connection = DBUtil.createConnection();
    var queryParams = [offset, limit];
    connection.connect();
    connection.query(querySql, queryParams, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function insertStudent(name, sex, birth, ctime, success) {

    var insertSql = "insert into student (name, sex, birth, ctime) values(?, ?, ?, ?)";
    var connection = DBUtil.createConnection();
    var insertParams = [name, sex, birth, ctime];

    connection.query(insertSql, insertParams, function(error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    });

    connection.end();
}

module.exports.queryStudentByPage = queryStudentByPage;
module.exports.insertStudent = insertStudent;
module.exports.queryStudentCount = queryStudentCount;