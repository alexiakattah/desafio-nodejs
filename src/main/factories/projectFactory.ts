import ProjectUseCase from "@/app/usecases/projectUseCase";
import ProjectRepositoryPrisma from "@/infra/repositories/projectRepositoryPrisma";

export const makeProjectUseCase = () => {
  const projectRepository = new ProjectRepositoryPrisma();
  return new ProjectUseCase(projectRepository);
};
