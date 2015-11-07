//启动服务脚本

//外部模块
var express=require("express");
var path=require("path");

//自定义模块
var app=express();
var category=require("./routers/category.js");//category路由

//静态页面路由
app.use("/",express.static(path.join(__dirname,"public")));

//request请求
app.use("/category", category);

app.listen(3000);

console.log("博客启动...../n 45.78.50.233:3000");
