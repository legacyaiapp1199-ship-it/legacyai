import React, { useState } from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

/* FIREBASE */

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
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    const email = prompt("Enter Email");
    const password = prompt("Enter Password");

    if (!email || !password) return;

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      setUser(userCredential.user);

      alert("Account Created Successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    const email = prompt("Enter Email");
    const password = prompt("Enter Password");

    if (!email || !password) return;

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      setUser(userCredential.user);

      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setUser(null);

      alert("Logged Out");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}

      <nav style={styles.navbar}>
        <h1 style={styles.logo}>LegacyAI</h1>

        <div style={styles.navButtons}>
          {!user ? (
            <>
              <button
                style={styles.outlineButton}
                onClick={handleLogin}
              >
                Login
              </button>

              <button
                style={styles.primaryButton}
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              style={styles.primaryButton}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* HERO */}

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>
          Your Memory
          <br />
          Can Live Forever
        </h2>

        <p style={styles.heroText}>
          LegacyAI transforms your voice,
          memories and stories into a
          timeless AI-powered digital legacy.
        </p>

        <div style={styles.heroButtons}>
          <button style={styles.primaryLarge}>
            Start Your Legacy
          </button>

          <button style={styles.outlineLarge}>
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}

      <section style={styles.features}>
        <div style={styles.card}>
          <h3>AI Memory</h3>

          <p style={styles.cardText}>
            Preserve your voice and memories
            forever using advanced AI.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Emotional Legacy</h3>

          <p style={styles.cardText}>
            Future generations can interact
            with your stories forever.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Secure Forever</h3>

          <p style={styles.cardText}>
            Your data is protected using
            encrypted cloud storage.
          </p>
        </div>
      </section>

      {/* FOOTER */}

      <footer style={styles.footer}>
        <h2 style={{ color: "#a855f7" }}>
          LegacyAI
        </h2>

        <p>Preserve your memories forever.</p>
      </footer>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    background: "#050816",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 40px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  logo: {
    color: "#a855f7",
    fontSize: "35px",
    margin: 0,
  },

  navButtons: {
    display: "flex",
    gap: "15px",
  },

  hero: {
    textAlign: "center",
    padding: "120px 20px",
  },

  heroTitle: {
    fontSize: "70px",
    marginBottom: "20px",
    color: "#c084fc",
  },

  heroText: {
    color: "#9ca3af",
    fontSize: "22px",
    maxWidth: "700px",
    margin: "0 auto",
  },

  heroButtons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  features: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "25px",
    padding: "40px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "25px",
    padding: "30px",
  },

  cardText: {
    color: "#9ca3af",
    lineHeight: "1.8",
  },

  footer: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "40px",
    textAlign: "center",
    color: "#9ca3af",
    marginTop: "80px",
  },

  primaryButton: {
    background: "#9333ea",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "16px",
  },

  outlineButton: {
    background: "transparent",
    color: "#c084fc",
    border: "1px solid #9333ea",
    padding: "12px 25px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "16px",
  },

  primaryLarge: {
    background: "#9333ea",
    color: "white",
    border: "none",
    padding: "16px 35px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "18px",
  },

  outlineLarge: {
    background: "transparent",
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "16px 35px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "18px",
  },
};
