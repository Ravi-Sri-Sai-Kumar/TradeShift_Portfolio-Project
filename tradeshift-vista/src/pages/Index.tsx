import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TradeShift
            </h1>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button onClick={() => navigate("/auth")}>Get Started</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              The Future of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Digital Trading
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation trading with advanced analytics, real-time execution, and institutional-grade security.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
                Start Trading
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Trading</h3>
              <p className="text-muted-foreground">
                Execute trades instantly with lightning-fast order processing and real-time market data.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-success/50 transition-all">
              <div className="p-3 bg-success/10 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">
                Bank-level security with multi-factor authentication and encrypted transactions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all">
              <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Make data-driven decisions with comprehensive charts and performance metrics.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Experience millisecond execution times with our optimized trading engine.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of traders who trust TradeShift for their investment journey.
            </p>
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-10">
              Create Free Account
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
