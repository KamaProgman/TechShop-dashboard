import { FilePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { Product } from "../../pages/products";

function ProductTableRow({ category, image, name, price, stock }: Product) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={image}
          alt={name}
          width={64}
          height={64}
          className="rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{stock}</TableCell>
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

export default ProductTableRow;
