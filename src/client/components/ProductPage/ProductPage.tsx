import { Skeleton, Modal } from "antd";
import { useState } from "react";
import { useProductStore } from "@/stores";
import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreButton";
import NoData from "./NoData";
import { ProductDetail } from "@/client/views";

const ProductPage = () => {
  const { products, loading } = useProductStore();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const onLoadMore = () => {};

  const handleQuickView = (productId: string) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      <Skeleton loading={loading} active>
        {products.length ? (
          <div className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.$id}
                  {...product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>

            <LoadMoreButton onClick={onLoadMore} loading={loading} />
          </div>
        ) : (
          <NoData />
        )}
      </Skeleton>

      <Modal
        open={!!selectedProductId}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
        centered
        width={1500}
      >
        {selectedProductId && <ProductDetail id={selectedProductId} />}
      </Modal>
    </>
  );
};

export default ProductPage;
