import ProjectController from "../src/app/controllers/projectController";
import ProjectUseCase from "../src/app/usecases/projectUseCase";

describe("ProjectController", () => {
  let projectController: ProjectController;
  let mockProjectUseCase: jest.Mocked<ProjectUseCase>;

  beforeEach(() => {
    mockProjectUseCase = {
      create: jest.fn(),
      // Add other methods as needed
    } as any;
    projectController = new ProjectController(mockProjectUseCase);
  });

  it("should return 400 if name or description is missing", async () => {
    const httpRequest = {
      body: {
        members: [],
      },
    };
    const httpResponse = await projectController.create(httpRequest);
    expect(httpResponse.status).toBe(400);
    expect(httpResponse.message).toBe("name or description");
  });

  it("should return 201 if project is created successfully", async () => {
    const httpRequest = {
      body: {
        name: "test",
        description: "test description",
        members: ["1"],
      },
    };
    const mockProject = {
      id: "1",
      name: "test",
      description: "test description",
      members: ["1"],
    };
    mockProjectUseCase.create.mockResolvedValue(mockProject);

    const httpResponse = await projectController.create(httpRequest);
    expect(httpResponse.status).toBe(201);
    expect(httpResponse.body).toEqual(mockProject);
  });

  it("should return error status and message if an error is thrown", async () => {
    const httpRequest = {
      body: {
        name: "test",
        description: "test description",
        members: [],
      },
    };
    const mockError = {
      status: 500,
      message: "Internal server error",
    };
    mockProjectUseCase.create.mockRejectedValue(mockError);

    const httpResponse = await projectController.create(httpRequest);
    expect(httpResponse.status).toBe(mockError.status);
    expect(httpResponse.message).toBe(mockError.message);
  });
});
