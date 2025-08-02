import { DataTable } from "@/admin/components";
import { PRODUCT_COLUMNS } from "@/admin/constants";
import { useCategory, useProduct } from "@/admin/hooks";
import { useProductStore } from "@/stores";
import {
  Button,
  Image,
  Modal,
  Popconfirm,
  Space,
  Switch,
  Tag,
  Tooltip,
} from "antd";
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
    handleUpdateIsShow,
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

  const actionColumn = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) => <div>{index + 1}</div>,
    },
    {
      title: "Image",
      key: "imageUrl",
      render: (_, record) => (
        <Image
          width={50}
          height={50}
          src={record.imageUrl}
          style={{ objectFit: "cover", borderRadius: 8 }}
        />
      ),
    },
    {
      title: "Name",
      key: "name",
      render: (_, record) => <div>{record.name}</div>,
    },
    {
      title: "Description",
      key: "description",
      render: (_, record) => (
        <Tooltip title={record.description}>
          <div
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {record.description}
          </div>
        </Tooltip>
      ),
      width: 300,
    },
    {
      title: "Price",
      key: "price",
      render: (_, record) => <div>{record.price} $</div>,
    },
    {
      title: "Category",
      key: "categoryId",
      render: (_, record) => (
        <div>
          {record.categoryId?.map((category) => (
            <Tag key={category.$id}>{category.name}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Active",
      key: "isShow",
      render: (_, record) => (
        <Switch
          loading={loading}
          checked={record.isShow}
          onChange={() => handleUpdateIsShow(record)}
        />
      ),
    },
    {
      title: "Action",
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
    },
  ];

  return (
    <div className="p-5">
      <div className="text-4xl mb-7 mt-2">Products Management</div>
      <DataTable
        labelBtn="Add Product"
        loading={loading || categoriesLoading}
        columns={actionColumn}
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
