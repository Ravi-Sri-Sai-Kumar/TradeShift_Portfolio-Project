import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PortfolioChart = () => {
  const data = [
    { date: "Jan", value: 35000 },
    { date: "Feb", value: 37500 },
    { date: "Mar", value: 36800 },
    { date: "Apr", value: 39200 },
    { date: "May", value: 41500 },
    { date: "Jun", value: 43800 },
    { date: "Jul", value: 47915 },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Portfolio Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PortfolioChart;
