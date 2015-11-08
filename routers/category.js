/**
 * category路由
 *
 */

var express = require("express");
var router =  express.Router();

/**
 * 获取所有的目录
 */
router.get("/getCategory.do", function(request, response, next){
    console.log("success get getCategory.....");
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....");
            //查询数据
            db.collection("category", function(error, collection){
                if(!error){
                    console.log("success get collection ...")
                    collection.find({}).toArray(function(error, items){
                        if(!error){
                            console.log("success to find category....");
                            console.log(items);
                            response.send(items);
                        }
                    });
                }
            });
        }
    })
});

/**
 * 根据目录获取所属博客分类
 */
router.post("/getBlogByCategory.do", function(request, response, next){
    console.log("success getBlogByCategory.do"+ category);
    var categoryId = request.body.categoryId;//拿到参数category
    //查询mongo数据库数据
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....");
            //查询数据
            db.collection("blog", function(error, collection){
                if(!error){
                    console.log("success get collection ...")
                    collection.find({category:categoryId}).toArray(function(error, items){
                        if(!error){
                            console.log("success to find category....");
                            console.log(items);
                            response.send(items);
                        }
                    });
                }
            });
        }
    })
});

module.exports = router;