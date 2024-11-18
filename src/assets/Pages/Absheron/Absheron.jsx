import React from "react";
import "./Absheron.scss";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Absheron = () => {
  return (
    <>
    <Header/>
    <div className="absheron-container">
      <div className="absheron-info-container">
        <h2 className="absheron-h2">Automobile Center Absheron LLC</h2>
        <p className="absheron-p">Sumgait highway 6, AZ0123, Absheron district, Khirdalan, Baku</p>
        <div className="absheron-info-divider"></div>
        <p className="absheron-contact-details"><strong>Sales:</strong> +994123477800</p>
        <p className="absheron-contact-details"><strong>Service:</strong> +994123477500</p>
      </div>
      <div className="absheron-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.482398121448!2d49.82255591569099!3d40.423494379363335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308dd0ef9a41c9%3A0x51b022f6b55463c3!2sKhirdalan%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1691660036520!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Automobile Center Absheron Map"
        ></iframe>
      </div>
     
    </div>
    <Footer/></>
  );
};

export default Absheron;
