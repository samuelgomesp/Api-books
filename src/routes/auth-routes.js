const express = require('express')
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const authRouter = express.Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)

authRouter.get('/test', authMiddleware.ensureAuth, (req, res) => {
    res.json({ message: `Hello ${req.user.name}` })
})

module.exports = authRouter