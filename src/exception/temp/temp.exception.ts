import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../exception.base";
import { TempExceptionCodeEnum } from "./temp.exception.enum";

export class TempException extends BaseException {
  constructor() {
      super(TempExceptionCodeEnum.TempException, HttpStatus.NOT_FOUND);
  }
}