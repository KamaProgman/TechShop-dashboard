import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProductTableRow from "./TableRow";
import { IProduct } from "../../types/product";

interface props {
  data: IProduct[]
}

const ProductsTable = ({data}: props) => {

  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right pr-10">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((product: IProduct) => (
          <ProductTableRow key={product.id} {...product} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
