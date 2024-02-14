const express = require('express')
const userRouter = express.Router()
const {userController} = require('../controller/user.controller')

userRouter.get('/', userController.getAll)
userRouter.post('/login', userController.login)
userRouter.post('/register', userController.register)
userRouter.put('/:id', userController.edit)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter