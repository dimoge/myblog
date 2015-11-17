/**
 * Created by dime on 2015/11/17 0017.
 */
var express = require("express");
var router = express.Router();

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
                            response.render("./admin/category", {"categories": items});
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
router.get("/add.do", function (request, response) {

});

/**
 * 删除一个
 */
router.get("/del.do", function (request, response) {

});

module.exports = router;