import React from "react";
import "./Card.scss";

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
