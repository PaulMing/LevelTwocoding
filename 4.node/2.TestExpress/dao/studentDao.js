var dbutil = require("./dbutil");

function insertStudent(stuNum,name,age,stuClass,success){
    var insertSql = "insert into student (stu-num,name,age,class) value(?,?,?,?)";
    var params = [stuNum,name,stuClass,age]
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params,function (error, result) {
        if (error == null) {
            // console.log(result);
            success(result);
        } else {
            // console.log(error);
            throw new Error(error);
        }
    });
    connection.end();
}





function queryAllStudent(success) {

    var querySql = "select * from student;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, function (error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            // console.log(error);
            throw new Error(error);
        }
    });
    connection.end();
}

function queryStudentByClassAndAge(classNum, age) {

    var querySql = "select * from student where class = ? and age = ?;";
    var queryParams = [classNum, age];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, queryParams, function (error, result) {
        if (error == null) {
            console.log(result);
        } else {
            throw new Error(error);
        }

    });
    connection.end();

}

function queryStudentByStuNum(stuNum, success) {

    var querySql = "select * from student where stu_num = ?;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
    });
    connection.end();
}


module.exports = {
        "insertStudent": insertStudent,
        "queryAllStudent": queryAllStudent,
        "queryStudentByClassAndAge": queryStudentByClassAndAge,
        "queryStudentByStuNum": queryStudentByStuNum
    };




