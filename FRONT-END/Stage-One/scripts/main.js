// Get the DOM element using query selector
const day = document.querySelector(`p[data-testid="currentDayOfTheWeek"]`)
const time = document.querySelector(`p[data-testid="currentUTCTime"]`)

// Define an array to show the days of the week
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Get the index of the current day of the week
const today = new Date().getDay()

// Find the exact day using the index of today to match the current day in the array of days of the week
const currentDay = daysOfTheWeek[today]

// Get the current time using the now method on the date object;
const currentUTCTime = Date.now()

window.addEventListener('DOMContentLoaded', () => {
    day.textContent = `Current day of the week: ${currentDay}`;
    time.textContent = `Current UTC time in milliseconds: ${currentUTCTime}`
})