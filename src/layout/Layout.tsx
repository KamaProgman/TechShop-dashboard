import { ReactNode, useState } from "react";
import { Sidebar } from "../components/common/Sidebar";
import { Header } from "../components/common/Header";
import UserContext from "../context/UserContext";
import { Toaster } from "../components/ui/toaster";
import TopHeader from "../components/common/TopHeader";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      <div className="h-screen overflow-hidden">
        {!userToken && <TopHeader />}
        <div className="flex w-full h-full bg-gray-100 dark:bg-gray-900">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 pb-12 flex flex-col overflow-hidden">
            <Header setIsSidebarOpen={setIsSidebarOpen} />
            {children}
            <Toaster />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
