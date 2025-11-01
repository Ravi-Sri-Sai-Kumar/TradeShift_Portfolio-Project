import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Briefcase } from "lucide-react";
import { mockAssets } from "@/data/mockData";

const PortfolioOverview = () => {
  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.totalValue, 0);
  const totalChange = mockAssets.reduce((sum, asset) => sum + (asset.change * asset.quantity), 0);
  const changePercent = (totalChange / (totalValue - totalChange)) * 100;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-bold mt-1">${totalValue.toLocaleString()}</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Gain</p>
            <p className="text-2xl font-bold mt-1 text-success">+${totalChange.toFixed(2)}</p>
          </div>
          <div className="p-3 bg-success/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Return</p>
            <p className="text-2xl font-bold mt-1 text-accent">+{changePercent.toFixed(2)}%</p>
          </div>
          <div className="p-3 bg-accent/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-accent" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-secondary to-card border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Assets</p>
            <p className="text-2xl font-bold mt-1">{mockAssets.length}</p>
          </div>
          <div className="p-3 bg-secondary/50 rounded-lg">
            <Briefcase className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioOverview;
