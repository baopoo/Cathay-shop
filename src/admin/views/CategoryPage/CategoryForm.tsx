import { Button, Form, Input } from "antd";

interface IProps {
  onSubmit: (value: any) => void;
}

const CategoryForm = ({ onSubmit }: IProps) => {
  return (
    <>
      <div className="text-xl mb-5 font-medium">Add Category</div>
      <Form onFinish={onSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="flex items-center justify-end">
          <Button htmlType="reset" className="mr-2">
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CategoryForm;
