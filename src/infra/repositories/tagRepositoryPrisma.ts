import TagRepository from "@/app/repositories/tagRepository";
import Tag from "@/domain/entities/tag";
import { prisma } from "../prisma/prismaClient";

class TagRepositoryPrisma implements TagRepository {
  async create(tag: string, taskId: string): Promise<Tag> {
    const result = await prisma.tag.create({
      data: {
        title: tag,
        taskId: taskId,
      },
    });

    return result;
  }
}

export default TagRepositoryPrisma;
