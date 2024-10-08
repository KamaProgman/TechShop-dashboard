import { useQuery } from "@tanstack/react-query";
import ProductsApi from "../../api/products";
import { FirestoreTransformer } from "../../utils/transformData";
import { IProduct } from "../../types/product";
import { IdType } from "../../types";

interface IProductWithDate extends IProduct {
  createdAt: string;
}

export function useProducts() {
  return useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await ProductsApi.getAll();
      const transformedData: IProductWithDate[] =
        FirestoreTransformer.transformFirebaseData(response.data.documents);
      return transformedData.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    },
  });
}

export function useProductById(id: IdType) {
  return useQuery<IProduct, Error>({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await ProductsApi.getById(id);
      const transformedData: IProduct = FirestoreTransformer.transformDocument(
        response.data
      );

      return transformedData;
    },
  });
}
