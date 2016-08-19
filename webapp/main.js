var express = require("express");
var app = express();
var user = require("./user");

// var vue = require("vue");

app.use("/pages", express.static("public"));

var router = express.Router();

router.use("/", function (req, res) {
	console.log("pages:", req.path,":", req.baseUrl);
	res.sendFile(__dirname + "/" + req.path);
});

app.use('/pages', router);
app.use('/api/user', user);

var server = app.listen(8081, function() {
	var host = server.address().address
  	var port = server.address().port
  	
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})

