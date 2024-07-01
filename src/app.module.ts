import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NoteMoudle } from './notes/notes.module';
import { LoggerMiddleWare } from './middleware/logger.middleware';
import { GuardModule } from './guards/guards.module';
// import { InterceptorModule } from './interceptors/interceptor.module';


@Module({
  imports: [NoteMoudle,GuardModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(){
    console.log('app module started')
  }
  // clased based module widdleware only for /note/reihufrf url
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('note');
  }
}
