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

enum OrderStatus {
  Pending = 0,
  Shipped = 1,
  Delievered = 2,
}

const getStatusText = (status: unknown): OrderStatus => {
  return OrderStatus[status as keyof typeof OrderStatus];
};

export function RecentOrdersTable() {
  const { data } = useOrders();

  const statusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Pending":
        return "secondary";
      default:
        return "danger";
    }
  };

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
            <TableCell>{order.id}</TableCell>
            {/* <TableCell>{order.items}</TableCell> */}
            <TableCell>{order.paymentMethod}</TableCell>
            <TableCell>
              <Badge
                // variant={statusStyles(order.status)}
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}
              >
                {getStatusText(order.status)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{order.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
