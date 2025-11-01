import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const TradeForm = () => {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const total = (parseFloat(quantity) || 0) * (parseFloat(price) || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol || !quantity || !price) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success(`${tradeType === "buy" ? "Buy" : "Sell"} order placed successfully!`);
    setSymbol("");
    setQuantity("");
    setPrice("");
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Place Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant={tradeType === "buy" ? "default" : "outline"}
            onClick={() => setTradeType("buy")}
            className={tradeType === "buy" ? "bg-success hover:bg-success/90" : ""}
          >
            Buy
          </Button>
          <Button
            type="button"
            variant={tradeType === "sell" ? "default" : "outline"}
            onClick={() => setTradeType("sell")}
            className={tradeType === "sell" ? "bg-danger hover:bg-danger/90" : ""}
          >
            Sell
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="symbol">Symbol</Label>
          <Input
            id="symbol"
            placeholder="e.g., AAPL"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price per Share</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="p-4 bg-secondary/30 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Place {tradeType === "buy" ? "Buy" : "Sell"} Order
        </Button>
      </form>
    </Card>
  );
};

export default TradeForm;
