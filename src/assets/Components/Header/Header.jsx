import React, { useState, useEffect } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modelHover, setModelHover] = useState(false);
  const [submenuHover, setSubmenuHover] = useState(null); // Change to track specific submenu
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/Homepage");
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
          {user ? (
            <div className="logout-container">
              <FontAwesomeIcon
                icon={faUser}
                className="user-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              <button
                onClick={handleLogout}
                className="link logout logout-link"
              >
                Log Out
              </button>

              {dropdownOpen && (
                <div className="dropdown-name">
                  <p>İstifadəçi: {user.name}</p>
                  <span>Balans: {user.budget} AZN</span>
                </div>
              )}
            </div>
          ) : (
            <div className="header-login-signup">
              <a
                href="#"
                className="link login-link"
                onClick={() => navigate("/Login")}
              >
                Login
              </a>
              <a
                href="#"
                className="link signup-link"
                onClick={() => navigate("/SignUp")}
              >
                Sign Up
              </a>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropdown-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            </div>
          )}
        </div>
      </div>

      <div className={`header-properity ${menuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            <li
              onMouseEnter={() => setModelHover(true)}
              onMouseLeave={() => setModelHover(false)}
            >
              <a href="#">Model cərgəsi</a>
              {modelHover && (
                <div className="submenu">
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("Hatchback")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">Hatchback</a>
                    {submenuHover === "Hatchback" && (
                      <div className="sub-submenu">
                        <a
                          onClick={() => navigate("/A-class-hatchback")}
                          href="#"
                        >
                          A-Class Hatchback
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("Sedan")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">Sedan</a>
                    {submenuHover === "Sedan" && (
                      <div className="sub-submenu">
                        <a onClick={() => navigate("/Eqesedan")} href="#">
                          EQE Sedan
                        </a>
                        <a onClick={() => navigate("/C-Class-Sedan")} href="#">
                          C-Class Sedan
                        </a>
                        <a
                          onClick={() => navigate("/Mercedes-Maybach-S-Class")}
                          href="#"
                        >
                          Mercedes-Maybach S-Class
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("Yolsuzluq Avtomobilləri")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">Yolsuzluq Avtomobilləri</a>
                    {submenuHover === "Yolsuzluq Avtomobilləri" && (
                      <div className="sub-submenu">
                         <a onClick={() => navigate("/G-class")} href="#">
                         G-class
                        </a>
                        <a onClick={() => navigate("/EQB")} href="#">
                          EQB
                        </a>
                       
                        <a
                          onClick={() => navigate("/EQA")}
                          href="#"
                        >
                          EQA
                        </a>
                        <a
                          onClick={() => navigate("/GLS")}
                          href="#"
                        >
                          GLS
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("Kupe")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">Kupe</a>
                    {submenuHover === "Kupe" && (
                      <div className="sub-submenu">
                        <a onClick={() => navigate("/AMG-GT-Coupé")} href="#">
                        AMG GT Coupé
                        </a>
                        <a onClick={() => navigate("/CLA")} href="#">
                          CLA
                        </a>
                       
                        
                      </div>
                    )}
                  </div>
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("Kabriolet")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">Sedan</a>
                    {submenuHover === "Kabriolet" && (
                      <div className="sub-submenu">
                        <a onClick={() => navigate("/SL-Roadster")} href="#">
                        SL Roadster
                        </a>
                        <a onClick={() => navigate("/CLE-Cabriolet")} href="#">
                        CLE Cabriolet
                        </a>
                       
                      </div>
                    )}
                  </div>
                  <div
                    className="submenu-item"
                    onMouseEnter={() => setSubmenuHover("MPV")}
                    onMouseLeave={() => setSubmenuHover(null)}
                  >
                    <a href="#">MPV</a>
                    {submenuHover === "MPV" && (
                      <div className="sub-submenu">
                        <a onClick={() => navigate("/V-class")} href="#">
                         V-class
                        </a>
                       
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#">Alıcılar üçün</a>
            </li>
            <li>
              <a href="#">Servis</a>
            </li>
            <li>
              <a href="#">Bizim brendimiz</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
