import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1 style={{ color: "#a855f7", fontSize: "60px" }}>
        LegacyAI
      </h1>

      <p>Your Memory Can Live Forever</p>

      <button
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          borderRadius: "15px",
          border: "none",
          background: "#9333ea",
          color: "white",
          cursor: "pointer"
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
