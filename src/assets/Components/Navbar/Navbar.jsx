import React from "react";
import './Navbar.css'
const Navbar = ({ toggleSidebar}) => {
  return (
    <nav>
      <button onClick={toggleSidebar} id="greenbtn"  className="bx bx-menu"></button>
      
      <form action="#" >
        
      </form>
      <a href="#" className="profile">
        <img src="https://d2638j3z8ek976.cloudfront.net/b1678f49515e0085804255bb3746863dd165e690/1726752299/images/mb-star-svg.svg" alt="Profile" />
      </a>
    </nav>
  );
};

export default Navbar;
