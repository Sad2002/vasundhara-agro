import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className="navbar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: '#073b2f',
      color: '#fff'
    }}>
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      
        <img 
          src="public/assets/logo.png" 
          alt="logo" 
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #fff'
          }}
        />
        <div className="logo" style={{ fontWeight: 'bold', fontSize: 18 }}>
          Vasundhara Agro
        </div>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: 15 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        {loc.pathname !== '/login' && <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>}
        {loc.pathname !== '/register' && <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>}
      </div>
    </header>
  )
}
