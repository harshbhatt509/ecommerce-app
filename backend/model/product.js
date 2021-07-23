const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   ratings: {
      type: Number,
      default: 0
   },
   sellings: {
      type: Number,
      default: 0
   }
})

module.exports = mongoose.model('Product', productSchema)