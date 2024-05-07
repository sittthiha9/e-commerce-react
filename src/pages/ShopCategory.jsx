import { useContext } from "react";
import "./css/ShopCategory.css";
import dropdownIcon from "../conponents/assets/dropdown_icon.png";
import Item from "../conponents/items/Item";
import { ShopContext } from "../contexts/ShopContext";

const ShopCategory = (props) => {
  const {allProduct} = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          <p>Sort by</p>
          <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {allProduct.map((item) => {
          if (item.category === props.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
