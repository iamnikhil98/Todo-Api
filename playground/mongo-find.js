// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');   //object destructuring way
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('there is an error');
    }
    console.log('Connected to the database successfully.....');

    const db = client.db('TodoApp');
    db.collection('Users').find({age:20}).toArray().then((users)=>{

        console.log(JSON.stringify(users,undefined,2))
    })


    client.close();

})
