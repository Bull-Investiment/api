const routes = require('express').Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');


routes.post('/users', UserController.create);
routes.post('/login', SessionController.show);

routes.put('/users/:id', UserController.changeType);

// routes.post('/users/:user_id', UserController.store);

module.exports = routes;