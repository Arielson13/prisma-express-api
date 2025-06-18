# 📦 Prisma Express API

Uma API RESTful simples desenvolvida com **Node.js**, **Express** e **Prisma ORM**. Este projeto tem como objetivo fornecer uma base sólida para desenvolvimento de backends modernos com banco de dados relacional utilizando **PostgreSQL**.

## ✨ Funcionalidades

- CRUD de Usuários
- Middleware de autenticação com JWT (em breve)
- Código estruturado e organizado com rotas modulares

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express** — Framework minimalista para Node.js
- **TypeScript** — Tipagem estática para JS moderno
- **Prisma ORM** — ORM moderno e eficiente
- **PostgreSQL** — Banco de dados relacional
- **JWT** — Autenticação segura via tokens (em breve)
- **bcryptjs** — Criptografia de senhas (em breve)

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18+ recomendada)
- PostgreSQL rodando localmente ou em um servidor
- Yarn ou npm

### Passos

1. **Clone o repositório**

- bash
  git clone https://github.com/Arielson13/prisma-express-api.git
  cd prisma-express-api

2. **Instale as dependências**
  npm install
  # ou
  yarn install

3. Configure o Banco de Dados
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
   
4. Crie o banco e execute as migrações
  npx prisma migrate dev --name init

5. npm run dev ou yarn dev

A API estará disponível em: http://localhost:3000

🛠 Endpoints (Exemplo)
Produtos
GET /products — Lista todos os produtos

POST /products — Cria um novo produto

PUT /products/:id — Atualiza um produto existente

DELETE /products/:id — Remove um produto

Vendas
GET /sales — Lista todas as vendas

POST /sales — Registra uma nova venda

📌 Notas
Autenticação com JWT será adicionada em breve.

Desenvolvido por Arielson Duarte

