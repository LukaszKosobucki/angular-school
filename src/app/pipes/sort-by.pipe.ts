import { Pipe, PipeTransform } from '@angular/core';
import { Card, CardName } from '../utils/mock-data';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: Card[], order = true, param: 'name' | 'surname' | 'date' | 'ssn' = 'ssn'): Card[] {
    return value.sort((a, b) => {
      if (order) {
        return a[param as CardName].localeCompare(b[param as CardName]);
      } else {
        return b[param as CardName].localeCompare(a[param as CardName]);
      }
      return 0;
    });
  }
}
