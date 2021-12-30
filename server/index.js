const path = require('path')
const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')
// const bodyParser = require('body-parser')
// const stripe = require('stripe')(
//   'sk_test_51K84PHF3LIxWwhHh82JQMEB6Jbs8ytTCC2ocQoUec2lHO3pIyNXvq45GMJ6vJEUIgyxjDDQg2D42XdyTQVidPEla00G8fMATxv',
// )
// const uuid = require('uuid')

const app = express()
const router = jsonServer.router(path.dirname('server/index.ts') + '/public/db.json')

const PORT = process.env.PORT || 3001

// const jsonParser = bodyParser.json()

// const defaults = jsonServer.defaults({
//   static: './build',
// })

// middleware
app.use(cors())
app.use('/', router)
// app.use(defaults)

// routes
// app.post('/purchase', jsonParser, (req, res) => {
//   const idempotencyKey = uuid.v4()
//   const { totalPrice, items, token } = req.body

//   const description = Array.from(Object.values(items))
//     .map((element) => `${element.items[0].name}, id: ${element.items[0].id}`)
//     .join(', ')

//   res.send(idempotencyKey)

//   return stripe.customers
//     .create({
//       email: token.email,
//       source: token.id,
//     })
//     .then((customer) => {
//       stripe.charges.create(
//         {
//           amount: totalPrice * 100,
//           currency: 'usd',
//           customer: customer.id,
//           receipt_email: token.email,
//           description,
//           shipping: {
//             name: token.card.name,
//             address: {
//               country: token.card.address_country,
//             },
//           },
//         },
//         { idempotencyKey },
//       )
//     })
//     .then((result) => res.status(200).json(result))
//     .catch((err) => console.log(err))
// })

app.listen(PORT, () => {
  console.log(`Server is Running... on port ${PORT}`)
})

module.exports = {}
