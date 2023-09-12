require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./routes/userRoutes')

//connect to database
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use((req, res, next) => {
        console.log(req.path, req.method) 
        next()
    })

    // app.use('/api', userRoutes)

    app.get('/api', (req, res, next) => {
        res.status(200).json({message: 'I want to perform crud operations'})
    })

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