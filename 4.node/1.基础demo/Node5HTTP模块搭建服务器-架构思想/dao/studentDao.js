var connection = require('./dbutil');

function queryStudentByClass(classNum){
    var querySql = "select * from student where class= "+ classNum+";";
    //建立连接
    connection.connect();
    //执行查询操作
    connection.query(querySql,function(error,result){
        if(error == null){
            console.log(result);
        }else{
            console.log(error);
        }
    });
    //关闭连接 -> 一定要关闭，否则建立连接太多影响性能
    connection.end();
}
// queryStudentByClass(2);

//第二种写法 ->使用 ?表示参数,但是connect.query();第二个参数需写入参数名称 -> 防止sql注入[若classNum传入的也是sql语句，其会恶意操作数据库]
function queryStudentByClassAndAge(classNum , age){
    // ? 表示传入的参数
    var querySql = "select * from student where class= ? and age = ?;";
    var queryParams = [classNum, age];//必须数组形式
    //建立连接
    connection.connect();
    //执行查询操作
    //  connection.query(querySql, arguments, function(error,result){};//argumets类数组，必须写数组两个以上参数
    connection.query(querySql, queryParams, function(error,result){
        if(error == null){
            console.log(result);
        }else{
            console.log(error);
        }
    });
    //关闭连接 -> 一定要关闭，否则建立连接太多影响性能
    connection.end();
}
// queryStudentByClassAndAge(2,19);

module.exports = {
    "queryStudentByClass" : queryStudentByClass,
    "queryStudentByClassAndAge" : queryStudentByClassAndAge
};