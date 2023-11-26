import ProjectUseCase from "@/app/usecases/projectUseCase";
import TasksUseCase from "@/app/usecases/tasksUseCase";
import UserUseCase from "@/app/usecases/userUseCase";
import ProjectRepositoryPrisma from "@/infra/repositories/projectRepositoryPrisma";
import TasksRepositoryPrisma from "@/infra/repositories/tasksRepositoryPrisma";
import UserRepositoryPrisma from "@/infra/repositories/userRepositoryPrisma";

export const makeTasksUseCase = () => {
  const tasksRepository = new TasksRepositoryPrisma();
  const projectRepository = new ProjectRepositoryPrisma();
  const projectUseCase = new ProjectUseCase(projectRepository);
  const userRepository = new UserRepositoryPrisma();
  const userUseCase = new UserUseCase(userRepository);
  return new TasksUseCase(tasksRepository, projectUseCase, userUseCase);
};
