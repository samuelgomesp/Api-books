const HttpError = require("../errors/HttpError")
const booksModel = require("../models/books-model")
const loansModel = require("../models/loans-model")

module.exports = {
    //GET /api/loans
    index: (req, res) => {
        const loans = loansModel.getAllLoans()
        res.json(loans)
    },
    //GET /api/loans/:id
    show: (req, res) => {
        const { id } = req.params
        const loan = loansModel.getLoanById(id)

        if (!loan) throw new HttpError(404, 'Loan not found')

        res.json(loan)
    },
    //POST /api/loans
    save: (req, res) => {
        const user = req.user

        const { bookId } = req.body

        if (!user || !bookId) throw new HttpError(400, 'User and book are required')

        if (typeof bookId !== 'string') throw new HttpError(400, 'Invalid book ID')

        const book = booksModel.getBookId(bookId)
        if (!book) throw new HttpError(404, 'Book not found')

        const newLoan = loansModel.createLoan(user, book)

        res.status(201).json(newLoan)
    },
    // POST /api/loans/:id/return
    return: (req, res) => {
        const { id } = req.params
        const loan = loansModel.returnLoan(id)


        if (!loan) throw new HttpError(404, 'Loan not found')

        res.status(200).json(loan)
    }
}