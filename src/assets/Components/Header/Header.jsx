import React, { useState } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Homepage');
  };

  return (
    <div className="header-main">
      <div className="header-top">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="header-logo">
          <img
            onClick={() => navigate("/Homepage")}
            className="header-logo-img1"
            src="https://d2638j3z8ek976.cloudfront.net/b1678f49515e0085804255bb3746863dd165e690/1726752299/images/mb-star-svg.svg"
            alt="Mercedes-Benz Logo"
          />
        </div>

        <div className="header-links">
          {localStorage.getItem("user") ? (
            <button onClick={handleLogout} className="link logout logout-link">Log Out</button>
          ) : (
            <>
              <div className="header-login-signup">
                <a href="#" className="link login-link" onClick={() => navigate("/Login")}>Login</a>
                <a href="#" className="link signup-link" onClick={() => navigate("/SignUp")}>Sign Up</a>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropdown-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <a onClick={() => navigate("/Login")} className="dropdown-item">Login</a>
                  <a onClick={() => navigate("/SignUp")} className="dropdown-item">Sign Up</a>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className={`header-properity ${menuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            <li><a href="#">Model cərgəsi</a></li>
            <li><a href="#">Alıcılar üçün</a></li>
            <li><a href="#">Servis</a></li>
            <li><a href="#">Bizim brendimiz</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
