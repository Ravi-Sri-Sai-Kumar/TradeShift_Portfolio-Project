import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  totalValue: number;
  change: number;
  changePercent: number;
}

interface PortfolioCardProps {
  asset: Asset;
}

const PortfolioCard = ({ asset }: PortfolioCardProps) => {
  const isPositive = asset.change > 0;

  return (
    <Card className="p-6 hover:border-primary/50 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{asset.symbol}</h3>
          <p className="text-sm text-muted-foreground">{asset.name}</p>
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {isPositive ? '+' : ''}{asset.changePercent.toFixed(2)}%
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Quantity</span>
          <span className="font-semibold">{asset.quantity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Avg Price</span>
          <span className="font-semibold">${asset.avgPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Current Price</span>
          <span className="font-semibold">${asset.currentPrice.toFixed(2)}</span>
        </div>
        <div className="pt-2 border-t border-border">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Value</span>
            <span className="text-lg font-bold text-primary">${asset.totalValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
