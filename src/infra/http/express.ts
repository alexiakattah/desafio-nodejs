import { ProjectRoutes } from "@/main/routes/project.routes";
import { TasksRoutes } from "@/main/routes/tasks.routes";
import { UserRoutes } from "@/main/routes/user.routes";
import cors from "cors";
import express from "express";
import HttpServer from "./server";

export default class ExpressAdapter extends HttpServer {
  app: any;

  constructor() {
    super();
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    UserRoutes(this.app);
    ProjectRoutes(this.app);
    TasksRoutes(this.app);
  }

  listen(port: number, callback: Function): void {
    this.app.listen(port, callback);
  }
}
