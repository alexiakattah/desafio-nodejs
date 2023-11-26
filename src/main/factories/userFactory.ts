import UserUseCase from "@/app/usecases/userUseCase";
import UserRepositoryPrisma from "@/infra/repositories/userRepositoryPrisma";

export const makeUserUseCase = () => {
  const userRepository = new UserRepositoryPrisma();
  return new UserUseCase(userRepository);
};
