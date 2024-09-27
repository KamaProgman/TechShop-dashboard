import { useQuery } from "@tanstack/react-query";
import CategoriesApi from "../../api/categories";
import { FirestoreTransformer } from "../../utils/transformData";
import { ICategory } from "../../types/categories";

export function useCategories() {
  return useQuery<ICategory[], Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await CategoriesApi.getAll();
      const transformedData = FirestoreTransformer.transformFirebaseData(
        response.data.documents
      );
      return transformedData;
    },
  });
}

export function getSubcategories(categories: ICategory[]) {
  const newArr: string[] = [];

  categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      newArr.push(subcategory.title);
    });
  });

  return newArr;
}
