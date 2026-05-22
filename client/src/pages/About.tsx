import { useLocation } from "wouter";
import { Sparkles, Heart, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
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
            About LegacyAI
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            We believe everyone deserves to preserve and share their most precious memories with the people they love.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center"
          }}>
            <div>
              <h2 style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "24px",
                color: "#111827"
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: "16px",
                color: "#4b5563",
                lineHeight: "1.8",
                marginBottom: "16px"
              }}>
                LegacyAI was founded with a simple belief: memories are precious, and they deserve to be preserved forever. In a world where moments pass quickly, we created a platform to help you capture, organize, and share the stories that matter most.
              </p>
              <p style={{
                fontSize: "16px",
                color: "#4b5563",
                lineHeight: "1.8"
              }}>
                We use advanced AI technology to help you rediscover forgotten moments, connect with loved ones, and create a lasting digital legacy for future generations.
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              borderRadius: "16px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
            }}>
              <Heart className="h-32 w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "48px",
            color: "#111827",
            textAlign: "center"
          }}>
            Our Values
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px"
          }}>
            {[
              {
                icon: Heart,
                title: "User-Centric",
                description: "We put your needs first. Every feature is designed with you in mind."
              },
              {
                icon: Target,
                title: "Privacy First",
                description: "Your memories are yours alone. We never sell or misuse your data."
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We constantly improve with AI and technology to serve you better."
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in bringing people together to share and celebrate life."
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "32px",
                    border: "1px solid #e5e7eb",
                    textAlign: "center"
                  }}
                >
                  <Icon className="h-12 w-12" style={{ color: "#a855f7", margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    {value.title}
                  </h3>
                  <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "48px",
            color: "#111827",
            textAlign: "center"
          }}>
            Our Team
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px"
          }}>
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                bio: "Passionate about preserving memories and connecting people. 10+ years in tech."
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                bio: "AI and machine learning expert. Building the future of memory technology."
              },
              {
                name: "Emily Thompson",
                role: "Head of Design",
                bio: "UX/UI specialist focused on creating beautiful, intuitive experiences."
              },
              {
                name: "David Kim",
                role: "Head of Security",
                bio: "Security expert with 15+ years protecting user data and privacy."
              }
            ].map((member, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid #e5e7eb",
                  textAlign: "center"
                }}
              >
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                  margin: "0 auto 16px"
                }} />
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#a855f7", fontWeight: "500", marginBottom: "12px" }}>
                  {member.role}
                </p>
                <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.6" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%)",
        paddingTop: "80px",
        paddingBottom: "80px"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            textAlign: "center"
          }}>
            {[
              { number: "100K+", label: "Users" },
              { number: "50M+", label: "Memories Preserved" },
              { number: "180+", label: "Countries" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "8px"
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.9)"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#111827"
          }}>
            Join Our Community
          </h2>
          <p style={{
            fontSize: "18px",
            color: "#4b5563",
            marginBottom: "32px"
          }}>
            Start preserving your legacy today
          </p>
          <Button
            onClick={() => navigate("/signup")}
            style={{
              background: "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 32px",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            Get Started Now
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
