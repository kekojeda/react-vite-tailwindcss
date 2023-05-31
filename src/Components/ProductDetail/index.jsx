import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./index.css";

function ProductDetail() {
  const { isProductDetailOpen, openProductDetail } = useContext(ShoppingCartContext);

  return (
    
    <aside 
    
    className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-datail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={openProductDetail}> 
          <XMarkIcon className="h-8 w-8 text-black" />
        </button>
      </div>
    </aside>
  );
}

export { ProductDetail };
