import { notFound } from "@/app/helpers/httpHelper";
import { HttpRequest } from "@/infra/http/httpAdapter";
import { errorMiddleware } from "@/infra/middlewares/errorMiddleware";
import { Request, Response } from "express";

export const adaptRoute = (controller: any, method: any) => {
  return async (req: Request, res: Response) => {
    if (typeof controller[method] !== "function") {
      notFound(`Method ${method} not found on controller ${controller}`);
    }
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller[method](httpRequest);
    console.log(
      "🚀 ~ file: adapterRoute.ts:15 ~ return ~ httpResponse:",
      httpResponse
    );
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse.body);
    } else errorMiddleware(httpResponse, req, res);
  };
};
