const express = require('express');
const app = express();
require('dotenv').config()
const cron = require('node-cron')
const axios = require('axios');

app.use(express.json()) 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// define cron job to keep server up and running
const serverUrl = 'https://stage-one-tan.vercel.app'
cron.schedule('*/2 * * * *', async () => {
    try {
        // Send an HTTP GET request to server to keep it active
        const response = await axios.get(serverUrl);
        console.log(`Pinged ${serverUrl} at ${new Date().toLocaleTimeString()}`);
    } catch (error) {
        console.error(`Error pinging ${serverUrl}: ${error.message}`);
    }
});


app.get('/api', (req, res) => {
        // Define an array to store all the days of the week
        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        // Define and store the current date in the today Variable
        const today = new Date()

        // Define and store the index of the day in the currentDay variable 
        const currentDay = today.getDay()

        const currentDayofTheWeek = daysOfTheWeek[currentDay]

        const UTCTime = today.toISOString().split('.')[0] + 'Z' 
        
        const {slack_name, track} = req.query

    try {
        if (slack_name === 'Hardarmyyy' && track === 'backend') {
            res.status(200).json({
                "slack_name": "Hardarmyyy",
                "current_day": currentDayofTheWeek,
                "utc_time": UTCTime,
                "track": "backend",
                "github_file_url": "https://github.com/Hardarmyyy/HNGX-Internship/blob/main/BACK-END/Stage-One/index.js",
                "github_repo_url": "https://github.com/Hardarmyyy/HNGX-Internship/tree/main/BACK-END/Stage-One",
                "status_code": 200,
            })
        }
        else {
            res.status(404).send({message: 'The username or track is invalid'})
        }
    }
    catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.listen(process.env.PORT, () => {
    console.log('server is listening and running on port', process.env.PORT)
})

// Export the Express API for vercel build up process
module.exports = app;