import { colorOptions } from "@/constants";
import type { FilterProps } from "@/client/types/filters";

const FilterColor = ({ activeKey, onChange }: FilterProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">Color</h4>
      <ul className="space-y-2">
        {colorOptions.map(({ label, value }) => (
          <li
            key={value}
            className="flex items-center cursor-pointer text-gray-500 hover:text-blue-600 transition"
            onClick={() => onChange(label)}
          >
            <span
              className="w-3 h-3 rounded-full mr-2 border"
              style={{ backgroundColor: value }}
            ></span>
            <span
              className={activeKey === label ? "text-blue-600 underline" : ""}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterColor;
