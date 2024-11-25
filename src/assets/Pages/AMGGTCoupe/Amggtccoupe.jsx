import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const AMGGT = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const amgData = response.data.find(item => item.name === 'AMG GT Coupé');
                if (amgData) {
                    setSlides([
                        { img: amgData.white, alt: 'White Car' },
                        { img: amgData.black, alt: 'Black Car' },
                        { img: amgData.greymetalic, alt: 'Grey Metallic' },
                        { img: amgData.silvermetalic, alt: 'Silver Metallic' },
                        { img: amgData.red, alt: 'Red Car' },
                        { img: amgData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(amgData.int);
                    setExImage(amgData.ex);
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

export default AMGGT;
