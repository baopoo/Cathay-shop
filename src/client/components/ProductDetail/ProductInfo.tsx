import { Button, InputNumber, Select } from "antd";
import ProductTabs from "./ProductTabs";

const ProductInfo = ({}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-gray-4">Lightweight Jacket</h1>
      <span className="text-xl text-gray-4 font-semibold">$58.79</span>

      <div className="flex md:flex-row gap-4 items-center">
        <span className="text-gray-2 text-center pr-3">Size</span>
        <Select
          size="large"
          placeholder="Choose size"
          options={[
            { label: "S", value: "S" },
            { label: "M", value: "M" },
            { label: "L", value: "L" },
            { label: "XL", value: "XL" },
          ]}
          className="w-full md:w-1/2"
        />
      </div>

      <div className="flex md:flex-row gap-4 items-center">
        <span className="text-gray-2 text-center">Color</span>
        <Select
          size="large"
          placeholder="Choose color"
          options={[
            { label: "S", value: "S" },
            { label: "M", value: "M" },
            { label: "L", value: "L" },
            { label: "XL", value: "XL" },
          ]}
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
