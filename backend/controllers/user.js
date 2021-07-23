const User = require('../model/user')

exports.createUser = async (req, res) => {
   const { fullname, email, password, isOwner } = req.body
   const user = new User({
      fullname,
      email,
      password,
      isOwner
   })
   const data = await user.save()
   res.status(200).send({ _id: user.id, email: user.email, fullname: user.fullname })
}

exports.login = async (req, res) => {
   const { email, password } = req.query
   const user = await User.findOne({ email })
   if(!user) {
      res.status(404).send('User does not exist!')
   }
   if(user.password !== password) {
      res.status(400).send('Password is incorrect')
   }
   res.status(200).send({ _id: user.id, email: user.email, fullname: user.fullname })
}