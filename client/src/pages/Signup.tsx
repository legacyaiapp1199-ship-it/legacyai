import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { ArrowRight } from "lucide-react";

export default function Signup() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/profile-setup");
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

      {/* Signup Form */}
      <div className="container flex items-center justify-center py-20">
        <div className="w-full max-w-md">
          <div className="card-elevated p-8 sm:p-10">
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              Create Account
            </h1>
            <p className="mb-8 text-muted-foreground">
              Join LegacyAI and start preserving your memories
            </p>

            {/* OAuth Signup */}
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                window.location.href = getLoginUrl();
              }}
            >
              Sign up with Manus <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-semibold text-accent hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Create Your Profile
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add your name, photo, and bio to get started
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Share Your Moments
                </h3>
                <p className="text-sm text-muted-foreground">
                  Post photos, stories, and memories instantly
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Connect Forever
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build your legacy and inspire future generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
