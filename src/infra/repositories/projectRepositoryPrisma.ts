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
  public async findById(id: string): Promise<Project | null> {
    const result = await prisma.project.findUnique({
      where: { id },
      include: {
        members: true,
      },
    });
    if (!result) return null;
    return {
      ...result,
      members: result.members.map((member) => member.id), // Add missing members property
    };
  }
  public async update(project: Project): Promise<Project> {
    const result = await prisma.project.update({
      where: { id: project.id },
      data: {
        name: project.name,
        description: project.description,
        members: {
          connect: project.members.map((member) => ({ id: member })),
        },
      },
      include: {
        members: true,
      },
    });
    return {
      ...result,
      members: result.members.map((member) => member.id), // Add missing members property
    };
  }
}

export default ProjectRepositoryPrisma;
