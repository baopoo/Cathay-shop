import { Button, InputNumber, Select } from "antd";

import { useProductStore, useVariantStore } from "@/stores";
import ProductTabs from "./ProductTabs";

const ProductInfo = ({}) => {
  const { productSelected } = useProductStore();
  const { variants } = useVariantStore();

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
            label: `Size: ${variant.size} - Color: ${variant.color} - Quantity: ${variant.quantity}`,
          }))}
          className="w-full md:w-1/2"
        />
      </div>

      <div className="flex gap-3 flex-wrap justify-start">
        <InputNumber
          size="large"
          min={1}
          value={1}
          onChange={(event) => console.log(event)}
        />
        <Button
          size="large"
          className="px-6 rounded-2xl bg-blue-600 text-white hover:!bg-blue-800 hover:!text-white"
        >
          Add to cart
        </Button>
      </div>

      <ProductTabs />
    </div>
  );
};

export default ProductInfo;
