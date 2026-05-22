import { useLocation } from "wouter";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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

      {/* Content */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "32px",
            color: "#111827"
          }}>
            Privacy Policy
          </h1>

          <div style={{ color: "#4b5563", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "24px", fontSize: "14px", color: "#6b7280" }}>
              Last updated: May 2026
            </p>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                1. Introduction
              </h2>
              <p style={{ marginBottom: "12px" }}>
                LegacyAI ("we", "us", "our", or "Company") operates the LegacyAI website and mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                2. Information Collection and Use
              </h2>
              <p style={{ marginBottom: "12px" }}>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Types of Data Collected:
              </h3>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>Personal Data: Name, email address, phone number, postal address</li>
                <li style={{ marginBottom: "8px" }}>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
                <li style={{ marginBottom: "8px" }}>Memory Data: Photos, videos, stories, and other content you upload</li>
                <li>Cookies and Tracking: We use cookies to track activity on our Service</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                3. Use of Data
              </h2>
              <p style={{ marginBottom: "12px" }}>
                LegacyAI uses the collected data for various purposes:
              </p>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>To provide and maintain our Service</li>
                <li style={{ marginBottom: "8px" }}>To notify you about changes to our Service</li>
                <li style={{ marginBottom: "8px" }}>To allow you to participate in interactive features of our Service</li>
                <li style={{ marginBottom: "8px" }}>To provide customer support</li>
                <li style={{ marginBottom: "8px" }}>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                4. Security of Data
              </h2>
              <p style={{ marginBottom: "12px" }}>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                5. Your Rights
              </h2>
              <p style={{ marginBottom: "12px" }}>
                You have the right to:
              </p>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>Access your personal data</li>
                <li style={{ marginBottom: "8px" }}>Correct inaccurate data</li>
                <li style={{ marginBottom: "8px" }}>Request deletion of your data</li>
                <li style={{ marginBottom: "8px" }}>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                6. Contact Us
              </h2>
              <p style={{ marginBottom: "12px" }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>Email: privacy@legacyai.com</p>
              <p>Address: 123 Memory Lane, San Francisco, CA 94105</p>
            </section>
          </div>
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
