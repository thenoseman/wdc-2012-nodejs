'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var url = require('url');
var stylus = require('stylus');
var myMiddleware = require('./libs/myMiddleware');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');

  app.set('view engine', 'ejs');
  //app.set('view engine', 'jade');

  // Konfigurierbare middleware
  app.use(myMiddleware("BLA BLA"));

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(stylus.middleware(__dirname + '/public'));
  // Cannot place stylesheets outside public with "ejs". Suckage.
  //app.use(stylus.middleware({
    //dest : __dirname + '/public/stylesheets',
    //src : __dirname + '/app/stylesheets'}));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/articles/:id?', function(req, res) {
  var parsed = url.parse(req.url);
  res.write("HALLO " + JSON.stringify(parsed));
  res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
