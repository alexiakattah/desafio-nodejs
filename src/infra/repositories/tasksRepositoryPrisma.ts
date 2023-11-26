import TasksRepository from "@/app/repositories/tasksRepository";
import Tasks from "@/domain/entities/tasks";
import { prisma } from "../prisma/prismaClient";

class TasksRepositoryPrisma implements TasksRepository {
  async create(task: Tasks): Promise<Tasks> {
    const result = await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        status: task.status,
        projectId: task.projectId,
        members: task.members.map((member: string) => ({
          id: member,
        })),
        tags: {
          connect: task.tags.map((tag: string) => ({
            id: tag,
          })),
        },
      },
    });
    return result;
  }
}

export default TasksRepositoryPrisma;
