import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
import TasksUseCase from "../usecases/tasksUseCase";

export default class TasksController {
  constructor(private tasksUseCase: TasksUseCase) {
    this.tasksUseCase = tasksUseCase;
  }

  public async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, description, members } = httpRequest.body;
      if (!name || !description)
        return {
          status: 400,
          message: "name or description",
        };

      const project = await this.tasksUseCase.create({
        name,
        description,
        members: members ? members : [],
      });
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
