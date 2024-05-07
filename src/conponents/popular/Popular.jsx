import data_product from "../assets/data";
import Item from "../items/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
