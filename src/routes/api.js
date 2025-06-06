const express = require('express')
const booksController = require('../controllers/books-controller')
const loansController = require('../controllers/loans-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const apiRouter = express.Router()

apiRouter.use(express.json())

// Books routes
apiRouter.get('/books', booksController.index)
apiRouter.get('/books/:id', booksController.show)

apiRouter.post('/books', booksController.save)

apiRouter.put('/books/:id', booksController.update)

apiRouter.delete('/books/:id', booksController.delete)

// Loans routes
apiRouter.get('/loans', loansController.index)
apiRouter.get('/loans/:id', loansController.show)

apiRouter.post('/loans', authMiddleware.ensureAuth, loansController.save)
apiRouter.post('/loans/:id/return', loansController.return)

module.exports = apiRouter