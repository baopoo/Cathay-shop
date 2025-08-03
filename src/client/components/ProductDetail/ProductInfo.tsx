import { Button, InputNumber, Select, message } from "antd";
import { useState } from "react";
import { useProductStore, useVariantStore, useCartStore } from "@/stores";
import ProductTabs from "./ProductTabs";

const ProductInfo = () => {
  const { productSelected } = useProductStore();
  const { variants } = useVariantStore();
  const { addToCart } = useCartStore();

  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    const variant = variants.find((v) => v.$id === selectedVariantId);
    if (!variant) {
      message.warning("Please select a option product before adding to cart");
      return;
    }

    if (quantity > variant.quantity) {
      message.warning(
        `Just only ${variant.quantity} items available in this option !`
      );
      return;
    }

    addToCart(
      {
        id: variant.$id,
        productId: productSelected.$id,
        name: productSelected.name,
        slug: productSelected.slug,
        price: productSelected.price,
        image: variant.images?.[0] || productSelected.image,
        variant: {
          size: variant.size,
          color: variant.color,
        },
      },
      quantity
    );

    message.success("Product added to cart!");
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-gray-4">{productSelected.name}</h1>
      <span className="text-xl text-gray-4 font-semibold">
        ${productSelected.price?.toFixed(2)}
      </span>

      <div className="flex md:flex-row gap-4 items-center">
        <span className="text-gray-2 text-center pr-3">Options</span>
        <Select
          size="large"
          placeholder="Choose option"
          options={variants.map((variant) => ({
            value: variant?.$id,
            label: `Size: ${variant.size} - Color: ${variant.color} - Qty: ${variant.quantity}`,
          }))}
          className="w-full md:w-1/2"
          onChange={(value) => setSelectedVariantId(value)}
        />
      </div>

      <div className="flex gap-3 flex-wrap justify-start">
        <InputNumber
          size="large"
          min={1}
          value={quantity}
          onChange={(value) => setQuantity(value || 1)}
        />
        <Button
          size="large"
          className="px-6 rounded-2xl bg-blue-600 text-white hover:!bg-blue-800 hover:!text-white"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>

      <ProductTabs />
    </div>
  );
};

export default ProductInfo;
