var express = require('express');
var globalConfig = require('./config');
var loader = require('./loader');
var cookie = require('cookie-parser');
var multer = require('multer');

var app = new express();
// app.use(express.static('page'));//标示静态文件位置
app.use(express.static(globalConfig['page_path']));
app.use(cookie());

//指定文件上传到哪里
var uploadSingle = multer({dest: './file/'})


//拦截器
app.get('/api/*',function(request,response,next){
    console.log(request.cookies);
    // next();//不管怎样都执行下面的
    //请求路由前进行拦截，查看是否有cookie,若有继续进行路由跳转，若没有则重定向到登录页面
    if(request.cookies.id){
        next();
    }else{
        response.redirect('/login.html')
    }
})

//app.get(); app.post();请求后台数据
app.get('/api/getAllStudent',loader.get('/api/getAllStudent'));
// app.post('/getAllStudent',loader.get('/getAllStudent'));
// app.get('/api/addStudent',loader.get('/api/addStudent'));

app.get('/login',loader.get('/login'));

//第二个参数表示：指定那个字段是文件
app.post('/upload',uploadSingle.single('file'),loader.get('/upload'));



// app.listen(2600);
app.listen(globalConfig['port']);