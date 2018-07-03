const MongoClient = require('mongodb').MongoClient;

/* const addr = MongoClient.connect('mongodb://localhost:27017/TodoApp')
var mongoconnect = (addr) => {
    return new Promise((resolve,reject) => {
        resolve( MongoClient.connect(addr))
    });
   
}; */

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        console.log("Error");
        
    } else {
        console.log("Connected");
    }
   
    const db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
        text:'Hi',
        completed:false
    }, (err,result) => {
        if (err) {
            console.log("Unable to insert",err);
        } else {
            console.log(JSON.stringify(result,undefined,2));
        }
    });

    db.collection('Users').insertOne({
        name: 'Amal',
        age: '27',
        place: 'Toronto'
    }, (err,result) => {
        if (err) {
            console.log("Unable to insert",err);
        } else {
            console.log(JSON.stringify(result.name,undefined,2));
        }
    }); */

   /*  db.collection('Users').insertOne({
        name: 'Akhil',
        age: '24',
        place: 'India'
    }).then (result => {
        db.collection('Users').insertOne({
            name: result.ops[0].name+ " Mathew",
            age: '27',
            place: 'India'
        })
        client.close();   
    }).catch (err => {
        client.close();
    }); */  

   /*  db.collection('Users').find({name:'Amal'}).toArray().then (result => {
        db.collection('Users').insertOne({
            name: result[0].name+ " Mathew",
            age: '27',
            place: 'India'
        })
        client.close();   
    }).catch (err => {
        client.close();
    }); */

    /* db.collection('Users').deleteOne({name:'Amal'}).then (result => {
        console.log("Deleted");
        client.close();   
    }).catch (err => {
        client.close();
    }); */

})
