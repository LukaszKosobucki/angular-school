const cardNames = [
  'name',
  'surname',
  'date',
  'ssn',
  'phoneNumber',
  'img',
  'email',
  'city',
  'street',
  'postcode',
  'country',
  'voivodeship',
] as const;

export type CardName = (typeof cardNames)[number];

export type Card = {
  [key in CardName]: string;
};

export const CARDS: Card[] = [
  {
    name: 'John',
    surname: 'aWick',
    date: '04/09/1939',
    ssn: '75020248851',
    phoneNumber: '212368742',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QLFyEN8YoegVo11AsV0yuZQ3KPoELAnQ-g&usqp=CAU',
    email: 'JohnWick@gmail.com',
    city: 'city',
    street: 'street',
    postcode: 'postcode',
    country: 'country',
    voivodeship: 'voivodeship',
  },
  {
    name: 'aJohn',
    surname: 'vWick',
    date: '5/15/2023',
    ssn: '63011566646',
    phoneNumber: '452974448',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QLFyEN8YoegVo11AsV0yuZQ3KPoELAnQ-g&usqp=CAU',
    email: 'JohnWick@gmail.com',
    city: 'city',
    street: 'street',
    postcode: 'postcode',
    country: 'country',
    voivodeship: 'voivodeship',
  },
  {
    name: 'nJohn',
    surname: 'bWick',
    date: '2/9/1420',
    ssn: '49010584843',
    phoneNumber: '211481599',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QLFyEN8YoegVo11AsV0yuZQ3KPoELAnQ-g&usqp=CAU',
    email: 'JohnWick@gmail.com',
    city: 'city',
    street: 'street',
    postcode: 'postcode',
    country: 'country',
    voivodeship: 'voivodeship',
  },
  {
    name: 'bJohn',
    surname: 'Wick',
    date: '1/9/1990',
    ssn: '81082131699',
    phoneNumber: '515783370',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QLFyEN8YoegVo11AsV0yuZQ3KPoELAnQ-g&usqp=CAU',
    email: 'JohnWick@gmail.com',
    city: 'city',
    street: 'street',
    postcode: 'postcode',
    country: 'country',
    voivodeship: 'voivodeship',
  },
];
