//博客服务器启动脚本

//引入第三方model
var express=require("express");
var path=require("path");
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json());//使用bod-parser中间件解析request的数据
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");//使用ejs作为模板引擎

//自定义router
var category=require("./routers/category.js");
var about = require("./routers/about.js");
//静态路由
app.use("/views",express.static(path.join(__dirname,"views")));
app.use("/public",express.static(path.join(__dirname, 'public')));

//request请求路由
app.use("/category", category);
app.use("/about", about);
//app.use();
app.listen(3000);

console.log("博客启动...../n 45.78.50.233:3000");
