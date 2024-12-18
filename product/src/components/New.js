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

const changingPicture = (type) => {
  setPictureType(type);
  for (let pic of smallProductPicture) {
    if (pic.getAttribute("src") === `keys-${type}`) {
      pic.setAttribute("style", "opacity: 1");
      pic.setAttribute("style", "border: 3px solid yellow")
    }
  }
}

    return(
    <>
    <section className="product-carousel">CAROUSEL
    <img className="product-picture" src={picturePath} width="400" height="400"/>
    <div className="pictures-row">
      <img className="small-product-picture" src="./media/keys-main.jpg" width="80" height="80" onClick={(e) => changingPicture("main")}/>
      <img className="small-product-picture" src="./media/keys-overall.jpg" width="80" height="80" onClick={(e) => changingPicture("overall")}/>
      <img className="small-product-picture" src="./media/keys-illustration.jpg" width="80" height="80" onClick={(e) => changingPicture("illustration")}/>
      <img className="small-product-picture" src="./media/keys-text.jpg" width="80" height="80" onClick={(e) => changingPicture("text")}/>
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
        <button className="add-cart" onClick={(e) => setKeysBooks(keysBooks + keysBooksChosen)}>Add to cart</button>
    </div>
    </>)
};

export default New;