import { notFound } from "@/app/helpers/httpHelper";
import { HttpRequest } from "@/infra/http/httpAdapter";
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
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
