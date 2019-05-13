var req = require('request');
var url = require("url");
var qs = require("querystring");
// var log = require("../log");

var path = new Map();

function turingAPI(request, response) {

    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;

    if (params && params.text) {
        var data = {
            "reqType":0,
            "perception": {
                "inputText": {
                    "text": params.text
                }
            },
            "userInfo": {
                "apiKey": "7381b1f8c75e4307b454e3f531d5c5cf",
                "userId": "123456"
            }
        }
        var contents = JSON.stringify(data);
        req({
            url: "http://openapi.tuling123.com/openapi/api/v2",
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: contents
        }, function (error, resp, body) {
            if (!error && resp.statusCode == 200) {
                var head = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Headers": "x-requested-with , content-type"}
                response.writeHead(200, head);

                var obj = JSON.parse(body);
                if (obj && obj.results && obj.results.length >0 && obj.results[0].values) {
                    response.write(JSON.stringify(obj.results[0].values));
                    response.end();
                } else {
                    response.write("{\"text\":\"布吉岛你说的是什么~\"}");
                    response.end();
                }
            } else {
                response.writeHead(400);
                response.write("数据异常");
                response.end();
            }
        });
    } else {
        response.writeHead(400);
        response.write("数据异常");
        response.end();
    }

}
path.set("/api/chat", turingAPI);

module.exports.path = path;

