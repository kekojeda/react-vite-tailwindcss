import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrderCard({ item }) {
  const { setCartProducts,cartProducts } = useContext(ShoppingCartContext);

  function onDelete(){
    let newProdcuts = cartProducts.filter((producto) => producto.id !== item.id)
    setCartProducts(newProdcuts)

  }

  return (
    <div className="flex justify-between item-center p-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={item.image}
            alt={item.title}
          />
        </figure>
        <p className="text-sm font-light line-clamp-1" >{item.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${item.price}</p>
        <button onClick={onDelete}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
}

export { OrderCard };
