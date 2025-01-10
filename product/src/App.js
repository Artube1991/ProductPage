import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import New from './components/New';
import Classics from './components/Classics';
import About from './components/About';
import Contact from './components/Contact';

export const KeysBooksContext = React.createContext();
export const KnightsBooksContext = React.createContext();
export const CartContext = React.createContext();

function App() {
  const cartRef = useRef(null);

  const [keysBooks, setKeysBooks] = useState(0);
  const [knightsBooks, setKnightBooks] = useState(0);

  // const [keysAmount, setKeysAmount] = useState(0);
  // const [knightsAmount, setKnightsAmount] = useState(0);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [cartMessage, setCartMessage] = useState("Your cart is empty!");
  const [checkoutLink, setCheckoutLink] = useState("https://vk.com/market-57829582");

  const cartIcon = document.querySelector(".cart-icon");
  const [cartKeysAmount, setCartKeysAmount] = useState("");
  const [cartKnightsAmount, setCartKnightsAmount] = useState("");

  const menuItemsStyle = {color: 'gray', textDecoration: 'none', fontFamily: 'Cooper Black'};

  const showCart = () => {
    if (cartIsVisible === false) {
      setCartIsVisible(true);
      // cartRef.current.setAttribute("style", "display: block");
    } else if (cartIsVisible === true) {
      setCartIsVisible(false);
      // cartRef.current.setAttribute("style", "display: none");
    }
  };
  
  const closingCart = () => {
    const cart = document.querySelector(".cart");
    setCartIsVisible(false);
  };

  useEffect(() => {
    cartUpdate();
  }, [keysBooks, knightsBooks, cartIsVisible]);

  useEffect(() => {
    const userpic = document.getElementById("userpic");
    userpic.addEventListener("mouseover", smileOn);
    userpic.addEventListener("mouseout", smileOff);
  }, []);

  const cartUpdate = () => {
    const cart = document.querySelector(".cart");
    const keysCartBox = document.querySelector(".keys-cart-box");
    const knightsCartBox = document.querySelector(".knights-cart-box");
    const checkout = document.querySelector(".checkout");
    const removingCart = document.querySelector(".removing-cart");


  if (cartIsVisible === true) {
    cart.setAttribute("style", "display: block;");
    
    if (keysBooks !== 0 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles' and ${knightsBooks} books 'The Knight of Inspiration'`);
    setCartKeysAmount(keysBooks);
    setCartKnightsAmount(knightsBooks);
    keysCartBox.setAttribute("style", "display: block;");
    knightsCartBox.setAttribute("style", "display: block;")
    checkout.setAttribute("style", "display: block;");
    removingCart.setAttribute("style", "display: block;");
    setCheckoutLink("https://vk.com/market-57829582");
    }
  else if (keysBooks !==0 && knightsBooks < 1) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles'`);
    setCartKeysAmount(keysBooks);
    setCartKnightsAmount("");
    keysCartBox.setAttribute("style", "display: block;");
    knightsCartBox.setAttribute("style", "display: none;");
    checkout.setAttribute("style", "display: block;");
    removingCart.setAttribute("style", "display: block;");
    setCheckoutLink("https://vk.com/market/product/klyuchi-i-zamki-57829582-1945734");
    }
  else if (keysBooks < 1 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${knightsBooks} books 'The Knight of Inspiration'`);
    setCartKeysAmount("");
    setCartKnightsAmount(knightsBooks);
    keysCartBox.setAttribute("style", "display: none;");
    knightsCartBox.setAttribute("style", "display: block;");
    checkout.setAttribute("style", "display: block;");
    removingCart.setAttribute("style", "display: block;");
    setCheckoutLink("https://vk.com/market/product/rytsari-vdokhnovenia-2-voskhozhdenie-57829582-3405002");
    }
  else if (keysBooks < 1 && keysBooks < 1) {
    setCartKeysAmount("");
    setCartKnightsAmount("");
    setCartMessage("Your cart is empty!");
    keysCartBox.setAttribute("style", "display: none;");
    knightsCartBox.setAttribute("style", "display: none;");
    checkout.setAttribute("style", "display: none;");
    removingCart.setAttribute("style", "display: none;");
    setCheckoutLink("https://vk.com/market-57829582");
    }
  } else if (cartIsVisible === false) {
    cart.setAttribute("style", "display: none;");
  }
  };

  const removeAll = () => {
    setKeysBooks(0);
    setKnightBooks(0);
  }

  // const smileChecking = () => {
  //   const userpic = document.getElementById("userpic");
  //   console.log(isSmiling);
  //   if (isSmiling === true) {
  //     userpic.setAttribute("src", "./media/ivanov-smile.jpg");
  //   } else if (isSmiling === false) {
  //     userpic.setAttribute("src", "./media/ivanov-new.jpg");
  //   }
  // };

  const smileOn = () => {
    const userpic = document.getElementById("userpic");
    userpic.setAttribute("src", "./media/ivanov-smile.jpg");
  };

  const smileOff = () => {
    const userpic = document.getElementById("userpic");
    userpic.setAttribute("src", "./media/ivanov-new.jpg");
  };

  return (
    <>
    <nav className="nav-bar">
    <a href="/"><img className="website-logo" src="./media/logo.png" alt="Literature club Keys"/></a>
    <p className="website-title">KEYS / КЛЮЧИ </p>
    <ul className="menu">
      <li className="menu-item"><Link style={menuItemsStyle} to="/">NEW!</Link></li>
      <li className="menu-item"><Link style={menuItemsStyle} to="/classic">Our Classics</Link></li>
      <li className="menu-item"><Link style={menuItemsStyle} to="/contact">Contact</Link></li>
      <li className="menu-item"><Link style={menuItemsStyle} to="/about">About</Link></li>
    </ul>
    <i class="fa-solid fa-cart-shopping" id="cart-icon" onClick={(e) => showCart()}></i>
    <img id="userpic" src="./media/ivanov-new.jpg" alt="User Avatar" width="50" height="50"/>
    </nav>
    <KeysBooksContext.Provider value={[keysBooks, setKeysBooks]}>
    <KnightsBooksContext.Provider value={[knightsBooks, setKnightBooks]}>
    <CartContext.Provider value={[cartIsVisible, setCartIsVisible]}>
    <Routes>      
      <Route exact path="/" element={<New book="keys" />}/>
      <Route path="/classic" element={<Classics book="knights" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </CartContext.Provider>
    </KnightsBooksContext.Provider>
    </KeysBooksContext.Provider>
    <div className="cart" ref={cartRef}>
    <i class="fa-solid fa-xmark cross-little" onClick={(e) => closingCart()}></i>
      <div className="keys-cart-box">
      <img className="keys-picture" src="./media/keys-main.jpg" width="50px" height="50px" alt="Keys and Castles"/>
      <span className="product-amount-cart">$4 ×</span>
      <span className="product-amount-cart">{cartKeysAmount}</span>
      </div>
      <div className="knights-cart-box">
      <img className="knights-picture" src="./media/knights-main.jpg" width="50px" height="50px" alt="The Knights of Inspiration"/>
      <span className="product-amount-cart">$3 ×</span>
      <span className="product-amount-cart">{cartKnightsAmount}</span>
      </div>
      <p>{cartMessage}</p>
      <p className="subtotal">SUBTOTAL: ${4 * keysBooks + 3 * knightsBooks}</p>
      <div className="cart-handler-buttons">
      <a className="checkout" href={checkoutLink} target='_blank'> CHECKOUT </a>
      <button className="removing-cart" onClick={(e) => removeAll()}>REMOVE ALL</button>
      </div>
      </div>
    </>
  );
}

export default App;
