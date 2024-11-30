import React, { useState, useEffect } from 'react'; // Hook-lar import edilir
import axios from 'axios'; // Axios import edilir
import './Aclasshatchback.scss';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';

const Aclasshatchback = () => {
    const [slides, setSlides] = useState([]); // Şəkilləri saxlamaq üçün state
    const [intImage, setIntImage] = useState(''); // İç görünüş üçün state
    const [exImage, setExImage] = useState(''); // Çöl görünüş üçün state

    useEffect(() => {
        // API-dən məlumatları axios ilə çəkin
        axios
            .get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car') // URL-ə sorğu göndəririk
            .then((response) => {
                // A-Class Hatchback olan obyektləri filtr edirik
                const aClassData = response.data.filter(item => item.name === 'A-Class Hatchback');

                if (aClassData.length > 0) {
                    const item = aClassData[0]; // İlk obyekti seçirik

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
            
            <Intex intImage={intImage} exImage={exImage} /> {/* İç və çöl görünüş */} <br />
            <Contact images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1349,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/89d86c14772ba14096addeaad2e2e9f9/eqssuv_2_.png"]} />}
            <Footer /> {/* Footer komponenti */}
        </div>
    );
};

export default Aclasshatchback;
