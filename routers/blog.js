var express = require("express");
var router =  express.Router();

router.get("/getBlogById.do",function(request, response){
    console.log("success.....getBlogById.do");
    var blogId = request.query.blogId;
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....");
            //查询数据
            db.collection("blog", function(error, collection){
                if(!error){
                    console.log("success get collection ...");
                    collection.find({"id": blogId}).toArray(function(error, items){
                        if(!error){
                            console.log("success to find category....");
                            console.log(items);
                            response.render("blog", {"blog": items[0]});
                            db.close();
                        }
                    });
                }
            });
        }
    })
});

module.exports = router;