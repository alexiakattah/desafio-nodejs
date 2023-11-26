import { HttpResponse } from "@/infra/http/httpAdapter";
import { ServerError } from "../errors/serverError";

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error.message,
});

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data,
});

export const serverError = (reason: string): HttpResponse => ({
  status: 500,
  body: new ServerError(reason),
});

export const unauthorized = (reason: string): HttpResponse => ({
  status: 401,
  body: reason,
});

export const forbidden = (reason: string): HttpResponse => ({
  status: 403,
  body: reason,
});

export const notFound = (reason: string): HttpResponse => ({
  status: 404,
  body: reason,
});
