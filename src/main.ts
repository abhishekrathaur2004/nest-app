import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';

// created global middleware 
async function GlobalMiddleWare(req:Request , res:Response, next:NextFunction){
  // console.log(`Global Middlewafre`);
  next();  
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // applying global middleware
  app.use(GlobalMiddleWare);
  await app.listen(3001);
}

bootstrap();
