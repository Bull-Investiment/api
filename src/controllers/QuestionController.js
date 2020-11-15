const Question = require('../models/Question');
const User = require('../models/User');
const {rating} = require('../utils/userProfile')

module.exports = {
  async create(req, res) {
    const { user_id } = req.params;
    const { first_ask, second_ask,third_ask,fourth_ask } = req.body;

    try {
      const user = await User.findByPk(user_id);

      if(!user) {
        return res.status(400).json({ status: 'error', result: 'User not found'});
      }
      const payload = {
        first_ask, second_ask,third_ask,fourth_ask
      }

      // console.log(await rating(payload));

      const question = await Question.create({
        first_ask, 
        second_ask,
        third_ask,
        fourth_ask,
        user_id
      });


      return res.json({ status: 'ok', result: question});
    }
    catch(err) {
      return res.json({ status: 'error', result: err })
    }
  }
}