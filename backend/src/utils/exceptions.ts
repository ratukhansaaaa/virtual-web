import { ContentfulStatusCode } from "hono/utils/http-status";


export abstract class HttpException extends Error {
  abstract readonly statusCode: ContentfulStatusCode;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}


export class BadRequestException extends HttpException {
  readonly statusCode = 400;
}


export class UnauthorizedException extends HttpException {
  readonly statusCode = 401;
}


export class NotFoundException extends HttpException {
  readonly statusCode = 404;
}


export class ConflictException extends HttpException {
  readonly statusCode = 409;
}


export class InternalServerException extends HttpException {
  readonly statusCode = 500;
}
