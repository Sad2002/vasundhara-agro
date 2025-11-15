import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  // Products
  const products = [
    { id: 1, name: 'Organic Wheat', price: '₹120/kg', image: 'public/assets/organicwheat.webp' },
    { id: 2, name: 'Fresh Tomatoes', price: '₹50/kg', image: 'public/assets/tomato.jpg' },
    { id: 3, name: 'Organic Rice', price: '₹150/kg', image: 'public/assets/rice.jpg' },
    { id: 4, name: 'Green Chilli', price: '₹80/kg', image: 'public/assets/chilli.jpg' },
    { id: 5, name: 'Potatoes', price: '₹40/kg', image: 'public/assets/potato.jpg' },
    { id: 6, name: 'Carrots', price: '₹60/kg', image: 'public/assets/carrot.jpg' }
  ]

  const scrollRef = useRef(null)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleBuy = () => navigate('/login')

  // Slideshow
  const slides = [
    'public/assets/background.jpg',
    'public/assets/background5.avif'
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Gallery images
  const galleryImages = [
    'public/assets/gallery1.jpg',
    'public/assets/gallery2.jpg',
    'public/assets/gallery3.jpg'
  ]

  // Services
  const services = [
    { id: 1, title: 'Organic Products', logo: 'public/assets/logo.png' },
    { id: 2, title: 'Farm Consultation', logo: 'public/assets/logo.png' },
    { id: 3, title: 'Fresh Delivery', logo: 'public/assets/logo.png' }
  ]

  return (
    <div style={{width: '100%', margin: 0, padding: 0, boxSizing:'border-box'}}>
      {/* Hero Slideshow */}
      <div 
        className="hero" 
        style={{
          width: '100%',
          height: 700,
          display:'flex', 
          alignItems:'center', 
          justifyContent:'space-between', 
          padding: '0 50px',
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div style={{maxWidth: '50%'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: 12}}>Empowering Farmers, Connecting Markets</h1>
          <p style={{fontSize: '1.1rem', lineHeight: '1.5'}}>Vasundhara Agro helps farmers sell their produce directly to buyers and ensures quality agricultural products for everyone.</p>
        </div>
       
      </div>

      {/* Products */}
      <div style={{padding:'40px 50px'}}>
        <h2 style={{marginBottom:20, color:'#083344'}}>Products for Sale</h2>
        <div style={{position:'relative'}}>
          <button onClick={() => scroll('left')} style={{position:'absolute', top:'50%', left:0, transform:'translateY(-50%)', zIndex:1, background:'#073b2f', color:'#fff', border:'none', borderRadius:'50%', width:32, height:32, cursor:'pointer'}}>&lt;</button>
          <button onClick={() => scroll('right')} style={{position:'absolute', top:'50%', right:0, transform:'translateY(-50%)', zIndex:1, background:'#073b2f', color:'#fff', border:'none', borderRadius:'50%', width:32, height:32, cursor:'pointer'}}>&gt;</button>
          <div ref={scrollRef} style={{display:'flex', gap:16, overflowX:'auto', padding:'8px 40px', scrollBehavior:'smooth'}}>
            {products.map(p => (
              <div key={p.id} className="card" style={{
                flex:'0 0 200px', 
                padding:12, 
                textAlign:'center', 
                boxShadow:'0 2px 6px rgba(0,0,0,0.1)',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-between',
                height:320,
                transition:'transform 0.3s, box-shadow 0.3s',
                cursor:'pointer'
              }}
                onMouseEnter={e => {e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)'}}
                onMouseLeave={e => {e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 2px 6px rgba(0,0,0,0.1)'}}
              >
                <img src={p.image} alt={p.name} style={{width:'100%', height:150, objectFit:'cover', marginBottom:8, borderRadius:4}} />
                <h3 style={{margin:4}}>{p.name}</h3>
                <p style={{margin:4, color:'#0a3a3e'}}>{p.price}</p>
                <button className="btn-primary" style={{marginTop:8}} onClick={handleBuy}>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div style={{display:'flex', flexWrap:'wrap', padding:'40px 50px', alignItems:'center', gap:20}}>
        <div style={{flex:'1 1 400px'}}>
          <h2 style={{color:'#083344', marginBottom:12}}>Organic & Natural</h2>
          <p>Our products are 100% organic and naturally grown, ensuring quality for every household. We work directly with farmers to deliver fresh produce to your doorstep.</p>
        </div>
        <div style={{flex:'1 1 300px'}}>
          <img src="public/assets/about.jpg" alt="About" style={{width:'100%', borderRadius:8}} />
        </div>
      </div>

      {/* Gallery */}
      <div style={{padding:'40px 50px'}}>
        <h2 style={{color:'#083344', marginBottom:20}}>Gallery</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:16}}>
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt={`Gallery ${idx+1}`} style={{width:'calc(33% - 10px)', borderRadius:8, objectFit:'cover', height:180}} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{padding:'40px 50px'}}>
        <h2 style={{color:'#083344', marginBottom:20}}>Our Services</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:20}}>
          {services.map(s => (
            <div key={s.id} style={{
              flex:'1 1 250px',
              padding:20,
              textAlign:'center',
              boxShadow:'0 2px 6px rgba(0,0,0,0.1)',
              borderRadius:8,
              transition:'transform 0.3s, box-shadow 0.3s',
              cursor:'pointer'
            }}
              onMouseEnter={e => {e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)'}}
              onMouseLeave={e => {e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 2px 6px rgba(0,0,0,0.1)'}}
            >
              <img src={s.logo} alt={s.title} style={{width:60, marginBottom:12}} />
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
