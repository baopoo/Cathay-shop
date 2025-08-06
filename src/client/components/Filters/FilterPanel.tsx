import FilterSort from "./FilterSort";
import FilterPrice from "./FilterPrice";
import FilterColor from "./FilterColor";

interface Props {
  value: {
    sortBy: string;
    price: string;
    color: string;
  };
  onChange: (update: Partial<Props["value"]>) => void;
  onReset?: () => void;
}

const FilterPanel = ({ value, onChange, onReset }: Props) => {
  return (
    <div className="bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <FilterSort
        activeKey={value.sortBy}
        onChange={(val) => onChange({ sortBy: val })}
      />

      <FilterPrice
        activeKey={value.price}
        onChange={(val) => onChange({ price: val })}
      />

      <FilterColor
        activeKey={value.color}
        onChange={(val) => onChange({ color: val })}
      />
    </div>
  );
};

export default FilterPanel;
