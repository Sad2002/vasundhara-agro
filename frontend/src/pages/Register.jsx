import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({ name: '', contact: '', email: '', password: '', confirmPassword: '' })
  const [successMsg, setSuccessMsg] = useState('')
  const nav = useNavigate()


  const validateName = (val) => val.length >= 3
  const validateContact = (val) => /^\d{10}$/.test(val)
  const validateEmail = (val) => /^\S+@\S+\.\S+$/.test(val)
  const validatePassword = (val) => val.length >= 6
  const validateConfirmPassword = (val) => val === password && val.length > 0

  const handleNameChange = (e) => {
    const val = e.target.value
    setName(val)
    if (!val) setError(prev => ({ ...prev, name: 'Fill this field' }))
    else if (!validateName(val)) setError(prev => ({ ...prev, name: 'Name must be at least 3 characters' }))
    else setError(prev => ({ ...prev, name: '' }))
  }

  const handleContactChange = (e) => {
    const val = e.target.value
    setContact(val)
    if (!val) setError(prev => ({ ...prev, contact: 'Fill this field' }))
    else if (!validateContact(val)) setError(prev => ({ ...prev, contact: 'Contact must be 10 digits' }))
    else setError(prev => ({ ...prev, contact: '' }))
  }

  const handleEmailChange = (e) => {
    const val = e.target.value
    setEmail(val)
    if (!val) setError(prev => ({ ...prev, email: 'Fill this field' }))
    else if (!validateEmail(val)) setError(prev => ({ ...prev, email: 'Enter a valid email' }))
    else setError(prev => ({ ...prev, email: '' }))
  }

  const handlePasswordChange = (e) => {
    const val = e.target.value
    setPassword(val)
    if (!val) setError(prev => ({ ...prev, password: 'Fill this field' }))
    else if (!validatePassword(val)) setError(prev => ({ ...prev, password: 'Password must be at least 6 characters' }))
    else setError(prev => ({ ...prev, password: '' }))

 
    if (confirmPassword && val !== confirmPassword) {
      setError(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }))
    } else if (confirmPassword) {
      setError(prev => ({ ...prev, confirmPassword: '' }))
    }
  }

  const handleConfirmPasswordChange = (e) => {
    const val = e.target.value
    setConfirmPassword(val)
    if (!val) setError(prev => ({ ...prev, confirmPassword: 'Fill this field' }))
    else if (val !== password) setError(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }))
    else setError(prev => ({ ...prev, confirmPassword: '' }))
  }

  const submit = async (e) => {
    e.preventDefault()

    
    const newError = {
      name: !name ? 'Fill this field' : !validateName(name) ? 'Name must be at least 3 characters' : '',
      contact: !contact ? 'Fill this field' : !validateContact(contact) ? 'Contact must be 10 digits' : '',
      email: !email ? 'Fill this field' : !validateEmail(email) ? 'Enter a valid email' : '',
      password: !password ? 'Fill this field' : !validatePassword(password) ? 'Password must be at least 6 characters' : '',
      confirmPassword: !confirmPassword ? 'Fill this field' : confirmPassword !== password ? 'Passwords do not match' : ''
    }

    setError(newError)
    if (Object.values(newError).some(msg => msg !== '')) return

    try {
      const res = await api.post('/auth/register', { name, email, contact, password });
      if(res.data && res.data.msg) setSuccessMsg(res.data.msg);
      setSuccessMsg('Registered successfully! Please login.')
      setName('')
      setEmail('')
      setContact('')
      setPassword('')
      setConfirmPassword('')
      setError({ name: '', contact: '', email: '', password: '', confirmPassword: '' })
      setTimeout(() => nav('/login'), 2000)
    } catch (e) {
      setSuccessMsg('')
      setError(prev => ({ ...prev, email: e.response?.data?.msg || 'Registration failed' }))
    }
  }

  const getBorder = (isValid, value) => {
    if (!value) return '1px solid #ccc'
    return `2px solid ${isValid ? 'green' : 'red'}`
  }

  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'80vh', background:'linear-gradient(135deg,#e8fff0,#f3fff8)' }}>
      <div className="card" style={{ maxWidth:520, width:'96%' }}>
        <div style={{ textAlign:'center', marginBottom:8 }}>
          <img src="public/assets/reglogo.jpg" width="30%" alt="logo" />
          <h3 style={{ margin:6, color:'#073b2f' }}>Create your account</h3>
        </div>

        {successMsg && <div style={{ textAlign:'center', marginBottom:10, color:'green' }}>{successMsg}</div>}

        <form onSubmit={submit}>
          <div className="form-row" style={{ marginBottom: 8 }}>
            <div style={{ flex:1, marginRight:6 }}>
              <input
                className="form-input"
                placeholder="Full name"
                value={name}
                onChange={handleNameChange}
                style={{ border: getBorder(validateName(name), name), outline: 'none', width:'100%' }}
              />
              {error.name && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.name}</div>}
            </div>
            <div style={{ flex:1, marginLeft:6 }}>
              <input
                className="form-input"
                placeholder="Contact (10 digits)"
                value={contact}
                onChange={handleContactChange}
                style={{ border: getBorder(validateContact(contact), contact), outline: 'none', width:'100%' }}
              />
              {error.contact && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.contact}</div>}
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <input
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ border: getBorder(validateEmail(email), email), outline: 'none', width:'100%' }}
            />
            {error.email && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.email}</div>}
          </div>

          <div className="form-row" style={{ marginBottom: 8 }}>
            <div style={{ flex:1, marginRight:6 }}>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                style={{ border: getBorder(validatePassword(password), password), outline: 'none', width:'100%' }}
              />
              {error.password && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.password}</div>}
            </div>
            <div style={{ flex:1, marginLeft:6 }}>
              <input
                className="form-input"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                style={{ border: getBorder(validateConfirmPassword(confirmPassword), confirmPassword), outline: 'none', width:'100%' }}
              />
              {error.confirmPassword && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.confirmPassword}</div>}
            </div>
          </div>

          <div style={{ display:'flex', gap:12, marginTop:6 }}>
            <button type="submit" className="btn-primary" style={{ flex:1 }}>Create Account</button>
          </div>

          <div style={{ textAlign:'center', marginTop:12 }}>
            <Link to="/login">Already have account? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
