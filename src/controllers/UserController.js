const User = require('../models/User')

module.exports = {
  async create(req, res) {
    const { name, email, password, cpf_cnpj, state, city } = req.body;
    try {
      const user = await User.create({
        name, 
        email, 
        password, 
        cpf_cnpj, 
        state, 
        city
      });

      return res.json({ status: 'ok', result: user});
    }
    catch(err) {
      return res.json({ status: 'error', result: err});
    }

  },

  async store(req, res) {
    try {
      // const user
    }
    catch(err) {
      return res.json({ status: 'error', result: err});
    }
  }
}