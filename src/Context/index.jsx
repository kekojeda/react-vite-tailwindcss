import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const [cardDetail, setCardDetail] = useState({});
  
  function openProductDetail() {
    setIsProductDetailOpen(!isProductDetailOpen);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartCount,
        setCartCount,
        isProductDetailOpen,
        openProductDetail,
        setCardDetail,
        cardDetail
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
