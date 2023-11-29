import React, { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import "../Allcss/navbar.css";
import Buttonn from "./button";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleLinkClick = () => {
    setOpenLinks(false); // Close the mobile menu when a link is clicked
  };

  // Use useLocation to get the current location
  const location = useLocation();

  return (
    <div className="navbar">
      <div className='Logo'><h2>TRUE-BUILDERS</h2></div>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? "active" : ""}> Home </Link>
          <Link to="/services" onClick={handleLinkClick} className={location.pathname === '/services' ? "active" : ""}> Services </Link>
          <Link to="/projects" onClick={handleLinkClick} className={location.pathname === '/projects' ? "active" : ""}> Projects </Link>
          <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? "active" : ""}> About </Link>
          <Link to="/management" onClick={handleLinkClick} className={location.pathname === '/management' ? "active" : ""}> Management </Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? "active" : ""}> Home </Link>
        <Link to="/services" onClick={handleLinkClick} className={location.pathname === '/services' ? "active" : ""}> Services </Link>
        <Link to="/projects" onClick={handleLinkClick} className={location.pathname === '/projects' ? "active" : ""}> Projects </Link>
        <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? "active" : ""}> About </Link>
        <Link to="/management" onClick={handleLinkClick} className={location.pathname === '/management' ? "active" : ""}> Management </Link>
      </div>

      <div>
        <button className='toggle' onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>

      <div className='btnav'>
        <Link to="/contact"><Buttonn btntxt={"contact"} btncolor={'blue'} /></Link>
      </div>
    </div>
  );
}

export default Navbar;