
// 导入mysql模块 -> 并非nodejs内置模块，需npm install mysql --save
var mysql = require('mysql');
// 创建对象
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    //默认值root -> 管理员权限/最高
    user: 'root',
    password: '123456',
    database: 'school'
});

var querySql = 'select * from student';
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

module.exports = connection;

