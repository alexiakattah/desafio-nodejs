import TasksRepository from "@/app/repositories/tasksRepository";
import { $Enums } from "@prisma/client";

class TasksRepositoryPrisma implements TasksRepository {
  create(task: {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    status: $Enums.Status;
    projectId: string;
  }): Promise<{
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    status: $Enums.Status;
    projectId: string;
  }> {
    throw new Error("Method not implemented.");
  }
}

export default TasksRepositoryPrisma;
