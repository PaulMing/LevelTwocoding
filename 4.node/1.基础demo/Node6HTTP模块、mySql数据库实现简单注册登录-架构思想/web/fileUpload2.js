var express = require("express");

var app = express();

var multer = require("multer");

var upload = multer({dest:"../file/"});

app.use(upload.any());

app.post("/testFileUpload", function (req, res) {

    console.log(req.file);

});