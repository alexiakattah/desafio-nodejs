import User from "@/domain/entities/user";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
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
  public async findUserById(id: string): Promise<User> {
    const user = await this.userRepository.findUserById(id);
    if (!user) throw new HttpError(404, "User not found");
    return user;
  }
  public async login(email: string, password: string) {
    const findUser = await this.userRepository.findUserByEmail(email);

    if (!findUser) {
      throw new HttpError(400, "User not exists.");
    }
    const passwordMatch = await compare(password, findUser.password!);

    if (!passwordMatch) {
      throw new HttpError(400, "User or password invalid");
    }

    const secretKey: any = process.env.TOKEN_SECRET;
    if (!secretKey) {
      throw new HttpError(498, "TOKEN_SECRET not found");
    }

    const token = jwt.sign(
      { name: findUser.name!, id: findUser.id, email },
      secretKey,
      {
        expiresIn: "7d",
      }
    );

    return {
      token,
      user: {
        email: findUser.email,
        name: findUser.name,
        id: findUser.id,
      },
    };
  }
}

export default UserUseCase;
