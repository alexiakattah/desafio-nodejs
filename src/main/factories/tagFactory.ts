import TagUseCase from "@/app/usecases/tagUseCase";
import TagRepositoryPrisma from "@/infra/repositories/tagRepositoryPrisma";

export const makeTagUseCase = () => {
  const tagRepository = new TagRepositoryPrisma();
  return new TagUseCase(tagRepository);
};
