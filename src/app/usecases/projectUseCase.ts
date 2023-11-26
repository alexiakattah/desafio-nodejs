import Project from "@/domain/entities/project";
import ProjectRepository from "../repositories/projectRepository";

class ProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  public async create(project: Project): Promise<Project> {
    const newProject = await this.projectRepository.create(project);

    return newProject;
  }
}

export default ProjectUseCase;
