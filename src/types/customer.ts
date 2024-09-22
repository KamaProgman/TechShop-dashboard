import { IdType } from ".";

interface IUserCartItem {
  itemId: IdType;
  itemPrice: string;
  quantity: number;
}

export interface IUserCart {
  items: IUserCartItem[];
  totalPrice: string;
}

export interface IUserOrder {
  orderDate: Date;
  price: string;
  items: IUserCartItem;
  orderId: IdType;
}

export type UserGender = "Мужской" | "Женский" | "";

export interface IUserPatchForm {
  id: string;
  surname?: string;
  name: string;
  middlename?: string;
  password: string;
  birthdate?: string;
  gender?: UserGender;
  email: string;
  phone?: string;
}

export interface IUser {
  id: IdType;
  cart?: IUserCart;
  email: string;
  password: string;
  orders?: IUserOrder[];
  name: string;
  surname?: string;
  middlename?: string;
  birthdate?: string;
  phone?: string;
  gender?: "Мужской" | "Женский" | undefined;
}
