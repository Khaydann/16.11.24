import React from "react";
import "./Card.scss";

const Card = ({ images, texts, span, onAddToCart }) => {
  return (
    <div className="card">
      <div className="card-images">
        {images &&
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Card ${index}`}
              className="card-image"
              style={{ width: "200px", height: "200px", objectFit: "cover" }} // Şəkil ölçüləri
            />
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

        {/* Səbətə əlavə et düyməsi */}
        <button
          onClick={onAddToCart}
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Səbətə əlavə et
        </button>
      </div>
    </div>
  );
};

export default Card;
