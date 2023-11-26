import { Status } from "@/domain/entities/tasks";
import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
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
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}
