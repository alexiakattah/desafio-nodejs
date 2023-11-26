import Tasks from "@/domain/entities/tasks";
import HttpError from "../errors/httpError";
import TasksRepository from "../repositories/tasksRepository";
import ProjectUseCase from "./projectUseCase";
import UserUseCase from "./userUseCase";

class TasksUseCase {
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly projectUseCase: ProjectUseCase,
    private readonly userUseCase: UserUseCase
  ) // private readonly tagUseCase: TagUseCase
  {}

  async create(tasks: Tasks, userId: string): Promise<Tasks> {
    const project = await this.projectUseCase.findProjectById(tasks.projectId);

    if (!project) {
      throw new HttpError(404, "Project not found");
    }
    if (!project.members.includes(userId)) {
      throw new HttpError(403, "You are not a member of this project");
    }

    if (!tasks.members) {
      throw new HttpError(400, "Members are required");
    }
    if (!tasks.title) {
      throw new HttpError(400, "Name is required");
    }
    if (!tasks.projectId) {
      throw new HttpError(400, "ProjectId is required");
    }

    if (!tasks.description) {
      throw new HttpError(400, "Description is required");
    }
    if (!tasks.status) {
      throw new HttpError(400, "Status is required");
    }

    for (const member of tasks.members) {
      const findByMember = this.userUseCase.findUserById(member);
      if (!findByMember) {
        throw new HttpError(404, "Member not found");
      }
      tasks.members.push(member);
    }
    for (const tag of tasks.tags) {
      if (!tag) {
        throw new HttpError(400, "Tag is required");
      }
    }
    const newTask = {
      ...tasks,
      members: tasks.members,
      tags: tasks.tags,
      id: crypto.randomUUID().toString(),
    };
    // const tags = [];
    // for (const tag of tasks.tags) {
    //   const createTag = await this.tagUseCase.create(tag, newTask.id);

    //   tags.push(createTag.id);
    // }

    await this.tasksRepository.create(newTask);

    return newTask;
  }
}
export default TasksUseCase;
