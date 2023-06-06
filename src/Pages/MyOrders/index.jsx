import { OrdersCard } from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex w-80 item-center justify-center">
        <h1>My Orders</h1>
      </div>

      {order?.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard key={index} order={order} />
        </Link>
      ))}
    </>
  );
}

export default MyOrders;
