import User from "@/domain/entities/user";
import { hash } from "bcrypt";
import HttpError from "../errors/httpError";
import UserRepository from "../repositories/userRepository";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  public async create(user: User): Promise<User> {
    const userExists = await this.userRepository.findUserByEmail(user.email);
    if (userExists) throw new HttpError(400, "User already exists");
    const hashedPassword = await hash(user.password, 8);
    return this.userRepository.create({
      ...user,
      password: hashedPassword,
    });
  }
}

export default UserUseCase;
