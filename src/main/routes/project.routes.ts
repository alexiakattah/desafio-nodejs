import ProjectController from "@/app/controllers/projectController";
import { authMiddleware } from "@/infra/middlewares/authMiddleware";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
import { makeProjectUseCase } from "../factories/projectFactory";
const projectController = new ProjectController(makeProjectUseCase());
export const ProjectRoutes = (router: Router): void => {
  router.post(
    "/create",
    authMiddleware,
    adaptRoute(projectController, "create")
  );
};
