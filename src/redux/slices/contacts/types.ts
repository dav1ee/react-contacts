export type ContactsSliceState = {
  items: ContactType[];
  totalCount: number;
};

export type ContactType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
};
