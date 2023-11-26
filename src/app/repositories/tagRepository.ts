import Tag from "@/domain/entities/tag";

abstract class TagRepository {
  abstract create(tag: string, taskId: string): Promise<Tag>;
}

export default TagRepository;
