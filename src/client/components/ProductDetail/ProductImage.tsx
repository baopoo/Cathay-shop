import { Image } from "antd";

import { useProductStore } from "@/stores";

const ProductImage = () => {
  const { productSelected } = useProductStore();

  return (
    <div>
      <Image
        width={"100%"}
        src={productSelected.imageUrl}
        alt={productSelected.name}
      />
      <div className="flex flex-wrap gap-2 mt-4">
        <Image
          className="cursor-pointer"
          preview={false}
          width={80}
          src="https://themewagon.github.io/cozastore/images/product-detail-02.jpg"
        />
      </div>
    </div>
  );
};

export default ProductImage;
