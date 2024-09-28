import { useQuery } from "@tanstack/react-query";
import ProductsApi from "../../api/products";
import { FirestoreTransformer } from "../../utils/transformData";
import { IProduct } from "../../types/product";

interface IProductWithDate extends IProduct {
  createdAt: string
}

export function useProducts() {
  return useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await ProductsApi.getAll();
      const transformedData: IProductWithDate[] = FirestoreTransformer.transformFirebaseData(
        response.data.documents
      );
      return transformedData.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    },
  });
}
