const router = require('express').Router()

const { addProduct, fetchAllProducts, searchProduct, addToCart } = require('../controllers/product')

router.post('/addproduct', addProduct)
router.get('/allproducts', fetchAllProducts)
router.get('/search', searchProduct)
router.post('/addtocart', addToCart)

module.exports = router