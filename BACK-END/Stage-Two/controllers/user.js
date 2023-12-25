const mongoose = require('mongoose')
const User = require('../models/user')

exports.test = async (req, res) => {

    res.json({message: "TESTING 123 ...................."})
}

exports.addUser = async (req, res, next) => {

    const {name} = req.body

    try {
        if (!name) {
            return res.status(404).send({error: 'All fields are required'})
        }
        else {
            const user = new User({name: name})
            await user.save()
            res.status(200).send({message: 'user added successfully', user: user})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message});
    }
}

exports.getUser = async (req, res, next) => {
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

}

exports.updateUser = async (req, res, next) => {
        const {user_id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(404).json({ error: "The user ID is invalid!" })
        }

        const user = await User.findOne({_id: user_id})
        if (!user) {
            return res.status(404).send({error: 'User not found'});
        }

        const {name} = req.body;
        if (!name) {
            return res.status(404).send({error: 'All fields are required'});
        }
        user.name = name;
        await user.save();

        res.status(200).send({message: 'user updated successfully', user: user});

    }
    catch (err) {
        res.status(500).send({error: err.message});
    }

}

exports.deleteUser = async (req, res, next) => {
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

}