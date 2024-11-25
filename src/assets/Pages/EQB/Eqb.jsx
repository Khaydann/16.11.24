import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EQB.scss';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const EQB = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const eqbData = response.data.find(item => item.name === 'EQB');
                if (eqbData) {
                    setSlides([
                        { img: eqbData.white, alt: 'White Car' },
                        { img: eqbData.black, alt: 'Black Car' },
                        { img: eqbData.greymetalic, alt: 'Grey Metallic' },
                        { img: eqbData.silvermetalic, alt: 'Silver Metallic' },
                        { img: eqbData.red, alt: 'Red Car' },
                        { img: eqbData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(eqbData.int);
                    setExImage(eqbData.ex);
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

export default EQB;
