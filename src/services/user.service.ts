import { prisma } from "../prisma/client";

export class UserService {
  async createUser(name: string, email: string) {
    return prisma.user.create({
      data: {
        name,
        email,
      },
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
