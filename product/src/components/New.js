import { KeysBooksContext } from "../App";
import { KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";


const New = () => {
  const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
  const [knightsBooks, setKnightBooks] = useContext(KnightsBooksContext);

//   const refresh = () => {
//     setKeysBooks(keysBooks);
//   };

//   useEffect(() => {
//     refresh(); 
//   }, [keysBooks]
// )

    const changingAmount = (operation) => {
        if (keysBooks > 0 || keysBooks === 0) {
        if (operation === "minus") {
            setKeysBooks(keysBooks - 1);
            return keysBooks;
        }
        else if (operation === "plus") {
            setKeysBooks(keysBooks + 1);
            return keysBooks;
        }
        }
        else if (keysBooks < 0) {
            setKeysBooks(0);
            console.log("I cannot count negative numbers!");
            console.log(keysBooks);
            return keysBooks;
        }
    };

    return(
    <>
    <section className="product-carousel">CAROUSEL</section>
    <div className="product-info-box">
        <p className="company-title">KEYS: THE LITERATURE CLUB</p>
        <h1 className="product-title">'Keys and Castles': Limited Edition 2019</h1>
        <p className="product-info">Lorem ipsum</p>
        <p className="current-price">$6</p>
        <p className="discount-size">30%</p>
        <p className="old-price">$6</p>
        <button className="button-minus" onClick={(e) => changingAmount("minus")}>-</button>
        <p className="product-amount">{keysBooks}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        <button className="add-cart">Add to cart</button>
    </div>
    </>)
};

export default New;