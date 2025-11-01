import DashboardLayout from "@/components/layout/DashboardLayout";
import OrderHistoryTable from "@/components/history/OrderHistoryTable";

const History = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Order History</h1>
          <p className="text-muted-foreground">View your past transactions</p>
        </div>

        <OrderHistoryTable />
      </div>
    </DashboardLayout>
  );
};

export default History;
