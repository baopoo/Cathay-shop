import { DataTable } from "@/admin/components";
import { useProduct, useVariant } from "@/admin/hooks";
import { useVariantStore } from "@/stores";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Popconfirm, Image, Space } from "antd";
import { useEffect } from "react";
import VariantForm from "./VariantForm";

const VariantPage = () => {
  const {
    formValues,
    open,
    filters,
    pagination,
    sorter,
    handlePagination,
    handleSorter,
    fetchVariants,
    handleSearch,
    openModal,
    closeModal,
    handleSubmit,
    handleDelete,
  } = useVariant();
  const { loading, variants } = useVariantStore();

  const { fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchVariants();
  }, [pagination.current, pagination.pageSize, sorter, filters]);

  const actionColumn = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) => <div>{index + 1}</div>,
    },
    {
      title: "SKU",
      key: "sku",
      render: (_, record) => <div>{record.sku}</div>,
    },
    {
      title: "Images",
      key: "images",
      render: (_, record) => (
        <div className="flex gap-2">
          {record.images?.map((image) => (
            <Image
              width={50}
              height={50}
              src={image}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Size",
      key: "size",
      render: (_, record) => <div>{record.size}</div>,
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (_, record) => <div>{record.quantity}</div>,
    },
    {
      title: "Product Name",
      key: "product",
      render: (_, record) => <div>{record.product?.name}</div>,
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
            title="Do you want to delete this variant?"
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
      <div className="text-4xl mb-7 mt-2">Variants Management</div>
      <DataTable
        labelBtn="Add Variant"
        loading={loading}
        columns={actionColumn}
        data={variants}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleSorter}
        handleSearch={handleSearch}
        onClickButton={openModal}
      />
      <Modal open={open} onCancel={closeModal} footer="">
        <VariantForm
          onSubmit={handleSubmit}
          formValues={formValues}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default VariantPage;
