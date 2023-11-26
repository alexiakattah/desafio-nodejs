import { ProjectRoutes } from "@/main/routes/project.routes";
import { UserRoutes } from "@/main/routes/user.routes";
import cors from "cors";
import express from "express";
import { errorMiddleware } from "../middlewares/errorMiddleware";
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
    this.app.use(errorMiddleware);
  }

  listen(port: number, callback: Function): void {
    this.app.listen(port, callback);
  }
}
