const express = require('express')
const route = express.Router()
const {test, addUser, getUser, updateUser, deleteUser} = require('../controllers/user')

route.get('/', test)
route.post('/add-user', addUser)
route.get('/:user_id', getUser)
route.patch('/:user_id', updateUser)
route.delete('/:user_id', deleteUser)


module.exports = route; 