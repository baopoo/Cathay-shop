import { useState } from "react";
import type { SortOrder } from "antd/es/table/interface";
import type { SorterResult } from "antd/es/table/interface";
import { Query } from "appwrite";

export const useSorter = <T,>() => {
  const [sorter, setSorter] = useState<SorterResult<T> | null>(null);

  const updateSorter = (newSorter: SorterResult<T> | SorterResult<T>[]) => {
    if (Array.isArray(newSorter)) {
      setSorter(newSorter[0] ?? null);
    } else {
      setSorter(newSorter);
    }
  };

  const getSortOrder = (columnKey: string): SortOrder => {
    return sorter?.columnKey === columnKey ? sorter.order ?? null : null;
  };

  const generateSortQuery = () => {
    if (!sorter || Array.isArray(sorter)) return [];

    const { order, field } = sorter;

    if (!order || !field || typeof field !== "string") return [];

    return [
      order === "ascend" ? Query.orderAsc(field) : Query.orderDesc(field),
    ];
  };

  return {
    sorter,
    setSorter: updateSorter,
    getSortOrder,
    generateSortQuery,
  };
};
