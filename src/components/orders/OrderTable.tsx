import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../ui/table";
import { OrderTableRow } from "./OrderTableRow";

interface Order {
  orderId: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  statusVariant: "success" | "danger" | "secondary";
}

export function OrderTable() {
  const orders: Order[] = [
    {
      orderId: "#12345",
      customer: "John Doe",
      date: "2023-04-15",
      total: "$99.99",
      status: "Pending",
      statusVariant: "secondary",
    },
    {
      orderId: "#12346",
      customer: "Jane Smith",
      date: "2023-04-16",
      total: "$149.99",
      status: "Completed",
      statusVariant: "success",
    },
    {
      orderId: "#12347",
      customer: "Bob Johnson",
      date: "2023-04-17",
      total: "$199.99",
      status: "Cancelled",
      statusVariant: "danger",
    },
  ];
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
        {orders.map((order) => (
          <OrderTableRow key={order.orderId} {...order} />
        ))}
      </TableBody>
    </Table>
  );
}
