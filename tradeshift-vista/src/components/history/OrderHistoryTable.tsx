import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockOrders } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderHistoryTable = () => {
  return (
    <Card className="p-6">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <Badge variant={order.type === "Buy" ? "default" : "destructive"}>
                    {order.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold">{order.symbol}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.price.toFixed(2)}</TableCell>
                <TableCell className="font-semibold">${order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={order.status === "Completed" ? "secondary" : "outline"}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default OrderHistoryTable;
