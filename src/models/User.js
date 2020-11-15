const { Model, DataTypes } = require('sequelize');
const { uuid } = require('uuidv4');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf_cnpj: DataTypes.STRING,
      type: DataTypes.STRING,
      age: DataTypes.INTEGER,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
    }, {
      sequelize
    });

    this.addHook('beforeSave', async user => {
      return user.id = uuid();
    })
  }
}

module.exports = User;