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

  // REGISTER

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

  // LOGIN

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

  // LOGOUT

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setUser(null);

      setMessage("Logged out successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#050816 0%,#0b1026 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#a855f7",
            marginBottom: "20px",
          }}
        >
          LegacyAI
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            maxWidth: "750px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Transform your memories into an eternal AI-powered
          digital legacy for future generations.
        </p>

        {/* AUTH CARD */}

        <div
          style={{
            background: "#111827",
            padding: "40px",
            borderRadius: "25px",
            width: "100%",
            maxWidth: "420px",
            boxShadow: "0 0 40px rgba(168,85,247,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "25px",
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
                  padding: "15px",
                  borderRadius: "12px",
                  border: "none",
                  marginBottom: "20px",
                  fontSize: "16px",
                  background: "#1f2937",
                  color: "white",
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
                  padding: "15px",
                  borderRadius: "12px",
                  border: "none",
                  marginBottom: "20px",
                  fontSize: "16px",
                  background: "#1f2937",
                  color: "white",
                }}
              />

              <button
                onClick={handleSignup}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background:
                    "linear-gradient(90deg,#9333ea,#c084fc)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginBottom: "15px",
                }}
              >
                Sign Up
              </button>

              <button
                onClick={handleLogin}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid #9333ea",
                  background: "transparent",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
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
                  marginBottom: "20px",
                  color: "#c084fc",
                  fontSize: "18px",
                }}
              >
                Logged in as:
              </p>

              <p
                style={{
                  marginBottom: "30px",
                  color: "#cbd5e1",
                }}
              >
                {user.email}
              </p>

              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#ef4444",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
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
                fontSize: "15px",
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
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "60px",
            fontWeight: "bold",
          }}
        >
          Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {/* CARD 1 */}

          <div
            style={{
              background: "#111827",
              padding: "40px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              AI Memory
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "20px",
              }}
            >
              Preserve conversations, voice, photos and
              experiences forever using advanced AI.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            style={{
              background: "#111827",
              padding: "40px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              Emotional Legacy
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "20px",
              }}
            >
              Allow future generations to interact with your
              memories and wisdom naturally.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            style={{
              background: "#111827",
              padding: "40px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              Secure Forever
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "20px",
              }}
            >
              End-to-end encrypted cloud infrastructure keeps
              your memories secure forever.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "60px",
            fontWeight: "bold",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#111827",
              padding: "35px",
              borderRadius: "25px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              1. Upload Memories
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
              }}
            >
              Upload photos, stories, conversations and life
              experiences.
            </p>
          </div>

          <div
            style={{
              background: "#111827",
              padding: "35px",
              borderRadius: "25px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              2. AI Processing
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
              }}
            >
              Advanced AI transforms your memories into a
              digital personality.
            </p>
          </div>

          <div
            style={{
              background: "#111827",
              padding: "35px",
              borderRadius: "25px",
            }}
          >
            <h3
              style={{
                color: "#c084fc",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              3. Live Forever
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
              }}
            >
              Future generations can interact with your digital
              legacy forever.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          textAlign: "center",
          padding: "60px 20px",
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        © 2026 LegacyAI — The Future of Human Memory
      </footer>
    </div>
  );
}
