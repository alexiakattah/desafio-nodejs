import User from "@/domain/entities/user";
import HttpError from "../errors/httpError";
import UserRepository from "../repositories/userRepository";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  public async create(user: User): Promise<User> {
    const userExists = await this.userRepository.findUserByEmail(user.email);
    if (userExists) throw new HttpError(400, "User already exists");

    return this.userRepository.create(user);
  }
}

export default UserUseCase;
