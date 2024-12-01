"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../../Components/Admin-dashboard/MainContent";
import Clients from "../../Components/Admin-clients/Clients";
import Orders from "../../Components/Admin-orders/Orders";
import Menus from "../../Components/Admin-menus/Menus";

import "./admin.css";

const Admin = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setSearchFormVisible(false);
      }
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "clients":
        return <Clients />;
      case "Orders":
        return <Orders />;
      case "Menus":
        return <Menus />;
      default:
        return <div>Sayfa Bulunamadı</div>;
    }
  };

  return (
    <>
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <a href="#" className="brand">
          <span className="text p-3">Mercedes</span>
        </a>
        <ul className="side-menu top">
          {[
            { key: "dashboard", label: "Dashboard" },
            { key: "clients", label: "İstifadəçi" },
            { key: "Orders", label: "Əlaqə" },
            { key: "Menus", label: "Məhsullar" },
          ].map(({ key, label }) => (
            <li
              key={key}
              className={activePage === key ? "active" : ""}
              onClick={() => setActivePage(key)} 
            >
              <a href="#">
                <span className="text">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

    
      <section id="content">
        <Navbar
          toggleSidebar={() => setSidebarHidden((prev) => !prev)}
          toggleSearchForm={() => setSearchFormVisible((prev) => !prev)}
          isSearchFormVisible={isSearchFormVisible}
        />
        {renderContent()}
      </section>
    </>
  );
};

export default Admin;
