import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { Navbar } from "../../Components/Navbar";

import "./App.css";
import { ShoppingCartProvider } from "../../Context";
import { CheckOutSideMenu } from "../../Components/CheckOutSideMenu";

function AppRoutes() {
  let routes = useRoutes([
    
    { path: "/", element: <Home /> },
    { path: "/mens-clothing", element: <Home /> },
    { path: "/womens-clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
   
  );
}

export default App;
