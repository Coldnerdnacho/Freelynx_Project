import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../assets/Landing/landingpg.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const styles = {
    page: {
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${landingImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      fontFamily: "Poppins, sans-serif",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backdropFilter: "blur(4px)",
      background: "rgba(0,0,0,0.55)",
    },

    card: {
      width: "380px",
      padding: "40px 36px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "white",
      position: "relative",
      zIndex: 2,
      textAlign: "center",
    },

    title: {
      fontSize: "32px",
      fontWeight: "800",
      marginBottom: "20px",
    },

    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "12px",
      border: "none",
      marginBottom: "16px",
      fontSize: "14px",
      outline: "none",
    },

    loginBtn: {
      width: "100%",
      padding: "12px",
      background: "#019523",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "8px",
    },

    footerText: {
      marginTop: "18px",
      fontSize: "14px",
    },

    link: {
      color: "#a5ffb0",
      cursor: "pointer",
      fontWeight: "600",
      textDecoration: "underline",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login attempted — backend coming next!");
    // navigate("/freelancer-dashboard") or "/client-dashboard" later based on role
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          required
          style={styles.input}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" style={styles.loginBtn}>
          Login
        </button>

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/choose-role")}>
            Start for free
          </span>
        </p>
      </form>
    </div>
  );
}
