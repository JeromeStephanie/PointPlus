import React from 'react';
import { IoStorefrontOutline } from "react-icons/io5";
import { LuThumbsUp } from "react-icons/lu";
import ResturantsDetails from '../../restuarants/modal/ResturantsDetails';

const RestaurantsCards = ({ filteredRestaurants, handleClickRestaurant, onRemoveFavorite, selectedProduct, handleAddFavorite, favoriteProducts }) => {
    if (filteredRestaurants.length === 0) return null;

    return (
        <div className="xl:px-[50px] lg:p-[50px] p-[20px] Resturants">
            <div className="flex items-center text-left mt-[5px] gap-1 mb-[20px] ">
                <IoStorefrontOutline size={"1.5rem"} className="text-amber-500" />
                <p className="text-[20px] md:text-[25px] font-[590]">Restaurants matching your search</p>
            </div>
            <div className="resturants grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 p-4">
                {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="boxes rounded-[20px] h-[200px] drop-shadow-xl bg-[#ffa5004c] overflow-hidden shadow-[0px_4px_10px_#00000026] transform transition-transform duration-300 hover:scale-105">
                        <img
                            src={restaurant.img}
                            alt={restaurant.name}
                            className="w-full h-[60%] object-cover cursor-pointer"
                            onClick={() => handleClickRestaurant(restaurant)}
                        />
                        <div className="flex flex-col w-[100%] items-start justify-center px-[8px] md:px-8 pt-[10px] pb-5 gap-[8px]">
                            <div className="text-left inline-block">
                                <div className="font-h-3 w-full rest-text text-[15px] md:text-[20px] font-[number:var(--h-3-font-weight)] text-black tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                                    {restaurant.name}
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
            <ResturantsDetails
                isOpen={!!selectedProduct}
                onClose={() => handleClickRestaurant(null)}
                rest={selectedProduct}
                handleAddFavorite={handleAddFavorite}
                favoriteProducts={favoriteProducts}
            />
        </div>
    );
};

export default RestaurantsCards;
