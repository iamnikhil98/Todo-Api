// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');   //object destructuring way
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('there is an error');
    }
    console.log('Connected to the database successfully.....');

    const db = client.db('TodoApp');
    //deleteMany
    // db.collection('Todos').deleteMany({text:"Go to college"}).then((result)=>{
    //     console.log(result);
    // })
    //deleteOne
    //  db.collection('Todos').deleteOne({text:"go to office"}).then((result)=>{
    //      console.log(result);
    //  })
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    })

    // client.close();

})
