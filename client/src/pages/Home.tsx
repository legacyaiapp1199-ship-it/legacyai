import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Zap, Sparkles, Shield, Infinity } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Navigation */}
      <nav style={{ 
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)"
      }} className="sticky top-0 z-50">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem" }} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div style={{ 
              background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span style={{ fontSize: "20px", fontWeight: "bold", color: "#111827" }}>LegacyAI</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              style={{ color: "#374151" }}
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/signup")}
              style={{
                background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
                color: "white",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)"
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f3e8ff 50%, #eff6ff 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(168, 85, 247, 0.15)",
          filter: "blur(80px)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-160px",
          left: "-160px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.15)",
          filter: "blur(80px)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "896px", margin: "0 auto", textAlign: "center" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              border: "1px solid #e9d5ff",
              backgroundColor: "#faf5ff",
              padding: "8px 16px",
              marginBottom: "24px"
            }}>
              <Sparkles className="h-4 w-4" style={{ color: "#a855f7" }} />
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#a855f7" }}>Welcome to LegacyAI</span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: "56px",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "24px",
              color: "#111827"
            }}>
              <span style={{
                background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Preserve Your Legacy
              </span>
              <br />
              <span style={{ color: "#111827" }}>Share Memories Forever</span>
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: "18px",
              color: "#4b5563",
              marginBottom: "32px",
              maxWidth: "640px",
              margin: "0 auto 32px",
              lineHeight: "1.6"
            }}>
              Create a beautiful digital legacy by sharing your most precious moments. 
              Connect with loved ones and preserve stories for future generations.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Button
                  onClick={() => navigate("/signup")}
                  style={{
                    background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "16px",
                    padding: "12px 32px",
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8px"
                  }}
                >
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                  style={{
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    fontWeight: "600",
                    fontSize: "16px",
                    padding: "12px 32px",
                    backgroundColor: "white",
                    cursor: "pointer",
                    borderRadius: "8px"
                  }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: "64px", textAlign: "center" }}>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#111827"
            }}>
              Why Choose LegacyAI?
            </h2>
            <p style={{
              fontSize: "18px",
              color: "#4b5563",
              maxWidth: "640px",
              margin: "0 auto"
            }}>
              Everything you need to create, share, and preserve your digital legacy
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px"
          }}>
            {/* Feature 1 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#d8b4fe";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(168, 85, 247, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#fce7f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Heart className="h-6 w-6" style={{ color: "#a855f7" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Share Memories</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Post photos, stories, and moments that matter most to you. Organize memories by date and create beautiful timelines.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#bfdbfe";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(59, 130, 246, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#dbeafe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Users className="h-6 w-6" style={{ color: "#3b82f6" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Connect & Follow</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Build meaningful connections with loved ones. Follow friends and family to stay updated on their stories.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fbcfe8";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(236, 72, 153, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#fce7f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Infinity className="h-6 w-6" style={{ color: "#ec4899" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Create Legacy</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Preserve your stories forever. Create a lasting digital legacy that future generations can discover and cherish.
              </p>
            </div>

            {/* Feature 4 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#bbf7d0";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(34, 197, 94, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Shield className="h-6 w-6" style={{ color: "#22c55e" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Secure & Private</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Your memories are encrypted and protected. Control who sees your content with granular privacy settings.
              </p>
            </div>

            {/* Feature 5 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fef08a";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(202, 138, 4, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Sparkles className="h-6 w-6" style={{ color: "#ca8a04" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>AI-Powered</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Intelligent organization and discovery. AI helps you find and relive your favorite memories effortlessly.
              </p>
            </div>

            {/* Feature 6 */}
            <div style={{
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fed7aa";
              e.currentTarget.style.boxShadow = "0 20px 25px rgba(249, 115, 22, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#ffedd5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px"
              }}>
                <Zap className="h-6 w-6" style={{ color: "#f97316" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Lightning Fast</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Optimized performance for seamless browsing. Access your memories instantly, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", textAlign: "center", position: "relative", zIndex: 10 }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "white"
          }}>
            Ready to Preserve Your Legacy?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "32px",
            maxWidth: "640px",
            margin: "0 auto 32px"
          }}>
            Join thousands of users creating beautiful digital legacies today
          </p>
          <Button
            onClick={() => navigate("/signup")}
            style={{
              backgroundColor: "white",
              color: "#a855f7",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 32px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              border: "none",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#f9fafb",
        paddingTop: "48px",
        paddingBottom: "48px"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginBottom: "32px"
          }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span style={{ fontWeight: "600", color: "#111827" }}>LegacyAI</span>
              </div>
              <p style={{ fontSize: "14px", color: "#4b5563" }}>
                Preserve your legacy, share your memories
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: "16px", fontWeight: "600", color: "#111827" }}>Product</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="/features" onClick={(e) => { e.preventDefault(); navigate("/features"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Features</a></li>
                <li><a href="/pricing" onClick={(e) => { e.preventDefault(); navigate("/pricing"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Pricing</a></li>
                <li><a href="/security" onClick={(e) => { e.preventDefault(); navigate("/security"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Security</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: "16px", fontWeight: "600", color: "#111827" }}>Company</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>About</a></li>
                <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Contact</a></li>
                <li><a href="#" style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none" }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: "16px", fontWeight: "600", color: "#111827" }}>Legal</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate("/privacy"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Privacy</a></li>
                <li><a href="/terms" onClick={(e) => { e.preventDefault(); navigate("/terms"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Terms</a></li>
                <li><a href="/cookies" onClick={(e) => { e.preventDefault(); navigate("/cookies"); }} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", cursor: "pointer" }}>Cookies</a></li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "32px",
            textAlign: "center",
            fontSize: "14px",
            color: "#4b5563"
          }}>
            <p>© 2026 LegacyAI. All rights reserved. Made with ❤️ for your memories.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
