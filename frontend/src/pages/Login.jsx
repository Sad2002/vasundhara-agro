import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { saveToken } from "../utils/auth";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      saveToken(res.data.token);
      toast.success("Login Successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed!");
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
      }}
    >
      <div className="card" style={{ maxWidth: 420, width: "96%" }}>
        
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <img src="public/assets/reglogo.jpg" width="30%" alt="logo" />
          <h3 style={{ margin: 6, color: "#073b2f" }}>Welcome Back</h3>
          <p style={{ margin: 0, color: "#073b2f" }}>Login to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 10 }}>
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: 10,
                border: "1px solid #ccc",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: 10,
                border: "1px solid #ccc",
                outline: "none",
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", padding: 12 }}
          >
            Login
          </button>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            <span>Don't have an account? </span>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
