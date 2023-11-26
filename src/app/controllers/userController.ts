import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
import { MissingParamError } from "../errors/missingParam";
import UserUseCase from "../usecases/userUseCase";

export class UserController {
  private readonly userUseCase: UserUseCase;
  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase;
  }
  register(httpRequest: HttpRequest): HttpResponse {
    const { name, email, password } = httpRequest.body;
    console.log(
      "🚀 ~ file: userController.ts:6 ~ UserController ~ register ~ name:",
      name
    );
    try {
      if (!name || !email || !password)
        throw new MissingParamError("Missing params");
      const user = this.userUseCase.getUser(name);
    } catch (error) {
      return {
        statusCode: 400,
        body: error.message,
      };
    }
  }
}
