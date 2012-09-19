# node.js Workshop 19.09.2012 Web Developers Conference 2012

Klassische request/response von Webservern: Warten ... warten (viele Threads)

C10K Problem :10K Kunden gleichzeitig => wie? => Viel Stackspeicher pro Thread

node.js: Asynchron, Eventloop (*ein* Thread)
Nur non-blocking-io (async I/O)!
