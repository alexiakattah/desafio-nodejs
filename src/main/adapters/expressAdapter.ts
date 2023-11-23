import { NextFunction, Request, Response } from "express";

interface IRequest {
  body: Request["body"];
  params: Request["params"];
  query: Request["query"];
}

interface IResponse {
  statusCode: number;
  body: { [key: string]: <T>(data: T) => T };
}

interface Route {
  (request: IRequest, response: IResponse, next: NextFunction): Promise<void>;
}

class ExpressAdapter {
  static adapt(route: Route) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const request: IRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      };

      const response: IResponse = {
        statusCode: 200,
        body: {},
      };

      try {
        await route(request, response, next);
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ExpressAdapter;
