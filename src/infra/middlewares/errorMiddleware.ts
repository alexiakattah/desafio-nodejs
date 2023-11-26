import HttpError from "@/app/errors/httpError";
import { Request, Response } from "express";

export function errorMiddleware(err: HttpError, req: Request, res: Response) {
  const status: number = err.status ?? 500;
  const message: string = err.message ?? "Internal server error";

  res.status(status).json({
    status,
    message,
  });
}
