import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function RecentOrdersTable() {
  const orders = [
    {
      id: "#3210",
      customer: "John Doe",
      product: "Smartphone X",
      date: "2023-07-14",
      status: "Completed",
      amount: "$999.00",
    },
    {
      id: "#3209",
      customer: "Jane Smith",
      product: "Laptop Pro",
      date: "2023-07-13",
      status: "Pending",
      amount: "$1,499.00",
    },
    {
      id: "#3208",
      customer: "Bob Johnson",
      product: "Wireless Earbuds",
      date: "2023-07-12",
      status: "Cancelled",
      amount: "$149.00",
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
