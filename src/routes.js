const routes = require('express').Router();

const UserController = require('./controllers/UserController');
const QuestionController = require('./controllers/QuestionController');
const SessionController = require('./controllers/SessionController');


routes.post('/users', UserController.create);
routes.post('/login', SessionController.show);

routes.post('/users/:user_id/questions', QuestionController.create);

// routes.post('/users/:user_id', UserController.store);


module.exports = routes;