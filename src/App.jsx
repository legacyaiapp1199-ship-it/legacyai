import React, { useState } from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcBd8zyTt8BhWxYbYJgC5nO5jfSQcEWLo",
  authDomain: "legacyai-34c5a.firebaseapp.com",
  projectId: "legacyai-34c5a",
  storageBucket: "legacyai-34c5a.appspot.com",
  messagingSenderId: "307910083498",
  appId: "1:307910083498:web:82b7484d5805b49324a1d3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function App() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(result.user);

      setMessage("Account created successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(result.user);

      setMessage("Logged in successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);

    setUser(null);

    setMessage("Logged out successfully!");
  };

  const cardStyle = {
    background: "rgba(17,24,39,0.82)",
    border: "1px solid rgba(168,85,247,0.18)",
    borderRadius: "32px",
    padding: "40px",
    backdropFilter: "blur(16px)",
    boxShadow: "0 0 30px rgba(168,85,247,0.12)",
  };

  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            overflow-x:hidden;
            background:#02030d;
          }

          html{
            scroll-behavior:smooth;
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes floatingGlow {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-40px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .floating-bg {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(168,85,247,0.15);
            filter: blur(120px);
            animation: floatingGlow 8s ease-in-out infinite;
            z-index: 0;
          }

          .main-button{
            transition:0.3s;
          }

          .main-button:hover{
            transform:translateY(-4px) scale(1.02);
            box-shadow:0 0 40px rgba(168,85,247,0.8);
          }

          .feature-card{
            transition:0.35s;
          }

          .feature-card:hover{
            transform:translateY(-10px);
            border:1px solid rgba(192,132,252,0.4);
            box-shadow:0 0 40px rgba(168,85,247,0.2);
          }

          input{
            outline:none;
          }

          input:focus{
            border:1px solid #9333ea;
            box-shadow:0 0 20px rgba(168,85,247,0.3);
          }
        `}
      </style>

      <div
        style={{
          background:
            "linear-gradient(-45deg,#02030d,#050816,#111827,#1e1b4b)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 15s ease infinite",
          minHeight: "100vh",
          color: "white",
          fontFamily: "Arial",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* BACKGROUND GLOW */}

        <div
          className="floating-bg"
          style={{
            top: "5%",
            left: "-10%",
          }}
        ></div>

        <div
          className="floating-bg"
          style={{
            bottom: "10%",
            right: "-10%",
            animationDelay: "4s",
          }}
        ></div>

        {/* HERO */}

        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "60px 20px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(72px,12vw,140px)",
              fontWeight: "900",
              background:
                "linear-gradient(90deg,#9333ea,#c084fc,#ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "30px",
              textShadow: "0 0 35px rgba(168,85,247,0.4)",
            }}
          >
            LegacyAI
          </h1>

          <p
            style={{
              maxWidth: "900px",
              fontSize: "clamp(24px,3vw,36px)",
              lineHeight: "1.7",
              color: "#d1d5db",
              marginBottom: "70px",
            }}
          >
            Transform your memories into an eternal AI-powered
            digital legacy for future generations.
          </p>

          {/* AUTH CARD */}

          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              ...cardStyle,
            }}
          >
            <h2
              style={{
                fontSize: "56px",
                marginBottom: "35px",
                fontWeight: "900",
              }}
            >
              {user ? "Welcome Back" : "Create Account"}
            </h2>

            {!user && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    border: "1px solid transparent",
                    background: "#1f2937",
                    color: "white",
                    fontSize: "20px",
                  }}
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "20px",
                    marginBottom: "25px",
                    borderRadius: "20px",
                    border: "1px solid transparent",
                    background: "#1f2937",
                    color: "white",
                    fontSize: "20px",
                  }}
                />

                <button
                  className="main-button"
                  onClick={handleSignup}
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "22px",
                    border: "none",
                    background:
                      "linear-gradient(90deg,#9333ea,#c084fc)",
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "900",
                    cursor: "pointer",
                    marginBottom: "18px",
                    boxShadow:
                      "0 0 30px rgba(168,85,247,0.5)",
                  }}
                >
                  Sign Up
                </button>

                <button
                  className="main-button"
                  onClick={handleLogin}
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "22px",
                    border: "2px solid #9333ea",
                    background: "transparent",
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </>
            )}

            {user && (
              <>
                <p
                  style={{
                    fontSize: "24px",
                    color: "#c084fc",
                    marginBottom: "20px",
                  }}
                >
                  Logged in as:
                </p>

                <p
                  style={{
                    color: "#d1d5db",
                    marginBottom: "30px",
                    fontSize: "18px",
                  }}
                >
                  {user.email}
                </p>

                <button
                  className="main-button"
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "18px",
                    borderRadius: "20px",
                    border: "none",
                    background: "#ef4444",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </>
            )}

            {message && (
              <p
                style={{
                  marginTop: "20px",
                  color: "#c084fc",
                  fontSize: "18px",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </section>

        {/* FEATURES */}

        <section
          style={{
            padding: "120px 20px",
            maxWidth: "1400px",
            margin: "auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(60px,9vw,90px)",
              marginBottom: "80px",
              fontWeight: "900",
            }}
          >
            Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "35px",
            }}
          >
            {[
              {
                title: "AI Memory",
                text: "Preserve conversations, voice, photos and experiences forever using advanced AI.",
              },
              {
                title: "Emotional Legacy",
                text: "Allow future generations to interact with your memories and wisdom naturally.",
              },
              {
                title: "Secure Forever",
                text: "End-to-end encrypted cloud infrastructure keeps your memories secure forever.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card"
                style={cardStyle}
              >
                <h3
                  style={{
                    color: "#c084fc",
                    fontSize: "44px",
                    marginBottom: "25px",
                    fontWeight: "900",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.9",
                    fontSize: "23px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}

        <section
          style={{
            padding: "120px 20px",
            maxWidth: "1400px",
            margin: "auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(60px,9vw,90px)",
              marginBottom: "80px",
              fontWeight: "900",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "35px",
            }}
          >
            {[
              {
                title: "1. Upload Memories",
                text: "Upload photos, stories, conversations and life experiences.",
              },
              {
                title: "2. AI Processing",
                text: "Advanced AI transforms your memories into a digital personality.",
              },
              {
                title: "3. Live Forever",
                text: "Future generations can interact with your digital legacy forever.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card"
                style={cardStyle}
              >
                <h3
                  style={{
                    color: "#c084fc",
                    fontSize: "42px",
                    marginBottom: "25px",
                    fontWeight: "900",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.9",
                    fontSize: "22px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            textAlign: "center",
            padding: "100px 20px",
            color: "#9ca3af",
            fontSize: "24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          © 2026 LegacyAI — The Future of Human Memory
        </footer>
      </div>
    </>
  );
}
