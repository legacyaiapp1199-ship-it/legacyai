import { useLocation } from "wouter";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cookies() {
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
            Cookie Policy
          </h1>

          <div style={{ color: "#4b5563", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "24px", fontSize: "14px", color: "#6b7280" }}>
              Last updated: May 2026
            </p>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                1. What Are Cookies?
              </h2>
              <p style={{ marginBottom: "12px" }}>
                Cookies are small files of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                2. How We Use Cookies
              </h2>
              <p style={{ marginBottom: "12px" }}>
                We use cookies for the following purposes:
              </p>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>Authentication: To keep you logged in to your account</li>
                <li style={{ marginBottom: "8px" }}>Preferences: To remember your settings and preferences</li>
                <li style={{ marginBottom: "8px" }}>Analytics: To understand how you use our Service</li>
                <li style={{ marginBottom: "8px" }}>Security: To protect against fraud and maintain account security</li>
                <li>Performance: To optimize the speed and performance of our Service</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                3. Types of Cookies We Use
              </h2>
              
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Essential Cookies
              </h3>
              <p style={{ marginBottom: "12px" }}>
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in or filling in forms.
              </p>

              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Performance Cookies
              </h3>
              <p style={{ marginBottom: "12px" }}>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </p>

              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Functional Cookies
              </h3>
              <p style={{ marginBottom: "12px" }}>
                These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
              </p>

              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Targeting Cookies
              </h3>
              <p style={{ marginBottom: "12px" }}>
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                4. How to Control Cookies
              </h2>
              <p style={{ marginBottom: "12px" }}>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website and some services and functionalities may not work.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                5. Third-Party Cookies
              </h2>
              <p style={{ marginBottom: "12px" }}>
                In some special cases we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this website:
              </p>
              <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                <li style={{ marginBottom: "8px" }}>Google Analytics: For website traffic analysis</li>
                <li style={{ marginBottom: "8px" }}>Stripe: For payment processing</li>
                <li>Mixpanel: For user behavior analytics</li>
              </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                6. Your Consent
              </h2>
              <p style={{ marginBottom: "12px" }}>
                By using our website, you consent to our use of cookies as described in this policy. If you do not agree with our use of cookies, please do not use our website.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                7. Changes to This Policy
              </h2>
              <p style={{ marginBottom: "12px" }}>
                We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                8. Contact Us
              </h2>
              <p style={{ marginBottom: "12px" }}>
                If you have any questions about this Cookie Policy, please contact us at:
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
