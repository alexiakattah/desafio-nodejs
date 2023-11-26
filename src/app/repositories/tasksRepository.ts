import { Task } from "@prisma/client";

abstract class TasksRepository {
  abstract getAllTasks(): Promise<Task[]>;
  abstract getTaskById(id: number): Promise<Task>;
  abstract getTaskByProjectId(projectId: number): Promise<Task[]>;
  abstract create(task: Task): Promise<Task>;
  abstract update(id: number, task: Task): Promise<Task>;
  abstract delete(id: number): Promise<Task>;
}

export default TasksRepository;
