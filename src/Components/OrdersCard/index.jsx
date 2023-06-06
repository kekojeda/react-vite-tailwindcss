import { ChevronRightIcon } from "@heroicons/react/24/outline";

function OrdersCard({ order }) {
  console.log(order);
  console.log(order.date);
  return (
    <div className="flex justify-between item-center p-4 border border-black w-80 rounded-md mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col ">
          <span>{order.date}</span>
          <span>{order.products.length} articles</span>
        </p>
        <p className="flex item-center gap-2">
          <span className="text-2xl">${order.totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
      
    </div>
  );
}

export { OrdersCard };
