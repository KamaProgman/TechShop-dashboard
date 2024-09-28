import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../../components/ui/table";
import { IUser } from "../../types/customer";
import { CustomerTableRow } from "./TableRow";

interface props {
  data: IUser[]
}

export const CustomerTable = ({ data }: props) => {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Total Orders</TableHead>
          <TableHead className="text-end pr-10">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((customer: IUser) => (
          <CustomerTableRow key={customer.id} {...customer} />
        ))}
      </TableBody>
    </Table>
  );
};
