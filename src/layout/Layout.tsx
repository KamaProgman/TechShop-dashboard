import { ReactNode, useState } from "react";
import { Sidebar } from "../components/common/Sidebar";
import { Header } from "../components/common/Header";
import UserContext from "../context/UserContext";
import { Toaster } from "../components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [user, setUser] = useState<object | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          {children}
          <Toaster />
        </div>
      </div>
    </UserContext.Provider>
  );
}
