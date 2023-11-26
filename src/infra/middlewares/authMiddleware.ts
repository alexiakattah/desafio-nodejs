import HttpError from "@/app/errors/httpError";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
interface IPayload {
  name: string;
  email: string;
  id: string;
}
export function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  if (!authorization) {
    throw new HttpError(401, "Token Missing");
  }
  try {
    const [, token] = authorization.split(" ");
    const secretKey = process.env.TOKEN_SECRET;
    if (!secretKey) {
      throw new HttpError(498, "TOKEN_SECRET not found");
    }

    const { name, id, email } = jwt.verify(token, secretKey) as IPayload;

    request.user_id = id;
    request.name = name;
    request.email = email;

    next();
  } catch (error) {
    throw new HttpError(401, "Token expired");
  }
}
