import { Module } from '@nestjs/common';
import { NoteMoudle } from './notes/notes.module';


@Module({
  imports: [NoteMoudle],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log('app module started')
  }
}
