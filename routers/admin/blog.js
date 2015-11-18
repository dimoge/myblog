/**
 * Created by dime on 2015/11/17 0017.
 */
var express = require("express");
var router = express.Router();
var uuid = require("uuid");

/**
 * 查询所有博客
 */
router.get("/getAll.do", function (request, response) {
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function (err, db) {
        if (!err) {
            db.collection("blog", function (error, collection) {
                if (!error) {
                    collection.find({}).toArray(function (error, items) {
                        if (!error) {
                            response.render("../admin/blog.ejs", {"blog": items});
                            db.close();
                        }
                    });
                }
            });
        }
    })
});

/**
 * 添加博客
 */
router.post("/add.do", function (request, response) {
    var title = request.body.title;
    var category = request.body.categoryId;
    var content = request.body.content;
    var date = new Date();
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function (err, db) {
        if (!err) {
            db.collection("blog", function (error, collection) {
                if (!error) {
                    collection.insert({"id":uuid.v1(), "title":title, "content":content, "date":date, "category":category }, function(error, result){
                        if(!error){
                            response.redirect("/admin/blog/getAll.do");
                        }
                    })
                }
            });
        }
    })
});

/**
 * 删除一个
 */
router.get("/del.do", function (request, response) {
    var blogId = request.query.blogId;
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function (err, db) {
        if (!err) {
            db.collection("blog", function (error, collection) {
                if (!error) {
                    collection.remove({"id":blogId }, function(error, result){
                        if(!error){
                            response.redirect("/admin/blog/getAll.do");
                        }
                    })
                }
            });
        }
    })
});

module.exports = router;