import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

interface OrderStatsCardProps {
  title: string;
  description: string;
  // Pass an optional chart component or other content as children
  children?: React.ReactNode;
}

export function OrderStatsCard({
  title,
  description,
  children,
}: OrderStatsCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
