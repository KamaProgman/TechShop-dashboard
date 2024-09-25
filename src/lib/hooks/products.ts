import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProductsApi from "../../api/products";
import { FirestoreTransformer } from "../../utils/transformData";
import { IProduct } from "../../types/product";

export function useProducts() {
  return useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await ProductsApi.getAll();
      const transformedData = FirestoreTransformer.transformFirebaseData(
        response.data.documents
      );
      return transformedData;
    },
  });
}
