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
  }

  listen(port: number, callback: Function): void {
    this.app.listen(port, callback);
  }
}
