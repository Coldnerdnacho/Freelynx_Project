import React, { useState } from "react";

// ✅ Import images from assets
import clientReg from "../assets/ClientReg/client_reg.png";
import clientTerms from "../assets/ClientReg/client_terms.png";
import q1Bg from "../assets/ClientReg/q1_bg.png";
import q2Bg from "../assets/ClientReg/q2_bg.png";
import q3Bg from "../assets/ClientReg/q3_bg.png";
import regBg from "../assets/ClientReg/reg_bg.png";

function ClientReg() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Landing Section */}
      <div
        id="landing"
        style={{
          height: "100vh",
          backgroundImage: `url(${clientReg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "10%",
        }}
      >
        <div style={{ height: "250px" }}></div>
        <button style={btnStart} onClick={() => scrollTo("register")}>
          START
        </button>
      </div>

      {/* Registration Section */}
      <div
        id="register"
        style={{
          height: "100vh",
          backgroundImage: `url(${regBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <div style={formCard}>
          <h2 style={{ fontSize: "2rem", color: "#14532d", fontWeight: "bold" }}>
            Create an account
          </h2>
          <p style={{ color: "#14532d", marginBottom: "1rem" }}>
            Let's get started!
          </p>

          {["Name", "Email", "Business/Company Name", "Password"].map(
            (label, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>{label}</label>
                <input
                  type={label === "Password" ? "password" : "text"}
                  placeholder={
                    label === "Name"
                      ? "Olivia Wilson"
                      : label === "Email"
                      ? "john@company.com"
                      : label === "Business/Company Name"
                      ? "Carter Digital Solutions"
                      : "********"
                  }
                  value={
                    label === "Name"
                      ? form.name
                      : label === "Email"
                      ? form.email
                      : label === "Business/Company Name"
                      ? form.company
                      : form.password
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [label.toLowerCase().split(" ")[0]]: e.target.value,
                    })
                  }
                  style={inputStyle}
                />
              </div>
            )
          )}

          <button style={btnDark} onClick={() => scrollTo("q1")}>
            Sign up
          </button>
          <button style={btnDark}>Continue with email</button>
        </div>
      </div>

      {/* Question 1 */}
      <QuestionSlide
        id="q1"
        bg={q1Bg}
        title="QUESTION #1"
        question="Which industry do you belong to?"
        options={["Technology", "Design", "Marketing", "Writing", "Other"]}
        onNext={() => scrollTo("q2")}
      />

      {/* Question 2 */}
      <QuestionSlide
        id="q2"
        bg={q2Bg}
        title="QUESTION #2"
        question="How big is your company?"
        options={[
          "1–10 employees",
          "11–50 employees",
          "51–200 employees",
          "200+ employees",
        ]}
        onNext={() => scrollTo("q3")}
        alignRight
      />

      {/* Question 3 */}
      <QuestionSlide
        id="q3"
        bg={q3Bg}
        title="QUESTION #3"
        question="Where is your company?"
        options={["India", "USA", "UK", "Canada", "Other"]}
        onNext={() => scrollTo("q5")}
      />

      {/* Terms */}
      <QuestionSlide
        id="q5"
        bg={clientTerms}
        title="QUESTION #5"
        question="Do you agree to our terms?"
        options={[
          "Yes, I agree to the Terms of Service and Privacy Policy",
          "No, I do not agree",
        ]}
        onNext={() => alert("Form completed!")}
      />
    </div>
  );
}

// ✅ Reusable Question Slide Component
const QuestionSlide = ({ id, bg, title, question, options, onNext, alignRight }) => {
  return (
    <div
      id={id}
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: alignRight ? "flex-end" : "flex-start",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div style={formCard}>
        <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</p>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "900",
            marginBottom: "1.5rem",
          }}
        >
          {question}
        </h2>

        {options.map((opt, idx) => (
          <div
            key={idx}
            style={{
              ...optionStyle,
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#86efac")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#f3f4f6")
            }
          >
            {opt}
          </div>
        ))}

        <button style={btnCream} onClick={onNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};

// ✅ Styles
const formCard = {
  background: "#ffffff",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "450px",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  backgroundColor: "#bfecac",
  color: "#14532d",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "0.25rem",
  color: "#14532d",
};

const btnStart = {
  padding: "1rem 2.5rem",
  backgroundColor: "#bbf7d0",
  color: "#14532d",
  border: "2px solid #14532d",
  borderRadius: "2rem",
  fontWeight: "bold",
  fontSize: "1.3rem",
  cursor: "pointer",
};

const btnCream = {
  marginTop: "2rem",
  padding: "0.75rem 2rem",
  backgroundColor: "#bbf7d0",
  color: "#14532d",
  border: "2px solid #14532d",
  borderRadius: "2rem",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
};

const btnDark = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#000000",
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  fontWeight: "bold",
  fontSize: "1rem",
  marginBottom: "0.75rem",
  cursor: "pointer",
};

const optionStyle = {
  padding: "0.75rem",
  backgroundColor: "#f3f4f6",
  borderRadius: "0.5rem",
  marginBottom: "0.75rem",
  fontSize: "1rem",
};

export default ClientReg;
