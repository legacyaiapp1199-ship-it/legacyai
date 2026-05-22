import { useLocation } from "wouter";
import { Sparkles, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
            Get In Touch
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px"
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "32px",
                color: "#111827"
              }}>
                Contact Information
              </h2>

              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
                  <Mail className="h-6 w-6" style={{ color: "#a855f7", flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                      Email
                    </h3>
                    <p style={{ color: "#4b5563" }}>support@legacyai.com</p>
                    <p style={{ color: "#4b5563", fontSize: "14px" }}>We'll respond within 24 hours</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
                  <Phone className="h-6 w-6" style={{ color: "#3b82f6", flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                      Phone
                    </h3>
                    <p style={{ color: "#4b5563" }}>+1 (555) 123-4567</p>
                    <p style={{ color: "#4b5563", fontSize: "14px" }}>Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <MapPin className="h-6 w-6" style={{ color: "#ec4899", flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                      Address
                    </h3>
                    <p style={{ color: "#4b5563" }}>123 Memory Lane</p>
                    <p style={{ color: "#4b5563" }}>San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                padding: "24px",
                marginTop: "32px"
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                  Other Ways to Reach Us
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "8px" }}>
                    <a href="#" style={{ color: "#a855f7", textDecoration: "none" }}>
                      Twitter @LegacyAI
                    </a>
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    <a href="#" style={{ color: "#a855f7", textDecoration: "none" }}>
                      Facebook /LegacyAI
                    </a>
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    <a href="#" style={{ color: "#a855f7", textDecoration: "none" }}>
                      Instagram @LegacyAI
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#a855f7", textDecoration: "none" }}>
                      LinkedIn /company/legacyai
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px"
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box"
                    }}
                    required
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px"
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box"
                    }}
                    required
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px"
                  }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box"
                    }}
                    required
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px"
                  }}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      minHeight: "150px",
                      fontFamily: "inherit"
                    }}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
                    color: "white",
                    fontWeight: "600",
                    padding: "12px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
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
