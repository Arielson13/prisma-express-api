import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      if (!name || !email) {
        res.status(400).json({ error: "Todos os campos são obrigatórios!" });
      }

      const user = await userService.createUser(name, email);

      res.status(201).json(user);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || "Erro interno do servidor" });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || "Erro interno do servidor" });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = Number(id);

      if (isNaN(userId)) {
        res.status(400).json({ error: "ID de usuário inválido." });
      }

      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: "Usuário não existe!" });
      }

      res.status(200).json(user);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || "Erro interno do servidor" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = Number(id);

      if (isNaN(userId)) {
        res.status(400).json({ error: "Usuário inválido!" });
      }

      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: "Usuário não existe!" });
      }

      await userService.deleteUser(userId);

      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || "Erro interno do servidor" });
    }
  }
}
