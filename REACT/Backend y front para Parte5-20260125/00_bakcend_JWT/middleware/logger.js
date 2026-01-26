// utils/logger.js
import jwt from 'jsonwebtoken'

export const logRequest = (req, res, next) => {
  console.log('--- New Request ---')
  console.log(`${req.method} ${req.path}`)
  console.log('Headers:', req.headers)

  const authHeader = req.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '')
    try {
      const decoded = jwt.verify(token, process.env.SECRET)
      console.log('Decoded token:', decoded)
    } catch (err) {
      console.log('Invalid or expired token')
    }
  } else {
    console.log('No token provided')
  }

  console.log('Body:', req.body)
  console.log(new Date(Date.now()))
  console.log('-------------------\n')
  next()
}