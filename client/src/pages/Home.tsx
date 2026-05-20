import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Zap, Sparkles, Shield, Infinity } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">LegacyAI</span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-foreground hover:bg-accent/10"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/signup")} 
              className="bg-gradient-to-r from-accent to-purple-600 text-white hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-accent/5 py-20 sm:py-32">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Welcome to LegacyAI</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Preserve Your Legacy
              </span>
              <br />
              <span className="text-foreground">Share Memories Forever</span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Create a beautiful digital legacy by sharing your most precious moments. 
              Connect with loved ones and preserve stories for future generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-accent to-purple-600 text-white hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 text-base font-semibold h-12 px-8"
              >
                Start Creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login")}
                className="border-border/60 hover:bg-accent/5 text-base font-semibold h-12 px-8"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground">
              Why Choose LegacyAI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, share, and preserve your digital legacy
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Share Memories</h3>
              <p className="text-muted-foreground leading-relaxed">
                Post photos, stories, and moments that matter most to you. Organize memories by date and create beautiful timelines.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Connect & Follow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build meaningful connections with loved ones. Follow friends and family to stay updated on their stories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Infinity className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Create Legacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preserve your stories forever. Create a lasting digital legacy that future generations can discover and cherish.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your memories are encrypted and protected. Control who sees your content with granular privacy settings.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">AI-Powered</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent organization and discovery. AI helps you find and relive your favorite memories effortlessly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized performance for seamless browsing. Access your memories instantly, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent/10 via-purple-500/10 to-pink-500/10 py-20 sm:py-32">
        <div className="container relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground">
            Ready to Preserve Your Legacy?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users creating beautiful digital legacies today
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-accent to-purple-600 text-white hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 text-base font-semibold h-12 px-8"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">LegacyAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Preserve your legacy, share your memories
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 LegacyAI. All rights reserved. Made with ❤️ for your memories.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
