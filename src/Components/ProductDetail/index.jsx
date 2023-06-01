import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./index.css";

function ProductDetail() {
  const {
    isProductDetailOpen,
    openProductDetail,
    cardDetail,
    closeProductDetail,
  } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-datail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={closeProductDetail}>
          <XMarkIcon className="h-8 w-8 text-black" />
        </button>
      </div>
      <figure className="px-6 h-2/5">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={cardDetail.image}
          alt={cardDetail.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-4">${cardDetail.price}</span>
        <span className="font-medium text-md mb-3">{cardDetail.title}</span>
        <span className="font-ligth text-sm">{cardDetail.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail };
