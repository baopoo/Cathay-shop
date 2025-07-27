import { Tabs } from "antd";
import { useState } from "react";
import { FeaturePending } from "@/components";

const ProductTabs = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <Tabs
      activeKey={activeKey}
      items={[
        {
          key: "1",
          label: "Description",
          children: (
            <p className="text-gray-600 leading-7 max-w-3xl">
              Aenean sit amet gravida nisi. Nam fermentum est felis, quis
              feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque
              luctus dui at ante aliquet, in hendrerit lectus interdum.
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
