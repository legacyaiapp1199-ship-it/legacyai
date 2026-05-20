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
    background: "rgba(17,24,39,0.85)",
    border: "1px solid rgba(168,85,247,0.15)",
    borderRadius: "28px",
    padding: "35px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 25px rgba(168,85,247,0.12)",
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top,#111827 0%,#050816 45%,#02030d 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "160px",
            height: "160px",
            background:
              "radial-gradient(circle,#9333ea 0%,transparent 70%)",
            position: "absolute",
            filter: "blur(60px)",
          }}
        ></div>

        <h1
          style={{
            fontSize: "clamp(70px,12vw,130px)",
            fontWeight: "900",
            background:
              "linear-gradient(90deg,#9333ea,#c084fc,#ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "25px",
            zIndex: 2,
          }}
        >
          LegacyAI
        </h1>

        <p
          style={{
            maxWidth: "850px",
            fontSize: "clamp(22px,3vw,34px)",
            lineHeight: "1.7",
            color: "#d1d5db",
            marginBottom: "60px",
            zIndex: 2,
          }}
        >
          Transform your memories into an eternal AI-powered
          digital legacy for future generations.
        </p>

        {/* AUTH */}

        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            ...cardStyle,
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "30px",
              fontWeight: "800",
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
                  padding: "18px",
                  marginBottom: "20px",
                  borderRadius: "18px",
                  border: "none",
                  background: "#1f2937",
                  color: "white",
                  fontSize: "18px",
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
                  padding: "18px",
                  marginBottom: "25px",
                  borderRadius: "18px",
                  border: "none",
                  background: "#1f2937",
                  color: "white",
                  fontSize: "18px",
                }}
              />

              <button
                onClick={handleSignup}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(90deg,#9333ea,#c084fc)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "800",
                  cursor: "pointer",
                  marginBottom: "18px",
                  boxShadow:
                    "0 0 25px rgba(168,85,247,0.5)",
                }}
              >
                Sign Up
              </button>

              <button
                onClick={handleLogin}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "2px solid #9333ea",
                  background: "transparent",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "800",
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
                  fontSize: "22px",
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
                }}
              >
                {user.email}
              </p>

              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "18px",
                  border: "none",
                  background: "#ef4444",
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "800",
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
          padding: "100px 20px",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "70px",
            marginBottom: "70px",
            fontWeight: "900",
          }}
        >
          Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
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
            <div key={index} style={cardStyle}>
              <h3
                style={{
                  color: "#c084fc",
                  fontSize: "40px",
                  marginBottom: "25px",
                  fontWeight: "800",
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

      {/* HOW IT WORKS */}

      <section
        style={{
          padding: "100px 20px",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "70px",
            marginBottom: "70px",
            fontWeight: "900",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
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
            <div key={index} style={cardStyle}>
              <h3
                style={{
                  color: "#c084fc",
                  fontSize: "38px",
                  marginBottom: "20px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                  fontSize: "21px",
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
          padding: "80px 20px",
          color: "#9ca3af",
          fontSize: "22px",
        }}
      >
        © 2026 LegacyAI — The Future of Human Memory
      </footer>
    </div>
  );
}
