// Module laden (stdlib oder node_modules)
var http = require('http');
var compare = require('compare.js');

// File System lokal:
var core = require('./core.js');

var server = http.createServer(core.processRequest);
server.listen(5000);
