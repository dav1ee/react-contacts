export type ContactsSliceState = {
  items: ContactType[];
  totalCount: number;
  status: Status;
  error: string;
};

export type ContactType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
