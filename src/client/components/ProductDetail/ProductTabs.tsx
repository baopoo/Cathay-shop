import { useState } from "react";
import { Tabs } from "antd";

import { FeaturePending } from "@/components";
import { useProductStore } from "@/stores";

const ProductTabs = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { productSelected } = useProductStore();

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
          children: <p>Compositions: Cotton / Size: S, M, L, XL</p>,
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
