const User = require('../models/User');

module.exports = {
  async create(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ status: 'ok', result: user });
    } catch (err) {
      return res.json({ status: 'error', result: err });
    }
  },

  async changeType(req, res) {
    const { id } = req.params;
    const { type } = req.body;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ status: 'error', result: 'User not found' });
      }

      await user.update({ type });

      return res.status(200).json({ status: 'ok', result: 'User Type updated!' });
    } catch (err) {
      return res.status(400).json({ status: 'error', result: err });
    }
  }
}