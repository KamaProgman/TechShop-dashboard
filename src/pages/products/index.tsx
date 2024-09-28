import ProductsTable from "../../components/products/Table";
import { Card } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { useProducts } from "../../lib/hooks/products";
import "./index.css";
import ActionsDialog from "../../components/products/ActionsDialog.tsx";
import ProductForm from "../../components/products/ProductForm.tsx";
import { Button } from "../../components/ui/button.tsx";

export default function Products() {
  const { data } = useProducts();

  return (
    <div className="flex flex-col w-full max-h-full h-full">
      <main className="flex flex-1 flex-col gap-4 max-h-full p-4 md:gap-8 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Products
          </h1>
          <ActionsDialog title="Add new product" trigger={<Button>Add Product</Button>}>
            {(handleClose) => <ProductForm type="create" handleClose={handleClose} />}
          </ActionsDialog>

        </div>
        {!data
          ?
          <Skeleton className="h-80" />
          :
          <Card className="rounded-none max-h-full h-full overflow-scroll scrollbar-hide mb-10">
            <ProductsTable data={data} />
          </Card>
        }

      </main>
    </div>
  );
}
