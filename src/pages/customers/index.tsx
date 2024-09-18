import { CustomerTable } from "../../components/customers/Table";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function Customers() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Customers
          </h1>
          <Button>Add Customer</Button>
        </div>
        <div>
          <Card className="rounded-none">
            <CustomerTable />
          </Card>
        </div>
      </main>
    </div>
  );
}
