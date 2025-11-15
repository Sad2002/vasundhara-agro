import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    
      <footer
        style={{
          
           background: '#073b2f',
          color: "#fff",
          padding: "60px 50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "180px"
        }}
      >
        
        <div style={{ flex: "1 1 250px", textAlign: "center" }}>
          <img 
            src="/assets/logo.png" 
            alt="logo" 
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
              marginBottom: 10
            }}
          />
          <p><FaMapMarkerAlt /> 123 Green Lane, Pune, Maharashtra</p>
        </div>

    
        <div>
          <h3 style={{ marginBottom: 15 }}>Useful Links</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
            <li><a href="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</a></li>
            <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

      
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ marginBottom: 20 }}>Contact Us</h3>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> info@organicfarm.com</p>
        </div>

       
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ marginBottom: 20 }}>Connect With Us</h3>
          <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}><FaLinkedin /></a>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}><FaFacebookF /></a>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}><FaTwitter /></a>
          </div>
        </div>
      </footer>

      <div
        style={{
           background: '#04271eff',
          color: "#fff",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "0.9rem"

        }}
      >
        © 2025 Vasundhara Agro. All rights reserved | Developed by Sadhana Gonge
      </div>
    </div>
  );
}
