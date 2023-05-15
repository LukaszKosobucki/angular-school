import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../utils/mock-data';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(value: Card[], surname = '', phoneNumber = '', ssn = '', date: Date = new Date(0)): Card[] {
    console.log(date);
    if (date.toString() === 'Invalid Date') {
      date = new Date(0);
    }
    return value.filter(
      (card) =>
        card.surname.toLowerCase().includes(surname.toLowerCase()) &&
        card.ssn.startsWith(ssn) &&
        (phoneNumber !== '' ? card.phoneNumber === phoneNumber : card) &&
        (date.getTime() !== new Date(0).getTime() ? card.date === date.toLocaleDateString() : card),
    );
  }
}
