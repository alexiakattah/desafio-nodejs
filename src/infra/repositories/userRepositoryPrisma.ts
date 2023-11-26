import UserRepository from "@/app/repositories/userRepository";
import User from "@/domain/entities/user";

class UserRepositoryPrisma implements UserRepository {
  createUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findUserById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export default UserRepositoryPrisma;
