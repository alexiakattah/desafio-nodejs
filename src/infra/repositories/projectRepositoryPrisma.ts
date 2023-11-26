import ProjectRepository from "@/app/repositories/projectRepository";
import { prisma } from "../prisma/prismaClient";

class ProjectRepositoryPrisma implements ProjectRepository {
  public async create(project: any): Promise<any> {
    const result = await prisma.project.create({
      data: {
        name: project.name,
        description: project.description,
        members: project.members,
      },
    });
    return result;
  }
}

export default ProjectRepositoryPrisma;
