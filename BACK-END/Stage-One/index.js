const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.json()) 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Define an array to store all the days of the week
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Define and store the current date in the today Variable
const today = new Date()

// Define and store the index of the day in the currentDay variable 
const currentDay = today.getDay()

const currentDayofTheWeek = daysOfTheWeek[currentDay]

const UTCTime = today.toISOString()
console.log(UTCTime)

app.get('/api', (req, res) => {
    res.status(200).json({
        "slack_name": "Hardarmyyy",
        "current_day": currentDayofTheWeek,
        "utc_time": UTCTime,
        "github_file_url": "",
        "github_repo_url": "https://github.com/Hardarmyyy/HNGX-Internship",
        "status_code": 200,
    })
})

app.listen(process.env.PORT, () => {
    console.log('server is listening and running on port', process.env.PORT)
})