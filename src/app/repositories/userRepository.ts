import User from "@/domain/entities/user";

abstract class UserRepository {
  abstract findUserById(id: string): Promise<User | null>;
  abstract findUserByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<User>;
}

export default UserRepository;
