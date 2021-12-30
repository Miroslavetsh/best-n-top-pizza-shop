import type { NextApiRequest, NextApiResponse } from 'next'

import Pizza from '../../models/Pizza'

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
const uuid = require('uuid')

type Items = {
  element: {
    items: Array<Pizza>
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const idempotencyKey = uuid.v4()
    const { totalPrice, token } = req.body
    const items: Items = req.body.items

    const description: string = Array.from(Object.values(items))
      .map((element) => {
        return `${element.items[0].name}, id: ${element.items[0].id}`
      })
      .join(', ')

    res.status(200).send(idempotencyKey)

    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then((customer: { id: string }) => {
        stripe.charges.create(
          {
            amount: totalPrice * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description,
            shipping: {
              name: token.card.name,
              address: {
                country: token.card.address_country,
              },
            },
          },
          { idempotencyKey }
        )
      })
      .then((result: unknown) => res.status(200).json(result))
      .catch((err: Error) => console.log(err))
  }
}
