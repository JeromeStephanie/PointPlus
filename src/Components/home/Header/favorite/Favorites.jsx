import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import AddToCartButton from "../../../../Helper/AddToCartButton";
import { Link } from "react-router-dom";

const Favorites = ({ favoriteProducts, products, onRemoveFavorite }) => {
  const favoriteItems = products.filter((product) =>
    favoriteProducts.includes(product.id)
  );

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
            <p className="text-[20px] md:text-[25px] [font-family:var(--h-3-font-family)] font-semibold">
              Favorites
            </p>
          </div>
          <div className="flex">
            {favoriteItems.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="box m-[5px] h-auto min-w-[230px] rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full rounded-[15px] h-[60%] object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-shrink py-[5px] justify-between">
                  <div className="font-[number:var(--h-3-font-weight)] pl-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    {product.title}
                  </div>
                  <div className="font-[number:var(--h-3-font-weight)] pr-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
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
                  onClick={() => onRemoveFavorite(product)}
                  className={`absolute flex justify-center items-center top-4 right-4 border rounded-[20px] p-1 pt-[6px] cursor-pointer ${favoriteProducts.includes(product.id)
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
      {favoriteItems.length > 4 && (
        <div className="mt-4 text-center">
          <Link onClick={window.scrollTo(0, 0)}
            to="/favs"
            className="text-amber-500 text-[20px] md:text-[25px] font-semibold"
          >
            View All Favorites
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
