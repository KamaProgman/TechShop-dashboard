import { useQuery } from "@tanstack/react-query";
import OrdersApi from "../../api/orders";
import { FirestoreTransformer } from "../../utils/transformData";
import { IdType } from "../../types";
import { IOrder } from "../../types/order";

export function useOrders() {
  return useQuery<any, Error>({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await OrdersApi.getAll();
      const transformedData: IOrder[] = FirestoreTransformer.transformFirebaseData(
        response.data.documents
      );
      return transformedData.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }
  });
}

export function useCustomerOrders(UserId: IdType) {
  const res = useQuery<any, Error>({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await OrdersApi.getUserOrders(UserId);
      const transformedData = FirestoreTransformer.transformFirebaseData(
        response.data.documents
      );
      return transformedData;
    }
  });

  return res;
}
