const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json({limit: '50mb'}));

// Import Routes, use middleware
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Connecting to Database
const uri = process.env.DATABASE_CONNECTION;
try {
    mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }, () =>
    { console.log('Connected to database mongodb') });
} catch (error) {
        console.log('Could not connect to MongoDB database')
    }

//Listen
const port = 3001;

app.listen(3001, () => {
    console.log(`express is running on ${port}`)
});



