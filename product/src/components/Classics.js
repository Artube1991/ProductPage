// import { KeysBooksContext } from "../App";
import { CartContext, KnightsBooksContext } from "../App";
import { useState, useContext, useEffect } from "react";

const Classics = (props) => {
  const book = props.book;
  const [knightsBooks, setKnightsBooks] = useContext(KnightsBooksContext);
  // const [kniBooks, setKeysBooks] = useContext(KeysBooksContext);
  const [cartIsVisible, setCartIsVisible] = useContext(CartContext);
  const [knightsBooksChosen, setKnightsBooksChosen] = useState(0);

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
  console.log(book);
  refreshBooksChosen();
  channgingPicture();
  settingCarousel();
}, [knightsBooksChosen, pictureType, pictureCarouselIndex, carouselIsActive]
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
    if (knightsBooksChosen < 0) {
    setKnightsBooksChosen(0);
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
  console.log(knightsBooks);
  if (knightsBooksChosen >= 0) {
  if (operation === "minus") {
      setKnightsBooksChosen(knightsBooksChosen - 1);
      console.log(knightsBooksChosen);
      }
  else if (operation === "plus") {
      setKnightsBooksChosen(knightsBooksChosen + 1);
      }
  }
  };

const changingCart = () => {
  setCartIsClicked(true);
  setKnightsBooks(knightsBooks + knightsBooksChosen);
  // setKnightsBooksChosen(0);
  if (knightsBooksChosen === 1) {
    setCartMessage(cartMessageSingle);
  } else if (knightsBooksChosen > 1) {
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
      <img className="small-product-picture" src="./media/knights-main.jpg" width="60" height="60" alt="Knights main picture" onClick={(e) => setPictureType(pictureTypesAll[0])}/>
      <img className="small-product-picture" src="./media/knights-overall.jpg" width="60" height="60" alt="Knights overall picture" onClick={(e) => setPictureType(pictureTypesAll[1])}/>
      <img className="small-product-picture" src="./media/knights-illustration.jpg" width="60" height="60" alt="Knights illutration picture" onClick={(e) => setPictureType(pictureTypesAll[2])}/>
      <img className="small-product-picture" src="./media/knights-text.jpg" width="60" height="60" alt="Knights product picture" onClick={(e) => setPictureType(pictureTypesAll[3])}/>
    </div>
    </section>
    <div className="product-info-box">
        <p className="company-title">KEYS: THE LITERATURE CLUB</p>
        <h1 className="product-title">'The Knights of Inspiration': True Classics Collected by Yuri Surkov</h1>
        <p className="product-info">Lorem ipsum para bellum!!!!!!!!! I want to add here some new text about this book.</p>
        <p className="current-price">$4.00</p>
        <p className="discount-size">30%</p>
        <p className="old-price">$6.00</p>
        <div className="cart-box">
        <div className="cart-buttons">
        <button className="button-minus" onClick={(e) => changingAmount("minus")}>-</button>
        <p className="product-amount">{knightsBooksChosen}</p>
        <button className="button-plus" onClick={(e) => changingAmount("plus")}>+</button>
        </div>
        <button className="add-cart" onClick={(e) => changingCart()}>
        <i class="fa-solid fa-cart-shopping"></i>
          <span className="cart-button-text">Add to cart</span>
          </button>
        <p className="cart-message">{cartMessage}</p>
        </div>
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

export default Classics;