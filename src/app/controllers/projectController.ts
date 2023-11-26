import { HttpRequest, HttpResponse } from "@/infra/http/httpAdapter";
import ProjectUseCase from "../usecases/projectUseCase";

export default class ProjectController {
  constructor(private projectUseCase: ProjectUseCase) {
    this.projectUseCase = projectUseCase;
  }

  public async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, description } = httpRequest.body;
      const { user_id } = httpRequest;

      if (!name || !description)
        return {
          status: 400,
          message: "Missing name or description",
        };

      const project = await this.projectUseCase.create({
        name,
        description,
        members: [user_id!],
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
  async addMember(req: HttpRequest): Promise<HttpResponse> {
    const { projectId, memberId } = req.body;
    const currentUserId = req.user_id;
    if (!projectId || !memberId)
      return { status: 400, message: "Missing projectId or memberId" };

    await this.projectUseCase.update(projectId, currentUserId!, memberId);

    return { status: 200, body: "Member added successfully" };
  }
}
