const MongoClient = require('mongodb').MongoClient;

/* const addr = MongoClient.connect('mongodb://localhost:27017/TodoApp')
var mongoconnect = (addr) => {
    return new Promise((resolve,reject) => {
        resolve( MongoClient.connect(addr))
    });
   
}; */
var db;
MongoClient.connect('mongodb://localhost:27017/TodoApp').then((client)=> {
    const db = client.db('TodoApp'); 
    console.log("Connected");
}).then(() => {
    db.collection('Users').insertOne({
        name: 'Jon',
        age: '24',
        place: 'India'
    }).then (result => {
        db.collection('Users').insertOne({
            name: result.ops[0].name+ " Mathew",
            age: '27',
            place: 'India'
        })
        client.close();   
    })
}).catch(err => {
    console.log("Error",err);
})
    