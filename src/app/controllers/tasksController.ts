import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
import { Status } from "../../domain/entities/tasks";
import TasksUseCase from "../usecases/tasksUseCase";

export default class TasksController {
  constructor(private tasksUseCase: TasksUseCase) {
    this.tasksUseCase = tasksUseCase;
  }

  public async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { title, description, members, tags, projectId } = httpRequest.body;
      if (!title || !description)
        return {
          status: 400,
          message: "name or description",
        };

      const project = await this.tasksUseCase.create(
        {
          title,
          description,
          members: members ? members : [],
          tags,
          projectId,
          status: Status.PENDING,
        },
        httpRequest.user_id!
      );
      return {
        status: 201,
        body: project,
      };
    } catch (error: any) {
      console.log(
        "🚀 ~ file: tasksController.ts:35 ~ TasksController ~ create ~ error:",
        error
      );
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
  public async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { title, description, members, tags, status, projectId } =
        httpRequest.body;
      const { id } = httpRequest.params;
      const task = await this.tasksUseCase.update(
        {
          title,
          description,
          members,
          tags,
          status,
          projectId,
        },
        id,
        httpRequest.user_id!
      );
      return {
        status: 200,
        body: task,
      };
    } catch (error: any) {
      console.log(
        "🚀 ~ file: tasksController.ts:67 ~ TasksController ~ update ~ error:",
        error
      );
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}
