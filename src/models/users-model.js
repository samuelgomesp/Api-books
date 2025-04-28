const uuid = require('uuid').v4
// Esse v4 acima é uma função que gera um id único para cada usuário, um número aleatório.
const bcrypt = require('bcrypt')
// Esse bcrypt é uma biblioteca que serve para criptografar senhas, tornando-as mais seguras.
// O bcrypt é uma biblioteca de hash de senhas, que gera um hash seguro para armazenar senhas no banco de dados. Ele usa o algoritmo bcrypt para criar um hash seguro e único para cada senha, tornando mais difícil para os invasores decifrarem as senhas armazenadas.
const users = [
    { id: "1", name: "Samuel", email: "samuel@email.com", password: "123456" },
    { id: "2", name: "John", email: "john@email.com", password: "654321" }
]

module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find(user => user.id === id),

    getUserByEmail: (email) => users.find(user => user.email === email),

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        }
        users.push(newUser)
        return newUser
    }

}