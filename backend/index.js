const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const cartRoutes = require('./routes/cart')

const app = express()
const PORT = 5000
const dbConnectionString = `mongodb+srv://harsh7585:bhatt@123@cluster0.hpqkl.mongodb.net/ecommerce?retryWrites=true&w=majority`

app.use(cors())

app.use(bodyParser.json())

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/cart', cartRoutes)

app.post('/ss', async (req, res) => {
   res.send(req.data)
})

mongoose.connect(dbConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
   app.listen(PORT, () => console.log('server has started'))
   console.log('connected to mongoDB')
   
})
.catch((err) => console.log(err))