import { IOrder } from "../types/order";
import { IProduct } from "../types/product";

export function getTotalItems(orders: IOrder[]): number {
  return orders.reduce((total, order) => {
    return total + order.items.length;
  }, 0);
}

export function getItems(orders: IOrder[]) {
  const newArr: object[] = []

  orders.forEach(item => {
    item.items.forEach(product => {
      newArr.push(product)
    })
  })

  return newArr
}