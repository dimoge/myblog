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
            console.log("success connect mongoDB....");
            //查询数据
            db.collection("category", function(error, collection){
                if(!error){
                    console.log(collection.toString());
                    console.log(collection.toArray().$1);
                }
            });
        }
    })
});

module.exports = router;