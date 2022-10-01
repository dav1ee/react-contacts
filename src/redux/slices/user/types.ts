export type UserSliceState = UserType & { isAuth: boolean };

export type UserType = {
  name: string | null;
  password: string | null;
};
