import React, { createContext, useState } from "react";
import Products from "../Components/home/Products";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < Products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.price * cartItems[item];
      }
      return totalAmount;
    }
  }

  const contextValue = { Products, getTotalCartAmount, cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
