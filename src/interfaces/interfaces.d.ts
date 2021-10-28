export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
}

export type Operators = '+' | '-' | '/' | '*';
