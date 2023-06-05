import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

function Card({ item }) {
  const {
    setCartCount,
    cartCount,
    isProductDetailOpen,
    setIsProductDetailOpen,
    openProductDetail,
    setCardDetail,
    closeProductDetail,
    setCartProducts,
    cartProducts,
    openCheckOutDetail,
  } = useContext(ShoppingCartContext);

  function SumaCarrito(event) {
    event.stopPropagation();
    setCartCount(cartCount + 1);
    setCartProducts([...cartProducts, item]);
    openCheckOutDetail();
    closeProductDetail();
    console.log(cartProducts);
  }

  function showCardDetail() {
    openProductDetail();
    setCardDetail(item);
  }

  function renderIcon(id) {
    const isInCart = cartProducts.filter((item) => item.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="w-6 h-6" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => SumaCarrito(event)}
        >
          <PlusIcon className="w-6 h-6" />
        </div>
      );
    }
  }

  return (
    <div
      onClick={showCardDetail}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={item.image}
          alt={item.title}
        />
        {renderIcon(item.id)}
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm font-light line-clamp-1">{item.title}</span>
        <span className="text-lg font-medium">{item.price}</span>
      </p>
    </div>
  );
}

export { Card };
