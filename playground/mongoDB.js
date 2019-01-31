// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');   //object destructuring way
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('there is an error');
    }
    console.log('Connected to the database successfully.....');

    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: "Gate exam on 3 feb",
        completed:false
    }, (err, result) => {

        if (err) {
            return console.log("Unable to insert todo")
        }
        console.log(JSON.stringify(result.ops, undefined, 2))


    })
client.close();

})
