import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
