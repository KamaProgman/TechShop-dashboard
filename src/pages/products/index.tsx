import ProductsTable from "../../components/products/Table";
import { Card } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { useProducts } from "../../lib/hooks/products";
import "./index.css";
import AddProductDialog from "../../components/products/AddProductDialog.tsx"; // Импортируем новый компонент
import { useContext } from "react";
import UserContext from "../../context/UserContext.tsx";

export default function Products() {
  const { data } = useProducts();

  return (
    <div className="flex flex-col w-full max-h-full h-full">
      <main className="flex flex-1 flex-col gap-4 max-h-full p-4 md:gap-8 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Products
          </h1>
          <AddProductDialog />
        </div>
        {!data ? (
          <Skeleton className="h-80" />
        ) : (
          <Card className="rounded-none max-h-full h-full overflow-scroll scrollbar-hide mb-10">
            <ProductsTable data={data} />
          </Card>
        )}
      </main>
    </div>
  );
}
