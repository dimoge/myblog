//博客服务器启动脚本

//引入第三方model
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.json());//使用bod-parser中间件解析request的数据
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");//使用ejs作为模板引擎

//自定义router
var index = require("./routers/index.js");
var category = require("./routers/category.js");
var about = require("./routers/about.js");
var blog = require("./routers/blog.js");
var adminCategory = require("./routers/admin/category.js");
var adminBlog = require("./routers/admin/blog.js");
var adminComment = require("./routers/admin/blog.js");
var adminUser = require("./routers/admin/user.js");
var adminManager = require("./routers/admin/manager.js");

//静态路由
//app.use("/views",express.static(path.join(__dirname,"views")));
app.use("/public", express.static(path.join(__dirname, 'public')));

//request请求路由
app.use("/", index);
app.use("/category", category);
app.use("/about", about);
app.use("/blog", blog);
//request请求 , 后台路由
app.use("/admin/category", adminCategory);
app.use("/admin/blog", adminBlog);
app.use("/admin/comment", adminComment);
app.use("/admin/user", adminUser);
app.use("/admin",adminManager);

//app.use();
app.listen(3000);

console.log("myblog start----|------ 45.78.50.233:3000");
console.log("port:3000");
