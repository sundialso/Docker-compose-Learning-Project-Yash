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
        const collection = db.collection('cats');

        collection.insertOne({name : random_name()});
        console.log("added to collection");

    }
    main();
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(3002, function(){
    console.log('Server is running on port 3002')
})


// const express = require('express');
// var app = express();
// var Db = require('mongodb').Db,
//     MongoClient = require('mongodb').MongoClient,
//     Server = require('mongodb').Server,
//     assert = require('assert');

// app.get('/', function(req, res){
//     async function main()
//     {   
//         var mongoclient = new MongoClient(new Server("admin:password@localhost", 27017), {native_parser: true});
//         //const URI = 'mongodb://admin:password@0.0.0.0:27017';
//         //const client = await new MongoClient(URI);

//         mongoclient.open(function(err, mongoclient) {

//             // Get the first db and do an update document on it
//             var db = mongoclient.db("integration_tests");
//             db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
//               assert.equal(null, err);
//               assert.equal(1, result);
//                 // Close the connection
//                 mongoclient.close();
//             });
//         });
//         console.log("_--------------------Connection established---------------------_");

//     }
//     main();
//     res.sendFile(`${__dirname}/index.html`);
// })

// app.listen(3002, function(){
//     console.log('Server is running on port 3002')
// })