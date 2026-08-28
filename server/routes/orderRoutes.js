import express from 'express'
import {
  placeOrderCod,
  placeOrderStripe,
  userOrders,
  allOrders,
  updateStatus
} from '../controllers/orderController.js'
import authUser from '../middleware/authUser.js'
import authSeller from '../middleware/authSeller.js'

const orderRouter = express.Router()

orderRouter.post('/cod', authUser, placeOrderCod)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/userorders', authUser, userOrders)

// Seller endpoints
orderRouter.get('/list', authSeller, allOrders)
orderRouter.post('/status', authSeller, updateStatus)

export default orderRouter