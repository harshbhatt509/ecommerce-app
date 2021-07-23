const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
   fullname: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   isOwner: String,
   cart: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
      default: []
   }
})

module.exports = mongoose.model('User', userSchema)