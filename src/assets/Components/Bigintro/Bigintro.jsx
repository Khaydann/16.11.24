import React from 'react';
import './Bigintro.scss';
import { useNavigate } from 'react-router-dom';

const Bigintro = ({ image, text }) => {
    const navigate = useNavigate();
    return (
      <div className="bigintro">
        <img src={image} alt="Intro Image" className="bigintro-image" />
        <div className="bigintro-text">{text}</div>
        <button onClick={() => navigate("/Bizimlə-əlaqə")} className="bigintro-btn">
          Müraciət edin
        </button>
      </div>
    );
};

export default Bigintro;
