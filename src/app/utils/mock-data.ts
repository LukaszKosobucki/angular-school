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
    date: '01/09/1939',
    ssn: '74041042657',
    phoneNumber: '213769420',
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
    date: '01/09/1939',
    ssn: '74041042657',
    phoneNumber: '213769420',
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
    date: '01/09/1939',
    ssn: '74041042657',
    phoneNumber: '213769420',
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
    date: '01/09/1939',
    ssn: '74041042657',
    phoneNumber: '213769420',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QLFyEN8YoegVo11AsV0yuZQ3KPoELAnQ-g&usqp=CAU',
    email: 'JohnWick@gmail.com',
    city: 'city',
    street: 'street',
    postcode: 'postcode',
    country: 'country',
    voivodeship: 'voivodeship',
  },
];
