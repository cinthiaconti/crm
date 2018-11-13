import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import jsonwebtoken from 'jsonwebtoken'
import User from './src/models/userModel'
import routes from './src/routes/crmRoutes'

const app = express()
const PORT = 3000

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb')

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// JWT setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
        if (err) req.user = undefined
        req.user = decode
        next()
      })
    } else {
      req.user = undefined
      next()
    }
})

routes(app)

app.get('/', (req, res) => 
  res.send(`Node and express server is running on port${PORT}`)
)

app.listen(PORT, () => 
  console.log(`your server is running on port ${PORT}`)
)
