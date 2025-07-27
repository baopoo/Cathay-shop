import { Button, Form, Input } from "antd";
import { useEffect } from "react";

interface IProps {
  formValues: Record<string, any>;
  loading: boolean;
  onSubmit: (value: any) => void;
}

const CategoryForm = ({ formValues, loading, onSubmit }: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(formValues);
  }, [formValues]);

  return (
    <>
      <div className="text-xl mb-5 font-medium">
        {!formValues.name ? "Add" : "Edit"} Category
      </div>
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter Category Name" />
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

export default CategoryForm;
