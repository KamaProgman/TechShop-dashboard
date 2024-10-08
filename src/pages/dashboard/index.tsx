import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { MetricsCard } from "../../components/dashboard/MetricsCard";
import { useOrders } from "../../lib/hooks/orders";
import { IOrder } from "../../types/order";
import { OrdersTable } from "../../components/orders/OrdersTable";
import { getDataForLastMonth } from "../../utils/getForLastMonth";
import { getItems, getTotalItems } from "../../utils/getTotalItems";
import { Skeleton } from "../../components/ui/skeleton";
import "../../index.css";
export function Dashboard() {
  const { data } = useOrders();
  const newOrders = getDataForLastMonth<IOrder>(data || []);
  const totalRevenue =
    data?.reduce((sum: number, order: IOrder) => sum + order.totalPrice, 0) ??
    0;
  const totalItems = getTotalItems(newOrders ?? []);
  const products = getItems(newOrders);

  console.log(products);

  return (
    <main className="flex-1 scrollbar-hide overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-gray-700 dark:text-gray-200 text-3xl font-medium">
          Dashboard
        </h1>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {!data ? (
            [1, 2, 3, 4].map(() => (
              <Skeleton className="h-[125px] rounded-xl" />
            ))
          ) : (
            <>
              <MetricsCard
                title="Total Revenue"
                value={totalRevenue + "$"}
                change="for last month"
                Icon={DollarSign}
                path="/"
              />
              <MetricsCard
                title="Orders"
                value={newOrders?.length}
                change="for last month"
                Icon={ShoppingCart}
                path="/orders"
              />
              <MetricsCard
                title="Products Sold"
                value={totalItems}
                change="for last month"
                Icon={Package}
                path="/products"
              />
              <MetricsCard
                title="New Customers"
                value="45"
                change="for last month"
                Icon={Users}
                path="/customers"
              />
            </>
          )}
        </div>

        <div className="mt-8">
          <h4 className="text-gray-700 dark:text-gray-200 text-xl font-medium">
            Recent Orders
          </h4>
          <div className="mt-4">
            {!data ? (
              <Skeleton className="h-80" />
            ) : (
              <OrdersTable data={newOrders} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
