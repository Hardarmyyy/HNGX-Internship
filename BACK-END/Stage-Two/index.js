require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require('./models/user')

//connect to database
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use((req, res, next) => {
        console.log(req.path, req.method)  
        next()
    })

    app.post('/api', async (req, res, next) => {

        const {name, track} = req.body
    
        try {
            if (!name || !track) {
                return res.status(404).send({error: 'All fields are required'})
            }
            else {
                const user = new User({name: name, track: track})
                await user.save()
                res.status(200).send({message: 'user added successfully', user: user})
            }
        }
        catch (err) {
            res.status(500).send({error: err.message});
        }
    })

    app.get('/api/:user_id', async (req, res, next) => {
        const {user_id} = req.params
    
        try {
            if (!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).json({ error: "The user ID is invalid!" })
            }
    
            const user = await User.findById({_id: user_id})
            if (!user) {
                return res.status(404).send({error: 'User not found'});
            }
    
            res.status(200).send({user: user});
    
        }
        catch (err) {
            res.status(500).send({error: err.message});
        }
        
    })

    app.patch('/api/:user_id', async (req, res, next) => {
        const {user_id} = req.params

        try {
            if (!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).json({ error: "The user ID is invalid!" })
            }

            const user = await User.findOne({_id: user_id})
            if (!user) {
                return res.status(404).send({error: 'User not found'});
            }

            const {name, track} = req.body;
            if (!name || !track) {
                return res.status(404).send({error: 'All fields are required'});
            }
            user.name = name;
            user.track = track;
            await user.save();

            res.status(200).send({message: 'user updated successfully', user: user});

        }
        catch (err) {
            res.status(500).send({error: err.message});
        }
    
    })

    app.delete('/api/:user_id', async (req, res, next) => {
        const {user_id} = req.params
    
        try {
            if (!mongoose.Types.ObjectId.isValid(user_id)) {
                return res.status(404).json({ error: "The user ID is invalid!" })
            }
    
            const user = await User.findOneAndDelete({_id: user_id})
            if (!user) {
                return res.status(404).send({error: 'User not found'});
            }
    
            res.status(200).send({message: 'user deleted successfully'});
    
        }
        catch (err) {
            res.status(500).send({error: err.message});
        }
        
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