import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import New from './components/New';
import Classics from './components/Classics';
import About from './components/About';
import Contact from './components/Contact';

export const KeysBooksContext = React.createContext();
export const KnightsBooksContext = React.createContext();

function App() {
  const [keysBooks, setKeysBooks] = useState(0);
  const [knightsBooks, setKnightBooks] = useState(11);
  // const [keysAmount, setKeysAmount] = useState(0);
  // const [knightsAmount, setKnightsAmount] = useState(0);
  const [cartMessage, setCartMessage] = useState("Your cart is empty!");
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cart = document.querySelector(".cart");
  const cartIcon = document.querySelector(".cart-icon");

  const menuItemsStyle = {color: 'gray', textDecoration: 'none'};

  useEffect(() => {
    cartUpdate();
  }, [keysBooks, knightsBooks]);

  useEffect(() => {
    const userpic = document.getElementById("userpic");
    userpic.addEventListener("mouseover", smileOn);
    userpic.addEventListener("mouseout", smileOff);
  }, [])

  const cartUpdate = () => {
  if (keysBooks !== 0 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles' and ${knightsBooks} books 'The Knight of Inspiration'`);
    }
  else if (keysBooks !==0 && knightsBooks < 1) {
    setCartMessage(`You're going to buy ${keysBooks} books 'Keys and Castles'`);
    }
  else if (keysBooks < 1 && knightsBooks !== 0) {
    setCartMessage(`You're going to buy ${knightsBooks} books 'The Knight of Inspiration'`);
    }
  else if (keysBooks < 1 && keysBooks < 1) {
    setCartMessage("Your cart is empty!")
    }
  };

  const showCart = () => {
    if (cartIsVisible === false) {
      setCartIsVisible(true);
      cart.setAttribute("style", "display: block");
    } else if (cartIsVisible === true) {
      setCartIsVisible(false);
      cart.setAttribute("style", "display: none");
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
    <div className="cart">
      <img className="keys-picture" src="" alt="Keys and Castles"/>
      <p className="product-amount-cart">{keysBooks}</p>
      <img className="knights-picture" src="" alt="The Knights of Inspiration"/>
      <p className="product-amount-cart">{knightsBooks}</p>
      <p>{cartMessage}</p>
      </div>
    <div className="main">
      <h1>something</h1>
    </div>
    </>
  );
}

export default App;
