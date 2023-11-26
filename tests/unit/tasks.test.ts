import HttpError from "../../src/app/errors/httpError";
import TasksRepository from "../../src/app/repositories/tasksRepository";
import ProjectUseCase from "../../src/app/usecases/projectUseCase";
import TagUseCase from "../../src/app/usecases/tagUseCase";
import TasksUseCase from "../../src/app/usecases/tasksUseCase";
import UserUseCase from "../../src/app/usecases/userUseCase";
import Tasks from "../../src/domain/entities/tasks";

describe("TasksUseCase", () => {
  let tasksUseCase: TasksUseCase;
  let mockTasksRepository: jest.Mocked<TasksRepository>;
  let mockProjectUseCase: jest.Mocked<ProjectUseCase>;
  let mockUserUseCase: jest.Mocked<UserUseCase>;
  let mockTagUseCase: jest.Mocked<TagUseCase>;

  beforeEach(() => {
    mockTasksRepository = {
      create: jest.fn(),
      // Add other methods as needed
    } as any;
    mockProjectUseCase = {
      findProjectById: jest.fn(),
      // Add other methods as needed
    } as any;
    mockUserUseCase = {
      findUserById: jest.fn(),
      // Add other methods as needed
    } as any;
    mockTagUseCase = {
      create: jest.fn(),
      // Add other methods as needed
    } as any;
    tasksUseCase = new TasksUseCase(
      mockTasksRepository,
      mockProjectUseCase,
      mockUserUseCase,
      mockTagUseCase
    );
  });

  it("should throw an error if project is not found", async () => {
    const tasks: Tasks = {
      title: "test",
      description: "test description",
      status: "test",
      projectId: "1",
      members: ["1"],
      tags: ["1"],
    };
    const userId = "1";
    mockProjectUseCase.findProjectById.mockResolvedValue(null);

    await expect(tasksUseCase.create(tasks, userId)).rejects.toThrow(
      new HttpError(404, "Project not found")
    );
  });
});
