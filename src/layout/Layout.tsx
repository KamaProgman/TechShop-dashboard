import { ReactNode, useState } from "react";
import { Sidebar } from "../components/common/Sidebar";
import { Header } from "../components/common/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <body className="w-full">
      <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          {children}
        </div>
      </div>
    </body>
  );
}
