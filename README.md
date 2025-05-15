# 📘 API Biblioteca

API RESTful em JavaScript com Node.js para simular um sistema de empréstimo de livros de uma biblioteca. Implementa a logística de empréstimos de livros e o gerenciamento de usuários, livros e empréstimos, é possível realizar todas as operações básicas de gerenciamento de dados (CRUD). Esta API permite manipular e obter dados de maneira fluída com requisições simples e objetvas. 

---

## 🚀 Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **Express** – Gerenciamento de rotas
- **JWT (JSON Web Token)** – Autenticação e autorização
- **dotenv** – Segurança da aplicação
- **bcrypt** – Segurança de usuários
- **uuid v4** – ID's únicos

---

## 📁 Estrutura do Projeto

```
/src
  /controllers
  /errors
  /middlewares
  /models
  /routes
  index.js
.env
```

---

## 📌 Pré-requisitos

- Node.js instalado (v18+)
- npm ou yarn

---

## ⚙️ Instalação

```bash
git clone https://github.com/samuelgomesp/Api-books
npm install bcrypt dotenv express jsonwebtoken uuid 
```

---

## ▶️ Como rodar o projeto

```bash
npm run dev
```

> O servidor será iniciado em `http://localhost:3000`

---

## ⭐ Funcionamento

O sistema possui usuários e livros pré-cadastrados, você pode começar por usar as rotas primárias que descreverei logo abaixo para explorar o código.

**Sugestão:** Comece por realizar o login com um usuário que já está cadastrado para testar e vá dando os próximos passos, como obter todos os livros, obter livro pelo id, realizar um empréstimo de um livro pelo id.

---

## 🔐 Autenticação & Permissões

- Para acessar a rota protegida para realizar um empréstimo, envie o token JWT (ao realizar um login com um user válido, você receberá em json como resposta o token) no header > auth > bearer em ambientes de teste como postman e thudercliente ou:

```
Authorization: Bearer <seu-token>
```

---

## 📮 Endpoints

### 📝 Registro & Login

#### `POST /auth/register`
Registra um novo usuário

**Body:**
```json
{
  "name": "exemplo@email.com",
  "email": "usuario123",
  "password": "senhaSegura"
}
```

#### `POST /auth/login`
Autentica um usuário e retorna o token JWT.

**Body:**
```json
{
  "email": "exemplo@email.com",
  "password": "senhaSegura"
}
```

**Resposta:**
```json
{
  "token": "seu.jwt.token.aqui"
}
```

---
### 📚 Livros

#### `GET /api/books`
Retorna todos os livros cadastrados

#### `GET /api/books/:id`
Retorna um livro pelo 'id'

#### `POST /api/books`
Cadastra um novo livro

**Body:**
```json
{
  "title": "nomeLivro",
  "author": "nomeAutor",
  "quantityAvailable": 23
}
```

#### `PUT /api/books/:id`
Atualiza um livro pelo seu 'id'

💡 Pode ser informado apenas o que deseja atualizar, como por exemplo apenas o nome do livro ou apenas a quantidade.

**Body:**
```json
{
  "title": "novoNomeLivro",
  "author": "novoNomeAutor",
  "quantityAvailable": "novaQuantidade (em formato number)" 
}
```

#### `DELETE /api/books/:id`
Exclui um livro pelo 'id'

---

### ⏳ Empréstimos

#### `GET /api/loans`
Retorna os empréstimos vigentes, cadastrados.

#### `GET /api/loans/:id`
Retorna um empréstimo pelo 'id'.

### 🛡️ Rota Protegida

#### `POST /api/loans`
Realiza um empréstimo de um livro, explicitar no body o id em formato string.

**Body:**
```json
{
  "bookId": "idDoLivro"
}
```

**Requer:** Header com Bearer token

#### `POST /api/loans/:id/return`
Retorna o empréstimo feito pelo 'id' do empréstimo.

---

## 🛠️ Ambiente de Desenvolvimento Recomendado

Este projeto foi desenvolvido utilizando o **Visual Studio Code**. Para uma melhor experiência, recomenda-se:

Visite: [Dowload VSCode](https://code.visualstudio.com/download)


---


> Desenvolvido por [Samuel Gomes](https://github.com/samuelgomesp)
