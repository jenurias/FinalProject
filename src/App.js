import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom" 
import { TurnedIn } from "@mui/icons-material";

function App() {
  return (   
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


      <Footer /> 
    </>
  )
}
export default App;