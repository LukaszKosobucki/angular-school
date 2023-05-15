import { Pipe, PipeTransform } from '@angular/core';
import { Card, CardName } from '../utils/mock-data';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: Card[], order = true, param: 'name' | 'surname' | 'date' | 'ssn' = 'ssn'): Card[] {
    return value.sort((a, b) => {
      if (order) {
        if (param === 'date') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return a[param as CardName].localeCompare(b[param as CardName]);
      } else {
        if (param === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return b[param as CardName].localeCompare(a[param as CardName]);
      }
      return 0;
    });
  }
}
