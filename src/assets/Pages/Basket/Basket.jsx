import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from 'react-icons/go';
import './Basket.scss'

const Basket = () => {
    const [cartItems, setCartItems] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);

    useEffect(() => {
      // Get the 'user' object from localStorage
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  
      // Get the 'cart' and 'deletedItems' from the user object
      const storedCartItems = storedUser.cart || [];
      const storedDeletedItems = JSON.parse(localStorage.getItem('deletedItems')) || [];
  
      // Set the cart and deleted items states
      setCartItems(storedCartItems);
      setDeletedItems(storedDeletedItems);
  }, []);
  

  const removeItem = (id) => {
    // Get the 'user' object from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};

    // Find the item to delete and filter out the deleted item from the cart
    const itemToDelete = storedUser.cart.find(item => item.id === id);
    const updatedItems = storedUser.cart.filter(item => item.id !== id);

    // Update the cart in the user object
    storedUser.cart = updatedItems;

    // Save the updated user object back to localStorage
    localStorage.setItem('user', JSON.stringify(storedUser));

    // Add the deleted item to the deletedItems array in localStorage
    const updatedDeletedItems = [...storedUser.deletedItems || [], itemToDelete];
    localStorage.setItem('deletedItems', JSON.stringify(updatedDeletedItems));

    // Update the state
    setCartItems(updatedItems);
};


    

    
const updateQuantity = (id, quantity) => {
  // Get the 'user' object from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};

  // Update the quantity of the product in the cart
  const updatedItems = storedUser.cart.map(item => {
      if (item.id === id) {
          // Ensure that the quantity doesn't go below 1
          return { 
              ...item, 
              quantity: item.quantity + quantity > 0 ? item.quantity + quantity : 1 
          };
      }
      return item;
  });

  // Update the 'cart' inside the 'user' object
  storedUser.cart = updatedItems;

  // Save the updated 'user' object back to localStorage
  localStorage.setItem('user', JSON.stringify(storedUser));

  // Update the state
  setCartItems(updatedItems);
};

const totalPrice = cartItems.reduce((total, item) => {
  if (item.price && item.quantity) {
      return total + item.price * item.quantity;
  }
  return total;
}, 0);

    return (
        <div>
            <section className="basket-section">
                <ul className="breadcrumb">
                    <li><a href=""><GoDotFill /> Səbət </a></li>
                </ul>

                <div className="cart-container">
                    <div className="cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.img} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.price} AZN</p>
                                        <div className="cart-item-controls">
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                            <button onClick={() => removeItem(item.id)} className="delete-btn">
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Səbət boşdur</p>
                        )}
                    </div>

                    <div className="cart-summary">
                        <h3>Səbətdəki məhsullar</h3>
                        <div className="summary-details">
                            <p>Məhsulların qiyməti: {totalPrice} AZN</p>
                            <p>Endirim: 0 AZN</p>
                            <p><strong>Toplam qiymət:</strong> {totalPrice} AZN</p>
                        </div>
                        <button className="checkout-btn">Sifarişi rəsmiləşdir</button>
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default Basket;
