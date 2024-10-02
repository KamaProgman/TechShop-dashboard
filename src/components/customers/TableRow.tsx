import { FilePen, Trash } from "lucide-react";
import { TableRow, TableCell } from "../../components/ui/table";
import { Button } from "../ui/button";
import { IUser } from "../../types/customer";
import { useCustomerOrders } from "../../lib/hooks/orders";

export const CustomerTableRow = ({
  email,
  name,
  id,
  surname,
  phone,
}: IUser) => {
  const { data: userOrders } = useCustomerOrders(id);

  return (
    <TableRow>
      <TableCell>
        {surname} {name}
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className={phone ? "" : "text-red-500"}>
        {phone || "Not Provided"}
      </TableCell>
      <TableCell>{userOrders?.length}</TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" className="bg-transparent border-0">
            <FilePen className="w-4 h-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            variant="ghost"
            className="bg-transparent border-0 text-destructive"
          >
            <Trash className="w-4 h-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
