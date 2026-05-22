import { useLocation } from "wouter";
import { Sparkles, Shield, Lock, Eye, Server, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Security() {
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
            Your Privacy & Security Matter
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            We protect your memories with enterprise-grade security and absolute transparency about your data.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginBottom: "80px"
          }}>
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description: "All your memories are encrypted with AES-256 encryption. Only you can decrypt and access your content.",
                color: "#a855f7"
              },
              {
                icon: Shield,
                title: "Data Protection",
                description: "We comply with GDPR, CCPA, and other international data protection regulations to safeguard your privacy.",
                color: "#3b82f6"
              },
              {
                icon: Eye,
                title: "Privacy Controls",
                description: "You have complete control over who sees your memories. Granular privacy settings for every memory.",
                color: "#ec4899"
              },
              {
                icon: Server,
                title: "Secure Infrastructure",
                description: "Your data is stored on secure, redundant servers with automatic backups and disaster recovery.",
                color: "#22c55e"
              },
              {
                icon: AlertCircle,
                title: "Security Monitoring",
                description: "24/7 monitoring and threat detection to identify and prevent unauthorized access attempts.",
                color: "#f97316"
              },
              {
                icon: CheckCircle,
                title: "Regular Audits",
                description: "Third-party security audits and penetration testing ensure our systems remain secure and compliant.",
                color: "#06b6d4"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                    padding: "32px",
                    transition: "all 0.3s ease"
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

      {/* Compliance Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "48px",
            color: "#111827",
            textAlign: "center"
          }}>
            Compliance & Certifications
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px"
          }}>
            {[
              { name: "GDPR Compliant", desc: "EU General Data Protection Regulation" },
              { name: "CCPA Compliant", desc: "California Consumer Privacy Act" },
              { name: "SOC 2 Type II", desc: "Security and Availability Controls" },
              { name: "ISO 27001", desc: "Information Security Management" },
              { name: "HIPAA Ready", desc: "Healthcare Data Protection" },
              { name: "PCI DSS", desc: "Payment Card Industry Standards" }
            ].map((cert, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid #e5e7eb",
                  textAlign: "center"
                }}
              >
                <CheckCircle className="h-8 w-8" style={{ color: "#22c55e", margin: "0 auto 12px" }} />
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                  {cert.name}
                </h3>
                <p style={{ color: "#4b5563", fontSize: "14px" }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "48px",
            color: "#111827",
            textAlign: "center"
          }}>
            How We Handle Your Data
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            {[
              {
                title: "Data Collection",
                items: [
                  "Only collect data necessary for the service",
                  "No tracking or behavioral profiling",
                  "No selling data to third parties",
                  "Transparent about what we collect"
                ]
              },
              {
                title: "Data Storage",
                items: [
                  "Encrypted at rest with AES-256",
                  "Redundant storage across multiple regions",
                  "Automatic daily backups",
                  "Disaster recovery protocols"
                ]
              },
              {
                title: "Data Access",
                items: [
                  "Only authorized personnel can access",
                  "Strict access logging and monitoring",
                  "Regular security audits",
                  "You can export or delete anytime"
                ]
              }
            ].map((section, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "12px",
                  padding: "32px",
                  border: "1px solid #e5e7eb"
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", marginBottom: "12px", color: "#4b5563" }}>
                      <CheckCircle className="h-5 w-5" style={{ color: "#22c55e", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            Security Questions?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "32px"
          }}>
            Contact our security team at security@legacyai.com
          </p>
          <Button
            onClick={() => navigate("/contact")}
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
            Contact Us
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
