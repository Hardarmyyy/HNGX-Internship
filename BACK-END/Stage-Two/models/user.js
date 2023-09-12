const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    track: {
        type: String
    }
}, {timestamps: {createdAt: true, updatedAt: true} })


module.exports = mongoose.model('User', userSchema);  