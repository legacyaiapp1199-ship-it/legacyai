import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "PUT_YOUR_API_KEY",
  authDomain: "PUT_YOUR_AUTH_DOMAIN",
  projectId: "PUT_YOUR_PROJECT_ID",
  storageBucket: "PUT_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PUT_YOUR_MESSAGING_SENDER_ID",
  appId: "PUT_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function App() {

  const [scrollY, setScrollY] = useState(0);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleSignup = async () => {

    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage("Account created successfully!");

    } catch (error) {

      setMessage(error.message);

    } finally {

      setLoading(false);

    }
  };

  const handleLogin = async () => {

    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage("Login successful!");

    } catch (error) {

      setMessage(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Arial, sans-serif;
          overflow-x:hidden;
          background:#02030d;
          color:white;
        }

        html{
          scroll-behavior:smooth;
        }

        .app{
          position:relative;
          min-height:100vh;
          overflow:hidden;

          background:
            radial-gradient(circle at top left, rgba(168,85,247,0.18), transparent 30%),
            radial-gradient(circle at bottom right, rgba(99,102,241,0.15), transparent 30%),
            linear-gradient(-45deg,#02030d,#050816,#111827,#1e1b4b);

          background-size:400% 400%;

          animation:gradientShift 18s ease infinite;
        }

        @keyframes gradientShift {
          0%{
            background-position:0% 50%;
          }

          50%{
            background-position:100% 50%;
          }

          100%{
            background-position:0% 50%;
          }
        }

        .orb{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          opacity:0.5;
          z-index:0;
          pointer-events:none;
        }

        .orb1{
          width:500px;
          height:500px;
          background:#9333ea;
          top:-150px;
          left:-150px;

          transform:translateY(${scrollY * 0.2}px);
        }

        .orb2{
          width:450px;
          height:450px;
          background:#4f46e5;
          top:800px;
          right:-120px;

          transform:translateY(${scrollY * -0.15}px);
        }

        .orb3{
          width:400px;
          height:400px;
          background:#7e22ce;
          top:1600px;
          left:-100px;

          transform:translateY(${scrollY * 0.1}px);
        }

        .content{
          position:relative;
          z-index:2;
        }

        .hero{
          min-height:100vh;

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          text-align:center;

          padding:40px 24px;
        }

        .logo{
          font-size:72px;
          font-weight:900;

          background:linear-gradient(90deg,#9333ea,#e9d5ff);

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          margin-bottom:30px;
        }

        .subtitle{
          max-width:800px;

          font-size:24px;
          line-height:1.8;

          color:#d1d5db;

          margin-bottom:60px;
        }

        .auth-card{
          width:100%;
          max-width:700px;

          background:rgba(10,20,45,0.7);

          border:1px solid rgba(168,85,247,0.25);

          backdrop-filter:blur(20px);

          border-radius:40px;

          padding:50px 35px;

          box-shadow:
            0 0 40px rgba(168,85,247,0.15),
            inset 0 0 40px rgba(255,255,255,0.03);
        }

        .auth-title{
          font-size:60px;
          font-weight:900;

          margin-bottom:40px;
        }

        .input{
          width:100%;

          background:#1e293b;

          border:none;

          border-radius:22px;

          padding:24px;

          margin-bottom:25px;

          color:white;

          font-size:24px;
        }

        .button{
          width:100%;

          padding:24px;

          border:none;

          border-radius:24px;

          font-size:28px;
          font-weight:bold;

          cursor:pointer;

          margin-top:10px;

          transition:0.3s;
        }

        .signup{
          background:linear-gradient(90deg,#9333ea,#d8b4fe);
          color:white;
        }

        .login{
          background:transparent;
          border:2px solid #9333ea;
          color:white;

          margin-top:25px;
        }

        .message{
          margin-top:25px;

          font-size:20px;

          color:#d8b4fe;
        }

        .section{
          padding:120px 24px;
        }

        .section-title{
          text-align:center;

          font-size:72px;
          font-weight:900;

          margin-bottom:70px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:40px;

          max-width:1300px;
          margin:auto;
        }

        .card{
          background:rgba(10,20,45,0.7);

          border:1px solid rgba(168,85,247,0.25);

          border-radius:38px;

          padding:50px 40px;

          backdrop-filter:blur(16px);
        }

        .card h3{
          font-size:42px;

          margin-bottom:30px;

          color:#c084fc;
        }

        .card p{
          font-size:24px;
          line-height:1.9;

          color:#d1d5db;
        }

        footer{
          text-align:center;

          padding:80px 20px;

          color:#9ca3af;

          font-size:24px;
        }

      `}</style>

      <div className="app">

        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>

        <div className="content">

          <section className="hero">

            <h1 className="logo">LegacyAI</h1>

            <p className="subtitle">
              Transform your memories into an eternal AI-powered digital legacy for future generations.
            </p>

            <div className="auth-card">

              <h2 className="auth-title">
                Create Account
              </h2>

              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button
                className="button signup"
                onClick={handleSignup}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>

              <button
                className="button login"
                onClick={handleLogin}
              >
                Login
              </button>

              {message && (
                <p className="message">
                  {message}
                </p>
              )}

            </div>

          </section>

          <section className="section">

            <h2 className="section-title">
              Features
            </h2>

            <div className="grid">

              <div className="card">
                <h3>AI Memory</h3>

                <p>
                  Preserve conversations, voice, photos and experiences forever using advanced AI.
                </p>
              </div>

              <div className="card">
                <h3>Emotional Legacy</h3>

                <p>
                  Allow future generations to interact with your memories and wisdom naturally.
                </p>
              </div>

              <div className="card">
                <h3>Secure Forever</h3>

                <p>
                  End-to-end encrypted cloud infrastructure keeps your memories secure forever.
                </p>
              </div>

            </div>

          </section>

          <footer>
            © 2026 LegacyAI — The Future of Human Memory
          </footer>

        </div>

      </div>
    </>
  );
}
