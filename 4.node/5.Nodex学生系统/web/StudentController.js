var url = require("url");
var studentService = require("../service/StudentService");
var moment = require("moment");

var path = new Map();

function getStudentPage(request, response) {

    var params = url.parse(request.url, true).query;

    if (params && params.offset && params.limit) {
        studentService.queryStudentByPage(parseInt(params.offset), parseInt(params.limit), function(result) {
            console.log(result);
            studentService.queryStudentTotal(function(countResult) {
                response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
                response.write(JSON.stringify({total:countResult[0].count, rows: result}));
                response.end();
            });
        });
    } else {
        response.writeHead(200);
        response.write(JSON.stringify({"code": 1, "msg": "参数异常"}));
        response.end();
    }
}
path.set("/getStudentPage", getStudentPage);

function addStudent(request, response) {
    var params = url.parse(request.url, true).query;
    if (params && params.name && params.sex && params.birth) {
        studentService.insertStudent(params.name, parseInt(params.sex), parseInt(params.birth.split("-")[0]), function(result) {
            response.writeHead(200);
            response.write(JSON.stringify({"code": 0, "msg": "添加成功"}));
            response.end();
        });
    } else {
        response.writeHead(200);
        response.write(JSON.stringify({"code": 1, "msg": "参数异常"}));
        response.end();
    }

}
path.set("/insertStudent", addStudent);

module.exports.path = path;
