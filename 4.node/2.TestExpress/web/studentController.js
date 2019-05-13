var studentDao = require('../dao/studentDao');
var url = require('url');

var path = new Map();

function getAllStudent(request,response){
    studentDao.queryAllStudent(function(result){
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
    })
}
function addStudent(request,response){
    //第二个参数为true -> 其会转换为对象
    var params = url.parse(request.url,true).query;
    // console.log(url.parse(request.url))
    // console.log(url.parse(request.url).query)
    // console.log(params);
    studentDao.insertStudent(params.stuNum, params.name, params.age, params.stuClass,function(result){
        response.writeHead(200,["Content-Type:text/html;charset=utf-8"]);
        response.write('添加成功');
        response.end();
    })
}

function login(request,response){
    var params = url.parse(request.url,true).query;
    studentDao.queryStudentByStuNum(params.stuNum,function(result){
        if(result && result.length>0 && result[0].pwd == params.pwd){
            // 写cookie
            response.cookie('id',result[0].id);//cookie();写入cookie
            response.redirect('/api/getAllStudent');
        }else{
            response.redirect('/loginError.html');
        }
    })
}


path.set('/api/getAllStudent',getAllStudent);
path.set('/api/addStudent',addStudent);
path.set('/login',login);
module.exports.path = path;