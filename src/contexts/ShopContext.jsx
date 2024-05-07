import { createContext, useState } from "react";
import allProduct from "../conponents/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [ cartItems, setCartItems] = useState([])
  console.log(cartItems)
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id)  //  not equal = -1

   if(existingItemIndex !== -1){
    const updatedCardItem = [...cartItems];
    updatedCardItem[existingItemIndex].quantity += 1;
    setCartItems(updatedCardItem);
   } else {
    setCartItems([...cartItems, product])
   }
  }

  const contextValue = {allProduct, addToCart}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};


export default ShopContextProvider;
