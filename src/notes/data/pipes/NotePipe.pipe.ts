

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class NotePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof(value.title) === 'string'){
        return value;
    }
    else throw new BadRequestException('Validation Failed : expected only string');
  }
}
