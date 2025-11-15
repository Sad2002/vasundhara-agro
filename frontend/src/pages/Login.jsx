import React, { useState } from 'react'
import api from '../services/api'
import { saveToken } from '../utils/auth'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: '', password: '' })
  const [successMsg, setSuccessMsg] = useState('')
  const nav = useNavigate()

  
  const validateEmail = () => /^\S+@\S+\.\S+$/.test(email)
  const validatePassword = () => password.length >= 6

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (!e.target.value) setError(prev => ({ ...prev, email: 'Fill this field' }))
    else if (!validateEmail()) setError(prev => ({ ...prev, email: 'Enter a valid email' }))
    else setError(prev => ({ ...prev, email: '' }))
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (!e.target.value) setError(prev => ({ ...prev, password: 'Fill this field' }))
    else if (!validatePassword()) setError(prev => ({ ...prev, password: 'Password must be at least 6 characters' }))
    else setError(prev => ({ ...prev, password: '' }))
  }

  const submit = async (e) => {
    e.preventDefault()

    let hasError = false
    const newError = { ...error }

    if (!email) { newError.email = 'Fill this field'; hasError = true }
    else if (!validateEmail()) { newError.email = 'Enter a valid email'; hasError = true }

    if (!password) { newError.password = 'Fill this field'; hasError = true }
    else if (!validatePassword()) { newError.password = 'Password must be at least 6 characters'; hasError = true }

    setError(newError)
    if (hasError) return

    try {
      const { data } = await api.post('/auth/login', { email, password })
      saveToken(data.token)
      setSuccessMsg('Logged in successfully!')

      const role = JSON.parse(atob(data.token.split('.')[1])).role
      nav(role === 'admin' ? '/admin' : role === 'hr' ? '/hr' : '/')
    } catch (e) {
      setError({ email: '', password: e.response?.data?.msg || 'Login failed' })
    }
  }

  const getBorder = (isValid, value) => {
    if (!value) return '1px solid #ccc'
    return `2px solid ${isValid ? 'green' : 'red'}`
  }

  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'80vh', background:'linear-gradient(135deg,#e8fff0,#f3fff8)' }}>
      <div className="card" style={{ maxWidth:420, width:'96%' }}>
        <div style={{ textAlign:'center', marginBottom:12 }}>
          <img src="public/assets/reglogo.jpg" width="35%" alt="logo" />
          <h3 style={{ margin:8, color:'#073b2f' }}>Sign in</h3>
          <p style={{ margin:0, color:'#075652' }}>Welcome back — enter your details</p>
        </div>

        {successMsg && <div style={{ textAlign:'center', marginBottom:10, color:'green' }}>{successMsg}</div>}

        <form onSubmit={submit}>
          <div style={{ marginBottom: 8 }}>
            <input
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ border: getBorder(validateEmail(), email), outline: 'none' }}
            />
            {error.email && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.email}</div>}
          </div>

          <div style={{ marginBottom: 8 }}>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={{ border: getBorder(validatePassword(), password), outline: 'none' }}
            />
            {error.password && <div style={{ color:'red', fontSize:12, marginTop:2 }}>{error.password}</div>}
          </div>

          <div style={{ display:'flex', gap:12, marginTop:6 }}>
            <button type="submit" className="btn-primary" style={{ flex:1 }}>Sign In</button>
          </div>

          <div style={{ textAlign:'center', marginTop:12, color:'#06423a' }}>
            <Link to="/register">Don't have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
