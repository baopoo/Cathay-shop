import { useCategoryStore } from "@/stores";
import { Button, Form, Image, Input, Select } from "antd";
import { useEffect } from "react";

interface IProps {
  formValues: Record<string, any>;
  loading: boolean;
  onSubmit: (value: any) => void;
}

const ProductForm = ({ formValues, loading, onSubmit }: IProps) => {
  const [form] = Form.useForm();

  const { categories } = useCategoryStore();

  const imageUrl = Form.useWatch("imageUrl", form);

  useEffect(() => {
    if (Object.keys(formValues).length === 0) {
      form.resetFields();
    } else {
      form.setFieldsValue(formValues);
    }
  }, [formValues]);

  return (
    <>
      <div className="text-xl mb-5 font-medium">
        {!formValues.name ? "Add" : "Edit"} Product
      </div>
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter Product Name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} placeholder="Enter Description" />
        </Form.Item>
        <div className="flex gap-5">
          <div className="flex-1">
            <Form.Item
              name="imageUrl"
              label="ImageUrl"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Image URL" />
            </Form.Item>
          </div>
          {imageUrl && (
            <Image
              width={100}
              height={100}
              src={imageUrl}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          )}
        </div>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" placeholder="Enter Price" suffix="$" />
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="Categories"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select Categories"
            mode="multiple"
            options={categories?.map((category) => ({
              label: category.name,
              value: category.$id,
            }))}
          />
        </Form.Item>

        <div className="flex items-center justify-end">
          <Button htmlType="reset" className="mr-2">
            Reset
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ProductForm;
