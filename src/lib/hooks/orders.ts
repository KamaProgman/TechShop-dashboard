import { useQuery } from "@tanstack/react-query";
import OrdersApi from "../../api/orders";
import { FirestoreTransformer } from "../../utils/transformData";
import { IdType } from "../../types";

export function useOrders() {
  return useQuery<any, Error>({
    queryKey: ["orders"],
    queryFn: () =>
      OrdersApi.getAll().then((response) =>
        FirestoreTransformer.transformFirebaseData(response.data.documents)
      ),
  });
}

export function useCustomerOrders(UserId: IdType) {
  const res = useQuery<any, Error>({
    queryKey: ["orders"],
    queryFn: () =>
      OrdersApi.getUserOrders(UserId).then((response) =>
        FirestoreTransformer.transformFirebaseData(response.data.documents)
      ),
  });

  return res;
}
