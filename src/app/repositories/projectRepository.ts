import Project from "@/domain/entities/project";

abstract class ProjectRepository {
  public abstract create(project: Project): Promise<Project>;
  public abstract findById(id: string): Promise<Project | null>;
  public abstract update(project: Project): Promise<Project>;
}

export default ProjectRepository;
