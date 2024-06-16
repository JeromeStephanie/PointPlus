import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import AddToCartButton from '../../../../Helper/AddToCartButton';
import { BiFoodMenu } from "react-icons/bi";

const ProductsCards = ({ filteredProducts, favoriteProducts, handleAddFavorite, onRemoveFavorite }) => {
    if (filteredProducts.length === 0) return null;

    return (
        <div className="sm:p-[50px] p-[20px] w-full">
            <div className="flex items-center text-left mt-[5px] gap-1 mb-[20px] ">
                <BiFoodMenu size={"1.5rem"} className="text-amber-500" />
                <p className="text-[20px] md:text-[25px] font-[590]">Cuisines matching your search</p>
            </div>
            <div className="products w-full grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-[10px] p-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="boxes h-auto overflow-hidden rounded-[15px] mb-[10px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
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
                        <div className="flex justify-between px-[10px]">
                            <div>
                                <AddToCartButton product={product} />
                            </div>
                            <div className="flex justify-center items-center bg-amber-500 px-2 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                                Add to Cart
                            </div>
                        </div>
                        <span
                            onClick={() => handleAddFavorite(product)}
                            className={`absolute flex justify-center items-center top-4 right-4 border rounded-[20px] p-1 pt-[6px] cursor-pointer ${favoriteProducts.includes(product.id) ? "text-red-500 bg-white" : "text-amber-500 bg-gray-200"}`}
                        >
                            <BsFillHeartFill />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsCards;
