import { useOrders } from "../../lib/hooks/orders";
import { IOrder } from "../../types/order";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../ui/table";
import { OrderTableRow } from "./TableRow";

export function OrderTable() {
  const { data } = useOrders();

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-end pr-10">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((order: IOrder) => (
          <OrderTableRow key={order.id} {...order} />
        ))}
      </TableBody>
    </Table>
  );
}
