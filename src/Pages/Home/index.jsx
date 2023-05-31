import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((item) => setItems(item));
  }, []);

  return (
    <>
    <ProductDetail />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
