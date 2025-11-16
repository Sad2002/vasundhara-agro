import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      const usernameFromEmail = email.split("@")[0];

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: usernameFromEmail,
          email: email,
        })
      );

      navigate("/product");
    } else {
      alert("Please enter valid email and password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        background: "linear-gradient(135deg,#e8fff0,#f3fff8)",
        padding: "20px",
      }}
    >
      <div className="card" style={{ maxWidth: 420, width: "96%" }}>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <img src="/assets/reglogo.jpg" width="28%" alt="logo" />
          <h3 style={{ margin: 6, color: "#073b2f" }}>Welcome Back</h3>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 10 }}>
            <input
              className="form-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                outline: "none",
                width: "100%",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <input
              className="form-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                outline: "none",
                width: "100%",
              }}
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Login
          </button>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            <Link to="/register">Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
