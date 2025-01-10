import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import New from './components/New';
import Classics from './components/Classics';
import About from './components/About';
import Contact from './components/Contact';

export const KeysBooksContext = React.createContext();
export const KnightsBooksContext = React.createContext();

function App() {
  const cartRef = useRef(null);

  const [keysBooks, setKeysBooks] = useState(0);
  const [knightsBooks, setKnightBooks] = useState(0);
  // const [keysAmount, setKeysAmount] = useState(0);
  // const [knightsAmount, setKnightsAmount] = useState(0);
  const [cartMessage, setCartMessage] = useState("Your cart is empty!");
  const [cartIsVisible, setCartIsVisible] = useState(false);


  const cartIcon = document.querySelector(".cart-icon");
  const [cartKeysAmount, setCartKeysAmount] = useState("");
  const [cartKnightsAmount, setCartKnightsAmount] = useState("");

  const menuItemsStyle = {color: 'gray', textDecoration: 'none', fontFamily: 'Cooper Black'};

  const showCart = () => {
    const cart = document.getElementById("cart");
    if (cartIsVisible === false) {
      setCartIsVisible(true);
      // cartRef.current.setAttribute("style", "display: block");
      cart.setAttribute("style", "display: block");
    } else if (cartIsVisible === true) {
      setCartIsVisible(false);
      cart.setAttribute("style", "display: none");
      // cartRef.current.setAttribute("style", "display: none");
    }
  };

  useEffect(() => {
    cartUpdate();
  }, [keysBooks, knightsBooks]);

  useEffect(() => {
    const userpic = document.getElementById("userpic");
    userpic.addEventListener("mouseover", smileOn);
    userpic.addEventListener("mouseout", smileOff);
  }, []);

  const cartUpdate = () => {
    const keysCartBox = document.querySelector(".keys-cart-box");
    const knightsCartBox = document.querySelector(".knights-cart-box");
  if (keysBooks !== 0 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles' and ${knightsBooks} books 'The Knight of Inspiration'`);
    setCartKeysAmount(keysBooks);
    setCartKnightsAmount(knightsBooks);
    keysCartBox.setAttribute("style", "display: block;");
    knightsCartBox.setAttribute("style", "display: block;")
    }
  else if (keysBooks !==0 && knightsBooks < 1) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles'`);
    setCartKeysAmount(keysBooks);
    setCartKnightsAmount("");
    keysCartBox.setAttribute("style", "display: block;");
    knightsCartBox.setAttribute("style", "display: none;")
    }
  else if (keysBooks < 1 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${knightsBooks} books 'The Knight of Inspiration'`);
    setCartKeysAmount("");
    setCartKnightsAmount(knightsBooks);
    keysCartBox.setAttribute("style", "display: none;");
    knightsCartBox.setAttribute("style", "display: block;");
    }
  else if (keysBooks < 1 && keysBooks < 1) {
    setCartKeysAmount("");
    setCartKnightsAmount("");
    setCartMessage("Your cart is empty!");
    keysCartBox.setAttribute("style", "display: none;");
    knightsCartBox.setAttribute("style", "display: none;");
    }
  };

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
    <div className="website-title">KEYS / КЛЮЧИ </div>
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
    <Routes>      
      <Route exact path="/" element={<New book="keys" />}/>
      <Route path="/classic" element={<Classics book="knigths" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </KnightsBooksContext.Provider>
    </KeysBooksContext.Provider>
    <div id="cart" ref={cartRef}>
      <div className="keys-cart-box">
      <img className="keys-picture" src="./media/keys-main.jpg" width="50px" height="50px" alt="Keys and Castles"/>
      <span className="product-amount-cart">×</span>
      <span className="product-amount-cart">{cartKeysAmount}</span>
      </div>
      <div className="knights-cart-box">
      <img className="knights-picture" src="./media/knights-main.jpg" width="50px" height="50px" alt="The Knights of Inspiration"/>
      <span className="product-amount-cart">×</span>
      <span className="product-amount-cart">{cartKnightsAmount}</span>
      </div>
      <p>{cartMessage}</p>
      {/* <button className="checkout">PROCEED TO CHECKOUT</button>
      <button className="removing-cart">REMOVE THE ITEMS</button> */}
      </div>
    <div className="main">
      <h1>something</h1>
    </div>
    </>
  );
}

export default App;
