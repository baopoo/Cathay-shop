import { useState } from "react";
import { Tabs } from "antd";

import { FeaturePending } from "@/components";
import { useProductStore, useVariantStore } from "@/stores";

const ProductTabs = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { productSelected } = useProductStore();
  const { variants } = useVariantStore();

  return (
    <Tabs
      activeKey={activeKey}
      items={[
        {
          key: "1",
          label: "Description",
          children: (
            <p className="text-gray-600 leading-7 max-w-3xl">
              {productSelected.description}
            </p>
          ),
        },
        {
          key: "2",
          label: "Additional Information",
          children: (
            <div>
              <p>
                Categories:{" "}
                {productSelected.categoryId
                  ?.map((item) => item.name)
                  ?.toString()}
              </p>

              <p>Size: {variants?.map((item) => item.size)?.toString()}</p>

              <p>Color: {variants?.map((item) => item.color)?.toString()}</p>
            </div>
          ),
        },
        {
          key: "3",
          label: "Reviews",
          children: <FeaturePending hasBackHome={false} />,
        },
      ]}
      onTabClick={(key: string) => setActiveKey(key)}
    />
  );
};

export default ProductTabs;
