import { Empty } from "antd";
import { FrownOutlined } from "@ant-design/icons";

const NoData = () => {
  return (
    <Empty
      image={
        <FrownOutlined
          style={{
            fontSize: 72,
            color: "#999",
          }}
        />
      }
      description="No data, sorry !"
    />
  );
};

export default NoData;
