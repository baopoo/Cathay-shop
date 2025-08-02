import { DataTable } from "@/admin/components";
import { PRODUCT_COLUMNS } from "@/admin/constants";
import { useCategory, useProduct } from "@/admin/hooks";
import { useProductStore } from "@/stores";
import { Button, Modal, Popconfirm, Space } from "antd";
import { useEffect } from "react";
import ProductForm from "./ProductForm";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useCategoryStore } from "@/stores";

const ProductPage = () => {
  const {
    formValues,
    open,
    filters,
    pagination,
    sorter,
    handlePagination,
    handleSorter,
    fetchProducts,
    handleSearch,
    openModal,
    closeModal,
    handleSubmit,
    handleDelete,
  } = useProduct();
  const { loading, products } = useProductStore();
  const { fetchCategories } = useCategory();
  const { loading: categoriesLoading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
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
      <div className="text-4xl mb-7 mt-2">Products Management</div>
      <DataTable
        labelBtn="Add Product"
        loading={loading || categoriesLoading}
        columns={[...PRODUCT_COLUMNS, actionColumn]}
        data={products}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleSorter}
        handleSearch={handleSearch}
        onClickButton={openModal}
      />
      <Modal open={open} onCancel={closeModal} footer="">
        <ProductForm
          onSubmit={handleSubmit}
          formValues={formValues}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default ProductPage;
