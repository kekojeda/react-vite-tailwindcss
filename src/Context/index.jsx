import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
