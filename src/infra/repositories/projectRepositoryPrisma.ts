import ProjectRepository from "@/app/repositories/projectRepository";
import Project from "@/domain/entities/project";
import { prisma } from "../prisma/prismaClient";

class ProjectRepositoryPrisma implements ProjectRepository {
  public async create(project: Project): Promise<Project> {
    const result = await prisma.project.create({
      data: {
        name: project.name,
        description: project.description,
        members: {
          connect: project.members.map((member) => ({ id: member })),
        },
      },
    });
    return {
      ...result,
      members: project.members, // Add missing members property
    };
  }
}

export default ProjectRepositoryPrisma;
