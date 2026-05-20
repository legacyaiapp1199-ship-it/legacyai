import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Zap } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 blur-backdrop">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-gradient">LegacyAI</div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-foreground"
            >
              Login
            </Button>
            <Button onClick={() => navigate("/signup")} className="bg-accent">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
            <span className="text-gradient">Preserve Your Legacy</span>
            <br />
            <span className="text-foreground">Share Your Memories</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Connect with loved ones, share your most precious moments, and create
            a beautiful digital legacy that will be cherished forever.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Creating <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Already have an account?
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          <div className="card-elevated p-6">
            <Heart className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 font-semibold">Share Memories</h3>
            <p className="text-sm text-muted-foreground">
              Post photos, stories, and moments that matter most to you
            </p>
          </div>

          <div className="card-elevated p-6">
            <Users className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 font-semibold">Connect & Follow</h3>
            <p className="text-sm text-muted-foreground">
              Build meaningful connections with people who share your values
            </p>
          </div>

          <div className="card-elevated p-6">
            <Zap className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 font-semibold">Create Legacy</h3>
            <p className="text-sm text-muted-foreground">
              Preserve your stories for future generations to discover
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 LegacyAI. All rights reserved.</p>
      </footer>
    </div>
  );
}
