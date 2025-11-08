import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import images
import freelancerLanding from "../assets/FreelancerReg/reg_bg.png";
import regBg from "../assets/FreelancerReg/freelancer_reg.png";
import q1Bg from "../assets/FreelancerReg/q1_bg.png";
import q2Bg from "../assets/FreelancerReg/q2_bg.png";
import q3Bg from "../assets/FreelancerReg/q3_bg.png";
import q4Bg from "../assets/FreelancerReg/q4_bg.png";
import q5Bg from "../assets/FreelancerReg/q5_bg.png";

function FreelancerReg() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    primarySkill: "",
    experience: "",
    availability: "",
    hourlyRate: "",
    acceptedTerms: false,
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill out all form fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: "freelancer",
        profile: {
          primarySkill: form.primarySkill,
          experience: form.experience,
          availability: form.availability,
          hourlyRate: form.hourlyRate,
          acceptedTerms: form.acceptedTerms,
        },
      });

      alert(res.data.message || "Registration successful!");
      setIsRegistered(true);
      scrollTo("q1");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error registering. Try again!");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Landing */}
      <div
        id="landing"
        style={{
          height: "115vh",
          backgroundImage: `url(${freelancerLanding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: "6%", top: "82%" }}>
          <button style={btnStart} onClick={() => scrollTo("register")}>
            START
          </button>
        </div>
      </div>

      {/* Registration Form */}
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

          {["Name", "Email", "Password"].map((label, idx) => (
            <div key={idx} style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>{label}</label>
              <input
                type={label === "Password" ? "password" : "text"}
                placeholder={
                  label === "Name"
                    ? "Olivia Wilson"
                    : label === "Email"
                    ? "john@email.com"
                    : "********"
                }
                value={
                  label === "Name" ? form.name : label === "Email" ? form.email : form.password
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    [label.toLowerCase()]: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </div>
          ))}

          <button style={btnDark} onClick={handleSubmit}>
            Sign up
          </button>
        </div>
      </div>

      {/* Questions */}
      <QuestionSlide
        id="q1"
        bg={q1Bg}
        title="QUESTION #1"
        question="What's your primary skill area?"
        options={["Development", "Design", "Writing", "Marketing", "Other"]}
        selected={form.primarySkill}
        onSelect={(value) => setForm({ ...form, primarySkill: value })}
        onNext={() => scrollTo("q2")}
        align="left"
      />

      <QuestionSlide
        id="q2"
        bg={q2Bg}
        title="QUESTION #2"
        question="How many years of experience do you have?"
        options={["Less than 1", "1–3 years", "4–6 years", "7+ years"]}
        selected={form.experience}
        onSelect={(value) => setForm({ ...form, experience: value })}
        onNext={() => scrollTo("q3")}
        align="right"
      />

      <QuestionSlide
        id="q3"
        bg={q3Bg}
        title="QUESTION #3"
        question="What's your availability?"
        options={["Full-time", "Part-time", "Project based / Flexible"]}
        selected={form.availability}
        onSelect={(value) => setForm({ ...form, availability: value })}
        onNext={() => scrollTo("q4")}
        align="left"
      />

      <QuestionSlide
        id="q4"
        bg={q4Bg}
        title="QUESTION #4"
        question="What's your expected hourly rate?"
        options={["<$20/hr", "$20–$50/hr", "$50–$100/hr", "$100+/hr"]}
        selected={form.hourlyRate}
        onSelect={(value) => setForm({ ...form, hourlyRate: value })}
        onNext={() => scrollTo("q5")}
        align="right"
      />

      <QuestionSlide
        id="q5"
        bg={q5Bg}
        title="QUESTION #5"
        question="Do you agree to our terms?"
        options={["Yes, I agree to the Terms of Service and Privacy Policy", "No, I do not agree"]}
        selected={form.acceptedTerms}
        onSelect={(value) => setForm({ ...form, acceptedTerms: value === "Yes" })}
        onNext={() => {
          if (isRegistered) {
            navigate("/freelancer-dashboard");
          } else {
            alert("You must sign up before proceeding");
            scrollTo("register");
          }
        }}
        align="left"
      />
    </div>
  );
}

/* Reusable QuestionSlide */
const QuestionSlide = ({ id, bg, title, question, options, selected, onSelect, onNext, align }) => {
  const justify = align === "right" ? "flex-end" : "flex-start";
  const paddingSide = align === "right" ? { paddingRight: "6rem" } : { paddingLeft: "6rem" };

  return (
    <div
      id={id}
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: justify,
        alignItems: "center",
        ...paddingSide,
      }}
    >
      <div style={formCard}>
        <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</p>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "1.2rem" }}>
          {question}
        </h2>

        {options.map((opt, idx) => (
          <div
            key={idx}
            style={{
              ...optionStyle,
              backgroundColor: selected === opt ? "#86efac" : "#f3f4f6",
              cursor: "pointer",
            }}
            onClick={() => onSelect(opt)}
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

/* Styles */
const formCard = {
  background: "#ffffff",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: "480px",
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
  fontWeight: "600",
  marginBottom: "0.25rem",
  color: "#14532d",
};

const btnStart = {
  padding: "1.1rem 3rem",
  backgroundColor: "#e4f896ff",
  color: "#14532d",
  border: "2px solid #14532d",
  borderRadius: "3rem",
  fontWeight: "bold",
  fontSize: "1.2rem",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  position: "relative",
  top: "-110px",
};

const btnCream = {
  marginTop: "1.6rem",
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
  fontWeight: "700",
  fontSize: "1rem",
  marginBottom: "0.75rem",
  cursor: "pointer",
};

const optionStyle = {
  padding: "0.75rem",
  borderRadius: "0.5rem",
  marginBottom: "0.75rem",
  fontSize: "1rem",
  transition: "background 0.15s ease",
};

export default FreelancerReg;
