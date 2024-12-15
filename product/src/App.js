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

  useEffect(() => {
    cartUpdate();
  }, [keysBooks, knightsBooks]);

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


  return (
    <>
    <nav>
    <p className="website-logo">KEYS / КЛЮЧИ </p>
    <ul>
      <li><Link to="/">NEW!</Link></li>
      <li><Link to="/classic">Our Classics</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
    <KeysBooksContext.Provider value={[keysBooks, setKeysBooks]}>
    <KnightsBooksContext.Provider value={[knightsBooks, setKnightBooks]}>
    <Routes>      
      <Route exact path="/" element={<New />}/>
      <Route path="/classic" element={<Classics />} />
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
