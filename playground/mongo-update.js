const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {

    }

    const db = client.db('TodoApp');

    db.collection('Users').updateOne({name: 'Amal Mathew'},{$set:{name:'Akhil',age:24}}).then(result => {
        console.log("Done Updation");
    }).catch(err => {
        console.log(err);
    })

    client.close();
})