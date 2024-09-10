import { FilePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { products } from "../../pages/products";

export function ProductRow({ product }: { product: (typeof products)[0] }) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          className="rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.stock}</TableCell>
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
