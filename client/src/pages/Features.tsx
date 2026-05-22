import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Zap, Sparkles, Shield, Infinity, Camera, MessageSquare, Share2, Clock, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: Camera,
      title: "Rich Media Support",
      description: "Share photos, videos, and documents. Upload memories in multiple formats with automatic optimization for fast loading and beautiful display across all devices.",
      color: "#ec4899"
    },
    {
      icon: Heart,
      title: "Memory Organization",
      description: "Organize your memories by date, location, or custom tags. Create beautiful timelines and albums to preserve stories chronologically or thematically.",
      color: "#a855f7"
    },
    {
      icon: Users,
      title: "Social Connections",
      description: "Follow friends and family to see their memories. Build meaningful connections and stay updated on the stories that matter most to you.",
      color: "#3b82f6"
    },
    {
      icon: MessageSquare,
      title: "Comments & Reactions",
      description: "Engage with memories through comments and reactions. Leave heartfelt messages and celebrate important moments with your loved ones.",
      color: "#22c55e"
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description: "Control who sees your memories with granular privacy settings. Share publicly, with followers, or privately with specific people.",
      color: "#f97316"
    },
    {
      icon: Clock,
      title: "Memory Timeline",
      description: "Visualize your life journey through interactive timelines. Explore memories chronologically and relive important moments from different eras.",
      color: "#ca8a04"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Discovery",
      description: "AI automatically organizes and suggests memories. Rediscover forgotten moments and get personalized recommendations based on your memories.",
      color: "#06b6d4"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your memories are protected with military-grade encryption. Your personal stories remain private and secure at all times.",
      color: "#8b5cf6"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamless experience on all devices. Access your memories anytime, anywhere with our optimized mobile and desktop applications.",
      color: "#ef4444"
    }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Navigation */}
      <nav style={{ 
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)"
      }} className="sticky top-0 z-50">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem" }} className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
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
                fontWeight: "600"
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
        paddingBottom: "80px"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "#111827"
          }}>
            Powerful Features for Your Legacy
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Everything you need to create, preserve, and share your digital legacy with the people who matter most.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px"
          }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                    padding: "32px",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = feature.color;
                    e.currentTarget.style.boxShadow = `0 20px 25px ${feature.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: `${feature.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px"
                  }}>
                    <Icon className="h-6 w-6" style={{ color: feature.color }} />
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%)",
        paddingTop: "80px",
        paddingBottom: "80px"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "white"
          }}>
            Ready to Start Your Legacy?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "32px"
          }}>
            Join thousands of users preserving their memories today
          </p>
          <Button
            onClick={() => navigate("/signup")}
            style={{
              backgroundColor: "white",
              color: "#a855f7",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 32px",
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#4b5563" }}>
            © 2026 LegacyAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
