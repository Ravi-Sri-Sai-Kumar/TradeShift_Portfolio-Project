import DashboardLayout from "@/components/layout/DashboardLayout";
import TradeForm from "@/components/trade/TradeForm";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const Trade = () => {
  const topMovers = [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.45, change: 2.34, changePercent: 1.3 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 242.80, change: -5.20, changePercent: -2.1 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.92, change: 1.15, changePercent: 0.8 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Trade</h1>
          <p className="text-muted-foreground">Execute buy and sell orders</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TradeForm />
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Movers</h3>
              <div className="space-y-3">
                {topMovers.map((stock) => (
                  <div key={stock.symbol} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-semibold">{stock.symbol}</p>
                      <p className="text-xs text-muted-foreground">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${stock.price}</p>
                      <div className={`flex items-center gap-1 text-xs ${stock.change > 0 ? 'text-success' : 'text-danger'}`}>
                        {stock.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trade;
