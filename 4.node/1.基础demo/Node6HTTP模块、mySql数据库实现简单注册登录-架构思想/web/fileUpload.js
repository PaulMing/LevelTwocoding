var fs = require("fs");
var gloablConfig = require("../config");

var path = new Map();

function testFileUpload(request, response) {

    console.log("=====" + request.files);

    request.once("data", function(data) {
        console.log(data.toString());
        var fis = fs.createWriteStream(gloablConfig["file_dir"] + "/" + "asd");
        fis.write(data);
        fis.end();
        response.end();
    });

}
path.set("/testFileUpload", testFileUpload);

module.exports.path = path;
