import TasksController from "@/app/controllers/tasksController";
import { authMiddleware } from "@/infra/middlewares/authMiddleware";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
import { makeTasksUseCase } from "../factories/tasksFactory";
const tasksController = new TasksController(makeTasksUseCase());
export const TasksRoutes = (router: Router): void => {
  const prefix = "/tasks";
  router.post(
    prefix + "/",
    authMiddleware,
    adaptRoute(tasksController, "create")
  );
};
