import React from "react";
import "./Smallintro.scss";

const Smallintro = ({ image, text }) => {
  return (
    <div className="smallintro">
      <img src={image} alt="Intro Image" className="smallintro-image" />
      <div className="smallintro-text">{text}</div>
    </div>
  );
};

export default Smallintro;
