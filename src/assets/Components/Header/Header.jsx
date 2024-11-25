import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Spesifik açarı silir
    navigate('/Homepage')
  };

  return (
    <>
      <div className="header-main">
        {/* Üst Hissə: Logo mərkəzdə, Login və Sign Up sağda */}
        <div className="header-top">
          <div className="header-logo">
            <img 
              onClick={() => navigate("/Homepage")}
              className="header-logo-img1" 
              src="https://d2638j3z8ek976.cloudfront.net/b1678f49515e0085804255bb3746863dd165e690/1726752299/images/mb-star-svg.svg" 
              alt="Mercedes-Benz Logo" 
            />
          </div>
          {localStorage.getItem("user") ? (
            <div className="header-logout">
              <button onClick={handleLogout} className="link logout-link">Log Out</button>
            </div>
          ) : (
            <div className="header-login-signup">
              <a href="#" className="link login-link" onClick={() => navigate("/Login")}>Login</a>
              <a href="#" className="link signup-link" onClick={() => navigate("/SignUp")}>Sign Up</a>
            </div>
          )}
        </div>

        {/* Alt Hissə: Naviqasiya mərkəzdə */}
        <div className="header-properity">
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
    </>
  );
};

export default Header;
