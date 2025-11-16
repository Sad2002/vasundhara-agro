import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/profile"
import Product from "./pages/Product"



export default function App(){
  return (
    <>
      <Navbar />
      <main style={{minHeight:'calc(100vh - 160px)'}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/product" element={<Product />} />


        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  )
}
