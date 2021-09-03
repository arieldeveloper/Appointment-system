const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors());

// var whitelist = ['localhost:3002', 'localhost:3000', 'localhost:3001']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// // Then pass them to cors:
// app.use(cors(corsOptions));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json({limit: '50mb'}));

// Import Routes, use middleware
const postsRoute = require('./routes/posts');
const appointmentsRoute = require('./routes/appointments');
app.use('/api/posts', postsRoute);
app.use('/api/appointments', appointmentsRoute);

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

app.listen(port, () => {
    console.log(`express is running on ${port}`)
});



