# 📦 Prisma Express API

Uma API RESTful simples desenvolvida com **Node.js**, **Express** e **Prisma ORM**.  
Este projeto tem como objetivo fornecer uma base sólida para desenvolvimento de backends modernos com banco de dados relacional utilizando **PostgreSQL**.

# ✨ Funcionalidades

- ✅ CRUD de Usuários  
- 🔐 Middleware de autenticação com JWT *(em breve)*  
- 🧩 Código estruturado e organizado com rotas modulares  

# 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript  
- **Express** — Framework minimalista para Node.js  
- **TypeScript** — Tipagem estática para JS moderno  
- **Prisma ORM** — ORM moderno e eficiente  
- **PostgreSQL** — Banco de dados relacional  
- **JWT** — Autenticação segura via tokens *(em breve)*  
- **bcryptjs** — Criptografia de senhas *(em breve)*  

---

# ⚙️ Como Rodar o Projeto

## ✅ Pré-requisitos

- Node.js (**versão 18+ recomendada**)  
- PostgreSQL rodando localmente ou em servidor  
- Gerenciador de pacotes: **npm** ou **yarn**  

## 📥 Passos

### Clone o repositório
- git clone https://github.com/Arielson13/prisma-express-api.git
- cd prisma-express-api

### Instale as dependências
- npm install / yarn install

## 🛠 Configure o Banco de Dados
- DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"

## Execute as migrações do Prisma
- npx prisma migrate dev --name init

## ▶️ Rode o servidor
- npm run dev / yarn dev

## 📚 Endpoints (Exemplos)
### 🛒 Usuários
- POST / — Cria um novo produto

- GET / — Lista todos os produtos

- GET /:id — Atualiza um produto existente

- DELETE /:id — Remove um produto

## 📌 Notas
- 🔒 A autenticação com JWT será adicionada em breve.

## 👨‍💻 Desenvolvido por
- Arielson Duarte
- github.com/Arielson13
