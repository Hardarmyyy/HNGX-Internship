require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cron = require('node-cron')
const axios = require('axios');

const userRoutes = require('./routes/userRoutes')
const serverUrl = 'https://backend-stage-two.vercel.app/api'

//connect to database
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use(cors())

    app.use((req, res, next) => {
        console.log(req.path, req.method)  
        next()
    })

    cron.schedule('* * * * *', async () => {
        try {
            // Send an HTTP GET request to server to keep it active
            const response = await axios.get(serverUrl);
            console.log(`Pinged ${serverUrl} at ${new Date().toLocaleTimeString()}`);
        } catch (error) {
            console.error(`Error pinging ${serverUrl}: ${error.message}`);
        }
    });

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