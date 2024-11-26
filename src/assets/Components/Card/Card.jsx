import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = ({ images, texts, span, onAddToCart, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1); // Məhsul miqdarı

  // Komponent yükləndikdə wishlist-də olub-olmaması yoxlanılır
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.wishlist) {
      const isInWishlist = user.wishlist.some((item) => item.id === id);
      setIsFavorite(isInWishlist);
    }
  }, [id]);
  useEffect(() => {
  const syncWishlist = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.wishlist) {
      const isInWishlist = user.wishlist.some((item) => item.id === id);
      setIsFavorite(isInWishlist);
    }
  };

  window.addEventListener("storage", syncWishlist);

  return () => {
    window.removeEventListener("storage", syncWishlist);
  };
}, [id]);
useEffect(() => {
  const syncWishlist = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.wishlist) {
      const isInWishlist = user.wishlist.some((item) => item.id === id);
      setIsFavorite(isInWishlist);
    }
  };

  window.addEventListener("storage", syncWishlist);

  return () => {
    window.removeEventListener("storage", syncWishlist);
  };
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
  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Zəhmət olmasa, daxil olun!"); // İstifadəçi yoxdur
      return;
    }

    let cart = user.cart || [];
    const price = parseFloat(span?.[0]) || 0; // Qiyməti burdan alırıq
  const total = price * quantity;
    const cartItem = {
      id,
      name: texts?.[0] || "Naməlum Məhsul",
      price,
      img: images?.[0] || "",
      quantity,
      total,
    };
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].total = cart[existingItemIndex].quantity * price;

      alert("Səbətdə məhsulun miqdarı artırıldı!");
    } else {
      cart.push(cartItem);
      alert("Məhsul səbətə əlavə edildi!");
    }
    const updatedUser = { ...user, cart };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  let cart = user.cart || [];
  const existingItemIndex = cart.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1) {
    // Məhsul səbətdə varsa, miqdarı artırırıq
    cart[existingItemIndex].quantity += 1;
    cart[existingItemIndex].total = cart[existingItemIndex].quantity * cart[existingItemIndex].price;

    const updatedUser = { ...user, cart };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  let cart = user.cart || [];
  const existingItemIndex = cart.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1 && cart[existingItemIndex].quantity > 1) {
    // Məhsul səbətdə varsa və miqdar 1-dən böyükdürsə, miqdarı azaldırıq
    cart[existingItemIndex].quantity -= 1;
    cart[existingItemIndex].total = cart[existingItemIndex].quantity * cart[existingItemIndex].price;

    const updatedUser = { ...user, cart };
    localStorage.setItem("user", JSON.stringify(updatedUser));
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
              Qiymət: {parseFloat(span[0]) * quantity}
            </span>
          ))}
          
          <div className="quantity-control" style={{ margin: "10px 0" }}>
          <button
            onClick={decreaseQuantity}
            style={{
              padding: "5px 10px",
              backgroundColor: "#FF6347",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <span style={{ margin: "0 10px", fontWeight: "bold" }}>
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            style={{
              padding: "5px 10px",
              backgroundColor: "#32CD32",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
        {/* Səbətə əlavə et düyməsi */}
        <button
          onClick={handleAddToCart}
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
