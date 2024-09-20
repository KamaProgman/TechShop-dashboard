import { IOrder } from "../types/order";

export function getTotalItems(orders: IOrder[]): number {
  return orders.reduce((total, order) => {
    return total + order.items.length;
  }, 0);
}