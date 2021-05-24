const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');


// //Middlewares:

//Body-Parser
app.use(bodyParser.json());

// app.use('/api/products/', () => {
//     console.log('This is a middleware running on http://localhost/api/products');
// });
//Import routes

const indexRoute = require('./routes/index');
app.use('/api', indexRoute);


//Routes

app.get('/',(req, res) => {
    res.send('We are on api');
});


// Connection to MongoDB Atlas
mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true }, () => {
    console.log('Connected to MongoDB Atlas');
} );


//Start listening

app.listen(3000);

