import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./index.css";
import { OrderCard } from "../OrderCard";

function CheckOutSideMenu() {
  const {
    isProductDetailOpen,
    cartProducts,
    closeCheckOutDetail,
    isCheckOutOpen
    
  } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckOutOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={closeCheckOutDetail}>
          <XMarkIcon className="h-8 w-8 text-black" />
        </button>
        
      </div>
      <div className="overflow-y-scroll">{cartProducts.map((item) => <OrderCard key={item.id} item={item}/>) }</div>
    </aside>
  );
}



export { CheckOutSideMenu };
