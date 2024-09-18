import { useQuery } from "@tanstack/react-query";
import ProductsApi from "../../api/products";
import { FirestoreTransformer } from "../../utils/transformData";

export function useProducts() {
  return useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: () =>
      ProductsApi.getAll().then((response) =>
        FirestoreTransformer.transformFirebaseData(response.data.documents)
      ),
  });
}
