import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';

const EQA = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const eqaData = response.data.find(item => item.name === 'EQA');
                if (eqaData) {
                    setSlides([
                        { img: eqaData.white, alt: 'White Car' },
                        { img: eqaData.black, alt: 'Black Car' },
                        { img: eqaData.greymetalic, alt: 'Grey Metallic' },
                        { img: eqaData.silvermetalic, alt: 'Silver Metallic' },
                        { img: eqaData.red, alt: 'Red Car' },
                        { img: eqaData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(eqaData.int);
                    setExImage(eqaData.ex);
                }
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Header />
            <Bigcarousel slides={slides} />
            <Intex intImage={intImage} exImage={exImage} />
           
            <Contact images={["//d2638j3z8ek976.cloudfront.net/global-css-files/20240730-073037/images/placeholders/jITe62j1db.jpg"]} />
            <Footer />
        </div>
    );
};

export default EQA;
