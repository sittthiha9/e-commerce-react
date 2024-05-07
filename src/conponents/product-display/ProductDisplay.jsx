import "./ProductDisplay.css";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img">
          <div className="product-display-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="product-display-img-main">
            <img src={product.image} alt="" />
          </div>
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-rating-star">
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starDullIcon} />
          <p>(122)</p>
        </div>
        <div className="product-price">
          <p className="product-price-old">${product.old_price}</p>
          <p className="product-price-new">${product.new_price}</p>
        </div>
        <p className="product-display-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A impedit
          laboriosam sit animi doloribus dolorem quam tempora veniam? Culpa
          distinctio consequuntur iusto nobis labore similique modi vel dolores
          quas ullam!
        </p>
        <div className="select-product-size">
          <h2>Select Size</h2>
          <div className="size-selector">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
        <p className="product-display-right-category">
          <span>category :</span> Woman, T-shirt, Croptop
        </p>
        <p className="product-display-right-tag">
          <span>Tag :</span> modern, latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
