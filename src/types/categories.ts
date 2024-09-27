import { IdType } from ".";

export interface ICategoryChild {
  id: IdType;
  title: string;
  parent: string;
}

export interface ICategory {
  id: IdType;
  title: string;
  subcategories: ICategoryChild[];
  icon: string;
}

export interface IProductCategory {
  id: IdType;
  title: string;
}
