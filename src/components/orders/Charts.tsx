import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

interface OrderStatsCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function OrderStatsCard({ title, description }: OrderStatsCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xl">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
