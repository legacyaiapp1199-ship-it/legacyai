import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { ArrowRight } from "lucide-react";

export default function Login() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/feed");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 blur-backdrop">
        <div className="container flex items-center justify-between py-4">
          <div
            className="cursor-pointer text-2xl font-bold text-gradient"
            onClick={() => navigate("/")}
          >
            LegacyAI
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="container flex items-center justify-center py-20">
        <div className="w-full max-w-md">
          <div className="card-elevated p-8 sm:p-10">
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="mb-8 text-muted-foreground">
              Sign in to your account to continue
            </p>

            {/* OAuth Login */}
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                window.location.href = getLoginUrl();
              }}
            >
              Sign in with Manus <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="font-semibold text-accent hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your memories are encrypted and protected
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Connect & Share
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build meaningful connections with loved ones
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Create Legacy</h3>
                <p className="text-sm text-muted-foreground">
                  Preserve your stories for future generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
