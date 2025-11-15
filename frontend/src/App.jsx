import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'

export default function App(){
  return (
    <>
      <Navbar />
      <main style={{minHeight:'calc(100vh - 160px)'}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  )
}
