import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { BaseException } from "./exception.base";
import { ExceptionCodeEnum } from "./exception.enum";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    
    const res = exception instanceof BaseException ? exception : new BaseException(ExceptionCodeEnum.UnknownException, exception.getStatus());
    
    res.path = request.url;
    
    response.status(res.statusCode).json({
      statusCode: res.statusCode,
      errorCode: res.errorCode,
      path: res.path,
    });
  }
}