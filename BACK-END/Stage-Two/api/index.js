require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('../routes/userRoutes')

//connect to database
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use(cors())

    const whitelist = [
        '*'
    ];
    
    app.use((req, res, next) => {
    const origin = req.get('referer');
    const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
    if (isWhitelisted) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
    }
    // Pass to next layer of middleware
    if (req.method === 'OPTIONS') res.sendStatus(200);
    else next();
    });
    
    const setContext = (req, res, next) => {
    if (!req.context) req.context = {};
    next();
    };
    app.use(setContext);

    app.use((req, res, next) => {
        console.log(req.path, req.method) 
        next()
    })

    // app.use('/api', userRoutes)
    app.use('/api', userRoutes)

    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to Database and Server is listening and running on port ' + process.env.PORT)
    })
})
.catch((err) => {
        console.log(err)  
}) 

// Export the Express API for vercel build up process
module.exports = app;