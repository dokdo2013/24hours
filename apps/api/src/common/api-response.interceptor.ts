import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponse } from './api-response.dto';

@Injectable()
export class ApiOutputInterceptor<T>
  implements NestInterceptor<T, CommonResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CommonResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const status = context.switchToHttp().getResponse().statusCode;

        return {
          status,
          message: 'success',
          data,
        };
      }),
    );
  }
}
