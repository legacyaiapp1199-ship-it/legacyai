import { useLocation } from "wouter";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [, navigate] = useLocation();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Up to 100 memories",
        "Basic memory organization",
        "Share with followers",
        "Comment and reactions",
        "1 GB storage",
        "Mobile app access"
      ],
      highlighted: false
    },
    {
      name: "Creator",
      price: "$9.99",
      period: "/month",
      description: "For active memory keepers",
      features: [
        "Unlimited memories",
        "Advanced AI organization",
        "Private albums",
        "Memory timeline",
        "50 GB storage",
        "Priority support",
        "Custom themes",
        "Family sharing (up to 5 people)"
      ],
      highlighted: true
    },
    {
      name: "Legacy",
      price: "$19.99",
      period: "/month",
      description: "For legacy preservation",
      features: [
        "Everything in Creator",
        "500 GB storage",
        "Legacy planning tools",
        "Lifetime access guarantee",
        "Advanced privacy controls",
        "24/7 priority support",
        "Legacy vault (encrypted backup)",
        "Family sharing (unlimited)"
      ],
      highlighted: false
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
            Simple, Transparent Pricing
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Choose the perfect plan to preserve and share your digital legacy. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            {plans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  borderRadius: "16px",
                  border: plan.highlighted ? "2px solid #a855f7" : "1px solid #e5e7eb",
                  background: plan.highlighted 
                    ? "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)"
                    : "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                  padding: "40px",
                  position: "relative",
                  transform: plan.highlighted ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = plan.highlighted 
                    ? "0 25px 50px rgba(168, 85, 247, 0.15)"
                    : "0 10px 25px rgba(0, 0, 0, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#a855f7",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                  {plan.name}
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "24px", fontSize: "14px" }}>
                  {plan.description}
                </p>
                
                <div style={{ marginBottom: "24px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ color: "#4b5563", marginLeft: "8px" }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => navigate("/signup")}
                  style={{
                    width: "100%",
                    background: plan.highlighted
                      ? "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)"
                      : "#f3f4f6",
                    color: plan.highlighted ? "white" : "#111827",
                    fontWeight: "600",
                    padding: "12px",
                    marginBottom: "24px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none"
                  }}
                >
                  Get Started
                </Button>

                <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "24px" }}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                      <Check className="h-5 w-5" style={{ color: "#22c55e", flexShrink: 0 }} />
                      <span style={{ color: "#4b5563", fontSize: "14px" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "48px",
            color: "#111827",
            textAlign: "center"
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            {[
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes! You can change your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, start with our free Starter plan with up to 100 memories and 1GB storage."
              },
              {
                q: "What happens if I cancel?",
                a: "Your memories remain accessible. You'll be downgraded to the free Starter plan."
              },
              {
                q: "Do you offer discounts?",
                a: "Yes! Annual subscriptions get 20% off. Contact us for enterprise pricing."
              }
            ].map((faq, idx) => (
              <div key={idx} style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e5e7eb"
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", fontSize: "14px" }}>
                  {faq.a}
                </p>
              </div>
            ))}
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
            Start Preserving Your Legacy Today
          </h2>
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
