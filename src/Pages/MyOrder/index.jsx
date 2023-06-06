import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(index === 'last') index = order?.length - 1
 
  
  return (
    <>
      <div className="flex w-80 item-center justify-center">
        <Link to='/my-orders'>
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>

      <div className="flex flex-col w-80">
        
        {
        order?.[index]?.products.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))
      }
      </div>
    </>
  );
}

export default MyOrder;
