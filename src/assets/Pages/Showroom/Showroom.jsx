import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Showroom.scss'; // SCSS faylını daxil edirik
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Showroom = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className="showroom-cards">
        {/* Eyni ölçüdə olan kart */}
        <div 
          className="showroom-card"
          onClick={() => navigate("/Absheron-adress")}
        >
          <img
            src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/1aa663e6c743ebb42821f526dfc857f0/mericon1.png"
            alt="Automobile Center Absheron LLC"
          />
          <div className="showroom-card-text">
            <h3>Automobile Center Absheron LLC</h3>
            <p>Sumgait highway 6, AZ0123, Absheron district, Khirdalan, Baku</p>
            <span>+994123477800</span>
          </div>
        </div>

        {/* Eyni ölçüdə olan başqa kart */}
        <div 
          className="showroom-card"
          onClick={() => navigate("/Babek-adress")}
        >
          <img
            src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/1aa663e6c743ebb42821f526dfc857f0/mericon1.png"
            alt="AutoStar Kaukasus GmbH Azerbaijan LLC"
          />
          <div className="showroom-card-text">
            <h3>AutoStar Kaukasus GmbH Azerbaijan LLC</h3>
            <p>Babek Avenue 1145, AZ1025, Baku</p>
            <span>+994(12)4965050</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Showroom;
