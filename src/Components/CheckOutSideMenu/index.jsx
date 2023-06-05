import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./index.css";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils/";
import { Link } from "react-router-dom";

function CheckOutSideMenu() {
  const {
    isProductDetailOpen,
    cartProducts,
    closeCheckOutDetail,
    isCheckOutOpen,
    priceCart,
    order,
    setOrder,
    setCartProducts,
    setCartCount,
  } = useContext(ShoppingCartContext);

  function handleCeckOut() {
    const orderToAdd = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCartCount(0);
  }

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
      <div className="overflow-y-scroll px-6 flex-1">
        {cartProducts.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-ligth">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
      <Link to='my-orders/last'>
        <button
          className="w-full bg-black py-3 text-white"
          onClick={handleCeckOut}
        >
          CheckOut
        </button>
      </Link>

      {/* <div>PRECIO {(cartProducts) => totalPrice(cartProducts)}</div> */}
    </aside>
  );
}

export { CheckOutSideMenu };
