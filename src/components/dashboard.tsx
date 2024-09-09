import { useState } from "react";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MetricsCard } from "./MetricsCard";
import { RecentOrdersTable } from "./RecentOrdersTable";

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-medium">
              Dashboard
            </h3>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricsCard
                title="Total Revenue"
                value="$45,231.89"
                change="+20.1% from last month"
                Icon={DollarSign}
              />
              <MetricsCard
                title="Orders"
                value="1,200"
                change="-5.5% from last week"
                Icon={ShoppingCart}
              />
              <MetricsCard
                title="Products Sold"
                value="120"
                change="+3.1% from last month"
                Icon={Package}
              />
              <MetricsCard
                title="New Customers"
                value="45"
                change="+10% from last month"
                Icon={Users}
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
      </div>
    </div>
  );
}
