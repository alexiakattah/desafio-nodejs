import Tasks from "@/domain/entities/tasks";
import TasksRepository from "../repositories/tasksRepository";

class TasksUseCase {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async getTasks(): Promise<Tasks[]> {
    return this.tasksRepository.getTaskByProjectId();
  }
}
export default TasksUseCase;
