1. Estrutura Recomendada de Pastas
src/
  ├── controllers/
  │    └── user.controller.ts
  ├── services/
  │    └── user.service.ts
  ├── routes/
  │    └── user.routes.ts
  ├── prisma/
  │    └── client.ts
  ├── app.ts
  ├── server.ts
  └── types/

​
2. Inicializando o Projeto
npm init -y
npm install express prisma @prisma/client
npm install --save-dev typescript ts-node-dev @types/express @types/node
npx tsc --init
npx prisma init

​
Configure seu prisma/schema.prisma para usar PostgreSQL:
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

​
No .env, coloque sua conexão:
DATABASE_URL="postgresql://user:password@localhost:5432/nome_db"

​
Execute:
npx prisma migrate dev --name init
npx prisma generate

​
3. Express + TypeScript + Prisma
src/prisma/client.ts
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

​
src/services/user.service.ts
import { prisma } from "../prisma/client";

export class UserService {
  async createUser(name: string, email: string) {
    return prisma.user.create({
      data: { name, email },
    });
  }

  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  async deleteUser(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}

​
src/controllers/user.controller.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await userService.createUser(name, email);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await userService.deleteUser(Number(id));
    res.status(204).send();
  }
}

​
src/routes/user.routes.ts
import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getAllUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));

export { router as userRoutes };

​
src/app.ts
import express from "express";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

export default app;

​
src/server.ts
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at <http://localhost>:${PORT}`);
});
