import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change: string;
  path: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export function MetricsCard({
  title,
  value,
  change,
  Icon,
  path,
}: MetricsCardProps) {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <Card
      // onClick={() => navigate(path)}
      className="transition-transform cursor-pointer group duration-200 ease-in-out hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium transition-colors duration-200 group-hover:text-indigo-500 dark:hover:text-indigo-500">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover:text-indigo-500 dark:hover:text-indigo-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold transition-colors duration-200 group-hover:text-indigo-500 dark:hover:text-indigo-500">
          {value}
        </div>
        <p className="text-xs text-muted-foreground transition-colors duration-200 group-hover:text-indigo-500 dark:hover:text-blue-400">
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
