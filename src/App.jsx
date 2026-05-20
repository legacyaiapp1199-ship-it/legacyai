import React from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

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
    <div className="bg-[#050816] text-white min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-purple-500 mb-6">
          LegacyAI
        </h1>

        <p className="text-gray-400 mb-10 text-xl">
          Your Memory Can Live Forever
        </p>

        <button
          onClick={handleSignup}
          className="px-8 py-4 bg-purple-600 rounded-2xl hover:bg-purple-700 transition"
        >
          Sign Up
        </button>

      </div>

    </div>
  );
}
