// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
// } from '@nestjs/common';
// import { Request } from 'express';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class Interceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     console.log('Before...');

//     // manipulating response
//     const now = Date.now();
//     return next.handle().pipe(
//       map((data) => {
//         console.log(`After... ${Date.now() - now}ms`);
//         return data;
//       }),
//     );
//     // manipulating request
//     // const cxt = context.switchToHttp();
//     // const req = cxt.getRequest<Request>();
//     // req.body['key'] = 'Ky krr rhe ho akash tmkc';
//     // return next.handle();
//   }
// }
