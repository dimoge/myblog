/**
 * category·��
 *
 */

var express = require("express");
var router =  express.Router();

router.get("/getCategory.do", function(request, response){
    console.log("���յ�getCategory����");
});

module.exports = router;