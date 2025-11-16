import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Welcome!</h1>

      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/orders")}>Orders</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
