import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'Missing details' })
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Please enter a valid email' })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: 'Please enter a strong password' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new userModel({ name, email, password: hashedPassword })
    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({ success: true, token })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const token = createToken(user._id)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: 'Invalid credentials' })
    }
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body
    const user = await userModel.findById(userId).select('-password')
    res.json({ success: true, user })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData

    if (cartData[itemId]) {
      cartData[itemId] += 1
    } else {
      cartData[itemId] = 1
    }

    await userModel.findByIdAndUpdate(userId, { cartData })
    res.json({ success: true, message: 'Added to Cart' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData

    cartData[itemId] = quantity

    await userModel.findByIdAndUpdate(userId, { cartData })
    res.json({ success: true, message: 'Cart Updated' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export { registerUser, loginUser, getUserProfile, addToCart, updateCart }