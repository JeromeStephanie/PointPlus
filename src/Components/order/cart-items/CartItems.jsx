import React, { useContext } from "react";
import AddToCartButton from "../../../Helper/AddToCartButton";
import { ProductContext } from "../../../Context/ProductContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { empty_cart } from "../../../Assets";
import { FaArrowLeftLong } from "react-icons/fa6";

const CartItems = () => {
  const { Products, cartItems, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/");
  };

  console.log("Products", Products);
  console.log("Products", ProductContext);
  console.log("Product Id", Products.id);

  // Check if cart is empty
  const isEmptyCart = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  // If cart is empty, display a message
  if (isEmptyCart) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col mt-[50px]">
          <img src={empty_cart} alt="empty cart" />
          <div className="w-full flex flex-col justify-center">
            <p className="font-semibold text-[25px] text-amber-500">
              Your cart is empty.
            </p>
            <p className="mt-2 font-[500]">
              Explore categories for tasty options!
            </p>
            <div
              onClick={handleStartShopping}
              className="cursor-pointer p-[10px] gap-3 mt-[20px] bg-amber-500 text-white flex justify-center items-center drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
            >
              <FaArrowLeftLong />
              <p className="font-semibold">Start shopping</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div
              key={product.id}
              className="bg-white drop-shadow-xl w-full shadow-[0px_4px_10px_#00000026] flex mt-[20px] h-[150px]"
            >
              <img src={product.img} alt="product" width={"40%"} />
              <div className="ml-[30px] justify-start w-full flex flex-col gap-[10px] pt-[10px]">
                <p className="font-h-3 w-full font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                  {product.title}
                </p>
                <div className="w-[70%] add-to-cart  flex items-start p-[10px] text-left">
                  <AddToCartButton product={product} />
                </div>
                <div className="w-full flex justify-between pr-[20px]">
                  <p className="font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                    N{product.price.toLocaleString()}
                  </p>
                  <button
                    className="flex justify-center items-center"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
