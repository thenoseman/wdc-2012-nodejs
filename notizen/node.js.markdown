# node.js Workshop 19.09.2012 Web Developers Conference 2012

Klassische request/response von Webservern: Warten ... warten (viele Threads)

C10K Problem :10K Kunden gleichzeitig => wie? => Viel Stackspeicher pro Thread

node.js: Asynchron, Eventloop (*ein* Thread), client & server -> selbe Sprache.
Nur non-blocking-io (async I/O)!

Streaming -> node.js!
Viele Berechnungen -> kein node.js

fabricengine -> high computation javascript runtime
- Kein javascriopt
- fabricengine.com

node versionierungsschema: 0.8.8 - gerade minor = stable, ungerade minor dev.
node REPL: `node -i` oder `node`

node ist erstmal kein Webserver zentriertes Produkt.
Javascript JIT compiler von google -> v8. Seperat vom chrome browser
node = v8 + apis zum filesystem usw.

```
// HTTP Module laden
var http = require('http');

var server = http.createServer(function(req, res) {
  res.write("Hallo WDC!");
  res.end();
});
server.listen(5000);
```

Nach jeder Dateiänderung muss der server neu gestartet werden!
--> nodemon (https://github.com/remy/nodemon)

node server sendet `Transfer-Encoding: chunked` -> streaming!
Kein `Content-Length` Header.

Client muss die response aktiv beenden (siehe frage 2)

Im Web neu: Transport von websockets via GIF :) Für IE < 7 (https://github.com/videlalvaro/gifsockets)

## Package Management
npm (wird mit node ausgeliefert)  
npm install packagename -g -> global  
npm install wenn ein package.json existiert -> wie bundle  
npm init -> erstellt package.json    

require('./core.js') -> lokal in diesem Verzeichnis / mit file extension  
require('core') -> node_modules oder stdlib  

## Debugging:
node debug app.js  
- step (into)
- cont

oder node --debug app.js  
OHNE cli debugger

npm install -g node-inspector  
node-inspector ("visit http://0.0.0.0:8080/debug?port=5858 to start debugging")  
chrome/webkit auf und URL aufrufen

## Fragen:
- Wo liegt der Request-State in node zwischen den Events?
  Er liegt in node.js -> sehr klein. Keine Probleme bekannt.

- node.js server timeout -> wie lang?
- debugging?
- node.js LOAD_PATH (resolve circular references)?
