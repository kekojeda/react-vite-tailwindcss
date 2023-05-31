import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/outline";

function Card({ item }) {
  const {
    setCartCount,
    cartCount,
    isProductDetailOpen,
    setIsProductDetailOpen,
    openProductDetail,
    setCardDetail,
  } = useContext(ShoppingCartContext);

  function SumaCarrito() {
    setCartCount(cartCount + 1);
  }

  function showCardDetail() {
    openProductDetail()
    setCardDetail(item);
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
          className="w-full h-full object-cover rounded-lg"
          src={item.image}
          alt={item.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={SumaCarrito}
        >
          <PlusIcon className="w-6 h-6" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-medium">{item.price}</span>
      </p>
    </div>
  );
}

export { Card };
