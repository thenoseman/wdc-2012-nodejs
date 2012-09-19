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

## Fragen:
- Wo liegt der Request-State in node zwischen den Events?
  Er liegt in node.js -> sehr klein. Kein Problem.
