import {
  FilterOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface IProps {
  showFilter: boolean;
  showSearch: boolean;
  setShowFilter: (value: boolean) => void;
  setShowSearch: (value: boolean) => void;
}

const ToolbarActions = ({
  showFilter,
  setShowFilter,
  showSearch,
  setShowSearch,
}: IProps) => {
  return (
    <div className="flex gap-2">
      <Button
        icon={showFilter ? <CloseOutlined /> : <FilterOutlined />}
        type={showFilter ? "primary" : "default"}
        onClick={() => {
          setShowSearch(false);
          setShowFilter(!showFilter);
        }}
      >
        Filter
      </Button>
      <Button
        icon={<SearchOutlined />}
        onClick={() => {
          setShowFilter(false);
          setShowSearch(!showSearch);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default ToolbarActions;
