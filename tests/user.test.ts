import UserUseCase from "../src/app/usecases/userUseCase";

describe("User", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user if the user does not exist", async () => {
    const mockUserRepository = {
      create: jest.fn(),
      findUserByEmail: jest.fn().mockResolvedValue(null),
      findUserById: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
    };
    const user = new UserUseCase(mockUserRepository);
    const newUser = {
      name: "test",
      email: "test@test.com",
      password: "password",
    };
    await user.create(newUser);
    expect(mockUserRepository.findUserByEmail).toHaveBeenCalledWith(
      newUser.email
    );
    expect(mockUserRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        name: newUser.name,
        email: newUser.email,
        password: expect.any(String),
      })
    );
    expect(mockUserRepository.create).toHaveBeenCalledWith(
      expect.not.objectContaining({
        password: newUser.password,
      })
    );
  });
  it("should throw an error if the user already exists", async () => {
    const mockUserRepository = {
      create: jest.fn(),
      findUserByEmail: jest.fn().mockResolvedValue({}),
      findUserById: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
    };
    const user = new UserUseCase(mockUserRepository);
    const newUser = {
      name: "test",
      email: "test@test.com",
      password: "password",
    };
    await expect(user.create(newUser)).rejects.toThrow("User already exists");
  });
});
