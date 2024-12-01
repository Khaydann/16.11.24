import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { LiaWarehouseSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import './Wishlist.scss'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
const Wishlist = () => {
    const navigate=useNavigate()
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('user')) || [];
        setWishlist(storedWishlist.wishlist);
    }, []);

    const removeFromWishlist = (id) => {
       
        const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    

        const updatedWishlist = storedUser.wishlist.filter(item => item.id !== id);
    
  
        storedUser.wishlist = updatedWishlist;
    
        localStorage.setItem('user', JSON.stringify(storedUser));
   
        setWishlist(updatedWishlist);
    };

    const addAllToCart = () => {

        const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    
      
        let cart = storedUser.cart || [];
    
        wishlist.forEach(product => {
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                cart.push({ ...product, count: 1 }); 
            }
        });
    
 
        storedUser.cart = cart;

        localStorage.setItem('user', JSON.stringify(storedUser));
    
    
        alert("Bütün məhsullar səbətə əlavə olundu!");
    };
    

    const addToCart = (product) => {

        const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    
 
        let cart = storedUser.cart || [];
    

        const existingProduct = cart.find(item => item.id === product.id);
    
        if (existingProduct) {
            existingProduct.count += 1;  
        } else {
            cart.push({ ...product, count: 1 });
        }
    
      
        storedUser.cart = cart;
 
        localStorage.setItem('user', JSON.stringify(storedUser));
    
       
        alert(`${product.name} səbətə əlavə olundu!`);
    };
    

    return (
        <div>
            <Header/>
            <section className='favorites-section'>

                <div className="favorite-top">
                    <span onClick={()=>navigate("/Basket")} style={{ color: "#232d40", fontSize: "20px" }}> <i class="fa-solid fa-cart-shopping"></i>  Səbətə geri dön</span>
                    <button style={{width:"400px",height:"60px",borderRadius:"15px"}} className='addToBasket hpsec1-btn2' onClick={addAllToCart}>
                        <MdOutlineShoppingCart  style={{ fontSize: "23px" }} /> <p>Bütün məhsulları səbətə əlavə et</p>
                    </button>
                </div>

                {wishlist.length === 0 ? (
                    <p>Wishlist is empty</p>
                ) : (
                    wishlist.map(product => (
                        <div key={product.id} className="favorite-product">
                            <div className="favorite-product-content">
                                <div className="product-image">
                                    <img style={{ height: "100%" }} src={product.img} alt={product.name} />
                                </div>
                                <div className="product-details">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className='product-price'>
                                    
                                    <FaHeart style={{  marginBottom:"10px",marginLeft:"4px",  color: "red", fontSize: "22px", cursor: "pointer" }} onClick={() => removeFromWishlist(product.id)} />
                                   
                                    <div>
                                        <p className='new-price'>{product.price} AZN</p>
                                    </div>
                                    <button className='addbasket hpsec1-btn2' onClick={() => addToCart(product)}>
                                        <MdOutlineShoppingCart style={{ fontSize: "25px" }} /> 
                                        <p>Səbətə əlavə et</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
            <Footer/>
        </div>
    );
};

export default Wishlist;
