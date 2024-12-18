import { KeysBooksContext } from "../App";
// import { KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";


const New = () => {
  const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
  const [keysBooksChosen, setKeysBooksChosen] = useState(0);
//   const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);

const book = "keys";
const [pictureType, setPictureType] = useState("main");

let picturePath = `./media/${book}-${pictureType}.jpg`;
const smallProductPicture = document.getElementsByClassName("small-product-picture");

const [cartMessage, setCartMessage] = useState("");
const cartMessageSingle = "Item successfully added!";
const cartMessagePlural = "Items successfully added!";
const [cartIsClicked, setCartIsClicked] = useState(false);

useEffect(() => {
  refresh();
  channgingPicture();
}, [keysBooksChosen, pictureType]
);

useEffect(() => {
  addingToCart();
}, [cartIsClicked]
);

  const refresh = () => {
    if (keysBooksChosen < 0) {
    setKeysBooksChosen(0);
    addingToCart();
    }
  };

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

const channgingPicture = () => {
  for (let pic of smallProductPicture) {
    if (pic.getAttribute("src") === `./media/keys-${pictureType}.jpg`) {
      pic.setAttribute("style", "border: 3px solid darkorange; opacity: 1");
    }
    else {
      pic.setAttribute("style", "border: none; opacity: 0.45");
    }
  }
};

const changingCart = () => {
  setCartIsClicked(true);
  setKeysBooks(keysBooks + keysBooksChosen);
  if (keysBooksChosen === 1) {
    setCartMessage(cartMessageSingle);
  } else if (keysBooksChosen > 1) {
    setCartMessage(cartMessagePlural);
  }
}

// const addingToCart = () => {
//   if (keysBooksChosen === 1) {
//   setCartMessage(cartMessageSingle);
//   const timer = setTimeout(() => {setCartMessage(""); setCartIsClicked(false)}, 5000); 
//   return () => clearTimeout(timer);
//   } else if (keysBooksChosen > 1) {
//     setCartMessage(cartMessagePlural);
//     const timer = setTimeout(() => {setCartMessage(""); setCartIsClicked(false)}, 5000);
//     return () => clearTimeout(timer);
//   }
// };

const addingToCart = () => {
  if (cartIsClicked === true) {
  const timer = setTimeout(() => {setCartMessage(""); setCartIsClicked(false)}, 5000); 
  return () => clearTimeout(timer);
  } else {
    return
  }
};

    return(
    <>
    <section className="product-carousel">CAROUSEL
    <img className="product-picture" src={picturePath} width="400" height="400"/>
    <div className="pictures-row">
      <img className="small-product-picture" src="./media/keys-main.jpg" width="80" height="80" alt="Keys main picture" onClick={(e) => setPictureType("main")}/>
      <img className="small-product-picture" src="./media/keys-overall.jpg" width="80" height="80" alt="Keys overall picture" onClick={(e) => setPictureType("overall")}/>
      <img className="small-product-picture" src="./media/keys-illustration.jpg" width="80" height="80" alt="Keys illutration picture" onClick={(e) => setPictureType("illustration")}/>
      <img className="small-product-picture" src="./media/keys-text.jpg" width="80" height="80" alt="Keys product picture" onClick={(e) => setPictureType("text")}/>
    </div>
    </section>
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
        <button className="add-cart" onClick={(e) => changingCart()}>Add to cart</button>
        <p>{cartMessage}</p>
    </div>
    </>)
};

export default New;