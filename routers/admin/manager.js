var express = require("express");
var router = express.Router();

router.get("/manager.do", function(request, response){
    response.render("../admin/manager",{});
});

module.exports = router;