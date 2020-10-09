const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user.controller')


userRouter.get('/', userController.get);
userRouter.get('/userlist', userController.getUserLis);


module.exports = userRouter;