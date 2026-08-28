import express from 'express'
import dns from 'node:dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import { stripeWebhooks } from './controllers/webhooks.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

app.post('/api/order/stripe-webhook', express.raw({ type: 'application/json' }), stripeWebhooks)

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working fine!')
})

app.listen(port, () => console.log(`Server started on PORT: ${port}`))