import { OrdersTable } from "../../components/orders/OrdersTable";
import { OrderStatsCard } from "../../components/orders/Charts";
import { Card } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { useOrders } from "../../lib/hooks/orders";
import { IOrder } from "../../types/order";
import { getDataForLastMonth } from "../../utils/getForLastMonth";

export default function Orders() {
  const { data } = useOrders();
  const newOrders = getDataForLastMonth<IOrder>(data || []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
            Orders
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {!data ? (
            [1, 2].map((item) => <Skeleton className="h-[100px] rounded-xl" />)
          ) : (
            <>
              <OrderStatsCard title="Total Orders" description={data?.length} />
              <OrderStatsCard
                title="New Orders"
                description={`${newOrders?.length} this month`}
              />
            </>
          )}
        </div>

        {!data ? (
          <Skeleton className="h-80" />
        ) : (
          <Card className="rounded-none">
            <OrdersTable data={data} />
          </Card>
        )}
      </main>
    </div>
  );
}
