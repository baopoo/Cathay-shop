import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import ToolbarActions from "./ToolbarActions";

import { defaultCategoryTab } from "@/client/constants";
import type { FilterVal } from "@/client/types/filters";
import { FilterPanel, FilterSearch } from "../Filters";

const Toolbar = () => {
  const [activeTab, setActiveTab] = useState(defaultCategoryTab);
  const [filters, setFilters] = useState<FilterVal>({
    sortBy: "Default",
    price: "All",
    color: "",
    tags: [],
    searchVal: "",
  });
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center py-4">
        <CategoryTabs active={activeTab} onChange={setActiveTab} />
        <ToolbarActions
          showFilter={showFilter}
          showSearch={showSearch}
          setShowFilter={setShowFilter}
          setShowSearch={setShowSearch}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showSearch ? "max-h-[275px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <FilterSearch
          searchVal={filters.searchVal}
          onChange={(key: any) => {
            setFilters({ ...filters, ...key });
          }}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showFilter ? "max-h-[275px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <FilterPanel
          value={filters}
          onChange={(key) => {
            setFilters({ ...filters, ...key });
          }}
        />
      </div>
    </div>
  );
};

export default Toolbar;
