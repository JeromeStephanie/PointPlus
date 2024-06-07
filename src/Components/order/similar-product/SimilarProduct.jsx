import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { motion } from "framer-motion";
import { BsFillHeartFill } from "react-icons/bs";
import AddToCartButton from "../../../Helper/AddToCartButton";

const SimilarProduct = () => {
  const { Products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleClickProduct = (product) => {
    setSelectedProduct(product); // Set the selected product when clicked
  };

  return (
    <div className="mt-[-20px] m-[30px]">
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
          {Products.map((products) => (
            <motion.div className="boxes m-[5px] h-auto  min-w-[230px] rounded-[15px] mb-[20px] drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026]">
              <img
                src={products.img}
                alt={products.title}
                className="w-full rounded-[15px] h-[60%] object-cover  transform transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-shrink py-[5px] justify-between">
                <div className="font-[number:var(--h-3-font-weight)] pl-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  {products.title}
                </div>
                <div className="font-[number:var(--h-3-font-weight)] pr-[5px] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  N{products.price.toLocaleString()}
                </div>
              </div>
              <div className="flex justify-between mb-2 px-2">
                <div>
                  <AddToCartButton product={products} />
                </div>
                <div className="flex justify-center items-center bg-amber-500 px-2 drop-shadow-xl bg-[#ffa5004c] shadow-[0px_4px_10px_#00000026] font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  Add to Cart
                </div>
              </div>
              <span className="absolute flex justify-center items-center top-4 text-amber-500 bg-gray-200 right-4 border rounded-[20px] p-1 pt-[6px]  cursor-pointer">
                <BsFillHeartFill />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SimilarProduct;
