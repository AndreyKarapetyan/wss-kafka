import { Injectable, ExecutionContext, CallHandler, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class KafkaLoggingInterceptor implements NestInterceptor {
  private logger = new Logger(KafkaLoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    this.logger.verbose(`KAFKA EVENT:\n ${JSON.stringify(request, undefined, 2)}`);
    return next.handle();
  }
}