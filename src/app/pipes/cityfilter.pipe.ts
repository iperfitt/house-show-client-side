import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter',
  pure: false
})
export class CityfilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.eventAddress.city.indexOf(filter.city) !== -1);
}

}
