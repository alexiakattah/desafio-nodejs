import setupSwagger from "@/main/config/swagger";
import express, { Application } from "express";
export const setup = (): Application => {
  const app = express();

  app.use(express.json());
  setupSwagger(app);
  return app;
};
