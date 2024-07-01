import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateNoteDto } from '../Notes2.dto';

@Injectable()
export class NotePipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata):Promise<any> {
   
    // create transfromer
    const object = plainToInstance(CreateNoteDto, value);

    // validation
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(`Validation failed : `, JSON.stringify(errors));
    }
    return value;
  }

  
}