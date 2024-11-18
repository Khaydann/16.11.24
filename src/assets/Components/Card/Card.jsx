import React from "react";
import "./Card.scss";

const Card = ({ images, texts, span, onClick }) => {
  return (
    <div className="card" onClick={onClick} role="button" tabIndex={0}>
      <div className="card-images">
        {images &&
          images.map((img, index) => (
            <img key={index} src={img} alt={`Card ${index}`} className="card-image" />
          ))}
      </div>
      <div className="card-texts">
        {texts &&
          texts.map((text, index) => (
            <p key={index} className="card-text">
              {text}
            </p>
          ))}
        {span &&
          span.map((s, index) => (
            <span key={index} className="card-span">
              {s}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
