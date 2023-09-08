import 'dotenv/config'
import express from 'express';
import outingRoutes from './routes/example.js'

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('api/outingDetails',outingRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})