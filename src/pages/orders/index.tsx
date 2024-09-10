import { OrderStatsCard } from "../../components/orders/OrderCharts";
import { OrderTable } from "../../components/orders/OrderTable";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function Orders() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Orders
          </h1>
          <Button>Add Order</Button>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OrderStatsCard title="Total Orders" description="125" />
          <OrderStatsCard title="New Orders" description="25 this month" />
          <OrderStatsCard title="Repeat Customers" description="80%" />
        </div>

        <Card className="rounded-none">
          <OrderTable />
        </Card>
      </main>
    </div>
  );
}
