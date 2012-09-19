// HTTP Module laden
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" } );
  res.write("Hallo WDC!");
  res.end();
});
server.listen(5000);

