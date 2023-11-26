import ProjectController from "../../src/app/controllers/projectController";
import HttpError from "../../src/app/errors/httpError";
import ProjectRepository from "../../src/app/repositories/projectRepository";
import ProjectUseCase from "../../src/app/usecases/projectUseCase";
import Project from "../../src/domain/entities/project";

describe("ProjectController", () => {
  let projectController: ProjectController;
  let mockProjectUseCase: jest.Mocked<ProjectUseCase>;

  beforeEach(() => {
    mockProjectUseCase = {
      create: jest.fn(),
      update: jest.fn(),
    } as any;
    projectController = new ProjectController(mockProjectUseCase);
  });

  it("should create a project", async () => {
    const httpRequest = {
      body: {
        name: "Test Project",
        description: "This is a test project",
      },
      user_id: "1",
    };

    mockProjectUseCase.create.mockResolvedValue({
      id: "1",
      name: httpRequest.body.name,
      description: httpRequest.body.description,
      members: [httpRequest.user_id],
    });

    const httpResponse = await projectController.create(httpRequest);

    expect(httpResponse.status).toBe(201);
    expect(httpResponse.body).toEqual({
      id: "1",
      name: httpRequest.body.name,
      description: httpRequest.body.description,
      members: [httpRequest.user_id],
    });
  });

  it("should add a member to a project", async () => {
    const httpRequest = {
      body: {
        projectId: "1",
        memberId: "2",
      },
      user_id: "1",
    };

    mockProjectUseCase.update.mockResolvedValue({
      id: "1",
      name: "Test Project",
      description: "This is a test project",
      members: ["1", "2"],
    });

    const httpResponse = await projectController.addMember(httpRequest);

    expect(httpResponse.status).toBe(200);
    expect(httpResponse.body).toBe("Member added successfully");
  });
});

describe("ProjectUseCase", () => {
  let projectUseCase: ProjectUseCase;
  let mockProjectRepository: jest.Mocked<ProjectRepository>;

  beforeEach(() => {
    mockProjectRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
    } as any;
    projectUseCase = new ProjectUseCase(mockProjectRepository);
  });

  it("should create a project", async () => {
    const project: Project = {
      id: "1",
      name: "Test Project",
      description: "This is a test project",
      members: ["1"],
    };

    mockProjectRepository.create.mockResolvedValue(project);

    const newProject = await projectUseCase.create(project);

    expect(newProject).toEqual(project);
  });

  it("should find a project by id", async () => {
    const project: Project = {
      id: "1",
      name: "Test Project",
      description: "This is a test project",
      members: ["1"],
    };

    mockProjectRepository.findById.mockResolvedValue(project);

    const foundProject = await projectUseCase.findProjectById("1");

    expect(foundProject).toEqual(project);
  });

  it("should add a member to a project", async () => {
    const project: Project = {
      id: "1",
      name: "Test Project",
      description: "This is a test project",
      members: ["1"],
    };

    mockProjectRepository.findById.mockResolvedValue(project);
    mockProjectRepository.update.mockResolvedValue({
      ...project,
      members: ["1", "2"],
    });

    const updatedProject = await projectUseCase.update("1", "1", "2");

    expect(updatedProject.members).toContain("2");
  });

  it("should throw an error if the project is not found", async () => {
    mockProjectRepository.findById.mockResolvedValue(null);

    await expect(projectUseCase.update("1", "1", "2")).rejects.toThrow(
      new HttpError(404, "Project not found")
    );
  });
});
