import React, { useState, useEffect } from 'react'; // Hook-lar import edilir
import axios from 'axios'; // Axios import edilir
import './Eqesedan.scss';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const Eqesedan = () => {
    const [slides, setSlides] = useState([]); // Şəkilləri saxlamaq üçün state
    const [intImage, setIntImage] = useState(''); // İç görünüş üçün state
    const [exImage, setExImage] = useState(''); // Çöl görünüş üçün state

    useEffect(() => {
        // API-dən məlumatları axios ilə çəkin
        axios
            .get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car') // URL-ə sorğu göndəririk
            .then((response) => {
                // EQE Sedan olan obyektləri filtr edirik
                const EqesedanData = response.data.filter(item => item.name === 'EQE Sedan');

                if (EqesedanData.length > 0) {
                    const item = EqesedanData[0]; // İlk obyekti seçirik

                    // Slayd şəkillərini tərtib edirik
                    const slides = [
                        { img: item.white, alt: 'White Car' },
                        { img: item.black, alt: 'Black Car' },
                        { img: item.greymetalic, alt: 'Grey Metallic' },
                        { img: item.silvermetalic, alt: 'Silver Metallic' },
                        { img: item.red, alt: 'Red Car' },
                        { img: item.blue, alt: 'Blue Car' },
                    ];

                    setSlides(slides); // Şəkilləri state-ə yazırıq
                    setIntImage(item.int); // İç görünüş üçün şəkili müəyyən edirik
                    setExImage(item.ex); // Çöl görünüş üçün şəkili müəyyən edirik
                }
            })
            .catch((error) => {
                console.error('Məlumatlar alınmadı:', error);
            });
    }, []); // Effekt yalnız komponent mount edildikdə çalışır

    return (
        <div>
            <Header /> {/* Header komponenti */}
            <Bigcarousel slides={slides} /> {/* Şəkilləri göstərən komponent */}
            <Intex intImage={intImage} exImage={exImage} /> {/* İç və çöl görünüş */}
            <Footer /> {/* Footer komponenti */}
        </div>
    );
};

export default Eqesedan;
