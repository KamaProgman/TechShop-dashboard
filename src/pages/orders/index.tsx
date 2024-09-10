/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uRtdGaJYOsX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { FilePen, Trash } from "lucide-react";

export default function Orders() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Orders</h1>
          <Button>Add Order</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
              <CardDescription>125</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <BarChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>New Orders</CardTitle>
              <CardDescription>25 this month</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <LineChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Repeat Customers</CardTitle>
              <CardDescription>80%</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <PieChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>2023-04-15</TableCell>
                  <TableCell>$99.99</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        className="bg-transparent border-0"
                      >
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
                <TableRow>
                  <TableCell>#12346</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>2023-04-16</TableCell>
                  <TableCell>$149.99</TableCell>
                  <TableCell>
                    <Badge variant="success">Completed</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        className="bg-transparent border-0"
                      >
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
                <TableRow>
                  <TableCell>#12347</TableCell>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>2023-04-17</TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell>
                    <Badge variant="danger">Cancelled</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        className="bg-transparent border-0"
                      >
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
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
