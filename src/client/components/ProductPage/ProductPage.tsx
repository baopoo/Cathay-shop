import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreButton";
import { useState } from "react";

type Product = { id: number; title: string; price: number; image: string };
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Esprit Ruffle Shirt",
    price: 16.64,
    image: "https://themewagon.github.io/cozastore/images/product-01.jpg",
  },
  {
    id: 2,
    title: "Herschel supply",
    price: 35.31,
    image: "https://themewagon.github.io/cozastore/images/product-02.jpg",
  },
  {
    id: 3,
    title: "Only Check Trouser",
    price: 25.5,
    image: "https://themewagon.github.io/cozastore/images/product-03.jpg",
  },
  {
    id: 4,
    title: "Classic Trench Coat",
    price: 75.0,
    image: "https://themewagon.github.io/cozastore/images/product-04.jpg",
  },

  {
    id: 5,
    title: "Esprit Ruffle Shirt",
    price: 16.64,
    image: "https://themewagon.github.io/cozastore/images/product-01.jpg",
  },
  {
    id: 6,
    title: "Herschel supply",
    price: 35.31,
    image: "https://themewagon.github.io/cozastore/images/product-02.jpg",
  },
  {
    id: 7,
    title: "Only Check Trouser",
    price: 25.5,
    image: "https://themewagon.github.io/cozastore/images/product-03.jpg",
  },
  {
    id: 8,
    title: "Classic Trench Coat",
    price: 75.0,
    image: "https://themewagon.github.io/cozastore/images/product-04.jpg",
  },
];

const ProductPage = () => {
  const [productLoading, setProductLoading] = useState(false);

  const onLoadMore = () => {
    console.log("check load more");
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <LoadMoreButton onClick={onLoadMore} loading={productLoading} />
    </>
  );
};

export default ProductPage;
