import FilterSort from "./FilterSort";
import FilterTag from "./FilterTag";
import FilterPrice from "./FilterPrice";
import FilterColor from "./FilterColor";

interface Props {
  value: {
    sortBy: string;
    price: string;
    color: string;
    tags: string[];
  };
  onChange: (update: Partial<Props["value"]>) => void;
  onReset?: () => void;
}

const FilterPanel = ({ value, onChange, onReset }: Props) => {
  return (
    <div className="bg-gray-100 p-6 grid grid-cols-4 gap-6">
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

      <FilterTag
        activeKeys={value.tags}
        onToggle={(tag) => {
          const tags = value.tags.includes(tag)
            ? value.tags.filter((t) => t !== tag)
            : [...value.tags, tag];
          onChange({ tags });
        }}
      />
    </div>
  );
};

export default FilterPanel;
