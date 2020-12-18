const { Router } = require ('express');
const {userDbController} = require ('../Controllers/user.ctrl');
const userRouter = new Router();

userRouter.get('/', userDbController.getUsers);
//userRouter.get('/:id', userDbController.getUser);
//userRouter.post('/:id', userDbController.addUser);
///try



module.exports = {userRouter};