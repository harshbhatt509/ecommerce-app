const router = require('express').Router()

const { fetchCartItems } = require('../controllers/cart')

router.get('/', fetchCartItems)

module.exports = router
