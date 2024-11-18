import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Smallintro from '../../Components/Smallintro/Smallintro';
import Card from '../../Components/Card/Card';
import './Showroom.scss'
import { useNavigate } from 'react-router-dom';
const Showroom = () => {
    const navigate=useNavigate()
  return (
 
    <div>
      <Header />
      <Smallintro
        text={["Sizə yaxın ünvanı seçin"]}
        image={["https://d2638j3z8ek976.cloudfront.net/global-css-files/20241021-114056/images/placeholders/txbMa55PJi.jpg"]}
      />
     <div className="showroom-cards">
     <Card onClick={()=>navigate("/Absheron-adress")}
        images={[
          "https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/1aa663e6c743ebb42821f526dfc857f0/mericon1.png"
        ]}
        texts={[
          "Automobile Center Absheron LLC",
          "Sumgait highway 6, AZ0123, Absheron district, Khirdalan, Baku",
         
        ]}
        span={[ "+994123477800"]}
      />
      <Card  onClick={()=>navigate("/Babek-adress")}
        images={[
          "https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,q_auto,c_fill,f_auto,fl_lossy/auto-client/1aa663e6c743ebb42821f526dfc857f0/mericon1.png"
        ]}
        texts={[
          "AutoStar Kaukasus GmbH Azerbaijan LLC",
          "Babek Avenue 1145, AZ1025, Baku",
         
        ]}
        span={[ "+994(12)4965050 "]}
      />
     </div>
      <Footer />
    </div>
  );
};

export default Showroom;
