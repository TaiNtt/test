var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", (req, res) => {
    var data = fs.readFileSync("./du_lieu/san_pham.json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('content-type', 'application/json');
    res.end(data);
});

server.listen("3000");