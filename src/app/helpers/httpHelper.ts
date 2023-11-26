import { HttpResponse } from "@/infra/http/httpAdapter";
import { ServerError } from "../errors/serverError";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(reason),
});

export const unauthorized = (reason: string): HttpResponse => ({
  statusCode: 401,
  body: reason,
});

export const forbidden = (reason: string): HttpResponse => ({
  statusCode: 403,
  body: reason,
});

export const notFound = (reason: string): HttpResponse => ({
  statusCode: 404,
  body: reason,
});
