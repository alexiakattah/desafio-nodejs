import Tag from "@/domain/entities/tag";
import TagRepository from "../repositories/tagRepository";

class TagUseCase {
  constructor(private tagRepository: TagRepository) {}

  async create(tag: string, taskId: string): Promise<Tag> {
    return await this.tagRepository.create(tag, taskId);
  }
}

export default TagUseCase;
