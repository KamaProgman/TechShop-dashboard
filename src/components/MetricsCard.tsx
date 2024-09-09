import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export function MetricsCard({ title, value, change, Icon }: MetricsCardProps) {
  return (
    <Card className="transition-transform duration-200 ease-in-out hover:shadow-lg hover:translate-y-1 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
          {value}
        </div>
        <p className="text-xs text-muted-foreground transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
