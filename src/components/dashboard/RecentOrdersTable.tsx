import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function RecentOrdersTable() {
  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      product: "Wireless Earbuds",
      date: "2023-06-01",
      status: "Completed",
      amount: "$129.99",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      product: "Smart Watch",
      date: "2023-06-02",
      status: "Pending",
      amount: "$199.99",
    },
    {
      id: "ORD003",
      customer: "Bob Johnson",
      product: "Laptop",
      date: "2023-06-03",
      status: "Canceled",
      amount: "$999.99",
    },
  ];

  const statusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <Table className="min-w-full bg-white border rounded-xl shadow-md">
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
        {orders.map((order) => (
          <TableRow key={order.id} className="border-t">
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles(
                  order.status
                )}`}
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
