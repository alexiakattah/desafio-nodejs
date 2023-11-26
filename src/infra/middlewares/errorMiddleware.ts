import HttpError from "@/app/errors/httpError";
import { Request, Response } from "express";

export function errorMiddleware(err: HttpError, req: Request, res: Response) {
  console.log(
    "🚀 ~ file: errorMiddleware.ts:6 ~ errorMiddleware ~ status:",
    err
  );
  const status: number = err.status ?? 500;
  const message: string = err.message ?? "Internal server error";

  res.status(status).json({
    status,
    message,
  });
}
