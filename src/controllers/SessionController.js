const User = require('../models/User');

module.exports = {
  async show(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email }});

      if (!user) {
        return res.status(400).json({ status: 'error', result: 'User not found'});
      }

      if (user.password !== password) {
        return res.status(400).json({ status: 'error', result: 'Incorrect password'});
      }

      return res.json({ status: 'ok', result: user})
    } catch(err) {
      return res.json({ status: 'error', result: err})
    }
  }
}