import Tasks from "@/domain/entities/tasks";

abstract class TasksRepository {
  abstract create(task: Tasks): Promise<Tasks>;
}

export default TasksRepository;
