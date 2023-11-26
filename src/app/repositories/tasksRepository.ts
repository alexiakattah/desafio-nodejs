import { Tasks } from "@/domain/entities/tasks";

abstract class TasksRepository {
  abstract create(task: Tasks): Promise<Tasks>;
  abstract update(task: Tasks): Promise<Tasks>;
}

export default TasksRepository;
