import DashboardLayout from "@/components/layout/DashboardLayout";
import PortfolioChart from "@/components/analytics/PortfolioChart";
import AssetDistribution from "@/components/analytics/AssetDistribution";
import PerformanceMetrics from "@/components/analytics/PerformanceMetrics";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your portfolio performance</p>
        </div>

        <PerformanceMetrics />

        <div className="grid lg:grid-cols-2 gap-6">
          <PortfolioChart />
          <AssetDistribution />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
