import React from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
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
  const handleSignup = async () => {
    const email = prompt("Enter your email");
    const password = prompt("Enter your password");

    if (!email || !password) return;

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully!");
    } catch (error) {
      alert(error.message);
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
      {/* HERO */}

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            color: "#a855f7",
            fontWeight: "bold",
          }}
        >
          LegacyAI
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            maxWidth: "700px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Transform your memories into an eternal AI-powered
          digital legacy for future generations.
        </p>

        <button
          onClick={handleSignup}
          style={{
            padding: "18px 50px",
            borderRadius: "18px",
            border: "none",
            background:
              "linear-gradient(90deg,#9333ea,#c084fc)",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 30px rgba(168,85,247,0.5)",
          }}
        >
          Create Your Legacy
        </button>
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
            fontSize: "42px",
            marginBottom: "60px",
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
          <div
            style={{
              background: "#111827",
              padding: "35px",
              borderRadius: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: "#c084fc",
              }}
            >
              AI Memory
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Preserve conversations, voice, photos and
              experiences forever using advanced AI.
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
                fontSize: "28px",
                marginBottom: "20px",
                color: "#c084fc",
              }}
            >
              Emotional Legacy
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Allow future generations to interact with your
              memories and wisdom naturally.
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
                fontSize: "28px",
                marginBottom: "20px",
                color: "#c084fc",
              }}
            >
              Secure Forever
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              End-to-end encrypted cloud infrastructure keeps
              your memories secure forever.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          color: "#94a3b8",
        }}
      >
        © 2026 LegacyAI — The Future of Human Memory
      </footer>
    </div>
  );
}
