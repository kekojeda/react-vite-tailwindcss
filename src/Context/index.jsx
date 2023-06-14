import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const [cardDetail, setCardDetail] = useState({});

  //Get Productss
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  // Searched Value
  const [searchValue, setSearchValue] = useState("");


  const [searchByCategory, setSearchByCategory] = useState("");
  


 



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((item) => setItems(item));
  }, []);


  function onSearch(items,searchValue){
    return items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

  }

  function filteredItemsByCategory(items,searchByCategory){
    return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())

  }

  useEffect(() => {
    if(searchValue){
      setSearchedItems(onSearch(items,searchValue))
    }
    if(searchByCategory){
      setSearchedItems(filteredItemsByCategory(items,searchByCategory))
    }
    
  }, [items,searchValue,searchByCategory]);

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

  function priceCart() {
    let priceCart = 0;
    cartProducts.map((product) => {
      priceCart += product.price;
    });
    return priceCart;
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
        priceCart,
        order, 
        setOrder,
        items,
        setItems,
        setSearchValue,
        searchValue,
        searchedItems,
        setSearchedItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
