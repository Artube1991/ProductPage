// import { KeysBooksContext } from "../App";
import { KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";

const Classics = () => {
    // const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
      const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);
    
      const refresh = () => {
        if (knightsBooks < 0) {
        setKnightsBooks(0);
        }
      };
    
      useEffect(() => {
        refresh(); 
      }, [knightsBooks]
    )
    
    const changingAmount = (operation) => {
        console.log(knightsBooks);
        if (knightsBooks > 0 || knightsBooks === 0) {
        if (operation === "minus") {
            setKnightsBooks(knightsBooks - 1);
            console.log(knightsBooks);
            }
        else if (operation === "plus") {
            setKnightsBooks(knightsBooks + 1);
            }
        }
        };
    return(
    <>
    <section className="product-carousel">CAROUSEL</section>
    <div className="product-info-box">
        <p className="company-title">KEYS: THE LITERATURE CLUB</p>
        <h1 className="product-title">'The Knights of Inspiration': The True Classics created by Yuri Surkov</h1>
        <p className="product-info">Lorem ipsum</p>
        <p className="current-price">$4</p>
        <p className="discount-size">30%</p>
        <p className="old-price">$6</p>
        <button className="button-minus" onClick={(e) => changingAmount("minus")}>-</button>
        <p className="product-amount">{knightsBooks}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        <button className="add-cart">Add to cart</button>
    </div>
    </>)
};

export default Classics;