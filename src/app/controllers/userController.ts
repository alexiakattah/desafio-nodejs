import User from "@/domain/entities/user";
import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
import { MissingParamError } from "../errors/missingParam";
import UserUseCase from "../usecases/userUseCase";

export class UserController {
  private readonly userUseCase: UserUseCase;
  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase;
  }
  async register(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = httpRequest.body;

    try {
      if (!name || !email || !password)
        throw new MissingParamError(" name, email or password");
      const userData: User = {
        name,
        email,
        password,
      };
      const user = await this.userUseCase.create(userData);
      return {
        status: 201,
        body: user,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
  async login(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;
    try {
      if (!email || !password)
        throw new MissingParamError(" email or password");
      const user = await this.userUseCase.login(email, password);
      return {
        status: 200,
        body: user,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}
