import { CartContext, KeysBooksContext } from "../App";

// import { KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";

const New = (props) => {
  const [keysBooks, setKeysBooks] = useContext(KeysBooksContext);
  const [cartIsVisible, setCartIsVisible] = useContext(CartContext);
  const book = props.book;
  const [keysBooksChosen, setKeysBooksChosen] = useState(0);
//   const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);

const pictureTypesAll = ["main", "overall", "illustration", "text"];
const [pictureType, setPictureType] = useState("main");
const picturePath = `./media/${book}-${pictureType}.jpg`;
const smallProductPicture = document.getElementsByClassName("small-product-picture");

const [picturePathCarousel, setPicturePathCarousel] = useState("");
const [pictureCarouselIndex, setPictureCarouselIndex] = useState(Number);
const [carouselIsActive, setCarouselIsActive] = useState(false);

const [cartMessage, setCartMessage] = useState("");
const cartMessageSingle = "Item successfully added!";
const cartMessagePlural = "Items successfully added!";
const [cartIsClicked, setCartIsClicked] = useState(false);

useEffect(() => {
  refreshBooksChosen();
  channgingPicture();
  settingCarousel();
}, [keysBooksChosen, pictureType, pictureCarouselIndex, carouselIsActive]
);

useEffect(() => {
  deletingCartMessage();
}, [cartIsClicked, carouselIsActive]
);

useEffect(() => {
  console.log(pictureCarouselIndex);
  document.addEventListener("keydown", keyHandler);
  return _ => {
    document.removeEventListener("keydown", keyHandler);
    console.log("I removed");
  };
}, [carouselIsActive, pictureCarouselIndex])

const refreshBooksChosen = () => {
    if (keysBooksChosen < 0) {
    setKeysBooksChosen(0);
    deletingCartMessage();
    }
  };

const channgingPicture = () => {
  for (let pic of smallProductPicture) {
    if (pic.getAttribute("src") === `./media/${book}-${pictureType}.jpg`) {
      pic.setAttribute("style", "border: 3px solid darkorange; opacity: 1");
    }
    else {
      pic.setAttribute("style", "border: none; opacity: 0.45");
    }
  }
};

const settingCarousel = () => {
  setPicturePathCarousel(`./media/${book}-${pictureTypesAll[pictureCarouselIndex]}.jpg`);
  console.log(pictureCarouselIndex);
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  if (pictureCarouselIndex === 0) {
    leftArrow.setAttribute("style", "visibility: hidden");
  } else if (pictureCarouselIndex === 3) {
    rightArrow.setAttribute("style", "visibility: hidden");
  } else if (0 < pictureCarouselIndex < 4) {
    leftArrow.setAttribute("style", "visibility: visible");
    rightArrow.setAttribute("style", "visibility: visible");
  }

  const carousel = document.querySelector(".carousel-background");
  console.log(carouselIsActive);
  if (carouselIsActive === true) {
    carousel.setAttribute("style", "display: block");
    setCartIsVisible(false);
  } else if (carouselIsActive === false) {
    carousel.setAttribute("style", "display: none");
  };
};

const gettingTheIndexOfPictureCarousel = () => {
  const pictureIndex = pictureTypesAll.indexOf(pictureType);
  setPictureCarouselIndex(pictureIndex);
  setCarouselIsActive(true);
  console.log(pictureCarouselIndex);
  console.log(carouselIsActive);
};

const channgingPictureCarousel = (operation) => {
  console.log("arrow is clicked!");
  if (operation === "minus") {
  setPictureCarouselIndex((pictureCarouselIndex) => pictureCarouselIndex - 1);
  } else if (operation === "plus") {
    setPictureCarouselIndex((pictureCarouselIndex) => pictureCarouselIndex + 1);
  }
  console.log(pictureCarouselIndex);
};

const keyHandler = (e) => {
  if (carouselIsActive === true) {
    e.preventDefault();
  if (e.code === "Escape") {
    setCarouselIsActive(false)
  } else if (e.code === "ArrowLeft" && pictureCarouselIndex > 0 ) {
    setPictureCarouselIndex(pictureCarouselIndex - 1);
  } else if (e.code === "ArrowRight" && pictureCarouselIndex < 3) {
    setPictureCarouselIndex(pictureCarouselIndex + 1);
  }
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

const changingCart = () => {
  setCartIsClicked(true);
  setKeysBooks(keysBooks + keysBooksChosen);
  // setKeysBooksChosen(0);
  if (keysBooksChosen === 1) {
    setCartMessage(cartMessageSingle);
  } else if (keysBooksChosen > 1) {
    setCartMessage(cartMessagePlural);
  }
}

const deletingCartMessage = () => {
  if (cartIsClicked === true) {
  const timer = setTimeout(() => {setCartMessage(""); setCartIsClicked(false)}, 5000); 
  return () => clearTimeout(timer);
  } else {
    return
  }
};

    return(
    <>
    <div className="product">
    <section className="product-pictures-box">
    <img className="product-picture" src={picturePath} width="300" height="300" onClick={(e) => gettingTheIndexOfPictureCarousel()}/>
    <div className="pictures-row">
      <img className="small-product-picture" src="./media/keys-main.jpg" width="60" height="60" alt="Keys main picture" onClick={(e) => setPictureType(pictureTypesAll[0])}/>
      <img className="small-product-picture" src="./media/keys-overall.jpg" width="60" height="60" alt="Keys overall picture" onClick={(e) => setPictureType(pictureTypesAll[1])}/>
      <img className="small-product-picture" src="./media/keys-illustration.jpg" width="60" height="60" alt="Keys illutration picture" onClick={(e) => setPictureType(pictureTypesAll[2])}/>
      <img className="small-product-picture" src="./media/keys-text.jpg" width="60" height="60" alt="Keys product picture" onClick={(e) => setPictureType(pictureTypesAll[3])}/>
    </div>
    </section>
    <div className="product-info-box">
        <p className="company-title">KEYS: THE LITERATURE CLUB</p>
        <h1 className="product-title">'Keys and Castles': Limited Edition 2019</h1>
        <p className="product-info">Lorem ipsum para bellum!!!!!!!!!</p>
        <p className="current-price">$4<span className="discount-size">30%</span></p>
        <p className="old-price">$6</p>
        <div className="cart-buttons">
        <button className="button-minus" onClick={(e) => changingAmount("minus")}>-</button>
        <p className="product-amount">{keysBooksChosen}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        <button className="add-cart" onClick={(e) => changingCart()}>
        <i class="fa-solid fa-cart-shopping"></i>
          <span className="cart-button-text">Add to cart</span>
          </button>
        </div>
        <p className="cart-message">{cartMessage}</p>
    </div>
    </div>
    <div className="carousel-background">
    <i class="fa-solid fa-xmark cross" onClick={(e) => setCarouselIsActive(false)}></i>
    <div className="carousel">
    <i class="fa-solid fa-caret-left arrows" id="left-arrow" onClick={(e) => channgingPictureCarousel("minus")}></i>
    <img className="picture-carousel" src={picturePathCarousel} style={{opacity: 1}} />
    <i class="fa-solid fa-caret-right arrows" id="right-arrow" onClick={(e) => channgingPictureCarousel("plus")}></i>
    </div>
    </div>
    </>)
};

export default New;