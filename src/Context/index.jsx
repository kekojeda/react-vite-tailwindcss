import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const [cardDetail, setCardDetail] = useState({});

  function openProductDetail() {
    setIsProductDetailOpen(true);
  }

  function closeProductDetail() {
    setIsProductDetailOpen(false);
  }

  function openCheckOutDetail() {
    setIsCheckOutOpen(true);
  }

  function closeCheckOutDetail() {
    setIsCheckOutOpen(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartCount,
        setCartCount,
        isProductDetailOpen,
        openProductDetail,
        setCardDetail,
        cardDetail,
        closeProductDetail,
        cartProducts,
        setCartProducts,
        openCheckOutDetail,
        closeCheckOutDetail,
        isCheckOutOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
