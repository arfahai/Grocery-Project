import express from 'express'
import {
  registerUser,
  loginUser,
  getUserProfile,
  addToCart,
  updateCart
} from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile', authUser, getUserProfile)
userRouter.post('/add-to-cart', authUser, addToCart)
userRouter.post('/update-cart', authUser, updateCart)

export default userRouter