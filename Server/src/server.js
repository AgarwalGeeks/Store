const express = require('express');
const env = require('dotenv');
const app = express();

// calling environment variables and constants
env.config();

// Using Json parser
app.use(express.json());

// Sample API's
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome from server'
    });
})

app.post('/getData', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
})

app.listen(process.env.PORT, () => {
    console.log('Server is running at PORT', process.env.PORT);
})