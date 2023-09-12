const express = require('express')
const route = express.Router()
const {addUser, getUser, updateUser, deleteUser, test} = require('../controllers/user')


route.post('/', addUser)
route.get('/:user_id', getUser)
route.get('/', test)
route.patch('/:user_id', updateUser)
route.delete('/:user_id', deleteUser)


module.exports = route;