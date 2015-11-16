var express = require("express");
var router =  express.Router();


/**
 * about 路由
 **/

router.get("/getBlogByCategory.do", function(request, response){
    console.log("router------/about/getAboutMe.do");
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function(err, db){
        if(!err){
            console.log("success connect mongoDB....");
            db.collection("user", function(error, collection){
                if(!error){
                    console.log("success get collection ...")
                    collection.find({}).toArray(function(error, items){
                        if(!error){
                            console.log("success to find category....");
                            console.log(items);
                            response.render("about", {"user":items[0]});
                            db.close();
                        }
                    });
                }
            });
        }
    })
})

module.exports = router;