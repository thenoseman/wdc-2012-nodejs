"use strict";
var mongo = require('mongoskin');

var db = mongo.db('mongodb://wdc:wdc@ds037657-a.mongolab.com:37657/wdc');

var person = {
  firstName:"Steve",
  lastName:"Jobs"
};

var persons = db.collection("persons");
persons.save(person);

persons.findItems(function(err, records) {
  console.log(records);
});

process.exit();
