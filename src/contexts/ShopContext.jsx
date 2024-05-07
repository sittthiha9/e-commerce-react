import { createContext, useState } from "react";
import allProduct from "../conponents/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("🚀 ~ ShopContextProvider ~ cartItems:", cartItems)

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity =
        updatedCartItems[existingItemIndex].quantity + 1 || 1;
      setCartItems(updatedCartItems); 
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const contextValue = { allProduct, addToCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
