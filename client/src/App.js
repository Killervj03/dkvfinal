import React from 'react'
import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import Aboutus from "./pages/Aboutus"
import Committee from "./pages/Committee"
import Member from "./pages/Member"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Memberform from './Memberform'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import View from './pages/View'
import Home from './pages/Home'
import Idcard from './pages/IDcard';





function App() {
  return (
    <>
    

      <div className="container">
    
        <ToastContainer position="top-center" />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Memberform" element={<Memberform />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/update/:id" element={<Memberform />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/api/get/:id" element={<Idcard />} />
          <Route path="/Idcard" element={<Idcard/>}/>
        
          
        </Routes>

      </div>

    </>
  );
}
export default App;
