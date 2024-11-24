import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const Vclass = () => {
  const [slides, setSlides] = useState([]); // Şəkilləri saxlamaq üçün state
  const [intImage, setIntImage] = useState('');
  const [exImage, setExImage] = useState('');

  useEffect(() => {
    // API-dən məlumatları axios ilə çəkin
    axios
      .get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
      .then((response) => {
        // V-class olan obyektləri filtr edin
        const vClassData = response.data.filter(item => item.name === 'V-class');
        
        if (vClassData.length > 0) {
          const item = vClassData[0]; // V-class obyektini alırıq
          
          // `white`, `black`, `red` şəkillərini əldə edirik
          const slides = [
            { img: item.white, alt: 'White Car' },
            { img: item.black, alt: 'Black Car' },
            { img: item.greymetalic, alt: 'Grey Metallic' },
            { img: item.silvermetalic, alt: 'Silver Metallic' },
            { img: item.red, alt: 'Red Car' },
            { img: item.blue, alt: 'Blue Car' },
          ];

          setSlides(slides); // State-ə şəkilləri yükləyirik
          
          // İç və çöl görüntüləri üçün şəkilləri müəyyənləşdiririk
          setIntImage(item.int);  // İç görünüş şəkili
          setExImage(item.ex);  // Çöl görünüş şəkili
        }
      })
      .catch((error) => {
        console.error('Məlumatlar alınmadı:', error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <Bigcarousel slides={slides} />
      <Intex intImage={intImage} exImage={exImage} />
      <Footer/>
    </div>
  );
};

export default Vclass;
