import { IdType } from "../types";
import { IOrder } from "../types/order";
import makeRequest from "./makeRequest";

const url = "/orders";

class OrdersApi {
  getAll() {
    return makeRequest({ url });
  }

  updateOrderStatus(id: IdType, data: IOrder) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "PATCH",
      data,
    });
  }

  async getUserOrders(userId: IdType) {
    const res = await makeRequest({
      url,
      method: "POST",
      data: {
        structuredQuery: {
          from: [{ collectionId: "orders" }],
          where: {
            fieldFilter: {
              field: { fieldPath: "user.id" },
              op: "EQUAL",
              value: { stringValue: userId },
            },
          },
        },
      },
    });

    console.log(res);

    return res;
  }
}

export default new OrdersApi();
