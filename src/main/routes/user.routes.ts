import { UserController } from "@/app/controllers/userController";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
import { makeUserUseCase } from "../factories/userFactory";
const userController = new UserController(makeUserUseCase());
export const UserRoutes = (router: Router): void => {
  router.post("/register", adaptRoute(userController, "register"));

  router.post("/login", adaptRoute(userController, "login"));
};
