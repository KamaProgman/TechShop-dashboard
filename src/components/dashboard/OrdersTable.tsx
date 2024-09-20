import { IOrder } from "../../types/order";
import { Badge } from "../ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

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
  Delievered = 1,
  Cancelled = 2
}

const getStatusText = (status: unknown): OrderStatus => {
  return OrderStatus[status as keyof typeof OrderStatus];
};

interface props {
  data: IOrder[]
}

export function OrdersTable({ data }: props) {
  const statusStyles = (status: number) => {
    switch (status) {
      case 1:
        return "success";
      case 0:
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
            <TableCell>{order.user.email}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-fit text-indigo-500 font-medium underline cursor-pointer hover:opacity-50 duration-200">
                    ITEMS
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 bg-white shadow-lg rounded-md p-4">
                  <h4 className="font-semibold mb-2">Order Items:</h4>
                  <ul>
                    {order.items.map((item) => (
                      <DropdownMenuItem key={item.id} className="flex">
                        <img src={item.images_links[0]} alt="product" className="w-14 object-cover mr-2" />
                        <span className="text-balance w-full">{item.title}</span>
                        <span className="font-medium text-indigo-700">{item.cartQuantity}</span>
                      </DropdownMenuItem>
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell>2024-06-05</TableCell>
            <TableCell>
              <Badge
                variant={statusStyles(order.status)}
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full`}
              >
                {getStatusText(order.status)}
              </Badge>
            </TableCell>
            <TableCell className="text-right font-medium text-indigo-500">{order.totalPrice}$</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
