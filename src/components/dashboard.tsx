'use client'

import { useState } from 'react'
import { BarChart, DollarSign, Package, ShoppingCart, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-indigo-500 text-white">
          <span className="text-2xl font-semibold">E-Shop Admin</span>
        </div>
        <nav className="mt-8">
          <a className="flex items-center px-6 py-2 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200" href="#">
            <BarChart className="h-5 w-5 mr-3" />
            Dashboard
          </a>
          <a className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="#">
            <ShoppingCart className="h-5 w-5 mr-3" />
            Orders
          </a>
          <a className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="#">
            <Package className="h-5 w-5 mr-3" />
            Products
          </a>
          <a className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="#">
            <Users className="h-5 w-5 mr-3" />
            Customers
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 w-full">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none lg:hidden">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <Input type="text" placeholder="Search..." className="mr-4" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <img
                    className="rounded-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-medium">Dashboard</h3>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <h3 className="mt-6 text-xl">Recent Orders</h3>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#3210</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Smartphone X</TableCell>
                    <TableCell>2023-07-14</TableCell>
                    <TableCell>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </TableCell>
                    <TableCell className="text-right">$999.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#3209</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Laptop Pro</TableCell>
                    <TableCell>2023-07-13</TableCell>
                    <TableCell>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </TableCell>
                    <TableCell className="text-right">$1,499.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#3208</TableCell>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>Wireless Earbuds</TableCell>
                    <TableCell>2023-07-12</TableCell>
                    <TableCell>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Cancelled
                      </span>
                    </TableCell>
                    <TableCell className="text-right">$149.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}