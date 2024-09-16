import { useQuery } from "@tanstack/react-query";
import OrdersApi from "../../api/orders"
import { FirestoreTransformer } from "../../utils/transformData";

export function useOrders() {
  return useQuery<any, Error>({
    queryKey: ["orders"],
    queryFn: () => OrdersApi.getAll().then((response) => FirestoreTransformer.transformFirebaseData(response.data.documents))
  })
}