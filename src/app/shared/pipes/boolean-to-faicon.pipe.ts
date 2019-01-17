import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToFaicon'
})
export class BooleanToFaiconPipe implements PipeTransform {

  transform(value: boolean): string {
    // console.log('BooleanToFaiconPipe');
    return value ? 'fa fa-check' : 'fa fa-times';
  }
}
