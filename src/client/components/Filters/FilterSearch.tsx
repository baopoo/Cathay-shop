import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface IProps {
  searchVal: string;
  onChange: (value: any) => void;
}

const FilterSearch = ({ searchVal, onChange }: IProps) => {
  return (
    <div className="w-full">
      <Input
        prefix={<SearchOutlined className="text-gray-500" />}
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded shadow-none focus:shadow-none"
        size="large"
        value={searchVal}
        onChange={(event) => onChange({ searchVal: event.target.value })}
      />
    </div>
  );
};

export default FilterSearch;
