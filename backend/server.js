const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5001
const cors = require('cors')

//connect to database
connectDB()

const app = express()

app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//create route with express
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Welcome to the Support Desk API' })
// })

//Routes connect userRoutes
app.use('/api/users', require('./routes/userRoutes'))

//Routes connect ticketRoutes
app.use('/api/tickets', require('./routes/ticketRoutes'))

//Serve Frontend
console.log('show process', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  //set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
