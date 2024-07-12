import random_name from 'node-random-name';
import express from 'express';
var app = express()
import { MongoClient } from 'mongodb';

const __dirname = import.meta.dirname;
app.get('/', function(req, res){
    async function main()
    {   
        const URI = 'mongodb://admin:password@mongodb-compose';
        const client = await new MongoClient(URI);
        
        const db = client.db('new');
        const collection = db.collection('Random Names');

        collection.insertOne({name : random_name()});
        console.log("added to collection");

    }
    main();
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(3002, function(){
    console.log('Server is running on port 3002')
})