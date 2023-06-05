import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      MyOrder
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
