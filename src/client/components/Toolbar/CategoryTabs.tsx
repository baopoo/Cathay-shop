import { useEffect, useState } from "react";

import type { CategoryTabsProps } from "@/client/types";
import { useCategoryStore } from "@/stores";

const CategoryTabs = ({ active, onChange }: CategoryTabsProps) => {
  const { categories } = useCategoryStore();
  const [categoryTabs, setCategoryTabs] = useState([]);

  useEffect(() => {
    setCategoryTabs([
      { $id: "all", name: "All Products", slug: "product" },
      ...categories,
    ]);
  }, [categories]);
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium max-w-full">
      {categoryTabs.map(({ $id, name, slug }) => (
        <button
          key={$id}
          onClick={() => onChange(`${slug}-${$id}`)}
          className={`hover:text-black hover:underline hover:underline-offset-4 ${
            active === `${slug}-${$id}`
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
