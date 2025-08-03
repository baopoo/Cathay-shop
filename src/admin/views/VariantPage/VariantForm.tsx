import { colorOptions, sizeOptions } from "@/constants";
import { useProductStore } from "@/stores";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Image, Select, InputNumber } from "antd";
import { useEffect, useState } from "react";

interface IProps {
  formValues: Record<string, any>;
  loading: boolean;
  onSubmit: (value: any) => void;
}

const VariantForm = ({ formValues, loading, onSubmit }: IProps) => {
  const [form] = Form.useForm();

  const [validImages, setValidImages] = useState<Record<number, boolean>>({});

  const { products } = useProductStore();

  const images = Form.useWatch("images", form);

  const handleImageLoad = (index: number) => {
    setValidImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setValidImages((prev) => ({ ...prev, [index]: false }));
  };

  useEffect(() => {
    if (!Array.isArray(images)) return;

    images.forEach((url, index) => {
      if (url && validImages[index] === false) {
        setValidImages((prev) => ({
          ...prev,
          [index]: undefined,
        }));
      }
    });
  }, [images]);

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
        {!formValues.name ? "Add" : "Edit"} Variant
      </div>
      <Form
        form={form}
        name="dynamic_urls"
        onFinish={onSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item name="sku" label="SKU" rules={[{ required: true }]}>
          <Input placeholder="Enter SKU" />
        </Form.Item>
        <Form.Item
          name="productId"
          label="Product"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select Product"
            options={products?.map((product) => ({
              label: product.name,
              value: product.$id,
            }))}
          />
        </Form.Item>
        <Form.Item name="size" label="Size" rules={[{ required: true }]}>
          <Select placeholder="Select Size" options={sizeOptions} />
        </Form.Item>
        <Form.Item name="color" label="Color" rules={[{ required: true }]}>
          <Select placeholder="Select Color">
            {colorOptions.map((color) => (
              <Select.Option key={color.value} value={color.value}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: color.value,
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                      display: "inline-block",
                    }}
                  />
                  {color.label}
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Images" required>
          <Form.List name="images">
            {(fields, { add, remove }) => {
              const images = form.getFieldValue("images");

              return (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div className="flex  gap-2 items-center mb-2" key={key}>
                      <Form.Item
                        {...restField}
                        name={name}
                        rules={[
                          { required: true, message: "Enter the URL" },
                          { type: "url", message: "Invalid URL" },
                        ]}
                        style={{ marginBottom: 0, width: "100%" }}
                      >
                        <Input placeholder="Enter the image URL" />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </div>
                  ))}

                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add Image
                  </Button>
                  {(!images || images.length === 0) && (
                    <Form.Item
                      name="images"
                      style={{ height: "0" }}
                      rules={[
                        {
                          required: true,
                          message: "Must have at least one URL!",
                        },
                      ]}
                    >
                      <Input hidden />
                    </Form.Item>
                  )}
                  <div className="mb-2">
                    {Array.isArray(images) && images.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          marginTop: 16,
                        }}
                      >
                        {images.map((imgUrl, index) =>
                          imgUrl && validImages[index] !== false ? (
                            <Image
                              key={index + "-" + imgUrl}
                              width={100}
                              height={100}
                              src={imgUrl}
                              preview={true}
                              onLoad={() => handleImageLoad(index)}
                              onError={() => handleImageError(index)}
                              style={{
                                objectFit: "cover",
                                borderRadius: 8,
                                border: "1px solid #eee",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    )}
                  </div>
                </>
              );
            }}
          </Form.List>
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please enter quantity" }]}
        >
          <InputNumber
            min={0}
            max={1000000}
            step={1000}
            style={{ width: "100%" }}
            placeholder="Enter Quantity"
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

export default VariantForm;
