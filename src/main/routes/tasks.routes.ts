import { authMiddleware } from "@/infra/middlewares/authMiddleware";
import { Router } from "express";
import { adaptRoute } from "../adapters/adapterRoute";
export const TasksRoutes = (router: Router): void => {
  router.post(
    "/create",
    authMiddleware,
    adaptRoute(projectController, "create")
  );
};
