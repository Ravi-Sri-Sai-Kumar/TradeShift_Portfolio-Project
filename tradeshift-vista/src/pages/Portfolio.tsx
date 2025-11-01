import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { mockAssets } from "@/data/mockData";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssets = mockAssets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.totalValue, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p className="text-muted-foreground">Manage your investments</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-3xl font-bold text-primary">${totalValue.toLocaleString()}</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {filteredAssets.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAssets.map((asset) => (
              <PortfolioCard key={asset.id} asset={asset} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No assets found</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
