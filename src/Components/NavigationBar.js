import React, { useState } from 'react';
import ewbLogo from "../Media/UCLAEWBLogo.png";
import { Link } from "react-router-dom"; 
import ReorderIcon from '@mui/icons-material/Reorder';
import '../CSS/NavigationBar.css';

function NavigationBar() {

const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
  setOpenLinks(!openLinks);
};

  return (
    <div className="navigationbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={ewbLogo} /> 
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default NavigationBar;
