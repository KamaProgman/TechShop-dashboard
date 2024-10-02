import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FilePen, Trash } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { IOrder } from "../../types/order";

export function OrderTableRow({
  id,
  totalPrice,
  // userId,
}: IOrder) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      {/* <TableCell>{userId}</TableCell> */}
      <TableCell>date</TableCell>
      <TableCell>{totalPrice}</TableCell>
      <TableCell>
        <Badge variant={"default"}>{status}</Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" className="bg-transparent border-0">
            <FilePen className="w-4 h-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            variant="ghost"
            className="text-destructive bg-transparent border-0"
          >
            <Trash className="w-4 h-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
