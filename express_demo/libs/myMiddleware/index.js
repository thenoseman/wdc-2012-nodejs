"use strict";
var middleware = function setup(text) {
  return function middleware(req, res, next) {
    console.log("LOGGER: " + req.url + " " + text);
    next();
  };
};
module.exports = middleware;
