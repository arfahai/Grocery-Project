import Stripe from 'stripe'
import orderModel from '../models/orderModel.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const stripeWebhooks = async (req, res) => {
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const { orderId } = session.metadata

    await orderModel.findByIdAndUpdate(orderId, { payment: true })
  }

  res.json({ received: true })
}

export { stripeWebhooks }