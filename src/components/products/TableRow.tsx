import { FilePen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { IProduct } from "../../types/product";
import DeleteModal from "./DeleteModal";
import ProductApi from '../../api/products'
import ActionsDialog from "./ActionsDialog";
import AddProductForm from "./ProductForm";

function ProductTableRow({
  category,
  images_links,
  price,
  quantity,
  title,
  id
}: IProduct) {
  return (
    <TableRow>
      <TableCell>
        <img
          src={images_links[0]}
          alt="Product Image"
          className="w-[60px] h-[72px] rounded-sm object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{category.title}</TableCell>
      <TableCell>{price}$</TableCell>
      <TableCell className="text-center">{quantity}шт</TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-2">
          <ActionsDialog
            title="Edit product"
            trigger={
              <Button variant="ghost" className="bg-transparent border-0">
                <FilePen className="w-4 h-4" />
                <span className="sr-only">Edit</span>
              </Button>
            }>
            {(handleClose) => <AddProductForm type="edit" handleClose={handleClose} productId={id} />}
          </ActionsDialog>
          <DeleteModal id={id} deleteFunction={ProductApi.deleteProductById} queryKey="products" />
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ProductTableRow;
