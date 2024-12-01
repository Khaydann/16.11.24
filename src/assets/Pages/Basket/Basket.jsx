import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from 'react-icons/go';
import './Basket.scss'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
    const [cartItems, setCartItems] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);

    useEffect(() => {
      
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  
     
      const storedCartItems = storedUser.cart || [];
      const storedDeletedItems = JSON.parse(localStorage.getItem('deletedItems')) || [];
  
 
      setCartItems(storedCartItems);
      setDeletedItems(storedDeletedItems);
  }, []);
  

  const removeItem = (id) => {

    const storedUser = JSON.parse(localStorage.getItem('user')) || {};

 
    const itemToDelete = storedUser.cart.find(item => item.id === id);
    const updatedItems = storedUser.cart.filter(item => item.id !== id);


    storedUser.cart = updatedItems;


    localStorage.setItem('user', JSON.stringify(storedUser));

 
    const updatedDeletedItems = [...storedUser.deletedItems || [], itemToDelete];
    localStorage.setItem('deletedItems', JSON.stringify(updatedDeletedItems));


    setCartItems(updatedItems);
};


    

    
const updateQuantity = (id, quantity) => {

  const storedUser = JSON.parse(localStorage.getItem('user')) || {};


  const updatedItems = storedUser.cart.map(item => {
      if (item.id === id) {
         
          return { 
              ...item, 
              quantity: item.quantity + quantity > 0 ? item.quantity + quantity : 1 
          };
      }
      return item;
  });

  storedUser.cart = updatedItems;


  localStorage.setItem('user', JSON.stringify(storedUser));


  setCartItems(updatedItems);
};

const totalPrice = cartItems.reduce((total, item) => {
  if (item.price && item.quantity) {
      return total + item.price * item.quantity;
  }
  return total;
}, 0);
const navigate=useNavigate()

    return (
        <div>
            <Header/>
            <section className="basket-section">
                <ul className="breadcrumb">
                    <li><a  onClick={()=>navigate("/Sevimlilər")} className="fav-basket" href=""><i  onClick={()=>navigate("/Sevimlilər")}  class="fa-solid fav fa-heart"></i> Sevimlilərə bax </a></li>
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
                           
                            <p><strong>Toplam qiymət:</strong> {totalPrice} AZN</p>
                        </div>
                        <button className="checkout-btn hpsec1-btn2">Sifarişi tamamla</button>
                    </div>
                </div>

                
            </section>
            <Footer/>
        </div>
    );
};

export default Basket;
