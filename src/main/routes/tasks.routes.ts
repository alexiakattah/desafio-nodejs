import TasksController from "@/app/controllers/tasksController";
import { authMiddleware } from "@/infra/middlewares/authMiddleware";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
import { makeTasksUseCase } from "../factories/tasksFactory";
const tasksController = new TasksController(makeTasksUseCase());
export const TasksRoutes = (router: Router): void => {
  router.post("/create", authMiddleware, adaptRoute(tasksController, "create"));
};
