import React from "react";
import NavLinks from "../home/Header/nav-links/NavLinks";
import { BsFillHeartFill } from "react-icons/bs";
import AddToCartButton from "../../Helper/AddToCartButton";
import { IoSearch } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiHeartAddFill } from "react-icons/ri";

const FavoritesPage = ({ favoriteProducts, products, onRemoveFavorite }) => {
   const navigate = useNavigate();

   const handleStartShopping = () => {
     navigate("/");
   };

  const favoriteItems = products.filter((product) =>
    favoriteProducts.includes(product.id)
  );

  return (
    <div>
      <div className="search h-[480px]">
        <NavLinks />
        <div className="content2 [font-family:var(--b-2-font-family)] top-[30%] flex flex-col justify-center items-center w-[90%] left-[100%] -translate-x-[-6%] -translate-y-[-30%] gap-[20px]">
          <div className="p-[10px] font-sans h-[150px] mb-[5px] font-semibold text-[30px] w-[100%] flex justify-start items-center text-white">
            <div className="py-[30px] lg:ml-[250px] pl-[30px] ">
              <Typewriter
                words={[
                  "Your Food Journey Starts Here!",
                  "Savor the Flavors, Just a Click Away!",
                  "Elevate Your Mealtime, Order with Ease!",
                  "Delivered at Your Fingertips",
                  "From Us to You, Delivered.",
                  "Delivered, Deliciously.",
                ]}
                loop={true}
                cursor={false}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <div className="flex w-[50%] p-[5px] pr-[10px] bg-white rounded-l-[30px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
              <div className=" p-[5px] px-[10px] text-gray-400">
                <IoSearch size={"1.3rem"} />
              </div>
              <input
                type="text"
                className="search_input px-[10px] border-l-gray-400 rounded-r-[20px] border-l-2 w-full p-[5px] focus:outline-none focus:shadow-outline"
                placeholder="Search"
                autoComplete="off"
                // onChange={handleChange}
                // value={search}
              />
            </div>
            <div className="p-[10px] px-[40px] rounded-r-[30px] text-white bg-amber-500 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
              <p className="drop-shadow-xl font-semibold">Search</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[50px] xl:p-[50px] py-[50px] p-[20px] w-full">
        <div className="flex items-center mb-[20px] gap-[10px]">
          <div className="flex justify-center items-center">
            <RiHeartAddFill size={"1.5rem"} className="text-amber-500" />
          </div>
          <p className="text-[20px] md:text-[25px] [font-family:var(--h-3-font-family)] font-semibold">
            All Favorites
          </p>
        </div>
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 xl:gap-5 p-4 lg:gap-5 gap-[5px]">
            {favoriteItems.map((product) => (
              <div
                key={product.id}
                className="box m-[5px] h-auto rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]"
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
        ) : (
          <div className="flex flex-col justify-center items-center text-black font-semibold">
            <p>No favorite added yet.</p>
            <div
              onClick={handleStartShopping}
              className="cursor-pointer p-[10px] w-[30%] gap-3 mt-[20px] bg-amber-500 text-white flex justify-center items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
            >
              <FaArrowLeftLong />
              <p className="font-semibold">Continue Shopping</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
