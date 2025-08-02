import { DataTable } from "@/admin/components";
import { useCategory } from "@/admin/hooks";
import { CATEGORY_COLUMN } from "@/constants";
import { Button, Modal, Popconfirm, Space } from "antd";
import { useEffect } from "react";
import CategoryForm from "./CategoryForm";
import { useCategoryStore } from "@/stores";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CategoryPage = () => {
  const {
    formValues,
    sorter,
    pagination,
    filters,
    open,
    openModal,
    closeModal,
    fetchCategories,
    handlePagination,
    handleSubmit,
    handleSearch,
    handleDelete,
    handleSorter,
  } = useCategory();

  const { categories, loading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [pagination.current, pagination.pageSize, sorter, filters]);

  const actionColumn = {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <Space>
        <Button onClick={() => openModal(record)}>
          <EditOutlined />
        </Button>
        <Popconfirm
          title="Do you want to delete this category?"
          onConfirm={() => handleDelete(record.$id)}
        >
          <Button danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Space>
    ),
  };

  return (
    <div className="p-5">
      <div className="text-4xl mb-7 mt-2">Category Management</div>
      <DataTable
        labelBtn="Add Category"
        loading={loading}
        columns={[...CATEGORY_COLUMN, actionColumn]}
        data={categories}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleSorter}
        handleSearch={handleSearch}
        onClickButton={openModal}
      />
      <Modal open={open} onCancel={closeModal} footer="">
        <CategoryForm
          onSubmit={handleSubmit}
          formValues={formValues}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default CategoryPage;
