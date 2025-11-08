// src/pages/ChooseRole.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseRole() {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f7fff4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      gap: "2rem",
      padding: "2rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#14532d",
    },
    cardWrapper: {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      padding: "2rem",
      width: "250px",
      height: "200px",
      background: "#fff",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #d4d4d4",
      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "0.3s",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Choose your path</h1>
      <div style={styles.cardWrapper}>
        <div
          style={styles.card}
          onClick={() => navigate("/client")}
        >
          I want to HIRE
        </div>
        <div
          style={styles.card}
          onClick={() => navigate("/freelancer")}
        >
          I want to WORK
        </div>
      </div>
    </div>
  );
}
