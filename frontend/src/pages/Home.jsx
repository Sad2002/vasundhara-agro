import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaAppleAlt, FaLeaf, FaTruck
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const navigate = useNavigate();

  // Updated products (matches Product page style)
  const products = [
    { id: 1, name: "Organic Wheat", price: "₹120/kg", description: "High quality wheat grown organically.", image: "/assets/organicwheat.webp" },
    { id: 2, name: "Fresh Tomatoes", price: "₹50/kg", description: "Juicy red tomatoes harvested daily.", image: "/assets/tomato.jpg" },
    { id: 3, name: "Organic Rice", price: "₹150/kg", description: "Premium organic rice for healthy meals.", image: "/assets/rice.jpg" },
    { id: 4, name: "Green Chilli", price: "₹80/kg", description: "Fresh and spicy green chillies.", image: "/assets/chilli.jpg" },
    { id: 5, name: "Potatoes", price: "₹40/kg", description: "Perfect potatoes for everyday cooking.", image: "/assets/potato.jpg" },
    { id: 6, name: "Carrots", price: "₹60/kg", description: "Crunchy and fresh organic carrots.", image: "/assets/carrot.jpg" }
  ];

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const slides = ["/assets/background6.png", "/assets/background5.avif"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    "/assets/gallary1.png",
    "/assets/gallery2.png",
    "/assets/gallery5.jpg",
    "/assets/gallery4.jpg"
  ];

  const services = [
    { id: 1, title: "Organic Products", description: "Fresh, 100% organic produce from local farmers.", icon: <FaAppleAlt /> },
    { id: 2, title: "Farm Consultation", description: "Expert advice for sustainable farming.", icon: <FaLeaf /> },
    { id: 3, title: "Fast Delivery", description: "Get fresh produce delivered to your doorstep.", icon: <FaTruck /> }
  ];

  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>

    
     <div
  style={{
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 50px",
    backgroundImage: `url(${slides[currentSlide]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffffff",
    transition: "background-image 1s ease-in-out",
    textAlign: "center"
  }}
>
  
  <h1 style={{ fontSize: "3.7rem", textAlign: "center", marginBottom: "15px" }}>
    Empowering Farmers, Connecting Markets
  </h1>

  
  <h2
    style={{
      fontSize: "1.8rem",
      marginBottom: "25px",
      fontWeight: 400,
      letterSpacing: "2px",
      color: "#68e899ff"
    }}
  >
    Fresh • Organic • Natural
  </h2>

  {/* NEW BUTTON */}
 <button
  onClick={() => navigate("/login")}
  style={{
    padding: "12px 28px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#073b2f",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#0a6f4a";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#fff";
    e.currentTarget.style.color = "#073b2f";
    e.currentTarget.style.transform = "scale(1)";
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = "scale(0.95)";
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
>
  Explore Products
</button>

</div>


    
      <div
        ref={aboutRef}
        style={{
          padding: "60px 50px",
          opacity: aboutInView ? 1 : 0,
          transform: aboutInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 40, color: "#083344" }}>
          About Us
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 30 }}>
          <div style={{ flex: "1 1 450px" }}>
            <img
              src="/assets/aboutimg.png"
              style={{ width: "100%", borderRadius: 12, border: "6px solid #083344" }}
            />
          </div>

          <div style={{ flex: "1 1 450px" }}>
            <h3 style={{ color: "#083344", fontSize: "2.5rem", marginBottom: 16 }}>
              Organic & Natural
            </h3>
            <p style={{ lineHeight: 1.7, fontSize: "1.1rem" }}>
              We supply 100% organic and naturally grown food products, directly sourced
              from trusted farmers. Support sustainable agriculture and choose healthy,
              chemical-free food for your family.
            </p>
          </div>
        </div>
      </div>

    
      <div
        ref={productsRef}
        style={{
          padding: "60px 50px",
          opacity: productsInView ? 1 : 0,
          transform: productsInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 50, color: "#083344" }}>
          Featured Farmer Products
        </h2>

        <div style={{ position: "relative" }}>
       
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)",
              zIndex: 10, background: "#073b2f", color: "white",
              borderRadius: "50%", width: 50, height: 50, border: "none", cursor: "pointer"
            }}
          >
            &lt;
          </button>

          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)",
              zIndex: 10, background: "#073b2f", color: "white",
              borderRadius: "50%", width: 50, height: 50, border: "none", cursor: "pointer"
            }}
          >
            &gt;
          </button>

      
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: 25,
              padding: "10px 60px"
            }}
          >
            {products.map((p, idx) => (
              <div
                key={p.id}
                style={{
                  flex: "0 0 320px",
                  background: "#fff",
                  borderRadius: 15,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  padding: 15,
                  cursor: "pointer",
                  transition: "0.3s",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
                }}
              >
                <img
                  src={p.image}
                  style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 10 }}
                />
                <h3 style={{ marginTop: 10 }}>{p.name}</h3>
                <p style={{ fontWeight: "bold", color: "#065f46" }}>{p.price}</p>
                <p style={{ color: "gray" }}>{p.description}</p>
                <button
                  onClick={() => navigate("/login")}
                  style={{
                    width: "100%", padding: 10, background: "#073b2f", color: "#fff",
                    border: "none", borderRadius: 6, marginTop: 10
                  }}
                >
                  Contact Farmer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div
        ref={servicesRef}
        style={{
          padding: "60px 50px",
          opacity: servicesInView ? 1 : 0,
          transform: servicesInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: 50,
          color: "#083344"
        }}>
          Our Services
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 30, justifyContent: "center" }}>
          {services.map((s, idx) => (
            <div
              key={s.id}
              style={{
                flex: "1 1 280px",
                padding: 30,
                background: "white",
                borderRadius: 16,
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                textAlign: "center",
                transition: "0.3s"
              }}
            >
              <div style={{ fontSize: 60, color: "#00796b", marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 500 }}>{s.title}</h3>
              <p style={{ marginTop: 10, lineHeight: 1.6 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div
        ref={galleryRef}
        style={{
          padding: "60px 50px",
          opacity: galleryInView ? 1 : 0,
          transform: galleryInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s ease-out"
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: 40, color: "#083344" }}>
          Gallery
        </h2>

        <div style={{
          display: "flex",
          gap: 25,
          overflowX: "auto",
          paddingBottom: 10
        }}>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              style={{
                width: 450,
                height: 350,
                objectFit: "cover",
                borderRadius: 14,
                cursor: "pointer",
                transition: "0.4s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
