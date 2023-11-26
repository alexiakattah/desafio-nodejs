import Project from "@/domain/entities/project";
import HttpError from "../errors/httpError";
import ProjectRepository from "../repositories/projectRepository";

class ProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  public async create(project: Project): Promise<Project> {
    console.log(
      "🚀 ~ file: projectUseCase.ts:9 ~ ProjectUseCase ~ create ~ project:",
      project.members
    );
    const newProject = await this.projectRepository.create(project);

    return newProject;
  }
  public async findProjectById(id: string): Promise<Project | null> {
    const project = await this.projectRepository.findById(id);

    return project;
  }
  public async update(
    projectId: string,
    user_id: string,
    memberId: string
  ): Promise<Project> {
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new HttpError(404, "Project not found");
    }

    if (project.members[0] !== user_id) {
      throw new HttpError(403, "Only the project creator can add members");
    }

    if (project.members.includes(memberId)) {
      throw new HttpError(400, "Member already added");
    }

    project.members.push(memberId);
    const updatedProject = await this.projectRepository.update(project);

    return updatedProject;
  }
}

export default ProjectUseCase;
