import { tagOptions } from "@/client/constants/filters";
import type { FilterTagProps } from "@/client/types/filters";

const FilterTag = ({ activeKeys, onToggle }: FilterTagProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">Tags</h4>
      <div className="flex flex-wrap gap-2">
        {tagOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ${
              activeKeys.includes(tag)
                ? "bg-blue-100 text-blue-600 border-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTag;
