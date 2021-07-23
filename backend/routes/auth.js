const router = require('express').Router()

const { createUser, login } = require('../controllers/user')

router.post('/register', createUser)
router.get('/login', login)

module.exports = router