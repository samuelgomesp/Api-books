module.exports = class HttpError extends Error {
    constructor(status, message) {
        super(message)
        this.status = status
    }

}

//Clase customizada para lançar erros HTTP
