const Sequelize = require('sequelize');
const config = require('../config/database');

const User = require('../models/User');
const Question = require('../models/Question');


const connection = new Sequelize(config);

User.init(connection);
Question.init(connection);

Question.associate(connection.models);

module.exports = connection;