import { sortOptions } from "@/client/constants/filters";
import type { FilterProps } from "@/client/types/filters";

const FilterSort = ({ activeKey, onChange }: FilterProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">Sort By</h4>
      <ul className="space-y-2">
        {sortOptions.map((opt) => (
          <li
            key={opt}
            onClick={() => onChange(opt)}
            className={`cursor-pointer hover:text-blue-600 transition-colors duration-200 ${
              activeKey === opt ? "text-blue-600 underline" : "text-gray-500"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSort;
