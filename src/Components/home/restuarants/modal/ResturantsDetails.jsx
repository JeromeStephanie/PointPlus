import React, { useState } from "react";
import AddToCartButton from "../../../../Helper/AddToCartButton";
import Products from "../../Products";
import { BsFillHeartFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LuThumbsUp } from "react-icons/lu";
import { RiEBike2Line } from "react-icons/ri";
import { TfiTimer } from "react-icons/tfi";
import { useFavoriteProducts } from "../../../../Api/contexts/FavoriteProductsContext";

const ResturantsDetails = ({
  isOpen,
  onClose,
  rest,
}) => {
  const [product] = useState(Products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { favoriteProducts, handleAddFavorite, handleRemoveFavorite } = useFavoriteProducts();

  const filterProducts = () => {
    if (!selectedCategory) return product;
    return product.filter((product) => product.category === selectedCategory);
  };
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content h-screen flex-col w-full overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
            <div className=" text-left flex flex-col">
              <div className="h-[200px]">
                <img
                  src={rest.img}
                  alt={rest.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[20px]">
                <p className="text-black text-[30px] font-bold font-['Open Sans'] mb-[20px]">
                  {rest.name}
                </p>
                <div className="flex items-center gap-[30px] mb-[20px]">
                  <div className="flex flex-col text-black justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <LuThumbsUp size={"1.5rem"} />
                    </div>
                    <p className="font-semibold">88%</p>
                  </div>
                  <div className="flex flex-col text-black justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <TfiTimer size={"1.5rem"} />
                    </div>
                    <p className="font-semibold">22 - 50</p>
                  </div>
                  <div className="flex flex-col text-black justify-center items-center gap-1">
                    <div className="flex bg-amber-500 rounded-[20px] p-[6px] justify-center items-center">
                      <RiEBike2Line size={"1.5rem"} />
                    </div>
                    <p className="font-semibold">N200</p>
                  </div>
                </div>
                <div className="Scroll pb-[10px] flex overflow-x-auto gap-4 text-left overflow-y-hidden">
                  <div
                    className={`cursor-pointer duration-100 font-semibold active:bg-amber-200 px-10 py-[7px] rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === null
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold duration-100 active:bg-amber-200 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Chicken"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Chicken")}
                  >
                    Chicken
                  </div>
                  <div
                    className={`px-10 py-[7px] font-semibold cursor-pointer duration-100 active:bg-amber-200 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Burgers"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Burgers")}
                  >
                    Burgers
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold duration-100 active:bg-amber-200 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Pasta"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Pasta")}
                  >
                    Pasta
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold duration-100 active:bg-amber-200 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Pizza"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Pizza")}
                  >
                    Pizza
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold hover:bg-amber-100 duration-300 active:bg-amber-200 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Jollof"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Jollof")}
                  >
                    Jollof
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold duration-300 bg-amber-100 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Pastries"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Pastries")}
                  >
                    Pastries
                  </div>
                  <div
                    className={`px-10 py-[7px] cursor-pointer font-semibold bg-amber-100 rounded-[40px] shadow justify-start items-center ${
                      selectedCategory === "Shawarma"
                        ? "bg-amber-500"
                        : "bg-amber-100"
                    }`}
                    onClick={() => setSelectedCategory("Shawarma")}
                  >
                    Shawarma
                  </div>
                </div>
              </div>
            </div>
            <div className="products grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-[8px] p-4 z-20">
              {filterProducts().map((product) => (
                <div className="boxes h-auto overflow-hidden rounded-[15px] mb-[10px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full rounded-[15px] h-[60%] object-cover cursor-pointer  transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="flex flex-shrink py-[10px] justify-between">
                    <div className="font-[number:var(--h-3-font-weight)] pl-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      {product.title}
                    </div>
                    <div className="font-[number:var(--h-3-font-weight)] pr-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      N{product.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex justify-between px-[20px]">
                    <div>
                      <AddToCartButton product={product} />
                    </div>
                    <div className="flex justify-center items-center bg-amber-500 px-2 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      Add to Cart
                    </div>
                  </div>
                  <span
                    onClick={() => handleAddFavorite(product)}
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
            <span
              className="absolute p-[5px] drop-shadow-xl shadow-md rounded-[60px] top-5 right-8 cursor-pointer font-semibold text-red-600 border-black flex justify-center items-center bg-white px-2"
              onClick={onClose}
            >
              <IoClose size={"1.5rem"} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResturantsDetails;
