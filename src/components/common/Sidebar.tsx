import { BarChart, Package, ShoppingCart, Users } from "lucide-react";

export function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-center h-16 bg-indigo-500 text-white">
        <span className="text-2xl font-semibold">E-Shop Admin</span>
      </div>
      <nav className="mt-8">
        <a
          className="flex items-center px-6 py-2 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          href="/"
        >
          <BarChart className="h-5 w-5 mr-3" />
          Dashboard
        </a>
        <a
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          href="/orders"
        >
          <ShoppingCart className="h-5 w-5 mr-3" />
          Orders
        </a>
        <a
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          href="/products"
        >
          <Package className="h-5 w-5 mr-3" />
          Products
        </a>
        <a
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          href="#"
        >
          <Users className="h-5 w-5 mr-3" />
          Customers
        </a>
      </nav>
    </aside>
  );
}
