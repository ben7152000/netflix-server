const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8081
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const movieRoute = require('./routes/movie')
const listRoute = require('./routes/list')

dotenv.config()

// 資料庫
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => { console.log('DB connection successful!!') })
  .catch((err) => { console.log(err) })

app.use(express.json())

// 路由
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

app.listen(PORT, () => {
  console.log('Backed server is running!')
})
