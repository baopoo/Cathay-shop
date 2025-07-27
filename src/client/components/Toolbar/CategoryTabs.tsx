import { categoriesTab } from "@/client/constants";
import type { CategoryTabsProps } from "@/client/types";

const CategoryTabs = ({ active, onChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium max-w-full">
      {categoriesTab.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`hover:text-black hover:underline hover:underline-offset-4 ${
            active === id
              ? "text-black underline underline-offset-4"
              : "text-gray-500"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
