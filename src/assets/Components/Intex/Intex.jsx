import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Intex.scss";

const Intex = ({ intImage, exImage }) => {
  const [selected, setSelected] = useState("int"); // İlk olaraq "int" seçilir

  return (
    <div className="intex-container">
      <div className="button-container">
        {/* Int düyməsi */}
        <button
          className={`switch-button ${selected === "int" ? "active" : ""}`}
          onClick={() => setSelected("int")}
        >
          Int
        </button>
        {/* Ex düyməsi */}
        <button
          className={`switch-button ${selected === "ex" ? "active" : ""}`}
          onClick={() => setSelected("ex")}
        >
          Ex
        </button>
      </div>
      {/* Şəkil */}
      <div className="image-container">
        <img
          src={selected === "int" ? intImage : exImage} // `int` və ya `ex` seçiminə görə şəkil
          alt={selected === "int" ? "Interior Image" : "Exterior Image"}
          className="main-image"
        />
      </div>
    </div>
  );
};

// Props növlərini təyin edin
Intex.propTypes = {
  intImage: PropTypes.string.isRequired, // İç görünüş şəkili
  exImage: PropTypes.string.isRequired, // Çöl görünüş şəkili
};

export default Intex;
