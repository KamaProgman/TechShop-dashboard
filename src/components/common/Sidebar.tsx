import { BarChart, Package, ShoppingCart, Users } from "lucide-react";
import { memo } from "react";

const SidebarItems = [
  { href: "/", label: "Dashboard", Icon: BarChart },
  { href: "/orders", label: "Orders", Icon: ShoppingCart },
  { href: "/products", label: "Products", Icon: Package },
  { href: "#", label: "Customers", Icon: Users },
];

export const Sidebar = memo(({ isSidebarOpen }: { isSidebarOpen: boolean }) => (
  <aside
    className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
  >
    <div className="flex items-center justify-center h-16 bg-indigo-500 text-white">
      <span className="text-2xl font-semibold">E-Shop Admin</span>
    </div>
    <nav className="mt-8">
      {SidebarItems.map(({ Icon, href, label }, i) => (
        <a
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          href={href}
          aria-label={label}
          key={i}
        >
          <Icon className="h-5 w-5 mr-3" />
          {label}
        </a>
      ))}
    </nav>
  </aside>
));
