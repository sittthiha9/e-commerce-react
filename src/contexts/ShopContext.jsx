import { createContext, useState } from "react";
import allProduct from "../conponents/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("🚀 ~ ShopContextProvider ~ cartItems:", cartItems);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex === 0) {
      const updatedCartItems = [...cartItems];

      updatedCartItems[existingItemIndex].quantity =
        updatedCartItems[existingItemIndex].quantity + 1 || 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex === 0) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity > 1) {
        updatedCartItems[existingItemIndex].quantity -= 1;
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = cartItems.filter(
          (item) => item.id !== product.id
        );
        setCartItems(updatedCartItems);
      }
    }
  };

  const contextValue = { allProduct, addToCart, decreaseQuantity };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
