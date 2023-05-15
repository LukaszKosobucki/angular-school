export type FormInput = {
  text: string;
  id: string;
  type: 'text' | 'number' | 'date';
};

export const FORMINPUTLIST: FormInput[] = [
  {
    text: 'name',
    id: 'name',
    type: 'text',
  },
  {
    text: 'surname',
    id: 'surname',
    type: 'text',
  },
  {
    text: 'date of birth',
    id: 'date',
    type: 'text',
  },
  {
    text: 'ssn',
    id: 'ssn',
    type: 'text',
  },
  {
    text: 'Phone number',
    id: 'phoneNumber',
    type: 'text',
  },
  {
    text: 'img adress',
    id: 'img',
    type: 'text',
  },
  {
    text: 'email',
    id: 'email',
    type: 'text',
  },
  {
    text: 'city',
    id: 'city',
    type: 'text',
  },
  {
    text: 'street',
    id: 'street',
    type: 'text',
  },
  {
    text: 'postcode',
    id: 'postcode',
    type: 'text',
  },
  {
    text: 'country',
    id: 'country',
    type: 'text',
  },
  {
    text: 'voivodeship',
    id: 'voivodeship',
    type: 'text',
  },
];
