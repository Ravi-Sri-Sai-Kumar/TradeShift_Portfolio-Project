import { Card } from "@/components/ui/card";
import { mockOrders } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const RecentActivity = () => {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Badge variant={order.type === "Buy" ? "default" : "destructive"} className="w-16 justify-center">
                  {order.type}
                </Badge>
                <span className="font-semibold">{order.symbol}</span>
                <span className="text-muted-foreground text-sm">x{order.quantity}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">${order.total.toLocaleString()}</p>
              <Badge variant={order.status === "Completed" ? "secondary" : "outline"} className="text-xs">
                {order.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
