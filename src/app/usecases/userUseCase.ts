import User from "@/domain/entities/user";
import UserRepository from "../repositories/userRepository";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  public async getUser(id: string): Promise<User> {
    return await this.userRepository.getUser(id);
  }
}

export default UserUseCase;
