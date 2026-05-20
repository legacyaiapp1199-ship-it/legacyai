import React, { useState } from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

/* FIREBASE CONFIG */

const firebaseConfig = {
  apiKey: "AIzaSyAcBd8zyTt8BhWxYbYJgC5nO5jfSQcEWLo",
  authDomain: "legacyai-34c5a.firebaseapp.com",
  projectId: "legacyai-34c5a",
  storageBucket: "legacyai-34c5a.appspot.com",
  messagingSenderId: "307910083498",
  appId: "1:307910083498:web:82b7484d5805b49324a1d3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function App() {

  const [user, setUser] = useState(null);

  /* SIGN UP */

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

  /* LOGIN */

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

  /* LOGOUT */

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

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        overflowX: "hidden"
      }}
    >

      {/* NAVBAR */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >

        <h1
          style={{
            fontSize: "35px",
            color: "#a855f7",
            margin: 0
          }}
        >
          LegacyAI
        </h1>

        <div style={{ display: "flex", gap: "15px" }}>

          {!user ? (
            <>
              <button
                onClick={handleLogin}
                style={buttonOutline}
              >
                Login
              </button>

              <button
                onClick={handleSignup}
                style={buttonPrimary}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              style={buttonPrimary}
            >
              Logout
            </button>
          )}

        </div>

      </nav>

      {/* HERO */}

      <section
        style={{
          textAlign: "center",
          padding: "120px 20px"
        }}
      >

        <h2
          style={{
            fontSize: "70px",
            marginBottom: "20px",
            color: "#c084fc"
          }}
        >
          Your Memory
          <br />
          Can Live Forever
        </h2>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "22px",
            maxWidth: "850px",
            margin: "0 auto"
          }}
        >
          LegacyAI transforms your memories,
          stories, thoughts and voice into an
          AI-powered digital legacy that lives forever.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <button style={buttonPrimaryLarge}>
            Start Your Legacy
          </button>

          <button style={buttonOutlineLarge}>
            Learn More
          </button>

        </div>

      </section>

      {/* FEATURES */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          padding: "40px"
        }}
      >

        <FeatureCard
          title="AI Memory"
          text="Preserve your voice, memories and personality using advanced AI."
        />

        <FeatureCard
          title="Emotional Legacy"
          text="Future generations can interact with your stories forever."
        />

        <FeatureCard
          title="Secure Forever"
          text="Encrypted cloud storage keeps your memories protected."
        />

      </section>

      {/* HOW IT WORKS */}

      <section
        style={{
          padding: "100px 40px",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px"
          }}
        >
          How It Works
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "60px",
            fontSize: "20px"
          }}
        >
          Three simple steps to preserve your legacy forever.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px"
          }}
        >

          <StepCard
            emoji="🎙️"
            title="Record Memories"
            text="Upload voice recordings, stories and life experiences."
          />

          <StepCard
            emoji="🧠"
            title="AI Learns You"
            text="AI understands your personality and emotional patterns."
          />

          <StepCard
            emoji="∞"
            title="Live Forever"
            text="Your future family can interact with your AI legacy."
          />

        </div>

      </section>

      {/* PRICING */}

      <section
        style={{
          padding: "100px 40px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "60px"
          }}
        >
          Choose Your Legacy
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px"
          }}
        >

          <PricingCard
            title="Basic"
            price="$9"
            features={[
              "Voice Memories",
              "AI Personality",
              "Secure Storage"
            ]}
          />

          <PricingCard
            title="Premium"
            price="$29"
            features={[
              "Everything in Basic",
              "AI Voice Clone",
              "Video Memories",
              "Family Access"
            ]}
          />

          <PricingCard
            title="Eternal"
            price="$99"
            features={[
              "Unlimited Memories",
              "AI Avatar",
              "Future Access",
              "Priority Support"
            ]}
          />

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section
        style={{
          padding: "100px 40px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "60px"
          }}
        >
          Loved By Families
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px"
          }}
        >

          <TestimonialCard
            text="LegacyAI helped preserve my father's voice forever."
            name="Sarah Mitchell"
          />

          <TestimonialCard
            text="I recorded stories for my future grandchildren."
            name="Michael Lee"
          />

          <TestimonialCard
            text="This feels like the future of memory preservation."
            name="Emma Rodriguez"
          />

        </div>

      </section>

      {/* FOOTER */}

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "40px",
          textAlign: "center",
          color: "#9ca3af"
        }}
      >

        <h2
          style={{
            color: "#a855f7"
          }}
        >
          LegacyAI
        </h2>

        <p>
          Preserve your memories forever.
        </p>

      </footer>

    </div>

  );
}

/* COMPONENTS */

function FeatureCard({ title, text }) {

  return (

    <div style={cardStyle}>

      <h3>{title}</h3>

      <p style={{ color: "#9ca3af" }}>
        {text}
      </p>

    </div>

  );

}

function StepCard({ emoji, title, text }) {

  return (

    <div style={cardStyle}>

      <div
        style={{
          fontSize: "50px",
          marginBottom: "20px"
        }}
      >
        {emoji}
      </div>

      <h3>{title}</h3>

      <p style={{ color: "#9ca3af" }}>
        {text}
      </p>

    </div>

  );

}

function PricingCard({ title, price, features }) {

  return (

    <div style={cardStyle}>

      <h3>{title}</h3>

      <h1
        style={{
          color: "#c084fc"
        }}
      >
        {price}
      </h1>

      <ul
        style={{
          textAlign: "left",
          color: "#d1d5db",
          lineHeight: "2"
        }}
      >

        {features.map((item, index) => (
          <li key={index}>
            ✔ {item}
          </li>
        ))}

      </ul>

      <button style={buttonPrimaryLarge}>
        Get Started
      </button>

    </div>

  );

}

function TestimonialCard({ text, name }) {

  return (

    <div style={cardStyle}>

      <p
        style={{
          color: "#d1d5db",
          marginBottom: "20px"
        }}
      >
        "{text}"
      </p>

      <h4>{name}</h4>

    </div>

  );

}

/* STYLES */

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "25px",
  padding: "30px"
};

const buttonPrimary = {
  background: "#9333ea",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "14px",
  cursor: "pointer",
  fontSize: "16px"
};

const buttonOutline = {
  background: "transparent",
  color: "#c084fc",
  border: "1px solid #9333ea",
  padding: "12px 25px",
  borderRadius: "14px",
  cursor: "pointer",
  fontSize: "16px"
};

const buttonPrimaryLarge = {
  background: "#9333ea",
  color: "white",
  border: "none",
  padding: "16px 35px",
  borderRadius: "18px",
  cursor: "pointer",
  fontSize: "18px"
};

const buttonOutlineLarge = {
  background: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "16px 35px",
  borderRadius: "18px",
  cursor: "pointer",
  fontSize: "18px"
};
