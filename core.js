var http = require('http');
var compare = require('compare.js');

function processRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" } );

  if(compare.eq(req.url, '/')) {
    res.write("Hallo WDC!");
  } else {
    res.write("auf url: " + req.url);
  }
  res.end();
}

module.exports = { 'processRequest' : processRequest };
