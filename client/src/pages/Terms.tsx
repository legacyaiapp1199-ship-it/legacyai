import { useLocation } from "wouter";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
            Terms of Service
          </h1>

          <div style={{ color: "#4b5563", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "24px", fontSize: "14px", color: "#6b7280" }}>
              Last updated: May 2026
            </p>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ marginBottom: "12px" }}>
                By accessing and using LegacyAI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                2. Use License
              </h2>
              <p style={{ marginBottom: "12px" }}>
                Permission is granted to temporarily download one copy of the materials (information or software) on LegacyAI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>Modifying or copying the materials</li>
                <li style={{ marginBottom: "8px" }}>Using the materials for any commercial purpose or for any public display</li>
                <li style={{ marginBottom: "8px" }}>Attempting to decompile or reverse engineer any software contained on LegacyAI</li>
                <li style={{ marginBottom: "8px" }}>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                3. Disclaimer
              </h2>
              <p style={{ marginBottom: "12px" }}>
                The materials on LegacyAI are provided on an 'as is' basis. LegacyAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                4. Limitations
              </h2>
              <p style={{ marginBottom: "12px" }}>
                In no event shall LegacyAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LegacyAI, even if LegacyAI or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                5. Accuracy of Materials
              </h2>
              <p style={{ marginBottom: "12px" }}>
                The materials appearing on LegacyAI could include technical, typographical, or photographic errors. LegacyAI does not warrant that any of the materials on its website are accurate, complete, or current. LegacyAI may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                6. Links
              </h2>
              <p style={{ marginBottom: "12px" }}>
                LegacyAI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by LegacyAI of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                7. Modifications
              </h2>
              <p style={{ marginBottom: "12px" }}>
                LegacyAI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                8. Governing Law
              </h2>
              <p style={{ marginBottom: "12px" }}>
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                9. Contact Us
              </h2>
              <p style={{ marginBottom: "12px" }}>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>Email: legal@legacyai.com</p>
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
