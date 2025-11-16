import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const loc = useLocation()
  const navigate = useNavigate()

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userData")
    navigate("/login")
  }

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
          src="/assets/logo.png"
          alt="logo" 
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #fff'
          }}
        />
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>Vasundhara Agro</div>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: 15 }}>

        {!isLoggedIn && (
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        )}

     
        {!isLoggedIn && loc.pathname !== '/login' && (
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        )}
        {!isLoggedIn && loc.pathname !== '/register' && (
          <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
        )}

      
        {isLoggedIn && (
          <>
            <Link to="/product" style={{ color: '#fff', textDecoration: 'none' }}>Product</Link>
            <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</Link>

            <button 
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: '1px solid #fff',
                padding: '5px 12px',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: 5
              }}
            >
              Logout
            </button>
          </>
        )}

      </div>
    </header>
  )
}
