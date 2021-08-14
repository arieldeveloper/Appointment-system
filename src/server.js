const express = require('express');
const app = express();

//middleware
// app.use('/posts', () => {
//     console.log('running middleware');
// });

//ROUTES
app.get('/', (req, res) => {
    res.send('we are home');
});
app.get('/posts', (req, res) => {
    res.send('we are posts');
});


//Listen
const port = 3001;

app.listen(3001, () => {
    console.log(`express is running on ${port}`)
});


