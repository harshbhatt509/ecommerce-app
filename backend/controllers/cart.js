const User = require('../model/user')

exports.fetchCartItems = async (req, res) => {
   try {
      const { userId } = req.query
      const items = await User.findById(userId).populate('cart')
      res.status(200).send(items.cart)
   } catch(err) {
      re.send('Something went wrong', err)
   } 
} 

