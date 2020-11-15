const { Model, DataTypes } = require('sequelize');
const { uuid } = require('uuidv4');

class Question extends Model {
  static init(sequelize) {
    super.init({
      first_ask: DataTypes.STRING,
      second_ask: DataTypes.STRING,
      third_ask: DataTypes.STRING,
      fourth_ask: DataTypes.STRING,
    }, {
      sequelize
    });

    this.addHook('beforeSave', async question => {
      return question.id = uuid();
    });

    // const user = this.sequelize.define('users')
    // const question = this.sequelize.define('questions')

    // question.hasOne(user, {foreignKey: 'user_id'})
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  }
}

module.exports = Question;