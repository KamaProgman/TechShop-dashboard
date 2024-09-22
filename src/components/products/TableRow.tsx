import { FilePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { IProduct } from "../../types/product";

function ProductTableRow({
  category,
  images_links,
  price,
  quantity,
  title,
}: IProduct) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={images_links[0]}
          alt="Product Image"
          width={55}
          height={55}
          className="rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{category.title}</TableCell>
      <TableCell>{price}$</TableCell>
      <TableCell className="text-center">{quantity}шт</TableCell>
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
