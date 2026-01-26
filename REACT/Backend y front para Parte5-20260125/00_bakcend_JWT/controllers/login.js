import jwt from 'jsonwebtoken'
import express from 'express'
import { users } from '../data/users.js'
import { logRequest } from '../middleware/logger.js'

const loginRouter = express.Router()

loginRouter.use(logRequest)

loginRouter.post('/', (req, res) => {
  const { username, password } = req.body

  const user = users.find(
    u => u.username === username && u.password === password
  )

  if (!user) {
    return res.status(401).json({ error: 'invalid credentials' })
  }

  const userForToken = {
    username: user.username,
    id: user.id,
    role: user.role
  }

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: '1h'
  })

  res.status(200).json({
    token,
    username: user.username,
    name: user.name,
    role: user.role
  })
})

export default loginRouter
