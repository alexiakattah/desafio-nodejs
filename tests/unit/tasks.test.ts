import TasksController from "../../src/app/controllers/tasksController";
import TasksUseCase from "../../src/app/usecases/tasksUseCase";
import { Status } from "../../src/domain/entities/tasks";

describe("TasksController", () => {
  let tasksController: TasksController;
  let mockTasksUseCase: jest.Mocked<TasksUseCase>;

  beforeEach(() => {
    mockTasksUseCase = {
      create: jest.fn(),
      update: jest.fn(),
    } as any;
    tasksController = new TasksController(mockTasksUseCase);
  });
  it("should update a task", async () => {
    const httpRequest = {
      body: {
        title: "Updated Task",
        description: "This is an updated task",
        members: ["1"],
        tags: ["tag1", "tag2"],
        status: Status.COMPLETED,
        projectId: "1",
      },
      params: {
        id: "1",
      },
      user_id: "1",
    };

    mockTasksUseCase.update.mockResolvedValue({
      ...httpRequest.body,
      id: httpRequest.params.id,
    });

    const httpResponse = await tasksController.update(httpRequest);

    expect(httpResponse.status).toBe(200);
    expect(httpResponse.body).toEqual({
      ...httpRequest.body,
      id: httpRequest.params.id,
    });
  });

  it("should create a task", async () => {
    const httpRequest = {
      body: {
        title: "Test Task",
        description: "This is a test task",
        members: ["1"],
        tags: ["tag1", "tag2"],
        projectId: "1",
      },
      user_id: "1",
    };

    mockTasksUseCase.create.mockResolvedValue({
      id: "1",
      title: httpRequest.body.title,
      description: httpRequest.body.description,
      members: httpRequest.body.members,
      tags: httpRequest.body.tags,
      projectId: httpRequest.body.projectId,
      status: Status.PENDING,
    });

    const httpResponse = await tasksController.create(httpRequest);

    expect(httpResponse.status).toBe(201);
    expect(httpResponse.body).toEqual({
      id: "1",
      title: httpRequest.body.title,
      description: httpRequest.body.description,
      members: httpRequest.body.members,
      tags: httpRequest.body.tags,
      projectId: httpRequest.body.projectId,
      status: Status.PENDING,
    });
  });

  it("should return an error if title or description is missing", async () => {
    const httpRequest = {
      body: {},
      user_id: "1",
    };

    const httpResponse = await tasksController.create(httpRequest);
    console.log(
      "🚀 ~ file: tasks.test.ts:112 ~ it ~ httpResponse:",
      httpResponse
    );

    expect(httpResponse.status).toBe(400);
    expect(httpResponse.message).toBe("name or description");
  });
});
