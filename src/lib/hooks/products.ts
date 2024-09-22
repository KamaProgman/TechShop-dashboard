import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProductsApi from "../../api/products";
import { FirestoreTransformer } from "../../utils/transformData";
import { IProduct } from "../../types/product";

interface FirestoreResponse {
  documents: any[];
}

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

// Хук для обновления продукта по ID (useMutation)
export function useUpdateProduct({ id, data }: { id: string; data: IProduct }) {
  return useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      // const { id, ...data } = 
      const transformedData =
      FirestoreTransformer.transformFirebaseData(response);
      return transformedData;
      const response = await ProductsApi.updateProductById(id, data);
    },
  });
}

// Хук для удаления продукта по ID (useMutation)
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>(
    (id) => ProductsApi.deleteProductById(id),
    {
      // Инвалидация кэша после успешного удаления продукта
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
      },
    }
  );
}
