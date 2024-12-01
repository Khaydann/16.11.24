import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Aclasshatchback.scss';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';

const Aclasshatchback = () => {
    const [slides, setSlides] = useState([]); 
    const [intImage, setIntImage] = useState(''); 
    const [exImage, setExImage] = useState(''); 

    useEffect(() => {
      
        axios
            .get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car') 
            .then((response) => {
                
                const aClassData = response.data.filter(item => item.name === 'A-Class Hatchback');

                if (aClassData.length > 0) {
                    const item = aClassData[0]; 

         
                    const slides = [
                        { img: item.white, alt: 'White Car' },
                        { img: item.black, alt: 'Black Car' },
                        { img: item.greymetalic, alt: 'Grey Metallic' },
                        { img: item.silvermetalic, alt: 'Silver Metallic' },
                        { img: item.red, alt: 'Red Car' },
                        { img: item.blue, alt: 'Blue Car' },
                    ];

                    setSlides(slides); 
                    setIntImage(item.int); 
                    setExImage(item.ex); 
                }
            })
            .catch((error) => {
                console.error('Məlumatlar alınmadı:', error);
            });
    }, []); 

    return (
        <div>
            <Header /> 
            <Bigcarousel slides={slides} /> 
            
            <Intex intImage={intImage} exImage={exImage} /> <br />
            <Contact images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1349,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/89d86c14772ba14096addeaad2e2e9f9/eqssuv_2_.png"]} />
            <Footer /> 
        </div>
    );
};

export default Aclasshatchback;
