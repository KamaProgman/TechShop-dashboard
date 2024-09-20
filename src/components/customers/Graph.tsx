import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useState } from "react";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-06-01", Customers: 178 },
  { date: "2024-06-02", Customers: 470 },
  { date: "2024-06-03", Customers: 103 },
  { date: "2024-06-04", Customers: 439 },
  { date: "2024-06-05", Customers: 88 },
  { date: "2024-06-06", Customers: 294 },
  { date: "2024-06-07", Customers: 323 },
  { date: "2024-06-08", Customers: 385 },
  { date: "2024-06-09", Customers: 438 },
  { date: "2024-06-10", Customers: 155 },
  { date: "2024-06-11", Customers: 92 },
  { date: "2024-06-12", Customers: 492 },
  { date: "2024-06-13", Customers: 81 },
  { date: "2024-06-14", Customers: 426 },
  { date: "2024-06-15", Customers: 307 },
  { date: "2024-06-16", Customers: 371 },
  { date: "2024-06-17", Customers: 475 },
  { date: "2024-06-18", Customers: 107 },
  { date: "2024-06-19", Customers: 341 },
  { date: "2024-06-20", Customers: 408 },
  { date: "2024-06-21", Customers: 169 },
  { date: "2024-06-22", Customers: 317 },
  { date: "2024-06-23", Customers: 480 },
  { date: "2024-06-24", Customers: 132 },
  { date: "2024-06-25", Customers: 141 },
  { date: "2024-06-26", Customers: 434 },
  { date: "2024-06-27", Customers: 448 },
  { date: "2024-06-28", Customers: 149 },
  { date: "2024-06-29", Customers: 103 },
  { date: "2024-06-30", Customers: 446 },
  { date: "2024-07-01", Customers: 221 },
  { date: "2024-07-02", Customers: 154 },
  { date: "2024-07-03", Customers: 392 },
  { date: "2024-07-04", Customers: 322 },
  { date: "2024-07-05", Customers: 125 },
  { date: "2024-07-06", Customers: 434 },
  { date: "2024-07-07", Customers: 312 },
  { date: "2024-07-08", Customers: 89 },
  { date: "2024-07-09", Customers: 228 },
  { date: "2024-07-10", Customers: 371 },
  { date: "2024-07-11", Customers: 492 },
  { date: "2024-07-12", Customers: 107 },
  { date: "2024-07-13", Customers: 277 },
  { date: "2024-07-14", Customers: 383 },
  { date: "2024-07-15", Customers: 405 },
  { date: "2024-07-16", Customers: 225 },
  { date: "2024-07-17", Customers: 368 },
  { date: "2024-07-18", Customers: 281 },
  { date: "2024-07-19", Customers: 317 },
  { date: "2024-07-20", Customers: 191 },
  { date: "2024-07-21", Customers: 230 },
  { date: "2024-07-22", Customers: 274 },
  { date: "2024-07-23", Customers: 141 },
  { date: "2024-07-24", Customers: 475 },
  { date: "2024-07-25", Customers: 234 },
  { date: "2024-07-26", Customers: 345 },
  { date: "2024-07-27", Customers: 186 },
  { date: "2024-07-28", Customers: 103 },
  { date: "2024-07-29", Customers: 447 },
  { date: "2024-07-30", Customers: 224 },
  { date: "2024-07-31", Customers: 352 },
  { date: "2024-08-01", Customers: 462 },
  { date: "2024-08-02", Customers: 157 },
  { date: "2024-08-03", Customers: 276 },
  { date: "2024-08-04", Customers: 410 },
  { date: "2024-08-05", Customers: 144 },
  { date: "2024-08-06", Customers: 399 },
  { date: "2024-08-07", Customers: 168 },
  { date: "2024-08-08", Customers: 312 },
  { date: "2024-08-09", Customers: 490 },
  { date: "2024-08-10", Customers: 213 },
  { date: "2024-08-11", Customers: 432 },
  { date: "2024-08-12", Customers: 195 },
  { date: "2024-08-13", Customers: 380 },
  { date: "2024-08-14", Customers: 101 },
  { date: "2024-08-15", Customers: 372 },
  { date: "2024-08-16", Customers: 482 },
  { date: "2024-08-17", Customers: 279 },
  { date: "2024-08-18", Customers: 456 },
  { date: "2024-08-19", Customers: 362 },
  { date: "2024-08-20", Customers: 251 },
  { date: "2024-08-21", Customers: 184 },
  { date: "2024-08-22", Customers: 453 },
  { date: "2024-08-23", Customers: 392 },
  { date: "2024-08-24", Customers: 241 },
  { date: "2024-08-25", Customers: 165 },
  { date: "2024-08-26", Customers: 320 },
  { date: "2024-08-27", Customers: 472 },
  { date: "2024-08-28", Customers: 199 },
  { date: "2024-08-29", Customers: 302 },
  { date: "2024-08-30", Customers: 385 },
  { date: "2024-08-31", Customers: 450 },
  { date: "2024-09-01", Customers: 123 },
  { date: "2024-09-02", Customers: 366 },
  { date: "2024-09-03", Customers: 478 },
  { date: "2024-09-04", Customers: 259 },
  { date: "2024-09-05", Customers: 301 },
  { date: "2024-09-06", Customers: 412 },
  { date: "2024-09-07", Customers: 490 },
  { date: "2024-09-08", Customers: 203 },
  { date: "2024-09-09", Customers: 322 },
  { date: "2024-09-10", Customers: 440 },
  { date: "2024-09-11", Customers: 161 },
  { date: "2024-09-12", Customers: 476 },
  { date: "2024-09-13", Customers: 145 },
  { date: "2024-09-14", Customers: 380 },
  { date: "2024-09-15", Customers: 489 },
  { date: "2024-09-16", Customers: 354 },
  { date: "2024-09-17", Customers: 221 },
  { date: "2024-09-18", Customers: 398 },
  { date: "2024-09-19", Customers: 216 },
  { date: "2024-09-20", Customers: 314 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Customers: {
    label: "Customers",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CustomersGraph() {
  const [timeRange, setTimeRange] = useState("90d");

  const now = new Date();
  let daysToSubtract = 90;
  if (timeRange === "30d") {
    daysToSubtract = 30;
  } else if (timeRange === "7d") {
    daysToSubtract = 7;
  }

  const comparisonDate = new Date();
  comparisonDate.setDate(now.getDate() - daysToSubtract);

  // Filter the data using the pre-calculated comparison date
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    return date >= comparisonDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Customers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Customers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Customers"
              type="natural"
              fill="url(#fillCustomers)"
              stroke="var(--color-Customers)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
