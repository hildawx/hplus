var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.send("Hello user!");
})

router.get("/:id", function (req, res) {
	res.send("About You!!!"+ req.params.id) ;
})

module.exports = router;