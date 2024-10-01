import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import LoginModal from "./LoginModal";

export function Header({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const userToken = localStorage.getItem("userToken");

  console.log(userToken);

  const LogOut = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 w-full">
      <div className="flex items-center">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <Input type="text" placeholder="Search..." className="mr-4" />
        {!userToken ? (
          <LoginModal />
        ) : (
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
              <DropdownMenuItem onClick={() => LogOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
