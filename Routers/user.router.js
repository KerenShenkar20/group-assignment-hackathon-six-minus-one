const { Router } = require ('express');
const {userDbController} = require ('../Controllers/user.ctrl');
const userRouter = new Router();

userRouter.get('/', userDbController.getUsers);
userRouter.post('/', userDbController.addUser);


module.exports = {userRouter};