import { IdType } from ".";

export interface IProductCategory {
  id: IdType;
  title: string;
}

export interface IProductAttributes {
  color: string;
  specific?: string[];
}

export interface IProduct {
  id: IdType;
  category: IProductCategory;
  attributes: IProductAttributes;
  images_links: string[];
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export type ProductFormValues = {
  title: string;
  description: string;
  color: string;
  specific: string;
  category: string;
  image1: File[];
  image2: File[];
  image3: File[];
  price: number;
  quantity: number;
};

export interface ICartProduct extends IProduct {
  cartQuantity: number;
}
