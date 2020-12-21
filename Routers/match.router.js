const { Router } = require ('express');
const {matchDbController} = require ('../Controllers/match.ctrl');
const matchRouter = new Router();

matchRouter.get('/', matchDbController.getMatches);

module.exports = {matchRouter};