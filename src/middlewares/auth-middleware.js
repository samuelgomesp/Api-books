const jwt = require('jsonwebtoken')
const usersModel = require('../models/users-model')

module.exports = {
    ensureAuth: (req, res, next) => {
        const authHeader = req.headers.authorization

        if(!authHeader) {
            return res.status(401).json({ message: 'Token not provided' })
        }

        const token = authHeader.split(' ')[1]

        try {
            const { id } = jwt.verify(token, process.env.JWT_KEY)
            
            const user = usersModel.getUserById(id)
            
            if(!user) {
                return res.status(401).json({ message: 'User not Found' })
            }

            req.user = user
            next()

        } catch (error) {
            return res.status(401).json({ message: 'Invalid Token' })            
        }

    },
}