import { DataTable } from "@/admin/components";
import { useCategory } from "@/admin/hooks";
import { CATEGORY_COLUMN } from "@/constants";
import { useCategoryService } from "@/services";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import type {
  ColumnsType,
  TablePaginationConfig,
} from "antd/es/table/interface";
import { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";

type User = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const CategoryPage = () => {
  const handleChange = (value: any) => {
    console.log(value);
  };

  const {
    categories,
    pagination,
    fetchCategories,
    handlePagination,
    handleSubmit,
    handleSearch,
  } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, [pagination]);

  return (
    <div className="p-5">
      <CategoryForm onSubmit={handleSubmit} />
      <DataTable<User>
        columns={CATEGORY_COLUMN}
        data={categories}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleChange}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default CategoryPage;
