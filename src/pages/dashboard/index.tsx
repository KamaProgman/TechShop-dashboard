import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { MetricsCard } from "../../components/dashboard/MetricsCard";
import { RecentOrdersTable } from "../../components/dashboard/RecentOrdersTable";

export function Dashboard() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-gray-700 dark:text-gray-200 text-3xl font-medium">
          Dashboard
        </h1>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricsCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1% from last month"
            Icon={DollarSign}
            path="/"
          />
          <MetricsCard
            title="Orders"
            value="1,200"
            change="-5.5% from last week"
            Icon={ShoppingCart}
            path="/orders"
          />
          <MetricsCard
            title="Products Sold"
            value="120"
            change="+3.1% from last month"
            Icon={Package}
            path="/products"
          />
          <MetricsCard
            title="New Customers"
            value="45"
            change="+10% from last month"
            Icon={Users}
            path="/customers"
          />
        </div>

        {/* Recent Orders */}
        <div className="mt-8">
          <h4 className="text-gray-700 dark:text-gray-200 text-xl font-medium">
            Recent Orders
          </h4>
          <div className="mt-4">
            <RecentOrdersTable />
          </div>
        </div>
      </div>
    </main>
  );
}
