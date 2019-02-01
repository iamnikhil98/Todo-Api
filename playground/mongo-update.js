// const MongoClient = require('mongodb').MongoClient;
const { MongoClient,ObjectID } = require('mongodb');   //object destructuring way
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('there is an error');
    }
    console.log('Connected to the database successfully.....');

    const db = client.db('TodoApp');
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID("5c53264b1191d3eb2c66ff97")
    },{
    $set:{
        name:"Aradhya"
    },
    $inc:{
        age:2
    }

    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })

    // client.close();

})
