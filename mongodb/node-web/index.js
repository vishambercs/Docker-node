const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// The default url used to connect to MongoDB is mongodb://[service-name-decribed-in-the-compose-file]:/27017
// In this case, the service name is "database"
const url = 'mongodb://database:27017';

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database');
  }

  console.log('Successfully connected to the database');

  // Interact with Mongodb 
  // Insert, update .... 
  // See the docs at: 
  // https://www.npmjs.com/package/mongodb
  // or:
  // https://github.com/mongodb/node-mongodb-native
})

// Some other code 
app.get('/', (req, res) => {
  res.send('Hi!');
});

app.listen(5000, () => { 
  console.log('Express is listening on port 5000!')
})