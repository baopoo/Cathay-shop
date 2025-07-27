import { DataTable } from "@/admin/components";
import { useCategory } from "@/admin/hooks";
import { CATEGORY_COLUMN } from "@/constants";
import { useCategoryService } from "@/services";
import type {
  ColumnsType,
  TablePaginationConfig,
} from "antd/es/table/interface";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const initialData: User[] = [
  { id: "1", name: "Alice", age: 28, email: "alice@example.com" },
  { id: "2", name: "Bob", age: 32, email: "bob@example.com" },
  { id: "3", name: "Charlie", age: 25, email: "charlie@example.com" },
  { id: "4", name: "David", age: 40, email: "david@example.com" },
  { id: "5", name: "Eva", age: 22, email: "eva@example.com" },
];

const CategoryPage = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 3,
    total: initialData.length,
  });

  const handleChange = (value: any) => {
    console.log(value);
  };

  const { categories, fetchCategories } = useCategory();

  console.log(categories);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      This is Category Page
      <DataTable<User>
        columns={CATEGORY_COLUMN}
        data={categories}
        pagination={pagination}
        setPagination={handleChange}
        setSorter={handleChange}
      />
    </div>
  );
};

export default CategoryPage;
