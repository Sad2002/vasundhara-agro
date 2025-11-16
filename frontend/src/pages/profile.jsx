import React, { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setName(storedUser.name);
      setEmail(storedUser.email);
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <div
        style={{
          width: 350,
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          height:360,
          textAlign: "center",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.25)"
        }}
      >
        <h2>Profile</h2>
        <img
          src="/assets/reglogo.jpg"
          alt="User"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #073b2f"
          }}
        />
 
        <h3 style={{ marginTop: 15, color: "#073b2f" }}>{name}</h3>

        <p style={{ marginTop: 8, fontSize: 16 }}>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}
