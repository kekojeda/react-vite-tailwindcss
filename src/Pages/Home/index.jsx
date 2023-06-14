import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, setSearchValue, searchedItems } =
    useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchedItems?.length > 0) {
      return searchedItems?.map((item) => <Card key={item.id} item={item} />);
    } else {
      return items?.map((item) => <Card key={item.id} item={item} />);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input
        className="border border-black rounded-lg w-80 p-4 mb-4"
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Search a product"
      />

      <ProductDetail />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
    </>
  );
}

export default Home;
