import { useEffect, useState } from "react";
import { Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { useProductStore, useVariantStore } from "@/stores";

const ProductImage = () => {
  const { productSelected } = useProductStore();
  const { variants } = useVariantStore();

  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const variantImages = variants.flatMap((v) => v.images || []);
    const allImages = [productSelected.imageUrl, ...variantImages];
    const uniqueImages = Array.from(new Set(allImages));
    setImages(uniqueImages);
    setCurrentIndex(0);
  }, [variants, productSelected.imageUrl]);

  const changeImage = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 150); // fade-out xong thì đổi ảnh
  };

  const handlePrev = () => {
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full">
      <div className="relative h-[400px] rounded overflow-hidden bg-white flex items-center justify-center">
        <Image
          width="100%"
          height="100%"
          style={{
            objectFit: "contain",
            maxHeight: "100%",
            borderRadius: "0.5rem",
            opacity: fade ? 0 : 1,
            transition: "opacity 0.3s ease",
            position: "absolute",
            inset: 0,
          }}
          src={images[currentIndex]}
          alt={productSelected.name}
        />

        {/* Nút Prev/Next */}
        <button
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
          onClick={handlePrev}
        >
          <LeftOutlined />
        </button>
        <button
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
          onClick={handleNext}
        >
          <RightOutlined />
        </button>
      </div>

      {/* Ảnh nhỏ */}
      <div className="flex flex-wrap gap-2 mt-4">
        {images.map((img, index) => (
          <Image
            key={index}
            className={`cursor-pointer border rounded ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            }`}
            preview={false}
            width={80}
            src={img}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
