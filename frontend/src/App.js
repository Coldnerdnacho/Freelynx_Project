import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChooseRole from "./pages/ChooseRole";
import LoginPage from "./pages/LoginPage";

import ClientReg from "./pages/ClientReg";
import FreelancerReg from "./pages/FreelancerReg";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Admin from "./pages/Admin";

// Your PageSwitcher component
const PageSwitcher = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dropdownItem = {
    padding: "0.75rem 1rem",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    fontSize: "0.95rem",
  };

  return (
    <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 1000 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#14532d",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Switch Page ▾
      </button>

      {open && (
        <div
          style={{
            marginTop: "0.5rem",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => { navigate("/"); setOpen(false); }}
            style={dropdownItem}
          >
            Landing Page
          </div>
          <div
            onClick={() => { navigate("/choose-role"); setOpen(false); }}
            style={dropdownItem}
          >
            Choose Role
          </div>
          <div
            onClick={() => { navigate("/login"); setOpen(false); }}
            style={dropdownItem}
          >
            Login Page
          </div>
          <div
            onClick={() => { navigate("/client"); setOpen(false); }}
            style={dropdownItem}
          >
            Client Registration
          </div>
          <div
            onClick={() => { navigate("/freelancer"); setOpen(false); }}
            style={dropdownItem}
          >
            Freelancer Registration
          </div>
          <div
            onClick={() => { navigate("/client-dashboard"); setOpen(false); }}
            style={dropdownItem}
          >
            Client Dashboard
          </div>
          <div
            onClick={() => { navigate("/freelancer-dashboard"); setOpen(false); }}
            style={dropdownItem}
          >
            Freelancer Dashboard
          </div>
          <div
            onClick={() => { navigate("/admin"); setOpen(false); }}
            style={dropdownItem}
          >
            Admin
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* PageSwitcher is always visible */}
      <PageSwitcher />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/client" element={<ClientReg />} />
        <Route path="/freelancer" element={<FreelancerReg />} />

        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;
