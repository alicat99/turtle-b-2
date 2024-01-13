import { HttpException } from "@nestjs/common";

//https://velog.io/@cataiden/nestjs-custom-exception

export class BaseException extends HttpException {
  constructor(errorCode: string, statusCode: number) {
      super(errorCode, statusCode);
      this.errorCode = errorCode;
      this.statusCode = statusCode;
  }

  errorCode: string;

  statusCode: number;

  path: string;
}
