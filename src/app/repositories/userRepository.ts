import User from "@/domain/entities/user";

abstract class UserRepository {
  abstract findUserById(id: string): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
  abstract createUser(user: User): Promise<User>;
  abstract updateUser(user: User): Promise<User>;
  abstract deleteUser(id: string): Promise<void>;
}

export default UserRepository;
