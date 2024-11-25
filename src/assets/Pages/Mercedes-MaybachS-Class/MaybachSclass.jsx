import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MaybachSclass.scss';
import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';

const MaybachSclass = () => {
    const [slides, setSlides] = useState([]);
    const [intImage, setIntImage] = useState('');
    const [exImage, setExImage] = useState('');

    useEffect(() => {
        axios.get('https://673cda4596b8dcd5f3fbef5e.mockapi.io/Car')
            .then(response => {
                const maybachData = response.data.find(item => item.name === 'Mercedes-Maybach S-Class');
                if (maybachData) {
                    setSlides([
                        { img: maybachData.white, alt: 'White Car' },
                        { img: maybachData.black, alt: 'Black Car' },
                        { img: maybachData.greymetalic, alt: 'Grey Metallic' },
                        { img: maybachData.silvermetalic, alt: 'Silver Metallic' },
                        { img: maybachData.red, alt: 'Red Car' },
                        { img: maybachData.blue, alt: 'Blue Car' }
                    ]);
                    setIntImage(maybachData.int);
                    setExImage(maybachData.ex);
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

export default MaybachSclass;
