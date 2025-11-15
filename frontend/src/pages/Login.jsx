import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaAppleAlt, FaCarrot, FaLeaf, FaTruck, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaLinkedin, FaFacebookF, FaTwitter 
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Organic Wheat", price: "₹120/kg", description: "High quality wheat grown organically.", image: "/assets/organicwheat.webp" },
    { id: 2, name: "Fresh Tomatoes", price: "₹50/kg", description: "Juicy red tomatoes harvested daily.", image: "/assets/tomato.jpg" },
    { id: 3, name: "Organic Rice", price: "₹150/kg", description: "Premium organic rice for healthy meals.", image: "/assets/rice.jpg" },
    { id: 4, name: "Green Chilli", price: "₹80/kg", description: "Fresh and spicy green chillies.", image: "/assets/chilli.jpg" },
    { id: 5, name: "Potatoes", price: "₹40/kg", description: "Fresh potatoes perfect for all recipes.", image: "/assets/potato.jpg" },
    { id: 6, name: "Carrots", price: "₹60/kg", description: "Crunchy carrots rich in nutrients.", image: "/assets/carrot.jpg" }
  ];

  const handleBuy = () => navigate("/login");

  const slides = ["/assets/background6.png", "/assets/background5.avif"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = ["/assets/gallary1.png", "/assets/gallery2.png", "/assets/gallery5.jpg", "/assets/gallery4.jpg"];

  const services = [
    { id: 1, title: "Organic Products", description: "We offer fresh, 100% organic produce directly sourced from local farmers.", icon: <FaAppleAlt /> },
    { id: 2, title: "Farm Consultation", description: "Expert guidance for sustainable farming and improved crop yield.", icon: <FaLeaf /> },
    { id: 3, title: "Fresh Delivery", description: "Fast and reliable delivery of fresh produce to your doorstep.", icon: <FaTruck /> }
  ];

  // Intersection Observers for each section
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div style={{ width: "100%", margin: 0, padding: 0, boxSizing: "border-box", scrollBehavior: "smooth" }}>

      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px",
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          transition: "background-image 1s ease-in-out"
        }}
      >
        <h1 style={{ fontSize: "3.5rem", textAlign: "center", textShadow: "2px 2px 12px rgba(0,0,0,0.7)" }}>
          Empowering Farmers, Connecting Markets
        </h1>
      </div>

      {/* About Section */}
      <div 
        ref={aboutRef} 
        style={{
          padding: "60px 50px",
          opacity: aboutInView ? 1 : 0,
          transform: aboutInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 40, color: "#083344" }}>About Us</h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 30 }}>
          <div style={{ flex: "1 1 450px" }}>
            <img
              src="/assets/aboutimg.png"
              alt="About"
              style={{ width: "100%", borderRadius: 12, border: "6px solid #083344", transition: "transform 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
          <div style={{ flex: "1 1 550px" }}>
            <h2 style={{ color: "#083344", fontSize: "2.8rem", marginBottom: 16, textAlign: "center" }}>Organic & Natural</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: 10 }}>
              Our products are 100% organic and naturally grown, ensuring quality for every household.
              We work directly with farmers to deliver fresh produce to your doorstep.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              By choosing us, you support sustainable farming, reduce carbon footprint, and enjoy nutritious, chemical-free food every day. Our mission is to empower farmers and create a healthy future for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        ref={productsRef}
        style={{
          padding: "60px 50px",
          opacity: productsInView ? 1 : 0,
          transform: productsInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 50, color: "#083344" }}>Our Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 25, justifyContent: "center" }}>
          {products.map((p, idx) => (
            <div key={p.id} style={{
              flex: "1 1 280px",
              padding: 20,
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              borderRadius: 12,
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
              opacity: productsInView ? 1 : 0,
              transform: productsInView ? "translateY(0)" : "translateY(50px)",
              transition: `all 0.6s ease-out ${idx * 0.2}s`
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)"; }}
            >
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 250, objectFit: "cover", marginBottom: 12, borderRadius: 8 }} />
              <h3>{p.name}</h3>
              <p style={{ color: "#0a3a3e" }}>{p.price}</p>
              <p style={{ fontSize: "0.95rem" }}>{p.description}</p>
              <button style={{ marginTop: 10, padding: "10px 20px", backgroundColor: "#00796b", color: "#fff", border: "none", borderRadius: 6 }} onClick={handleBuy}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div
        ref={servicesRef}
        style={{
          padding: "60px 50px",
          opacity: servicesInView ? 1 : 0,
          transform: servicesInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 50, color: "#083344" }}>Our Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 30, justifyContent: "center" }}>
          {services.map((s, idx) => (
            <div key={s.id} style={{
              flex: "1 1 280px",
              padding: 30,
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              borderRadius: 16,
              cursor: "pointer",
              backgroundColor: "white",
              opacity: servicesInView ? 1 : 0,
              transform: servicesInView ? "translateY(0)" : "translateY(50px)",
              transition: `all 0.6s ease-out ${idx * 0.2}s`
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-12px)"; e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)"; e.currentTarget.style.backgroundColor = "#e0f7fa"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)"; e.currentTarget.style.backgroundColor = "white"; }}
            >
              <div style={{ fontSize: 70, color: "#00796b", marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 500 }}>{s.title}</h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", marginTop: 10 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div
        ref={galleryRef}
        style={{
          padding: "60px 50px",
          opacity: galleryInView ? 1 : 0,
          transform: galleryInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 40, color: "#083344" }}>Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 25, justifyContent: "center" }}>
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt={`Gallery ${idx + 1}`} style={{
              width: 450,
              height: 350,
              borderRadius: 14,
              objectFit: "cover",
              transition: "transform 0.4s",
              cursor: "pointer"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
