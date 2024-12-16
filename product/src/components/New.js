import { KeysBooksContext } from "../App";
// import { KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";


const New = () => {
  const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
  const [keysBooksChosen, setKeysBooksChosen] = useState(0);
//   const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);

  const refresh = () => {
    if (keysBooksChosen < 0) {
    setKeysBooksChosen(0);
    }
  };

  useEffect(() => {
    refresh(); 
  }, [keysBooksChosen]
)

const changingAmount = (operation) => {
    console.log(keysBooks);
    if (keysBooksChosen >= 0) {
    if (operation === "minus") {
        setKeysBooksChosen(keysBooksChosen - 1);
        console.log(keysBooksChosen);
        }
    else if (operation === "plus") {
        setKeysBooksChosen(keysBooksChosen + 1);
        }
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
        <p className="product-amount">{keysBooksChosen}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        <button className="add-cart" onClick={(e) => setKeysBooks(keysBooks + keysBooksChosen)}>Add to cart</button>
    </div>
    </>)
};

export default New;