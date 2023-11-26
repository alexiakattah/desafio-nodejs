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
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return result;
  }
}

export default UserRepositoryPrisma;
