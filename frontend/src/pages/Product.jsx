import React, { useState } from "react";


const sampleProducts = [
  {
    id: 1,
    farmer: "Ramesh Patil",
    name: "Fresh Tomatoes (5kg)",
    price: "₹120",
    img: "/assets/tomato.jpg",
    location: "Pune, Maharashtra",
    category: "Vegetables"
  },
  {
    id: 2,
    farmer: "Suresh Kale",
    name: "Organic Onions (10kg)",
    price: "₹180",
    img: "/assets/onion.jpg",
    location: "Nashik, Maharashtra",
    category: "Vegetables"
  },
  {
    id: 3,
    farmer: "Geeta Shinde",
    name: "Wheat Grains (20kg)",
    price: "₹600",
    img: "/assets/organicwheat.webp",
    location: "Satara, Maharashtra",
    category: "Grains"
  },
  {
    id: 4,
    farmer: "Mahesh Pawar",
    name: "Fresh Potatoes (10kg)",
    price: "₹150",
    img: "/assets/potato.jpg",
    location: "Kolhapur, Maharashtra",
    category: "Vegetables"
  },
  {
    id: 5,
    farmer: "Sunita Jadhav",
    name: "Sugarcane Bundle",
    price: "₹80",
    img: "/assets/sugarcane.jpg",
    location: "Baramati, Maharashtra",
    category: "Fruits"
  },
  {
    id: 6,
    farmer: "Vikas Mane",
    name: "Premium Rice (5kg)",
    price: "₹260",
    img: "/assets/rice.jpg",
    location: "Sangli, Maharashtra",
    category: "Grains"
  }
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  const filteredProducts = sampleProducts.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || product.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ maxWidth: 1200, margin: "40px auto", padding: 20 }}>
      
      <h1 style={{ textAlign: "center", marginBottom: 10, color: "#073b2f" }}>
        Farmers' Market
      </h1>

      <p style={{ textAlign: "center", marginBottom: 30 }}>
        Fresh agricultural products directly from trusted farmers.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          marginBottom: 25,
          flexWrap: "wrap"
        }}
      >

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: 10,
            width: 250,
            borderRadius: 8,
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

      
        {["All", "Vegetables", "Fruits", "Grains"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 14px",
              background: filter === cat ? "#073b2f" : "#e6e6e6",
              color: filter === cat ? "#fff" : "#000",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: filter === cat ? "bold" : "normal"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 25
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              padding: 15,
              background: "#fff",
              borderRadius: 15,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.15)";
            }}
          >
           
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 10,
                marginBottom: 10
              }}
            />

            <h3 style={{ color: "#073b2f", marginBottom: 8 }}>
              {product.name}
            </h3>

         
            <p
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#0f6f47",
                marginBottom: 5
              }}
            >
              {product.price}
            </p>

            
            <p style={{ margin: 0 }}>
              <strong>Farmer:</strong> {product.farmer}
            </p>

    
            <p style={{ fontSize: 14, color: "gray", margin: "5px 0 10px" }}>
              📍 {product.location}
            </p>

        
            <p
              style={{
                fontSize: 13,
                background: "#eaf7f0",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: 6,
                color: "#073b2f",
                marginBottom: 10
              }}
            >
              {product.category}
            </p>

        
            <button
              style={{
                width: "100%",
                padding: 10,
                background: "#073b2f",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 15,
                cursor: "pointer"
              }}
            >
              Contact Farmer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
