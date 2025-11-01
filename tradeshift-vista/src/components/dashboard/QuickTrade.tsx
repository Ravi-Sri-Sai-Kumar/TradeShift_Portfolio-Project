import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const QuickTrade = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleTrade = (type: "buy" | "sell") => {
    if (!symbol || !quantity) {
      toast.error("Please enter symbol and quantity");
      return;
    }
    toast.success(`${type === "buy" ? "Buy" : "Sell"} order placed for ${quantity} ${symbol}`);
    setSymbol("");
    setQuantity("");
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Quick Trade</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="symbol">Symbol</Label>
          <Input
            id="symbol"
            placeholder="e.g., AAPL"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => handleTrade("buy")} className="bg-success hover:bg-success/90">
            Buy
          </Button>
          <Button onClick={() => handleTrade("sell")} className="bg-danger hover:bg-danger/90">
            Sell
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuickTrade;
