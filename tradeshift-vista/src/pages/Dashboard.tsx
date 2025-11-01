import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import QuickTrade from "@/components/dashboard/QuickTrade";
import RecentActivity from "@/components/dashboard/RecentActivity";
import MarketTrends from "@/components/dashboard/MarketTrends";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to TradeShift</p>
        </div>

        <PortfolioOverview />

        <div className="grid lg:grid-cols-2 gap-6">
          <QuickTrade />
          <MarketTrends />
        </div>

        <RecentActivity />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
