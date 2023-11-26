import User from "@/domain/entities/user";

abstract class UserRepository {
  abstract findUserById(id: string): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: string): Promise<void>;
}

export default UserRepository;
