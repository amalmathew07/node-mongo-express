var mongoose = require('./mongooseplug');
var User = require('./user').User;
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
//app.use(urlE)

app.post('/users',(req,res) => {
    var newUser = new User({name: req.body.text,age:12,active:true});

    newUser.save().then((doc)=> {
    res.json(doc);
    }).catch((err)=> {

    });
    //res.send("SSSS")
})

app.get('/listusers',(req,res) => {
    User.find({name: /^AK/}).then((docs) => {
        res.send({docs,
                code:"200"});
    }).catch((err) => {
        res.status(400).send(err);
    }); 
});


app.post('/updateusers',(req,res) => {
    User.updateMany({name: /^AM/}, {$set: {name:"AmAL"} },
    {returnOriginal:false}).then((docs) => {
        res.send({docs,
                code:"200"});
    }).catch((err) => {
        res.status(400).send(err);
    }); 
});


app.listen(3000,() => {
    console.log("Listening on 3000");
});

module.exports = {
    app
}


