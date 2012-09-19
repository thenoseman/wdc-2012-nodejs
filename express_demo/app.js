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

  //app.set('view engine', 'ejs');
  app.set('view engine', 'jade');

  // Konfigurierbare middleware
  app.use(myMiddleware("BLA BLA"));

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);

  // Cannot place stylesheets outside public with "ejs". Suckage. use jade!
  app.use(stylus.middleware({
    dest : __dirname + '/public/stylesheets',
    src : __dirname + '/app/stylesheets'}));

  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Demo routes
app.get('/', routes.index);
app.get('/users', user.list);

// Variables in route (use :name? for optional params)
app.get('/articles/:id?', function(req, res) {
  var parsed = url.parse(req.url);
  res.write("HALLO " + JSON.stringify(parsed));
  res.end();
});

app.get('/api', function(req, res) {
  // intelligent setting of mime-type
  res.send({data : "auto converted to json mime type"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
