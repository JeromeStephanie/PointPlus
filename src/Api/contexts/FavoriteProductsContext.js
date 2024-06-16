import React, { createContext, useState, useContext } from 'react';

const FavoriteProductsContext = createContext();

export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};

export const FavoriteProductsProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const handleAddFavorite = (product) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(product.id)
        ? prevFavorites
        : [...prevFavorites, product.id]
    );
  };

  const handleRemoveFavorite = (product) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.filter((id) => id !== product.id)
    );
  };

  const handleToggleFavorite = item => {
  const isFavorite = favoriteProducts.some(fav => fav.id === item.id)
  if (isFavorite) {
    handleRemoveFavorite(item.id)
  } else {
    handleAddFavorite(item)
  }
}


  return (
    <FavoriteProductsContext.Provider
      value={{ favoriteProducts, handleAddFavorite, handleRemoveFavorite, handleToggleFavorite }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};
