import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const authSeller = async (req, res, next) => {
  const { token } = req.headers
  if (!token) {
    return res.json({ success: false, message: 'Not Authorized, Login Again' })
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(token_decode.id)
    if (user.role !== 'seller') {
      return res.json({ success: false, message: 'Access Denied: Seller Only' })
    }
    req.body.userId = token_decode.id
    next()
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export default authSeller