import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ToolbarActions = () => {
  return (
    <div className="flex gap-2">
      <Button icon={<FilterOutlined />}>Filter</Button>
      <Button icon={<SearchOutlined />}>Search</Button>
    </div>
  );
};

export default ToolbarActions;
