const Product = require('../model/product')
const User = require('../model/user')

exports.addProduct = async (req, res) => {
   const { name, description, price, image } = req.body
   const product = new Product({
      name, 
      description,
      price,
      image
   })
   const data = await product.save()
   res.status(200).send({ ...data._doc })
}

exports.fetchAllProducts = async (req, res) => {
   try {
      const product = await Product.find()
      res.status(200).send(product)
   } catch(err){
      throw err
   }
}

exports.searchProduct = async (req, res) => {
   const { productName } = req.query
   try {
      const product = await Product.find({ name: productName })
      res.status(200).send({ product })
   } catch(err) {
      throw err
   }
}

exports.addToCart = async (req, res) => {
   const { productId, userId } = req.body
   try {
      const user = await User.findById(userId)
      user.cart.push(productId)
      const data = await user.save()
      res.status(200).send(data.cart)
   } catch(err) {
      throw err
   }
}