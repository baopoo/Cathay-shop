import { useEffect } from "react";

import { useProduct } from "@/client/hooks";
import { useProductStore } from "@/stores";
import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreButton";

const ProductPage = () => {
  const { products, loading } = useProductStore();
  const { fetchProducts } = useProduct();

  const onLoadMore = () => {
    console.log("check load more");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.$id} {...product} />
        ))}
      </div>

      <LoadMoreButton onClick={onLoadMore} loading={loading} />
    </>
  );
};

export default ProductPage;
