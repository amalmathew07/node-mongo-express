//Server
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//Mongo DB
var MongoClient = require('mongodb').MongoClient;

app.get('/',(req,res) => {
    MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

        if (err) {

        }
     const db = client.db("TodoApp");

        db.collection("Users").find({name:'Akhil'}).toArray().then(result => {
            res.json("Age: "+result[0].age);
        }).catch(err =>{
            console.log("Error --- ",err);
        })
        client.close();
    });
    
});

app.listen(port);