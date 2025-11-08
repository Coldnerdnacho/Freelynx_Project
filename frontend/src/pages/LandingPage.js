import React from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../assets/Landing/landingpg.png";
import landingImg2 from "../assets/Landing/landingsecond.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const styles = {
    page: {
      fontFamily: "Poppins, sans-serif",
      overflowX: "hidden",
      scrollBehavior: "smooth",
    },

    navbar: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "15px 30px", // Reduced padding
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 10,
  color: "white",
  boxSizing: "border-box",   // Ensures proper layout
},

navRight: {
  display: "flex",
  gap: "10px",  // Slightly reduced gap
  alignItems: "center",
  fontWeight: "600",
  cursor: "pointer",
  flexWrap: "wrap",   // Makes sure items wrap on small screens
  justifyContent: "flex-end",
},



    startBtn: {
      background: "#0b6623",
      padding: "10px 22px",
      borderRadius: "8px",
      color: "white",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
    },

    hero: {
      backgroundImage: `url(${landingImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      position: "relative",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.55)",
      zIndex: 1,
    },

    heroContent: {
      zIndex: 2,
      width: "70%",
    },

    heroTitle: {
      fontSize: "72px",
      fontWeight: "800",
      marginBottom: "20px",
      lineHeight: "1.1",
    },

    heroSubtitle: {
      fontSize: "22px",
      marginBottom: "40px",
    },

    ctaBtn: {
      background: "#019523",
      padding: "16px 42px",
      borderRadius: "30px",
      fontSize: "18px",
      fontWeight: "600",
      border: "none",
      color: "white",
      cursor: "pointer",
    },

    section: {
      background: "#f7ffee",
      padding: "100px 120px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "60px",
    },

    sectionTitle: {
      fontSize: "42px",
      fontWeight: "800",
      lineHeight: "1.3",
      color: "#073b15",
    },

    sectionText: {
      fontSize: "18px",
      marginTop: "20px",
      color: "#214a2a",
      lineHeight: "1.7",
    },

    roundImg: {
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={{ fontWeight: "800", fontSize: "28px" }}>Freelynx</h2>

        <div style={styles.navRight}>
          <span onClick={() => window.scrollTo(0, 0)}>Home</span>
          <span>About</span>
          <span>Price</span>
          <span onClick={() => navigate("/login")}>Login</span>
          <button style={styles.startBtn} onClick={() => navigate("/choose-role")}>
            Start for free
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Smart Talent,<br />Real Projects.</h1>
          <p style={styles.heroSubtitle}>
            Hire top freelancers or work on exciting projects — all in one seamless platform.
          </p>
          <button style={styles.ctaBtn} onClick={() => navigate("/choose-role")}>
            Get Started Now
          </button>
        </div>
      </div>

      {/* SECTION 2 */}
      <div style={styles.section}>
        <div>
          <h2 style={styles.sectionTitle}>A Seamless Experience</h2>
          <p style={styles.sectionText}>
            Whether you're a freelancer or a client with an idea to build, Freelynx connects you with 
            verified talent, secure payments, and a supportive community.
          </p>
        </div>

        <img src={landingImg2} style={styles.roundImg} alt="collaboration" />
      </div>
    </div>
  );
}
