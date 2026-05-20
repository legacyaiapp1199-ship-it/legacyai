import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Zap, Sparkles, Shield, Infinity } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LegacyAI</span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/signup")} 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-purple-50 py-20 sm:py-32">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Welcome to LegacyAI</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Preserve Your Legacy
              </span>
              <br />
              <span className="text-gray-900">Share Memories Forever</span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Create a beautiful digital legacy by sharing your most precious moments. 
              Connect with loved ones and preserve stories for future generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-base font-semibold h-12 px-8"
              >
                Start Creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/login")}
                className="border-gray-300 text-gray-900 hover:bg-gray-50 text-base font-semibold h-12 px-8"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-900">
              Why Choose LegacyAI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, share, and preserve your digital legacy
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Share Memories</h3>
              <p className="text-gray-600 leading-relaxed">
                Post photos, stories, and moments that matter most to you. Organize memories by date and create beautiful timelines.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Connect & Follow</h3>
              <p className="text-gray-600 leading-relaxed">
                Build meaningful connections with loved ones. Follow friends and family to stay updated on their stories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 group-hover:bg-pink-200 transition-colors">
                <Infinity className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Create Legacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Preserve your stories forever. Create a lasting digital legacy that future generations can discover and cherish.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your memories are encrypted and protected. Control who sees your content with granular privacy settings.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                <Sparkles className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">AI-Powered</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent organization and discovery. AI helps you find and relive your favorite memories effortlessly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized performance for seamless browsing. Access your memories instantly, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 py-20 sm:py-32">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">
            Ready to Preserve Your Legacy?
          </h2>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of users creating beautiful digital legacies today
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/signup")}
            className="bg-white text-purple-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-base font-semibold h-12 px-8"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-gray-900">LegacyAI</span>
              </div>
              <p className="text-sm text-gray-600">
                Preserve your legacy, share your memories
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 LegacyAI. All rights reserved. Made with ❤️ for your memories.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
