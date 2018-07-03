//Server
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//Mongo DB
var MongoClient = require('mongodb').MongoClient;

app.get('/',(req,res) => {
    
    res.send("HI AMAL");
    
});

app.listen(port);