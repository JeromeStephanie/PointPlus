import React, { useState } from "react";
import Products from "../../Products";
import { BsFillHeartFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import AddToCartButton from "../../../../Helper/AddToCartButton";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Favorites = ({ favoriteProducts, onRemoveFavorite }) => {
  const [products] = useState(Products);

  const favoriteDetails = products.filter((product) =>
    favoriteProducts.includes(product.id)
  );

  const handleRemoveFavorite = (product) => {
    onRemoveFavorite(product); // Call the parent function to remove the product from favorites
  };

  return (
    <div className="Favorites lg:p-[50px] w-full">
      {favoriteProducts.length === 0 ? (
        <p></p>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center mb-[20px] gap-[10px]">
            <div className="flex justify-center items-center">
              <RiHeartAddFill size={"1.5rem"} className="text-amber-500" />
            </div>
            <p className="text-[25px] [font-family:var(--h-3-font-family)] font-semibold">Favorites</p>
          </div>
          <div className="flex ">
            {favoriteDetails.map((product) => (
              <div
                key={product.id}
                className="box m-[5px] h-auto min-w-[250px] rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full rounded-[15px] h-[60%] object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-shrink py-[10px] justify-between">
                  <div className="font-[number:var(--h-3-font-weight)] pl-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    {product.title}
                  </div>
                  <div className="font-[number:var(--h-3-font-weight)] pr-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    {product.price !== undefined
                      ? `N${product.price.toLocaleString()}`
                      : "Free!"}
                  </div>
                </div>
                <div className="flex justify-between mb-2 px-2">
                  <div>
                    <AddToCartButton product={product} />
                  </div>
                  <div className="flex justify-center items-center bg-amber-500 px-2 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    Add to Cart
                  </div>
                </div>
                <span
                  onClick={() => handleRemoveFavorite(product)}
                  className={`absolute flex justify-center items-center top-4 right-4 border rounded-[20px] p-1 pt-[6px] cursor-pointer ${
                    favoriteProducts.includes(product.id)
                      ? "text-red-500 bg-white"
                      : "text-amber-500 bg-gray-200"
                  }`}
                >
                  <BsFillHeartFill />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {favoriteProducts.length === 4 && (
        <Link
            to={"/favs"}
            className="w-full flex cursor-pointer pl-[30px] transform transition-transform duration-300 hover:scale-105 text-amber-500 justify-start items-center gap-[10px]"
          >
            <p className="text-[25px] font-semibold ">See All</p>
            <FaArrowRightLong size={"1.5rem"} />
          </Link>
      )}
    </div>
  );
};

export default Favorites;
