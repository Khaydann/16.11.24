import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = ({ images, texts, span, onAddToCart, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Komponent yükləndikdə wishlist-də olub-olmaması yoxlanılır
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.wishlist) {
      const isInWishlist = user.wishlist.some((item) => item.id === id);
      setIsFavorite(isInWishlist);
    }
  }, [id]);

  const handleFavoriteClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Zəhmət olmasa, daxil olun!"); // İstifadəçi yoxdur
      return;
    }

    let wishlist = user.wishlist || [];
    const cardData = {
      id, // Məhsulun unikal ID-si
      name: texts?.[0] || "Naməlum Məhsul", // Məhsul adı
      price: parseFloat(span?.[0]) || 0, // Məhsul qiyməti
      img: images?.[0] || "", // Məhsul şəkli
    };

    if (isFavorite) {
      // Məhsulu wishlist-dən sil
      wishlist = wishlist.filter((item) => item.id !== id);
      alert("Wishlist-dən çıxarıldı!");
    } else {
      // Məhsulu wishlist-ə əlavə et
      if (!wishlist.some((item) => item.id === id)) {
        wishlist.push(cardData);
      }
    }

    // Yeni istifadəçi obyektini yarat və localStorage-da saxla
    const updatedUser = { ...user, wishlist };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // `isFavorite` vəziyyətini yenilə
    setIsFavorite(!isFavorite); // isFavorite vəziyyətini dəyişdiririk

    if (!isFavorite) {
      alert("Wishlist-ə əlavə edildi!"); // Yalnız əlavə edildikdə xəbərdarlıq göstəririk
    }
  };

  return (
    <div className="card">
      {/* Yuxarı sağ küncdə ürək ikonu */}
      <div className="card-heart-icon" onClick={handleFavoriteClick}>
        <i
          className={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}
          style={{ color: isFavorite ? "#e63946" : "#555" }}
        ></i>
      </div>

      <div className="card-images">
        {images &&
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Card ${index}`}
              className="card-image"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
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
              Qiymət: {s}
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
