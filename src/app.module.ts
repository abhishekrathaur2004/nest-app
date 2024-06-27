import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NoteMoudle } from './notes/notes.module';
import { LoggerMiddleWare } from './middleware/logger.middleware';


@Module({
  imports: [NoteMoudle],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(){
    console.log('app module started')
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('note');
  }
}
