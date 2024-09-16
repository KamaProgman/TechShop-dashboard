import { useOrders } from "../../lib/hooks/orders";
import { IOrder } from "../../types/order";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function RecentOrdersTable() {
  const { data } = useOrders();

  return (
    <Table className="min-w-full bg-white border shadow-md">
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((order: IOrder) => (
          <TableRow key={order.id} className="border-t">
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.userId}</TableCell>
            {/* <TableCell>{order.items}</TableCell> */}
            <TableCell>{order.paymentMethod}</TableCell>
            <TableCell>
              <Badge
                // variant={statusStyles(order.status)}
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}
              >
                {/* {order.status} */}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{order.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
