import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bigcarousel from '../../Components/Bigcarousel/Bigcarousel';
import Header from '../../Components/Header/Header';
import Intex from '../../Components/Intex/Intex';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';

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
            <br />
            <Contact images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1349,h_759,q_auto,c_fill,f_auto,fl_lossy/auto-client/89d86c14772ba14096addeaad2e2e9f9/eqssuv_2_.png"]} />
            <Footer />
        </div>
    );
};

export default CLA;
