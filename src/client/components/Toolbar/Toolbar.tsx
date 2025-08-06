import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";

import CategoryTabs from "./CategoryTabs";
import ToolbarActions from "./ToolbarActions";

import { useCategory, useProduct } from "@/client/hooks";
import { useCategoryStore } from "@/stores";
import {
  defaultCategoryTab,
  categoryFilterKey,
  allValue,
} from "@/client/constants";
import type { FilterVal } from "@/client/types/filters";
import { FilterPanel, FilterSearch } from "../Filters";
import { FilterOperator } from "@/enums";

const Toolbar = () => {
  const { fetchCategories } = useCategory();
  const {
    filters: filterQuery,
    fetchProducts,
    setFilter,
    removeFilter,
  } = useProduct();
  const { loading } = useCategoryStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory =
    searchParams.get(categoryFilterKey) || defaultCategoryTab;
  const [activeTab, setActiveTab] = useState(initialCategory);

  const [filters, setFilters] = useState<FilterVal>({
    sortBy: "Default",
    price: "All",
    color: "",
    searchVal: "",
  });
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const categoryId = activeTab.split("-").pop();
    if (categoryId !== allValue) {
      setFilter(categoryFilterKey, {
        field: categoryFilterKey,
        value: categoryId,
        operator: FilterOperator.EQUAL,
      });
    } else {
      removeFilter(categoryFilterKey);
    }
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(categoryFilterKey, activeTab);
      return next;
    });
  }, [activeTab]);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return loading ? (
    <Skeleton.Input active className="mb-2" size="small" />
  ) : (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
        <CategoryTabs active={activeTab} onChange={setActiveTab} />

        <div className="flex justify-start sm:justify-end gap-2 w-full sm:w-auto">
          <ToolbarActions
            showFilter={showFilter}
            showSearch={showSearch}
            setShowFilter={setShowFilter}
            setShowSearch={setShowSearch}
          />
        </div>
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
          showFilter ? "max-h-fit opacity-100 mt-4" : "max-h-0 opacity-0"
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
