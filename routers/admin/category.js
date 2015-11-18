/**
 * Created by dime on 2015/11/17 0017.
 */
var express = require("express");
var router = express.Router();
var uuid = require("uuid");

/**
 * 查询所有分类
 */
router.get("/getAll.do", function (request, response) {
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function (err, db) {
        if (!err) {
            db.collection("category", function (error, collection) {
                if (!error) {
                    collection.find({}).toArray(function (error, items) {
                        if (!error) {
                            response.render("../admin/category.ejs", {"categories": items});
                            db.close();
                        }
                    });
                }
            });
        }
    })
});

/**
 * 添加分类
 */
router.post("/add.do", function (request, response) {
    var name = request.body.name;
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myblog", function (err, db) {
        if (!err) {
            db.collection("category", function (error, collection) {
                if (!error) {
                    collection.insert({"id":uuid.v1(), "name":name}, function(error, result){
                        if(!error){
                            response.send({"success":"success"});
                        }
                    });
                }
            });
        }
    })
});

/**
 * 删除一个
 */
router.get("/del.do", function (request, response) {

});

module.exports = router;