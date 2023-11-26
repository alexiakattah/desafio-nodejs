import UserRepository from "@/app/repositories/userRepository";
import User from "@/domain/entities/user";
import { prisma } from "../prisma/prismaClient";

class UserRepositoryPrisma implements UserRepository {
  async create(user: User): Promise<User> {
    const result = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return result;
  }
  async findUserByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return result ? result : null;
  }
  async findUserById(id: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return result ? result : null;
  }
}

export default UserRepositoryPrisma;
