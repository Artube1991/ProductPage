// import { KeysBooksContext } from "../App";
import { KnightsBooksContext } from "../../App";
import { useState, useContext, useEffect } from "react";

const Classics = (props) => {
    // const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
      const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);
      const [knightsBooksChosen, setKnightsBooksChosen] = useState(0);
    
      const refresh = () => {
        if (knightsBooksChosen < 0) {
        setKnightsBooksChosen(0);
        }
      };
    
      useEffect(() => {
        refresh(); 
      }, [knightsBooksChosen]
    )
    
    const changingAmount = (operation) => {
        console.log(knightsBooks);
        if (knightsBooksChosen >= 0) {
        if (operation === "minus") {
            setKnightsBooksChosen(knightsBooksChosen - 1);
            }
        else if (operation === "plus") {
            setKnightsBooksChosen(knightsBooksChosen + 1);
            }
        }
        };
    return(
    <>
    <section className="product-pictures-box">CAROUSEL</section>
    <div className="product-info-box">
        <p className="company-title">KEYS: THE LITERATURE CLUB</p>
        <h1 className="product-title">'The Knights of Inspiration': The True Classics created by Yuri Surkov</h1>
        <p className="product-info">Lorem ipsum</p>
        <p className="current-price">$4</p>
        <p className="discount-size">30%</p>
        <p className="old-price">$6</p>
        <button className="button-minus" onClick={(e) => changingAmount("minus")}>-</button>
        <p className="product-amount">{knightsBooksChosen}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        <button className="add-cart" onClick={(e) => setKnightsBooks(knightsBooks + knightsBooksChosen)}>Add to cart</button>
    </div>
    </>)
};

export default Classics;