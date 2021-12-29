const path = require('path')
const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const uuid = require('uuid')

const app = express()
const router = jsonServer.router(path.dirname('server/index.ts') + '/public/db.json')

const PORT = process.env.PORT || 3001

const defaults = jsonServer.defaults({
  static: './build',
})

// middleware
app.use(cors())
app.use(defaults)
app.use('/products', router)

// routes
app.post('/purchase', (req, res) => {
  console.log(req)

  const idImpotencyKey = uuid.v4()

  res.send(idImpotencyKey)
})

app.listen(PORT, () => {
  console.log(`Server is Running... on port ${PORT}`)
})
