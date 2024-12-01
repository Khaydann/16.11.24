import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Intex.scss";

const Intex = ({ intImage, exImage }) => {
  const [selected, setSelected] = useState("int"); 

  return (
    <div className="intex-container">
      <div className="button-container">
    
        <button
        id="int-button"
          className={`switch-button int-button ${selected === "int" ? "active" : ""}`}
          onClick={() => setSelected("int")}
        >
          Interiyer
        </button>
      
        <button
        id="ex-button"
          className={`switch-button ${selected === "ex" ? "active" : ""}`}
          onClick={() => setSelected("ex")}
        >
        Eksteryer
        </button>
      </div>
     
      <div className="image-container">
        <img
          src={selected === "int" ? intImage : exImage} 
          alt={selected === "int" ? "Interior Image" : "Exterior Image"}
          className="main-image"
        />
      </div>
    </div>
  );
};


Intex.propTypes = {
  intImage: PropTypes.string.isRequired, 
  exImage: PropTypes.string.isRequired, 
};

export default Intex;
