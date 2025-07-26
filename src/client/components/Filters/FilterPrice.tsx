import { priceOptions } from "@/client/constants/filters";
import type { FilterProps } from "@/client/types/filters";

const FilterPrice = ({ activeKey, onChange }: FilterProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">Price</h4>
      <ul className="space-y-2">
        {priceOptions.map((opt) => (
          <li
            key={opt}
            onClick={() => onChange(opt)}
            className={`cursor-pointer hover:text-blue-600   transition-all duration-300 ${
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

export default FilterPrice;
