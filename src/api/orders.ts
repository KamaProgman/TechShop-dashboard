import { IdType } from "../types";
import { IOrder } from "../types/order";
import makeRequest from "./makeRequest";

const url = "/orders"

class OrdersApi {
  getAll() {
    return makeRequest({ url })
  }

  updateOrderStatus(id: IdType, data: IOrder) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "PATCH",
      data
    })
  }
}

export default new OrdersApi()