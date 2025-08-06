import { Skeleton } from "antd";
import { useProductStore } from "@/stores";
import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreButton";
import NoData from "./NoData";

const ProductPage = () => {
  const { products, loading } = useProductStore();

  const onLoadMore = () => {};

  return (
    <Skeleton loading={loading} active>
      {products.length ? (
        <div className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.$id} {...product} />
            ))}
          </div>

          <LoadMoreButton onClick={onLoadMore} loading={loading} />
        </div>
      ) : (
        <NoData />
      )}
    </Skeleton>
  );
};

export default ProductPage;
