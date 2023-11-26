import ProjectController from "@/app/controllers/projectController";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
import { makeProjectUseCase } from "../factories/projectFactory";
const projectController = new ProjectController(makeProjectUseCase());
export const ProjectRoutes = (router: Router): void => {
  router.post("/create", adaptRoute(projectController, "create"));
};
