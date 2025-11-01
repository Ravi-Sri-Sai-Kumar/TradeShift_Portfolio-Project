import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketTrends = () => {
  const trends = [
    { name: "Technology", change: 2.4, stocks: 156 },
    { name: "Finance", change: -0.8, stocks: 89 },
    { name: "Healthcare", change: 1.2, stocks: 124 },
    { name: "Energy", change: 3.1, stocks: 67 },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Market Trends</h3>
      <div className="space-y-3">
        {trends.map((trend) => (
          <div key={trend.name} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${trend.change > 0 ? 'bg-success/10' : 'bg-danger/10'}`}>
                {trend.change > 0 ? (
                  <TrendingUp className={`h-4 w-4 text-success`} />
                ) : (
                  <TrendingDown className={`h-4 w-4 text-danger`} />
                )}
              </div>
              <div>
                <p className="font-semibold">{trend.name}</p>
                <p className="text-xs text-muted-foreground">{trend.stocks} stocks</p>
              </div>
            </div>
            <p className={`font-semibold ${trend.change > 0 ? 'text-success' : 'text-danger'}`}>
              {trend.change > 0 ? '+' : ''}{trend.change}%
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MarketTrends;
