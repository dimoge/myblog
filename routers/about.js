var express = require("express");
var router =  express.Router();


/**
 * 获取我的信息
 **/

router.get("/getBlogByCategory.do", function(request, response){
    console.log("router------/about/getAboutMe.do");
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....");
            //查询数据
            db.collection("user", function(error, collection){
                if(!error){
                    console.log("success get collection ...")
                    collection.find({}).toArray(function(error, items){
                        if(!error){
                            console.log("success to find category....");
                            console.log(items);
                            response.render("about", items);
                            db.close();
                        }
                    });
                }
            });
        }
    })
})

module.exports = router;