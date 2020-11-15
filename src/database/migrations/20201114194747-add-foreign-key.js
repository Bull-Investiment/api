'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('questions','user_id',{
      type: Sequelize.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',

    });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('questions', 'user_id');
  }
};
