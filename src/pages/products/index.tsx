// import { ProductRow } from "../../components/products/ProductRow";
import ProductTableRow from "../../components/products/ProductTableRow";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: string;
  image: string;
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: "$129.99",
      stock: "50 in stock",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: "$199.99",
      stock: "25 in stock",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Laptop",
      category: "Electronics",
      price: "$999.99",
      stock: "10 in stock",
      image: "/placeholder.svg",
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Products
          </h1>
          <Button>Add Product</Button>
        </div>
        <Card className="rounded-none">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <ProductTableRow key={product.id} {...product} />
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}
