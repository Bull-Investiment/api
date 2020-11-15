const Question = require('../models/Question');
const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { user_id } = req.params;
    const { first, second, third, fourth } = req.body;

    try {
      const user = await User.findByPk(user_id);

      if(!user) {
        return res.status(400).json({ status: 'error', result: 'User not found'});
      }
      const payload = {
        first, second, third, fourth
      }

      // console.log(await rating(payload));

      const question = await Question.create({
        first, 
        second,
        third,
        fourth,
        user_id
      });
      return res.json({ status: 'ok', result: question});
    }
    catch(err) {
      return res.json({ status: 'error', result: err })
    }
  }
}