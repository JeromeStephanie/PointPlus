import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import Resturants from "../restuarants/Resturants";
import AddToCartButton from "../../../Helper/AddToCartButton";
import Icons from "../Header/Icons";
import ResturantsDetails from "../restuarants/modal/ResturantsDetails";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import NavLinks from "../Header/nav-links/NavLinks";
import { LuThumbsUp } from "react-icons/lu";
import { MdLocalOffer } from "react-icons/md";
import LoginModal from "../login/LoginModal";
import Favorites from "./favorite/Favorites";
import Dashboard from "../dashboard/Dashboard";
import Products from "../Products";
import { no_product } from "../../../Assets";
import RestaurantsCards from "./Cards/RestaurantsCards";
import ProductsCards from "./Cards/ProductsCards";
import { useFavoriteProducts } from "../../../Api/contexts/FavoriteProductsContext";

const Header = ({ products }) => {
  const [rest] = useState(Resturants);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { favoriteProducts, handleAddFavorite, handleRemoveFavorite } = useFavoriteProducts();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredRestaurants([]);
      setFilteredProducts([]);
      setError(false);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();

    const filteredRestaurants = Resturants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTermLower)
    );

    const filteredProducts = Products.filter((product) =>
      product.title.toLowerCase().includes(searchTermLower)
    );

    if (filteredRestaurants.length === 0 && filteredProducts.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    setFilteredRestaurants(filteredRestaurants);
    setFilteredProducts(filteredProducts);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setSearchTerm(value);
      if (value === "") {
        setFilteredRestaurants([]);
        setFilteredProducts([]);
        setError(false);
      }
    }
  };

  const getCategoryResults = () => {
    const filteredRestaurants = rest.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory === "All") {
      return (
        <>
          <RestaurantsCards
            filteredRestaurants={filteredRestaurants}
            handleClickRestaurant={handleClickRestaurant}
            selectedProduct={selectedProduct}
            handleAddFavorite={handleAddFavorite}
            favoriteProducts={favoriteProducts}
            onRemoveFavorite={handleRemoveFavorite}
          />
          <ProductsCards
            filteredProducts={filteredProducts}
            favoriteProducts={favoriteProducts}
            handleAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />
        </>
      );
    } else if (selectedCategory === "Restaurants") {
      return (
        <RestaurantsCards
          filteredRestaurants={filteredRestaurants}
          handleClickRestaurant={handleClickRestaurant}
          selectedProduct={selectedProduct}
          handleAddFavorite={handleAddFavorite}
          favoriteProducts={favoriteProducts}
          onRemoveFavorite={handleRemoveFavorite}
        />
      );
    } else if (selectedCategory === "Products") {
      return (
        <ProductsCards
          filteredProducts={filteredProducts}
          favoriteProducts={favoriteProducts}
          handleAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
      );
    }
    return null;
  };

  const handleClickRestaurant = (resturants) => {
    setSelectedProduct(resturants);
  };

  const handleOpenModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleToggleModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the 
  };

  const settings = {
    infinite: false,
    speed: 500,

    slidesToScroll: 7,
    slidesToShow: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="w-full">
        <div className="search h-[480px] mb-[20px]">
          <NavLinks
            handleOpenModal={handleOpenModal}
            handleToggleModal={handleToggleModal}
          />
          <div className="content2 top-[30%] flex flex-col justify-center items-center w-[90%] left-[100%] -translate-x-[-6%] -translate-y-[-30%] gap-[20px]">
            <div className="p-[10px] font-sans h-[150px] mb-[5px] font-semibold text-[30px] w-[100%] flex justify-start items-center text-white">
              <div className="py-[30px] lg:ml-[250px] pl-[30px]">
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
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div
                onClick={handleSearch}
                className="p-[10px] px-[40px] cursor-pointer rounded-r-[30px] text-white bg-amber-500 drop-shadow-xl hover:bg-[#ecb858ec] duration-300 shadow-[0px_4px_10px_#00000026]"
              >
                <p className="drop-shadow-xl font-[590]">Search</p>
              </div>
            </div>
          </div>
        </div>
        {error ? (
          <div className="text-center h-[500px] flex flex-col justify-center items-center font-[590] text-[25px] text-amber-500 text-xl">
            <img src={no_product} alt="no-product" />
            <p>No results found. Please try again.</p>
          </div>
        ) : (
          <>
            {filteredRestaurants.length > 0 || filteredProducts.length > 0 ? (
              <div className="search-results flex flex-col gap-5 p-4">
                <div className="category-selector text-lg flex justify-center items-center gap-5 mt-5">
                  <button
                    className={`p-[10px] font-[500] mx-[3px] border-b-2 ${selectedCategory === "All"
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent"
                      }`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                  <button
                    className={`p-[10px] font-[500] mx-[3px] border-b-2 ${selectedCategory === "Restaurants"
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent"
                      }`}
                    onClick={() => setSelectedCategory("Restaurants")}
                  >
                    Restaurants
                  </button>
                  <button
                    className={`p-[10px] font-[500] mx-[3px] border-b-2 ${selectedCategory === "Products"
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent"
                      }`}
                    onClick={() => setSelectedCategory("Products")}
                  >
                    Products
                  </button>
                </div>
                {getCategoryResults()}
              </div>
            ) : (
              <div>
                <div>
                  <div className="lg:px-[50px] w-[100%] px-[20px] mb-[20px]">
                    <Slider {...settings}>
                      {Icons.map((icon) => (
                        <div className="flex flex-col gap-[10px] items-center justify-center">
                          <div className="flex justify-center items-center">
                            <picture>
                              <source
                                media="(max-width: 768px)"
                                srcSet={icon.img}
                              />
                              <img
                                className="max-w-[40px] h-auto"
                                src={icon.img}
                                alt={icon.text}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center items-center">
                            <p>{icon.text}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="xl:p-[50px] lg:p-[50px] p-[20px] w-full bg-gray-200">
                  <div className="flex items-center text-left gap-1 mb-[20px] ">
                    <MdLocalOffer size={"1.5rem"} className="text-amber-500" />
                    <p className="text-[20px] md:text-[25px] font-[590]">
                      Special Offers
                    </p>
                  </div>
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
                        <motion.div className="boxes m-[5px] h-auto min-w-[230px] rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
                          <img
                            src={product.img}
                            alt={product.title}
                            className="w-full rounded-[15px] h-[60%] object-cover  transform transition-transform duration-300 hover:scale-105"
                          />
                          <div className="flex flex-shrink py-[5px] justify-between">
                            <div className="font-[number:var(--h-3-font-weight)] pl-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                              {product.title}
                            </div>
                            <div className="font-[number:var(--h-3-font-weight)] pr-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
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
                            onClick={() => handleAddFavorite(product)}
                            className={`absolute flex justify-center items-center top-4 right-4 border rounded-[20px] p-1 pt-[6px] cursor-pointer ${favoriteProducts.includes(product.id)
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
                <div className="xl:px-[50px] lg:p-[50px] p-[20px] Resturants">
                  <div className="flex items-center text-left mt-[50px] gap-1 mb-[20px] ">
                    <IoStorefrontOutline size={"1.5rem"} className="text-amber-500" />
                    <p className="text-[20px] md:text-[25px] font-[590]">
                      Resturants you might like
                    </p>
                  </div>
                  <ResturantsDetails
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    rest={selectedProduct}
                    handleAddFavorite={handleAddFavorite}
                    favoriteProducts={favoriteProducts}
                  />
                  <div>
                    <div className="resturants grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-5 md:p-4 p-6">
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
                          <div className="flex flex-col w-[100%] items-start justify-center px-[8px] md:px-8 pt-[10px] pb-5 gap-[8px]">
                            <div className="text-left inline-block">
                              <div className="font-h-3 w-full text-[15px] md:text-[20px] font-[number:var(--h-3-font-weight)] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
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
                      <p className="text-[25px] font-[590]">Explore More</p>
                      <FaArrowRightLong size={"1.5rem"} />
                    </Link>

                    <LoginModal
                      isOpen={isLoginModalOpen}
                      onClose={handleToggleModalClose}
                    />
                    <Dashboard
                      isOpen={isDashboardModalOpen}
                      onClose={handleToggleModalClose2}
                      handleToggleModal={handleToggleModal}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div >
  );
};

export default Header;
