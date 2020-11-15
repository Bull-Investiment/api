'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
     first_ask: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      second_ask: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      third_ask: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fourth_ask: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
     updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
