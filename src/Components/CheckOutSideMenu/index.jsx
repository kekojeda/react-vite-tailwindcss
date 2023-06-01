import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./index.css";

function CheckOutSideMenu() {
  const {
    isProductDetailOpen,
    
  } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={closeProductDetail}>
          <XMarkIcon className="h-8 w-8 text-black" />
        </button>
      </div>
      
    </aside>
  );
}

export { CheckOutSideMenu };
