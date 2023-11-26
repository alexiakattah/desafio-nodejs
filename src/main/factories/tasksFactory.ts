import ProjectUseCase from "@/app/usecases/projectUseCase";
import TasksRepositoryPrisma from "@/infra/repositories/tasksRepositoryPrisma";

export const makeTasksUseCase = () => {
  const tasksRepository = new TasksRepositoryPrisma();
  return new ProjectUseCase(tasksRepository);
};
