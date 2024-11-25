import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const CLECabriolet = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const cleData = response.data.find(item => item.name === 'CLE Cabriolet');
                if (cleData) {
                    setSlides([
                        { img: cleData.white, alt: 'White Car' },
                        { img: cleData.black, alt: 'Black Car' },
                        { img: cleData.greymetalic, alt: 'Grey Metallic' },
                        { img: cleData.silvermetalic, alt: 'Silver Metallic' },
                        { img: cleData.red, alt: 'Red Car' },
                        { img: cleData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(cleData.int);
                    setExImage(cleData.ex);
                }
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Header />
            <Bigcarousel slides={slides} />
            <Intex intImage={intImage} exImage={exImage} />
            <Footer />
        </div>
    );
};

export default CLECabriolet;
