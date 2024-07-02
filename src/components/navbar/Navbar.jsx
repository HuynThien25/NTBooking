import "./navbar.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [destionaton,setDestination]= useState("")

  const navigate= useNavigate()

  const handleHome=()=>{
    navigate("/",{state:{destionaton}})
}

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleHome} onChange={e=>setDestination(e.target.value)}>NTBooking.com</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
