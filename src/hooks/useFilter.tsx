import { useState } from "react";
import { Query } from "appwrite";
import { FilterOperator } from "@/enums";

interface FilterConfig {
  field: string;
  value: any;
  operator?: FilterOperator;
}

export const useFilter = () => {
  const [filters, setFilters] = useState<Record<string, FilterConfig>>({});

  const setFilter = (
    key: string,
    config: { field: string; value: any; operator?: FilterOperator }
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: { ...config },
    }));
  };

  const removeFilter = (key: string) => {
    setFilters((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const generateFilterQuery = (): string[] => {
    const queries: string[] = [];

    Object.values(filters).forEach(
      ({ field, value, operator = FilterOperator.EQUAL }) => {
        if (value == null || value === "") return;

        switch (operator) {
          case FilterOperator.SEARCH:
            queries.push(Query.search(field, value));
            break;
          case FilterOperator.CONTAINS:
            queries.push(Query.contains(field, [value]));
            break;
          default:
            queries.push(Query.equal(field, value));
            break;
        }
      }
    );

    return queries;
  };

  return {
    filters,
    setFilter,
    removeFilter,
    clearFilters,
    generateFilterQuery,
  };
};
