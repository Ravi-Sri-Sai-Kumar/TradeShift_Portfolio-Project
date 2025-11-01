import { Card } from "@/components/ui/card";
import { TrendingUp, Activity, Target, BarChart3 } from "lucide-react";

const PerformanceMetrics = () => {
  const metrics = [
    {
      title: "Total Return",
      value: "+18.7%",
      icon: TrendingUp,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Best Performer",
      value: "NVDA +16.7%",
      icon: Activity,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Win Rate",
      value: "73.5%",
      icon: Target,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Avg Trade",
      value: "$3,245",
      icon: BarChart3,
      color: "text-foreground",
      bg: "bg-secondary",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">{metric.title}</p>
            <div className={`p-2 rounded-lg ${metric.bg}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </div>
          <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
