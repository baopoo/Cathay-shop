import { useEffect, useState } from "react";
import { Image } from "antd";

import { useProductStore, useVariantStore } from "@/stores";

const ProductImage = () => {
  const { productSelected } = useProductStore();
  const { variants } = useVariantStore();
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages((prev) => [
      ...prev,
      ...variants?.flatMap((variant) => variant.images || []),
    ]);
  }, [variants]);

  return (
    <div>
      <Image
        width={"100%"}
        src={productSelected.imageUrl}
        alt={productSelected.name}
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {images.map((img, index) => (
          <Image
            key={index}
            className="cursor-pointer"
            preview={false}
            width={80}
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
