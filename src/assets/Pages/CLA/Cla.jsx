import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const CLA = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const claData = response.data.find(item => item.name === 'CLA');
                if (claData) {
                    setSlides([
                        { img: claData.white, alt: 'White Car' },
                        { img: claData.black, alt: 'Black Car' },
                        { img: claData.greymetalic, alt: 'Grey Metallic' },
                        { img: claData.silvermetalic, alt: 'Silver Metallic' },
                        { img: claData.red, alt: 'Red Car' },
                        { img: claData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(claData.int);
                    setExImage(claData.ex);
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

export default CLA;
