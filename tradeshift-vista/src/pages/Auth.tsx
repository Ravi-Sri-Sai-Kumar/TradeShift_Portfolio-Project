import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      if (isLogin) {
        // LOGIN
        const res = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: email, password }), // IMPORTANT: backend expects username, not email!
        });
        if (!res.ok) {
          toast.error("Login failed");
          return;
        }
        const data = await res.json();
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        // REGISTER
        const res = await fetch("http://localhost:8080/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: email, password }),
        });
        if (!res.ok) {
          toast.error("Registration failed");
          return;
        }
        toast.success("Account created successfully!");
        setIsLogin(true);
      }
    } catch {
      toast.error("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 relative z-10">
        {/* Branding Section */}
        <div className="hidden md:flex flex-col justify-center space-y-6 text-foreground">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TradeShift
            </h1>
            <p className="text-xl text-muted-foreground">
              Next-generation trading platform
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Real-time Trading</h3>
                <p className="text-sm text-muted-foreground">Execute trades instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="p-2 bg-success/10 rounded-lg">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Platform</h3>
                <p className="text-sm text-muted-foreground">Bank-level security</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Advanced Analytics</h3>
                <p className="text-sm text-muted-foreground">Data-driven insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <Card className="p-8 bg-card/80 backdrop-blur-xl border-border/50">
          <div className="space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-bold">{isLogin ? "Welcome back" : "Create account"}</h2>
              <p className="text-muted-foreground">
                {isLogin ? "Enter your credentials to continue" : "Start your trading journey today"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="username"  // or email, but backend expects username
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50"
                />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
              )}
              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
