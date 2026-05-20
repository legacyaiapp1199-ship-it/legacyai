import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { ArrowRight, Sparkles, Lock, Heart, Users } from "lucide-react";

export default function Login() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/feed");
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LegacyAI</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to your account to continue sharing your memories
              </p>
            </div>

            {/* OAuth Login Button */}
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-base font-semibold h-12 mb-6"
              onClick={() => {
                window.location.href = getLoginUrl();
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
              </svg>
              Sign in with Manus
            </Button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mb-8">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                Create one
              </button>
            </p>

            {/* Back to Home */}
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-900 hover:bg-gray-50"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 space-y-4">
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-purple-300 hover:bg-purple-50 transition-all">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Lock className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Secure & Private</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Your memories are encrypted and protected
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-purple-300 hover:bg-purple-50 transition-all">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Connect & Share</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Build meaningful connections with loved ones
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-purple-300 hover:bg-purple-50 transition-all">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                  <Heart className="h-5 w-5 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Create Legacy</h3>
                <p className="text-xs text-gray-600 mt-1">
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
