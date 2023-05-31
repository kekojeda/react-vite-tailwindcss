import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(25);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
