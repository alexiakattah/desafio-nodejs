import Project from "@/domain/entities/project";

abstract class ProjectRepository {
  public abstract create(project: Project): Promise<Project>;
}

export default ProjectRepository;
