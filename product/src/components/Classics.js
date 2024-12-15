import { KeysBooksContext } from "../App";
import { KnightsBooksContext } from "../App";

const Classics = () => {
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
        <button className="button-minus">-</button>
        <p className="product-amount">0</p>
        <button className="button-plus">+</button>
        <button className="add-cart">Add to cart</button>
    </div>
    </>)
};

export default Classics;