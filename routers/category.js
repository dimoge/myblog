/**
 * category路由
 *
 */

var express = require("express");
var router =  express.Router();

router.get("/getCategory.do", function(request, response){
    console.log("success get getCategory.....");
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....")
        }
    })
});

module.exports = router;