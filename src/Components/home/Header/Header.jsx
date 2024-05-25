import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import Resturants from '../restuarants/Resturants'
import Products from '../Products'
import AddToCartButton from "../../../Helper/AddToCartButton"
import Icons from "../Header/Icons"
import ResturantsDetails from "../restuarants/modal/ResturantsDetails"
import { GiShop } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import NavLinks from "../Header/nav-links/NavLinks"
import { LuThumbsUp } from "react-icons/lu";
import Favorites from "./favorite/Favorites";

const Header = () => {
  const [rest] = useState(Resturants);
  const [error, setError] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product details
  const [search, setSearch] = useState("");
  const [products] = useState(Products);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const handleFavoriteClick = (product) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(product.id)
        ? prevFavorites.filter((id) => id !== product.id)
        : [...prevFavorites, product.id]
    );
  };

  // Function to handle remove favorite
  const handleRemoveFavorite = (product) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.filter((id) => id !== product.id)
    );
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // exports.search = async(req,res)=>{
  //   try {
  //     const {query} = req.query
  //     const Restaurant = await Resturants.find({name: {$regex: new RegExp(query,'i')}})
  //     const produt = await products.find({name: {$regex: new RegExp(query,'i')}})
  //     res.json{Restaurant, produt}
  //   } catch (error) {
  //     res.json(error.message);
  //   }
  // }

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // useEffect(() => {
  //   if (search !== "") {
  //     // Filter restaurants based on search term
  //     const filteredRestaurants = Resturants.filter((restaurant) =>
  //       restaurant.name.toLowerCase().includes(search.toLowerCase())
  //     );

  //     // Filter products based on search term
  //     const filteredProducts = Products.filter((product) =>
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     );

  //     setFilteredRestaurants(filteredRestaurants);
  //     setFilteredProducts(filteredProducts);

  //     // Print filtered results to the console
  //     console.log("Filtered Restaurants:", filteredRestaurants);
  //     console.log("Filtered Products:", filteredProducts);
  //   } else {
  //     // Reset filtered lists if search term is empty
  //     setFilteredRestaurants([]);
  //     setFilteredProducts([]);
  //   }
  // }, [search]);

  const handleClickRestaurant = (resturants) => {
    setSelectedProduct(resturants); // Set the selected restaurant
  };

  return (
    <div className="w-full">
      <div className="search h-[480px] mb-[20px]">
        <NavLinks />
        <div className="content2 top-[30%] flex flex-col justify-center items-center w-[90%] left-[100%] -translate-x-[-6%] -translate-y-[-30%] gap-[20px]">
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
                onChange={handleChange}
                value={search}
              />
            </div>
            <div className="p-[10px] px-[40px] rounded-r-[30px] text-white bg-amber-500 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
              <p className="drop-shadow-xl font-semibold">Search</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {Icons.map((icon) => {
              return (
                <motion.div className="grid items-center mb-[30px] grid-cols-4 xl:grid-cols-8 lg:grid-cols-5 gap-2 px-[50px]">
                  <div className="flex flex-col items-center">
                    <picture>
                      <source media="(max-width: 768px)" srcSet={icon.img} />
                      <img
                        className="max-w-[40px] h-auto"
                        src={icon.img}
                        alt={icon.text}
                      />
                    </picture>
                    <p>{icon.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="p-[50px] w-full bg-gray-200">
        <p className="text-[25px] font-semibold mb-[20px]">Special Offers</p>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {products.map((product) => (
              <motion.div className="boxes m-[5px] h-auto min-w-[250px] rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full rounded-[15px] h-[60%] object-cover  transform transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-shrink py-[10px] justify-between">
                  <div className="font-[number:var(--h-3-font-weight)] pl-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    {product.title}
                  </div>
                  <div className="font-[number:var(--h-3-font-weight)] pr-[15px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    N{product.price.toLocaleString()}
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
                  onClick={() => handleFavoriteClick(product)}
                  className={`absolute flex justify-center items-center top-4 right-4 border rounded-[20px] p-1 pt-[6px] cursor-pointer ${
                    favoriteProducts.includes(product.id)
                      ? "text-red-500 bg-white"
                      : "text-amber-500 bg-gray-200"
                  }`}
                >
                  <BsFillHeartFill />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Favorites
        favoriteProducts={favoriteProducts}
        products={products}
        onRemoveFavorite={handleRemoveFavorite}
      />
      <div className="px-[50px] Resturants">
        <div className="flex items-center text-left mt-[50px] gap-1 mb-[20px] ">
          <GiShop size={"1.5rem"} className="text-amber-500" />
          <p className="text-[25px] font-semibold">Resturants you might like</p>
        </div>
        <ResturantsDetails
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          rest={selectedProduct}
          handleFavoriteClick={handleFavoriteClick}
          favoriteProducts={favoriteProducts}
        />
        <div>
          <div className="resturants grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 p-4">
            {rest.slice(0, 8).map((resturants) => (
              <div
                key={resturants.id}
                className="boxes rounded-[20px] h-[200px] drop-shadow-xl bg-[#ffa5004c] overflow-hidden shadow-[0px_4px_10px_#00000026] transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={resturants.img}
                  alt={resturants.name}
                  className="w-full h-[60%] object-cover cursor-pointer"
                  onClick={() => handleClickRestaurant(resturants)}
                />
                <div className="flex flex-col w-[100%] items-start justify-center px-5 pt-[10px] pb-5 gap-[8px]">
                  <div className="text-left inline-block">
                    <div className="font-h-3 w-full rest-text text-[20px] font-[number:var(--h-3-font-weight)] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                      {resturants.name}
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    <div>
                      <LuThumbsUp size={"1.2rem"} />
                    </div>
                    <p>90%</p>
                    <p className="text-gray-600">(200+)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to={"/restaurants"}
            className="w-full flex cursor-pointer transform transition-transform duration-300 hover:scale-105 text-amber-500 justify-center items-center gap-[10px]"
          >
            <p className="text-[25px] font-semibold">Explore More</p>
            <FaArrowRightLong size={"1.5rem"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
