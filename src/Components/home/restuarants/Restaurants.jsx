import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Typewriter } from 'react-simple-typewriter'
import NavLinks from '../Header/nav-links/NavLinks'
import { IoStorefrontOutline } from "react-icons/io5";
import { LuThumbsUp } from 'react-icons/lu'
import ResturantsDetails from './modal/ResturantsDetails'
import Resturants from './Resturants'
import Dashboard from '../dashboard/Dashboard'
import { useFavoriteProducts } from '../../../Api/contexts/FavoriteProductsContext'
import RestaurantsCards from '../Header/Cards/RestaurantsCards'
import ProductsCards from '../Header/Cards/ProductsCards'
import { no_product } from '../../../Assets'
import Products from '../Products'

const Restaurants = ({ product }) => {
  const [rest] = useState(Resturants);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const { favoriteProducts, handleAddFavorite, handleRemoveFavorite } = useFavoriteProducts();
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClickRestaurant = (resturants) => {
    setSelectedProduct(resturants); // Set the selected restaurant
  };

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose2 = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

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
    const filteredProducts = Products.filter((product) =>
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


  return (
    <div>
      <div className="search h-[480px]">
        <NavLinks handleToggleModal={handleToggleModal} />
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
            <div className="lg:p-[50px] xl:p-[50px] py-[50px] p-[20px] w-full">
              <div className="flex items-center mb-[20px] gap-[10px]">
                <div className="flex justify-center items-center">
                  <IoStorefrontOutline size={"1.5rem"} className="text-amber-500" />
                </div>
                <p className="text-[20px] md:text-[25px] [font-family:var(--h-3-font-family)] font-[590]">
                  Restuarants
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
                <div className="resturants grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 p-4">
                  {rest.map((resturants) => (
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
                          <div className="font-h-3 w-full rest-text text-[15px] md:text-[20px] font-[number:var(--h-3-font-weight)] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
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
  )
}

export default Restaurants
