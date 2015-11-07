/**
 * category路由
 *
 */

var express = require("express");
var router =  express.Router();

router.get("/getCategory.do", function(request, response){
    console.log("接收到getCategory请求");
});

module.exports = router;